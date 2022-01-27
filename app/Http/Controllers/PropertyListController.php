<?php

namespace App\Http\Controllers;

use Carbon\Carbon;
use App\Models\Bill;
use App\Models\Room;
use App\Models\Photo;
use App\Models\Staff;
use App\Models\Tenant;
use App\Models\Booking;
use App\Models\Payment;
use App\Models\Student;
use App\Models\Bulletin;
use App\Models\Landlord;
use App\Models\Property;
use Illuminate\Support\Str;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use App\Http\Resources\RoomResource;
use App\Http\Resources\PhotoResource;
use App\Http\Resources\StaffResource;
use App\Http\Resources\StudentResource;
use App\Http\Resources\LandlordResource;
use App\Http\Resources\PropertyResource;
use Illuminate\Notifications\Notifiable;
use App\Notifications\PaymentNotification;
use Illuminate\Support\Facades\Notification;
use App\Notifications\PropertyStatusNotification;



class PropertyListController extends Controller
{

    public function create_Property(Request $request){
        //     $request->validate([
        //     'name' =>'required',
        //     'password' =>'required',
        //     'email' =>'required|email|unique:staff,staff_email',
        //     'password' =>'required|min:4|max:12',
        //     'phone_num' => 'required|regex:/(01)[0-9]{8}/'
        //    ]);
            $Property = new Property();
            $Property->landlord_id = $request ->id;
            $Property->property_name = $request ->propertyName;
            $Property->address = $request ->address;
            $Property->postcode = $request ->postcode;
            $Property->description = $request ->description;
            $Property->property_furnishing = implode(',', (array) $request ->furnishing);
            $Property->toilet_num =  $request ->toilet_num;
            $Property->gender_preferences =  $request ->gender_preferences;
            $Property->campus =  $request ->campus;
            $Property->latitude =  $request ->latitude;
            $Property->logitude =  $request ->logitude;
            $Property->save();
            $prop_id =  $Property->getKey();
            // return response()->json([
            //    $label
            // ]);
            $label = [];
            if ($Property->save()){
                for ($i = 0; $i < count($request->imageLabel); $i++) {
                    $label[$i] = $request->imageLabel[$i];
                }
                if (count($request->images)) {
                    $i=0;
                    foreach ($request->images as $image) {
                        $Photo =  new Photo();
                        $filename = $this->decodeImage($image);
                        $Photo->photo = $filename;
                        $Photo->property_id =  $prop_id;
                        $Photo->photo_label = $label[$i];
                        $Photo->save();
                        $i++;
                    }

                }
                    //notification
                    $ID = $request -> session()->get('ID');
                    $Sender_std = Landlord::find($ID);
                    $Sender_land = null;
                    $Staff = Staff::all();;
                    Notification::send($Staff, new PropertyStatusNotification($Property, $Sender_std,$Sender_land));
                    //$Landlord->notify(new PropertyStatusNotification($Property, $Sender_std,$Sender_land));




            }


    }
    public function create_Room(Request $request){
        //     $request->validate([
        //     'name' =>'required',
        //     'password' =>'required',
        //     'email' =>'required|email|unique:staff,staff_email',
        //     'password' =>'required|min:4|max:12',
        //     'phone_num' => 'required|regex:/(01)[0-9]{8}/'
        //    ]);
           $campus = Property::where('property_id', $request ->prop_id)->first()->campus;
           $randomString = Str::random(6);
            $Room = new Room();
            $Room ->landlord_id = $request ->land_id;
            $Room ->property_id = $request ->prop_id;
            $Room ->room_name = $request ->roomName;
            $Room ->listing_name = $request ->listingName;
            $Room ->room_type = $request ->room_type;
            $Room ->room_furnishing = implode(',', (array) $request ->furnishing);
            $Room ->penalty_fees =  $request ->penalty_fees;
            $Room ->room_description =  $request ->description;
            $Room ->campus =   $campus;
            $Room ->booking_key = '112233';
            $Room ->number_of_tenant =  $request ->number_tenants;
            $Room ->booking_fees =  $request ->monthly_rent;
            $Room ->room_status =  'listing';
            $Room ->monthly_rent =  $request ->monthly_rent;
            $Room ->save();
            $Room_id =  $Room->getKey();

            // return response()->json([
            //    $label
            // ]);

            if ($Room->save()){

                if (count($request->images)) {
                    foreach ($request->images as $image) {
                        $Photo =  new Photo();
                        $filename = $this->decodeImage($image);
                        $Photo->photo = $filename;
                        $Photo->room_id =  $Room_id;
                        //$Photo->property_id =  $request ->prop_id;
                        $Photo->save();

                    }

                }

            }


    }
    public function create_booking(Request $request){

        $Booking = new Booking();
        $Booking ->student_id = $request ->std_id;
        $Booking ->property_id = $request ->property_id;
        $Booking ->room_id = $request ->room_id;
        $Booking ->period_tenancy = $request ->tenancy_period;
        $Booking ->phone = $request ->phone_no;
        $Booking ->booking_fees = $request ->booking_fees;
        $Booking ->move_in_date = $request ->move_in_date;
        $Booking ->booking_status = 'Booked';
        $Booking ->save();
        $Booking_ID =  $Booking->getKey();

        $r_id = $request ->room_id;
        $prop_id =$request ->property_id;
        $student_id =$request ->std_id;


        if($Booking ->save()){
            $Payment = new Payment();
            $Payment->student_id = $request ->std_id;
            $Payment->booking_id = $Booking_ID;
            $Payment->property_id = $request ->property_id;
            $Payment->room_id = $request ->room_id;
            $Payment->landlord_id = $request ->landlord_id;
            $Payment->payment_details = $request ->details;
            $Payment->payment_status = 'Paid';
            $Payment->total_payment = $request ->booking_fees;
            $Payment->save();

            $Tenant =  new Tenant();
            $Tenant->student_id = $request->std_id;
            $Tenant->property_id = $request->property_id;
            $Tenant->room_id = $request->room_id;
            $Tenant->tenant_status = 'Tenancy';
            $Tenant->tenancy_period = $request->tenancy_period;
            $Tenant->move_in_date = $request->move_in_date;
            $Tenant->save();

            Room::where('room_id',$request->room_id)
            ->update([
                'room_status' => 'rented'
            ]);

            if($Payment){
                    //notification
                $ID = $request -> session()->get('ID');
                $Sender_std = Student::find($ID);
                $Sender_land = null;
                // $Student = Student::with('getPaymentRelation')->whereHas('getPaymentRelation', function($query) use($r_id) {
                //     $query->where('room_id', $r_id);
                // ;})->get();
                $Landlord = Landlord::with('getPaymentRelation')->whereHas('getPaymentRelation', function($query) use($prop_id) {
                    $query->where('property_id', $prop_id);
                ;})->first();
                Notification::send($Sender_std, new PaymentNotification($Payment, $Sender_std,$Sender_land));
                $Landlord->notify(new PaymentNotification($Payment, $Sender_std,$Sender_land));
            }

        }

        //
        $tenants = Tenant::where('room_id',$r_id )->where('tenant_status', 'Tenancy')->get();
        $tenant_counts =  $tenants->count();

        $move_in_date = $request ->move_in_date;
        $tenancy_period = (int) $request ->tenancy_period;

        $monthly_rent = $request ->booking_fees;

        $tenant_id =  $Tenant->getKey();
        $penalty_fees = Room::query()->with(['getTenantRelation' => function ($query) use($tenant_id) {
            $query->select('room_id','tenant_id')
                    ->where('tenant_id', $tenant_id);
        }])->where('room_id',$r_id)->value('penalty_fees');

        $landlord_id = $request ->landlord_id;

    //------------------TEST INSERT MULTIPLE BILLS----------------------------
     //Get Dates for Move in, End, Due
     $Entering_Date = new Carbon($move_in_date);
     $Entering_DueDate = new Carbon($move_in_date);
     $End_Date= new Carbon($move_in_date);
     $End_DueDate= new Carbon($move_in_date);

     $firstBills_Date = $Entering_Date->addMonth(1);
     $LastBills_Date = $End_Date->addMonths($tenancy_period);

     $firstDueBills_Date = $Entering_DueDate->addMonth(1)->addDays(29);
     $LastDueBills_Date = $End_DueDate->addMonths($tenancy_period)->addDays(29);

     $dateBills = [];
     $dueDates = [];

     for ($i = $firstBills_Date; $i <$LastBills_Date; $i->addMonth()) {
         $dateBills[] =  $i->toDateTimeString();
     }
     for ($d = $firstDueBills_Date; $d <$LastDueBills_Date; $d->addMonth()) {
         $dueDates[] =  $d->toDateTimeString();
     }


     //Insert All Bills for one Move In
        $Bills = [];
        $stoper = (int)($tenancy_period-1);

        DB::beginTransaction();
            for($t=0; $t <$stoper; $t++){
                $Bills[$t] = [
                    'tenant_id' => $tenant_id,
                    'property_id' => $prop_id,
                    'student_id' => $student_id,
                    'room_id' => $r_id,
                    'landlord_id' => $landlord_id,
                    'bills_date' => Carbon::parse($dateBills[$t]),
                    'due_date' => Carbon::parse($dueDates[$t]),
                    'total_bills' => $monthly_rent,
                    'created_at' => Carbon::now(),
                    'updated_at' => Carbon::now(),

                ];

            }
            Bill::insert($Bills);
            //update previously bill id
            $lastRowID = Bill::where('tenant_id',$tenant_id)->latest('created_at')->value('bills_id');
            $firstRowID = Bill::where('tenant_id',$tenant_id)->oldest('bills_id')->value('bills_id');

            $TenantBills = Bill::where('tenant_id',$tenant_id)->where('bills_id', '!=', $firstRowID)->get()->pluck('bills_id')->toArray();
            $lastInsertedIds = Bill::where('tenant_id',$tenant_id)->select('bills_id')->get()->except($lastRowID)->pluck('bills_id')->toArray();

            for($t=0; $t <count($lastInsertedIds); $t++){
                Bill::where('tenant_id', $tenant_id)
                        ->where('bills_id', $TenantBills[$t])
                        ->update([
                            'previous_bill_id' => $lastInsertedIds[$t]
                        ]);
            }
        DB::commit();






    }


    public function decodeImage($request_picture){

        $exploded = explode(',', $request_picture);
        $decoded = base64_decode($exploded[1]);
            if(str_contains($exploded[0], 'jpeg')){
                $extension = 'jpg';
            }else{
                $extension = 'png';
            }
        $filename = str_random().'.'.$extension;
        $path = public_path().'/images/Properties/'.$filename;
        file_put_contents($path, $decoded);
        return $filename;

    }
    public function get_Properties($id){
       // $data = Property::where('landlord_id', $id)->get();
        $data = Property::with('getPhotoRelation')->where('landlord_id', $id)->get();
        return PropertyResource::collection($data);
    }

    public function get_Rooms($id){
       // $data = Property::where('landlord_id', $id)->get();
        $data = Room::with('getPhotoRelation')->where('property_id', $id)->get();
        return RoomResource::collection($data);
    }
    public function get_all_rooms($id){
        $data = Room::query()
                ->with('getPropertyRelation','getPhotoRelation')->whereHas('getPropertyRelation', function($query)  use($id) {
                    $query->where('verify_status','verified')->where('landlord_id',$id)
                ;})->where('landlord_id', $id)->orderBy('property_id','asc')->get();
                return RoomResource::collection($data);
    }

    //dashboard landlord
    public function getpropertiesCount($id){
         $data = Property::where('landlord_id', $id)->where('verify_status','verified')->get()->count();
         return $data;
     }

    public function gettenantsCount($id){
        $data = Tenant::with('getPropertyRelation')->whereHas('getPropertyRelation' , function($query)  use($id){
            $query->where('landlord_id', $id);
        ;})->where('tenant_status','Tenancy')->get()->count();
         return $data;
     }
    public function getvacantCount($id){
         $data =Room::where('landlord_id', $id)->where('room_status','listing')->get()->count();
         return $data;
     }
    public function gettotalsCount($id){
        $data = Bill::where('landlord_id',$id)->where('payment_status', 'Paid')->sum('total_bills');
         return $data;
     }

     //dashboard staff
     public function getallpropertyCount(){
         $data = Property::where('verify_status', 'verified')->get()->count();
         return   $data;
     }
     public function getalltenantsCount(){
        $data = Tenant::where('tenant_status', 'Tenancy')->get()->count();
        return   $data;
     }
     public function getallroomCount(){
        $data = Room::with('getPropertyRelation')->whereHas('getPropertyRelation' , function($query){
            $query->where('verify_status', 'verified');
        ;})->get()->count();
         return $data;
     }
     public function getalllandlordCount(){
        $data = Landlord::all()->count();
        return   $data;
     }
     public function get_properties_list_Unverified(){
        $data = Property::with('getLandlordRelation')->where('verify_status','unverified')->orderBy('created_at','desc')->get();
        return PropertyResource::collection($data);
     }


     public function get_Property($id){
        // $data = Property::where('landlord_id', $id)->get();
         $data = Property::with('getPhotoRelation')->where('property_id', $id)->get();
         return PropertyResource::collection($data);
     }

     public function get_Room($id){
        // $data = Property::where('landlord_id', $id)->get();
         $data = Room::with('getPhotoRelation')->where('room_id', $id)->get();
         return RoomResource::collection($data);
     }


     public function getPropList($campus){
         if($campus=='Gambang'){

            $data = Property::with('getLandlordRelation')->where('campus',$campus)->orderBy('created_at','desc')->paginate(10);

            return PropertyResource::collection($data);
         }else{
            $data = Property::with('getLandlordRelation')->where('campus',$campus)->orderBy('created_at','desc')->paginate(10);
            return PropertyResource::collection($data);
         }

   }

    public function get_BrowseList($campus, Request $request){

            $location = $request->location;
            $gender = $request->gender;
            $room = $request->room;
            $sort = $request->sort;
            $minPrice = $request->minPrice;
            $maxPrice = $request->maxPrice;
            $showSize = $request->showSize;
            $data = Room::query()
                        ->with('getPropertyRelation','getPhotoRelation')->whereHas('getPropertyRelation', function($query)  use($location, $gender) {
                            $query->where('verify_status','verified')
                            ->when($location!=null,function($query) use($location){
                                $query->where('property_name', 'LIKE', '%' . $location . '%');
                            })->when($gender!=null,function($query) use($gender){
                                $query->where('gender_preferences',$gender);
                            })
                        ;})
                        ->where('campus',$campus)
                        ->where('room_status','listing')
                        ->when($room!=null,function($query) use($room){
                            $query->where('room_type', $room );
                        })->when($minPrice!=null,function($query) use($minPrice, $maxPrice){
                            $query->whereBetween('monthly_rent', [$minPrice, $maxPrice]);
                        })->when($sort!=null,function($query) use($sort){
                            $query->orderBy('monthly_rent', $sort);
                        })
                        ->paginate($showSize);


            return RoomResource::collection($data);



   }

   public function get_Recommendation($campus, Request $request){
        $location = $request->location;
        $gender = $request->gender;
        $room = $request->room;
        $minPrice = $request->minPrice;
        $maxPrice = $request->maxPrice;
        $room_id = $request->room_id;

        $data = Room::query()
                    ->with('getPropertyRelation','getPhotoRelation','getPropertyRelation.getLandlordRelation')->whereHas('getPropertyRelation', function($query)  use($location, $gender) {
                        $query->where('verify_status','verified')
                        ->when($location!=null,function($query) use($location){
                            $query->where('property_name', 'LIKE', '%' . $location . '%');
                        })->when($gender!=null,function($query) use($gender){
                            $query->where('gender_preferences',$gender);
                        })
                    ;})
                    ->where('campus',$campus)
                    ->where('room_status','listing')
                    ->where('room_id', '!=', $room_id)
                    ->when($room!=null,function($query) use($room){
                        $query->where('room_type', $room );
                    })->when($minPrice!=null,function($query) use($minPrice, $maxPrice){
                        $query->whereBetween('monthly_rent', [$minPrice, $maxPrice]);
                    })
                    ->paginate(3);


                    if(count(RoomResource::collection($data))>0){
                        return RoomResource::collection($data);
                    }else if(count(RoomResource::collection($data))==0){
                        $new_data = Room::query()
                        ->with('getPropertyRelation','getPhotoRelation','getPropertyRelation.getLandlordRelation')->whereHas('getPropertyRelation', function($query)  use($location, $gender) {
                            $query->where('verify_status','verified')
                            ->when($gender!=null,function($query) use($gender){
                                $query->where('gender_preferences',$gender);
                            })
                        ;})
                        ->where('campus',$campus)
                        ->where('room_status','listing')
                        ->where('room_id', '!=', $room_id)
                        ->when($room!=null,function($query) use($room){
                            $query->where('room_type', $room );
                        })
                        ->paginate(3);
                        return RoomResource::collection($new_data);
                    }


    }


    public function get_RoomList($id){
        $data = Room::with('getPropertyRelation.getPhotoRelation','getPropertyRelation.getLandlordRelation','getPhotoRelation')
                    ->whereHas('getPropertyRelation.getPhotoRelation', function($query) use($id) {
                        $query->where('room_id', null);
                    ;})
                    ->whereHas('getPhotoRelation', function($query) use($id) {
                        $query->where('room_id', $id);
                    ;})->where('room_id', $id)
                    ->get();
        return RoomResource::collection($data);
        // $prop_id = Room::where('room_id',$id)->value('property_id');
        // $data = Property::with('getPhotoRelation')
        //         ->whereHas('getPhotoRelation', function($query) use($prop_id) {
        //         $query->where([


        //                     ['photo', 'VJGGshlkS48PB2F8.jpg'],
        //                 ])

        //     ;})
        //         ->get();
        //         return PropertyResource::collection($data);


}

    public function updatePropStatus($id, Request $request){
       $staff_name = Staff::where('staff_id',$id)->value('staff_name');
        $prop_id = $request->id;
       $data = Property::where('property_id',$request->id)
       ->update([
           'verify_status' => $request ->status,
           'Verify_by' => $staff_name,
       ]);
       $Property = Property::where('property_id',$request->id)->first();


       if($data){
        //notification
            $ID = $request -> session()->get('ID');
            $Sender_std = Staff::find($ID);
            $Sender_land = null;
            $Landlord = Landlord::with('getPropertyRelation')->whereHas('getPropertyRelation', function($query) use($prop_id) {
                $query->where('property_id', $prop_id);
            ;})->first();
            Notification::send($Landlord, new PropertyStatusNotification($Property, $Sender_std,$Sender_land));
            //$Landlord->notify(new PropertyStatusNotification($Property, $Sender_std,$Sender_land));


        }

       return $data;
   }


   public function delete_Property($id){
        Photo::where('property_id',$id)->delete();
        Room::where('property_id',$id)->delete();
        Property::where('property_id',$id)->delete();
    }

   public function delete_room($id){
        Room::where('room_id',$id)->delete();
    }


    public function update_Property($id, Request $request){

        // $request->validate([
        //     'name' =>'required',
        //     'password' =>'required',
        //     'email' => 'required|string|email|unique:staff,staff_email,'.$request->id.',staff_id', //update email, ignore registed own email
        //     'phone_num' => 'required|regex:/(01)[0-9]{8}/'
        // ]);

        $furnish=Property::where('property_id',$id)
          ->update(['property_furnishing' => null]);

          $data = Property::where('property_id',$id)
          ->update([
              'property_name' => $request ->name,
              'address' => $request ->address,
              'postcode' => $request ->postcode,
              'description' => $request ->des,
              'property_furnishing' => implode(', ', (array) $request ->furnishing),
              'campus' => $request ->campus,
              'toilet_num' => $request ->toilet_num,
              'gender_preferences' => $request ->gender_preferences,
              'latitude' => $request ->lat,
              'logitude' => $request ->log,
          ]);

          if (Room::where('property_id',$id)->exists()) {
            Room::where('property_id',$id)->update([
                'campus' => $request ->campus,
            ]);
          }

          $label = [];
          if ($request->images != null){

                Photo::where('property_id', $id)
                        ->where('room_id',null)
                        ->delete();
              for ($i = 0; $i < count($request->imageLabel); $i++) {
                  $label[$i] = $request->imageLabel[$i];
              }
              if (count($request->images)) {
                  $i=0;
                  foreach ($request->images as $image) {
                      $Photo =  new Photo();
                      $filename = $this->decodeImage($image);
                      $Photo->photo = $filename;
                      $Photo->property_id =  $id;
                      $Photo->photo_label = $label[$i];
                      $Photo->save();
                      $i++;
                  }

              }

          }

          return $data;

    }


    public function update_Room($id, $chgPic, Request $request){

        // $request->validate([
        //     'name' =>'required',
        //     'password' =>'required',
        //     'email' => 'required|string|email|unique:staff,staff_email,'.$request->id.',staff_id', //update email, ignore registed own email
        //     'phone_num' => 'required|regex:/(01)[0-9]{8}/'
        // ]);


          $data = Room::where('room_id',$id)
          ->update([
              'listing_name' => $request ->list_name,
              'room_name' => $request ->name,
              'room_description' => $request ->des,
              'room_furnishing' => implode(', ', (array) $request ->furnishing),
              'room_type' => $request ->room_type,
              'penalty_fees' => $request ->penalty_fees,
              'number_of_tenant' => $request ->number_of_tenant,
              'booking_fees' => $request ->monthly_rent,
              'booking_key' => $request ->booking_key,
              'monthly_rent' => $request ->monthly_rent,
              'room_status' => $request ->status,
          ]);

          if ($chgPic == 1){
                Photo::where('room_id', $id)->delete();

              if (count($request->photo_room)) {

                  foreach ($request->photo_room as $image) {
                      $Photo =  new Photo();
                      $filename = $this->decodeImage($image);
                      $Photo->photo = $filename;
                      $Photo->room_id =  $id;
                      //$Photo->property_id = $request->property_id;
                      $Photo->save();

                  }

              }

          }

          return $data;

    }








}



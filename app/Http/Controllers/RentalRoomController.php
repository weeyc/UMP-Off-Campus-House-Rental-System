<?php

namespace App\Http\Controllers;
use App\Models\Bill;
use Carbon\Carbon;
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
use App\Http\Resources\RentalResource;
use App\Http\Resources\TenantResource;
use App\Http\Resources\BookingResource;
use App\Http\Resources\PaymentResource;
use App\Http\Resources\StudentResource;
use App\Http\Resources\BulletinResource;
use App\Http\Resources\LandlordResource;
use App\Http\Resources\PropertyResource;
use Illuminate\Notifications\Notifiable;
use App\Notifications\PaymentNotification;
use App\Notifications\BulletinNotification;
use App\Notifications\ResponseNotification;
use App\Notifications\RoommateNotification;
use Illuminate\Support\Facades\Notification;

class RentalRoomController extends Controller
{

    public function get_rentalRoom($id,$role, Request $request){

        if($role == 1){
            $data = Tenant::with('getRoomRelation','getRoomRelation.getPhotoRelation', 'getRoomRelation.getPropertyRelation.getLandlordRelation','getStudentRelation')
                            ->where('student_id', $id)
                            ->where('tenant_status', 'Tenancy')
                            ->get();

            return TenantResource::collection($data);

        }else if($role == 2){
            $data = Property::with('getPhotoRelation')
                            ->where('landlord_id', $id)
                            ->where('verify_status', 'verified')
                            ->get();

            return PropertyResource::collection($data);
        }

     }

    public function get_roomPlatform($id,$room_id, Request $request){

            $data = Room::with('getPropertyRelation.getPhotoRelation','getPropertyRelation.getLandlordRelation','getPhotoRelation','getTenantRelation','getTenantRelation.getStudentRelation')
            ->whereHas('getTenantRelation', function($query) use($id) {
                $query->where('tenant_status', 'Tenancy')
            ;})
            ->whereHas('getPhotoRelation', function($query) use($room_id) {
                $query->where('room_id', $room_id);
            ;})->whereHas('getTenantRelation.getStudentRelation', function($query) use($id) {
                $query->where('student_id', $id)
                    ->where('tenant_status', 'Tenancy');
            ;})
            ->where('room_id', $room_id)
            ->get();
            return RoomResource::collection($data);
     }

    public function get_HousePlatform($id){

        $data = Room::with('getPropertyRelation.getPhotoRelation','getPropertyRelation.getLandlordRelation','getPhotoRelation','getTenantRelation','getTenantRelation.getStudentRelation')
        ->where('property_id', $id)
        ->get();
        return RoomResource::collection($data);
     }



     //delete
    public function get_Property_Tenants_Bills($id){

        $data = Room::with('getTenantRelation.getStudentRelation','getPhotoRelation','getTenantRelation.getBillsRelation')
        ->whereHas('getTenantRelation.getBillsRelation', function($query) {
            $query->select('bills_id', 'bills_date', 'payment_status')->where('payment_status', 'paid');
        ;})
        ->where('property_id', $id)
        ->get();
        return RoomResource::collection($data);

     }

    public function get_Property_Tenants_Bills_Months($id){

        $data = Room::with('getPropertyRelation.getPhotoRelation','getBillsRelation','getPropertyRelation.getLandlordRelation','getPhotoRelation','getTenantRelation','getTenantRelation.getStudentRelation')
        ->where('property_id', $id)
        ->get();
        return RoomResource::collection($data);



     }
  //delete




    public function get_housemate($room_id,$prop_id, Request $request){

            $data = Room::with('getPropertyRelation.getPhotoRelation','getPhotoRelation','getTenantRelation','getTenantRelation.getStudentRelation')
            ->where('property_id', $prop_id)
            ->where('room_id', '!=', $room_id)
            ->get();
            return RoomResource::collection($data);
     }

    public function post_bulletin($id,$role, $prop_id, Request $request){
        $Bulletin  = new Bulletin();

        if($role == 1){
            $Bulletin ->property_id = $prop_id;
            $Bulletin ->student_id = $id;
            $Bulletin ->post = $request->post;
            $Bulletin->save();

            //notification
            $ID = $request -> session()->get('ID');
            $Sender_std = Student::find($ID);
            $Sender_land = null;
            $Student = Student::with('getTenantRelation')->whereHas('getTenantRelation', function($query) use($prop_id) {
            $query->where('property_id', $prop_id)->where('tenant_status', 'Tenancy');
            ;})->get()->except($ID);
            $Landlord = Landlord::with('getPropertyRelation')->whereHas('getPropertyRelation', function($query) use($prop_id) {
                $query->where('property_id', $prop_id);
            ;})->first();
            Notification::send($Student, new BulletinNotification($Bulletin, $Sender_std,$Sender_land));
            $Landlord->notify(new BulletinNotification($Bulletin, $Sender_std,$Sender_land));



            // $Student = Student::find($ID);
            //$Landlord->notify(new BulletinNotification($Bulletin));
        }else{
            $Bulletin ->property_id = $prop_id;
            $Bulletin ->landlord_id = $id;
            $Bulletin ->post = $request->post;
            $Bulletin->save();

            //notification
            $ID = $request -> session()->get('ID');
            $Sender_std = null;
            $Sender_land = Landlord::find($ID);
            $Student = Student::with('getTenantRelation')->whereHas('getTenantRelation', function($query) use($prop_id) {
            $query->where('property_id', $prop_id)->where('tenant_status', 'Tenancy');
            ;})->get();
            Notification::send($Student, new BulletinNotification($Bulletin, $Sender_std,$Sender_land));
        }



     }

     public function get_post($id,$prop_id){

        $data = Bulletin::with('getPropertyRelation','getStudentRelation','getLandlordRelation')
        ->whereHas('getPropertyRelation', function($query) use($prop_id) {
            $query->where('property_id', $prop_id);
        ;})
        ->orderBy('created_at','desc')
        ->get();
        return BulletinResource::collection($data);


 }
     public function get_property_bills_total($id,$prop_id){

        $data = Bill::where('property_id', $prop_id)->where('landlord_id',$id)->where('payment_status', 'Paid')->sum('total_bills');
        return  $data ;


 }

     public function get_tenant_payment_status($room_id, $tenant_id){

        $data = Bill::where('room_id', $room_id)->where('tenant_id',$tenant_id)->where('bills_status','Ready')->latest('bills_date')->first();
        return  $data ;


 }


    public function delete_post($id){
        Bulletin::where('id', $id)->delete();
    }

    public function kick_tenant($id){
        Tenant::where('tenant_id', $id)->delete();
        Bill::where('tenant_id', $id)->delete();
    }

    public function get_mate($id){

        $tenant = Tenant::pluck('student_id')->all();
        $data = Student::whereNotIn('std_id', $tenant)
                ->where('std_id', $id)
                ->get();
                return StudentResource::collection($data);



   }
    public function send_requestRoommate($id, Request $request){
        $Tenant =  new Tenant();
        $Tenant->student_id =$id;
        $Tenant->property_id = $request->property_id;
        $Tenant->room_id = $request->room_id;
        $Tenant->tenant_status = 'Pending';
        $Tenant->tenancy_period = $request->tenancy_period;
        $Tenant->move_in_date = $request->move_in_date;
        $Tenant->tenancy_invitation = "Pending";
        $Tenant->invite_by = $request->student_id;
        $Tenant->save();

        //Notification
        if($Tenant->save()){
            $sender_id = $request -> session()->get('ID');
            $Sender_std = Student::find($sender_id);
            $Receiver = Student::find($id);
            $Sender_land = null;
            $Receiver->notify(new RoommateNotification($Tenant, $Sender_std,$Sender_land));
        }

   }

    public function response_request(Request $request){

        $tenant_id = $request->tenant_id;
        $id = $request->std_id;
        $move_in_date = $request->move_in_date;
        $prop_id = $request->property_id;
        $r_id = $request->room_id;
        $student_id = $request->student_id;
        $tenancy_period = (int) $request ->tenancy_period;



        if($request->status ==1){
            Tenant::where('invite_by', $id)
                    // ->where('tenant_status','Pending')
                    // ->where('tenancy_invitation','Pending')
                    ->update([
                'tenant_status' => 'Tenancy',
                'tenancy_invitation' => 'Accepted',
            ]);
            Room::where('room_id', $r_id)
                    ->update([
                'room_status' => 'rented',
            ]);
            $Tenant =  Tenant::where('invite_by',  $id)->first();
          $progress =  DB::table('notifications')
              ->where('id',$request->noti_id)
              ->update(['signal' => 'Accepted']);

            //notifications
              $sender_id = $request -> session()->get('ID');
              $Sender_std = Student::find($sender_id);
              $Receiver = Student::find($id);
              $Sender_land = null;
              $Receiver->notify(new ResponseNotification($Tenant, $Sender_std,$Sender_land));




        $tenants = Tenant::where('room_id',$r_id )->where('tenant_status', 'Tenancy')->get();
        $tenant_counts =  $tenants->count();

        $monthly_rent = Room::query()->with(['getTenantRelation' => function ($query) use($tenant_id) {
            $query->select('room_id','tenant_id')
                    ->where('tenant_id', $tenant_id);
        }])->where('room_id',$r_id)->value('monthly_rent');

        $landlord_id = Property::where('property_id',$prop_id)->value('landlord_id');

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
        else if($request->status ==2)
        {
            Tenant::where('invite_by', $id)
            ->update([
                'tenant_status' => 'Invalid',
                'tenancy_invitation' => 'Rejected',
            ]);

            $Tenant =  Tenant::where('invite_by', $id)->first();

            //notifications
            $sender_id = $request -> session()->get('ID');
            $Sender_std = Student::find($sender_id);
            $Receiver = Student::find($id);
            $Sender_land = null;
            $Receiver->notify(new ResponseNotification($Tenant, $Sender_std,$Sender_land));


            Tenant::where('invite_by',$id)
            ->delete();

            $progress =  DB::table('notifications')
            ->where('id',$request->noti_id)
            ->update(['signal' => 'Rejected']);
        }







   }



}

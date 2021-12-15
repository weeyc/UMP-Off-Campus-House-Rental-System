<?php

namespace App\Http\Controllers;

use App\Http\Resources\StudentResource;
use App\Http\Resources\PropertyResource;
use App\Http\Resources\LandlordResource;
use App\Http\Resources\PhotoResource;
use App\Http\Resources\RoomResource;
use App\Http\Resources\StaffResource;
use Illuminate\Http\Request;
use App\Models\Student;
use App\Models\Staff;
use App\Models\Landlord;
use App\Models\Property;
use App\Models\Photo;
use App\Models\Room;


class PropertyListController extends Controller
{
    public $min;
    public $max;

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
                        $Photo->property_id =  $request ->prop_id;
                        $Photo->save();

                    }

                }

            }


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

            $data = Property::with('getLandlordRelation')->where('campus',$campus)->paginate(10);

            return PropertyResource::collection($data);
         }else{
            $data = Property::with('getLandlordRelation')->where('campus',$campus)->paginate(10);
            return PropertyResource::collection($data);
         }

   }

     public function get_BrowseList($campus, Request $request){

            $location = $request->location;
            $gender = $request->gender;
            $room = $request->room;
            $minPrice = $request->minPrice;
            $maxPrice = $request->maxPrice;
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
                        })
                        ->paginate(10);


            return RoomResource::collection($data);



   }

    public function get_RoomList($id){
        $data = Room::with('getPropertyRelation.getPhotoRelation','getPhotoRelation','getPropertyRelation.getLandlordRelation')
                    ->whereHas('getPropertyRelation.getPhotoRelation', function($query)  {
                        $query->whereNull('room_id');
                    ;})

                    ->where('room_id', $id)->get();
        return RoomResource::collection($data);
    }

    public function updatePropStatus($id, Request $request){
       $staff_name = Staff::where('staff_id',$id)->value('staff_name');

       $data = Property::where('property_id',$request->id)
       ->update([
           'verify_status' => $request ->status,
           'Verify_by' => $staff_name,
       ]);
       return $data;
   }


   public function delete_Property($id){
    Photo::where('property_id',$id)->delete();
    Room::where('property_id',$id)->delete();
    Property::where('property_id',$id)->delete();
}


    public function update_Property($id, Request $request){

        // $request->validate([
        //     'name' =>'required',
        //     'password' =>'required',
        //     'email' => 'required|string|email|unique:staff,staff_email,'.$request->id.',staff_id', //update email, ignore registed own email
        //     'phone_num' => 'required|regex:/(01)[0-9]{8}/'
        // ]);


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
              'monthly_rent' => $request ->monthly_rent,
          ]);

          if ($chgPic == 1){
                Photo::where('room_id', $id)->delete();

              if (count($request->photo_room)) {

                  foreach ($request->photo_room as $image) {
                      $Photo =  new Photo();
                      $filename = $this->decodeImage($image);
                      $Photo->photo = $filename;
                      $Photo->room_id =  $id;
                      $Photo->property_id = $request->property_id;
                      $Photo->save();

                  }

              }

          }

          return $data;

     }







}


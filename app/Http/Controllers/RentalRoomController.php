<?php

namespace App\Http\Controllers;
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
            $data = Tenant::with('getRoomRelation','getRoomRelation.getPhotoRelation', 'getRoomRelation.getPropertyRelation.getLandlordRelation','getStudentRelation')
                            ->where('student_id', $id)
                            ->where('tenant_status', 'Tenancy')
                            ->get();

            return TenantResource::collection($data);
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
            $Sender = Student::find($ID);
            $Student = Student::with('getTenantRelation')->whereHas('getTenantRelation', function($query) use($prop_id) {
                $query->where('property_id', $prop_id);
            ;})->get()->except($ID);
            $Landlord = Landlord::with('getPropertyRelation')->whereHas('getPropertyRelation', function($query) use($prop_id) {
                $query->where('property_id', $prop_id);
            ;})->first();
            Notification::send($Student, new BulletinNotification($Bulletin,$Sender));
            $Landlord->notify(new BulletinNotification($Bulletin,$Sender));



            // $Student = Student::find($ID);
            //$Landlord->notify(new BulletinNotification($Bulletin));
        }else{

            $Bulletin ->property_id = $prop_id;
            $Bulletin ->landlord_id = $id;
            $Bulletin ->post = $request->post;
            $Bulletin->save();
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


    public function delete_post($id){
        Bulletin::where('id', $id)->delete();
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
        $sender_id = $request -> session()->get('ID');
        $Sender = Student::find($sender_id);
        $Receiver = Student::find($id);
        $Receiver->notify(new RoommateNotification($Tenant,$Sender));





   }



}

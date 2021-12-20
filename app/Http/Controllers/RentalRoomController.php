<?php

namespace App\Http\Controllers;
use App\Http\Resources\StudentResource;
use App\Http\Resources\PropertyResource;
use App\Http\Resources\LandlordResource;
use App\Http\Resources\PhotoResource;
use App\Http\Resources\RoomResource;
use App\Http\Resources\StaffResource;
use App\Http\Resources\PaymentResource;
use App\Http\Resources\BookingResource;
use App\Http\Resources\RentalResource;
use App\Http\Resources\TenantResource;
use Illuminate\Http\Request;
use App\Models\Student;
use App\Models\Staff;
use App\Models\Landlord;
use App\Models\Payment;
use App\Models\Booking;
use App\Models\Tenant;
use App\Models\Property;
use App\Models\Photo;
use App\Models\Room;
use Illuminate\Support\Str;

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
            // ->whereHas('getPropertyRelation.getPhotoRelation', function($query) use($id) {
            //     $query->where('room_id', null);
            // ;})
            ->whereHas('getPhotoRelation', function($query) use($room_id) {
                $query->where('room_id', $room_id);
            ;})->whereHas('getTenantRelation.getStudentRelation', function($query) use($id) {
                $query->where('student_id', $id);
            ;})
            ->where('room_id', $room_id)
            ->get();
            return RoomResource::collection($data);



     }





}

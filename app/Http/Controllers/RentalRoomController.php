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
            $data = Booking::with('getRoomRelation','getRoomRelation.getPhotoRelation', 'getRoomRelation.getPropertyRelation.getLandlordRelation')
                            ->where('student_id', $id)

                            ->get();

            return BookingResource::collection($data);

        }else if($role == 2){
            $data = Booking::with('getRoomRelation','getRoomRelation.getPhotoRelation', 'getRoomRelation.getPropertyRelation.getLandlordRelation')
                                ->whereHas('getRoomRelation', function($query) {
                                    $query->where('room_status', 'rented');
                                ;})
                            ->where('student_id', $id)
                            ->get();

            return BookingResource::collection($data);
        }

     }





}

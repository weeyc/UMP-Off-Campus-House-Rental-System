<?php

namespace App\Http\Controllers;


namespace App\Http\Controllers;

use App\Http\Resources\StudentResource;
use App\Http\Resources\PropertyResource;
use App\Http\Resources\LandlordResource;
use App\Http\Resources\PhotoResource;
use App\Http\Resources\RoomResource;
use App\Http\Resources\StaffResource;
use App\Http\Resources\PaymentResource;
use App\Http\Resources\BookingResource;
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

class PaymentController extends Controller
{

    public function get_Payments($id,$role, Request $request){

        $byID = $request->byID;
        $bydate = $request->bydate;
        $showSize = $request->showSize;
        if($role == 1){
            $data = Payment::query()
                    ->when($byID!=null,function($query) use($byID){
                        $query->orderBy('payment_id',$byID);})
                    ->when($bydate!=null,function($query) use($bydate){
                        $query->orderBy('payment_date',$bydate);})
                    ->where('student_id', $id)
                    ->orderBy('payment_date','desc')
                    ->paginate( $showSize );
            return PaymentResource::collection($data);
        }else if($role == 2){
            $data = Payment::query()
                    ->when($byID!=null,function($query) use($byID){
                        $query->orderBy('payment_id',$byID);})
                    ->when($bydate!=null,function($query) use($bydate){
                        $query->orderBy('payment_date',$bydate);})
                    ->where('landlord_id', $id)
                    ->paginate( $showSize );
                return PaymentResource::collection($data);
        }

    }

     public function get_bookings($id,$role, Request $request){

        $byID = $request->byID;
        $bydate = $request->bydate;
        $showSize = $request->showSize;
        if($role == 1){
            $data = Booking::with('getRoomRelation','getRoomRelation.getPhotoRelation', 'getRoomRelation.getPropertyRelation.getLandlordRelation')
                            ->where('student_id', $id)
                            ->orderBy('booking_date', 'asc')
                            ->orderBy('booking_status', 'asc')
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

     public function cancel_booking($id, Request $request){

        $room_id = $request->room_id;
        $prop_id = $request->prop_id;
        $std_id = $request->std_id;


        Room::where('room_id', $room_id)
        ->update([
            'room_status' => 'listing'
        ]);
        Booking::where('booking_id',$id)
        ->update([
            'booking_status' => 'Cancelled'
        ]);
        Payment::where('booking_id',$id)
        ->update([
            'payment_status' => 'Paid & Cancelled'
        ]);
        Tenant::where('student_id',$std_id)
            ->where('property_id',$prop_id)
            ->where('room_id',$room_id)
        ->delete();




     }

     public function delete_booking($id){
        Booking::where('booking_id', $id)->delete();
   }
}

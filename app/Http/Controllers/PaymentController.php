<?php

namespace App\Http\Controllers;


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
use App\Models\Landlord;
use App\Models\Property;
use Illuminate\Support\Str;
use Illuminate\Http\Request;
use App\Http\Resources\RoomResource;
use App\Http\Resources\PhotoResource;
use App\Http\Resources\StaffResource;
use App\Http\Resources\BookingResource;
use App\Http\Resources\PaymentResource;
use App\Http\Resources\StudentResource;
use App\Http\Resources\LandlordResource;
use App\Http\Resources\PropertyResource;

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

        Bill::where('student_id',$std_id)
                ->where('property_id',$prop_id)
                ->where('room_id',$room_id)
            ->delete();
     }

     public function delete_booking($id){
        Booking::where('booking_id', $id)->delete();
   }

     public function get_bills($id, $role, Request $request){

        if($role == 1){
           $date = $request->date;
           //$date = "2022-02-23";

            if( $date != null){
                $bills =  Bill::where('student_id', $id)->where('bills_date',$date)->first();

                return  $bills;
            }else{
                $bills =  Bill::where('student_id', $id)->where('bills_status','Ready')->orderBy('bills_date','desc')->first();
                return  $bills;
            }

        }
   }
     public function get_bills_months($id, $role){

        if($role == 1){
            $bills_months =  Bill::where('student_id', $id)
            ->where('bills_status', '!=', 'Unready')
            ->orderBy('bills_date','desc')
            ->get()
            ->pluck('bills_date');
            return  $bills_months;
        }
   }

     public function pay_bill(Request $request){

        $Payment = new Payment();
        $Payment->student_id = $request ->std_id;
        $Payment->bill_id =  $request ->bills_id;
        $Payment->property_id = $request ->property_id;
        $Payment->room_id = $request ->room_id;
        $Payment->landlord_id = $request ->landlord_id;
        $Payment->payment_details = $request ->payment_details;
        $Payment->payment_status = 'Paid';
        $Payment->total_payment = $request ->total_payment;
        $Payment->save();


        Bill::where('bills_id',  $request ->bills_id)
        ->update([
            'payment_status' => 'Paid'
        ]);


   }



}

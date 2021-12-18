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
use Illuminate\Http\Request;
use App\Models\Student;
use App\Models\Staff;
use App\Models\Landlord;
use App\Models\Payment;
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
}

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
use App\Models\Booking;
use App\Models\Tenant;
use App\Models\Bulletin;
use App\Notifications\PaymentNotification;
use Illuminate\Notifications\Notifiable;
use App\Models\Payment;
use Illuminate\Support\Str;
class TestController extends Controller
{
    // public function get_one(Request $request){
    //     //return $student = Bulletin::find(3);
    //     return $student = Student::find(2);
    // }

    public function get_one(Request $request){

        // $Student = Student::with('getTenantRelation')->whereHas('getTenantRelation', function($query) use($prop_id) {
        //     $query->where('property_id', $prop_id);
        // ;})->get()->except($ID);
        // return $Student;
        $prop_id = 3;
        $Landlord = Landlord::with('getPropertyRelation')->whereHas('getPropertyRelation', function($query) use($prop_id) {
            $query->where('property_id', $prop_id);
        ;})->first();

        return $Landlord;



    }
}

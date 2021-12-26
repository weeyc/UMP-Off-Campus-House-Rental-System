<?php

namespace App\Http\Controllers;

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
use App\Http\Resources\NotifyResource;
use App\Http\Resources\StudentResource;
use App\Http\Resources\LandlordResource;
use App\Http\Resources\PropertyResource;
use Illuminate\Notifications\Notifiable;
use App\Notifications\PaymentNotification;
use PHPUnit\Util\Json;

class TestController extends Controller
{
    // public function get_one(Request $request){
    //     //return $student = Bulletin::find(3);
    //     return $student = Student::find(2);
    // }

    public function get_one(Request $request){



            //$Sender_std = Student::find($ID);
            $Tenant = DB::table('notifications')->where('id','01ae956d-98d0-451d-8ae2-b589c301f6fd')->update(['signal' => 'Rejected']);


            return  response(["data",$Tenant]);





    }
}

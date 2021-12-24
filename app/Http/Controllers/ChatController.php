<?php

namespace App\Http\Controllers;

use Notification;
use App\Models\Student;
use App\Models\Landlord;
use Illuminate\Http\Request;
use App\Http\Resources\NotifyResource;

class ChatController extends Controller
{

    public function get_notifications($id,$role, Request $request){

        if($role == 1){

            $user = Student::find($id);
            $notifications = $user->notifications()->get();
           // readNotifications()

           return NotifyResource::collection($notifications);

        }else if($role == 2){
            $user = Landlord::find($id);
            $notifications = $user->notifications()->get();
           return NotifyResource::collection($notifications);
        }

     }

}

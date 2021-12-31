<?php

namespace App\Http\Controllers;

use Notification;
use Carbon\Carbon;
use App\Models\Student;
use App\Models\Landlord;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use App\Http\Resources\NotifyResource;

class ChatController extends Controller
{

    public function get_notifications($id,$role, Request $request){

        if($role == 1){

            $user = Student::find($id);
            $notifications = $user->notifications()->orderBy('created_at','desc')->get()
            ->groupBy(function($date) {
                return Carbon::parse($date->created_at)->format('d M Y'); // grouping by day
            })->toArray();

          //return $notifications ;

          return response()->json([
            'noti' => array_values($notifications)
        ], 200);


        }else if($role == 2){
            $user = Landlord::find($id);
            $notifications = $user->notifications()->orderBy('created_at','desc')->get()
            ->groupBy(function($date) {
                return Carbon::parse($date->created_at)->format('d M Y'); // grouping by day
            });
            return response()->json(['data'=>$notifications],200);

        }

     }


    public function get_notifications_counts($id,$role, Request $request){

        if($role == 1){


            $user = Student::find($id);
            $notifications = $user->notifications()->orderBy('created_at','desc')->get();
            return $notifications;


        }else if($role == 2){
            $user = Landlord::find($id);
            $notifications = $user->notifications()->orderBy('created_at','desc')->get()
            ->groupBy(function($date) {
                return Carbon::parse($date->created_at)->format('d M Y'); // grouping by day
            });
            return response()->json(['data'=>$notifications],200);

        }

     }
    public function mark_as_read($id,$role, Request $request){

        if($role == 1){

            $user = Student::find($id);
            $user->unreadNotifications->markAsRead();
            return response(['message' => 'all']);


        }else if($role == 2){
            $user = Landlord::find($id);
            $notifications = $user->notifications()->orderBy('created_at','desc')->get()
            ->groupBy(function($date) {
                return Carbon::parse($date->created_at)->format('d M Y'); // grouping by day
            });
            return response()->json(['data'=>$notifications],200);

        }

     }
    public function authme(){
        $authme = Auth::guard('student')->user()->std_id;
            return $authme;
     }




}

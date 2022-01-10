<?php

namespace App\Http\Controllers;

use Notification;
use Carbon\Carbon;
use App\Models\Staff;
use App\Models\Message;
use App\Models\Student;
use App\Models\Landlord;
use App\Events\NewMessage;
use App\Models\Conversation;
use Illuminate\Http\Request;
use App\Events\NewMessageToStaff;
use Illuminate\Support\Facades\DB;
use App\Events\NewMessageToStudent;
use App\Events\NewMessageToLandlord;
use Illuminate\Support\Facades\Auth;
use App\Http\Resources\StaffResource;
use App\Http\Resources\NotifyResource;
use App\Http\Resources\StudentResource;
use App\Http\Resources\LandlordResource;

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
            })->toArray();

          //return $notifications ;

          return response()->json([
            'noti' => array_values($notifications)
        ], 200);

        }else if($role == 3){
            $user = Staff::find($id);
            $notifications = $user->notifications()->orderBy('created_at','desc')->get()
            ->groupBy(function($date) {
                return Carbon::parse($date->created_at)->format('d M Y'); // grouping by day
            })->toArray();

          return response()->json([
            'noti' => array_values($notifications)
        ], 200);

        }

     }


    public function get_notifications_counts($id,$role, Request $request){

        if($role == 1){


            $user = Student::find($id);
            $notifications = $user->notifications()->orderBy('created_at','desc')->get();
            return $notifications;


        }else if($role == 2){
            $user = Landlord::find($id);
            $notifications = $user->notifications()->orderBy('created_at','desc')->get();
            return $notifications;

        }else if($role == 3){
            $user = Staff::find($id);
            $notifications = $user->notifications()->orderBy('created_at','desc')->get();
            return $notifications;

        }

     }

    public function mark_as_read($id,$role, Request $request){

        if($role == 1){

            $user = Student::find($id);
            $user->unreadNotifications->markAsRead();
            return response(['message' => 'all']);


        }else if($role == 2){
            $user = Landlord::find($id);
            $user->unreadNotifications->markAsRead();
            return response(['message' => 'all']);

        }else if($role == 3){
            $user = Staff::find($id);
            $user->unreadNotifications->markAsRead();
            return response(['message' => 'all']);

        }

     }
    public function getConverstations($id,$role, Request $request){


            //correct but not count
            // $data = Conversation::query()->with(['getMsgRelation' => function ($query) use($id, $role) {
            //     $query->where('receiver_id',$id)->where('receiver_role',$role)->where('read_at',null)->get();
            // }])
            // $data = Conversation::query()->withCount(['getMsgRelation' => function ( $query) use($id, $role) {
            //      $query->where('receiver_id',$id)->where('receiver_role',$role)->where('read_at',null);
            // }])

            $data = Conversation::query()->with('getMsgRelation')->withCount(['getMsgRelation' => function ( $query) use($id, $role) {
                $query->where('receiver_id',$id)->where('receiver_role',$role)->where('read_at',null);
           }])->where('user1_role',$role)
                ->where('user1_id',$id)->orWhere('user2_role',$role)->where('user2_id',$id)->orderBy('updated_at','DESC')->get();
                return $data;
     }

    public function mark_msg_read($id,$role,$chat_id, Request $request){

        Message::where('conversation_id',$chat_id)->where('receiver_id',$id)->where('receiver_role',$role)->where('read_at',null)
         ->update([
            'read_at' =>  Carbon::now(),
        ]);
     }

    public function getContact($id,$role, Request $request){

        if($role == 1){

            $data = Student::find($id)  ;
            return  new StudentResource($data);


        }else if($role == 2){
            $data = Landlord::find($id)  ;
            return new LandlordResource($data);

        }else if($role == 3){
            $data = Staff::find($id)  ;
            return new StaffResource($data);

        }

     }


    public function send_msg_new($id,$role, Request $request){

        $msg = $request->enter_msg;
        $receiver_id = $request->receiver_id;
        $receiver_role = $request->receiver_role;

        $conversation = new Conversation();
        $message = new Message();

        if($role==1){
            $user1_name = Student::where('std_id',$id)->value('std_name');
            $user1_photo = Student::where('std_id',$id)->value('std_pic');
        }else if ($role==2){
            $user1_name = Landlord::where('landlord_id',$id)->value('landlord_name');
            $user1_photo = Landlord::where('landlord_id',$id)->value('landlord_pic');
        }else if ($role==3){
            $user1_name = Staff::where('staff_id',$id)->value('staff_name');
            $user1_photo = Staff::where('staff_id',$id)->value('staff_pic');
        }

        if ($receiver_role==1){
            $user2_name = Student::where('std_id',$receiver_id)->value('std_name');
            $user2_photo = Student::where('std_id',$receiver_id)->value('std_pic');
        }else if ($receiver_role==2){
            $user2_name = Landlord::where('landlord_id',$receiver_id)->value('landlord_name');
            $user2_photo = Landlord::where('landlord_id',$receiver_id)->value('landlord_pic');
        }else if ($receiver_role==3){
            $user2_name = Staff::where('staff_id',$receiver_id)->value('staff_name');
            $user2_photo = Staff::where('staff_id',$receiver_id)->value('staff_pic');
        }

        $conversation->user1_name = $user1_name;
        $conversation->user1_photo = $user1_photo;
        $conversation->user2_name = $user2_name;
        $conversation->user2_photo = $user2_photo;

        $conversation->user1_id = $id;
        $conversation->user1_role = $role;

        $conversation->user2_id = $receiver_id;
        $conversation->user2_role = $receiver_role;


        $conversation->save();
        $conversation_id =  $conversation->getKey();

        if($conversation->save()){
            $message->sender_id = $id;
            $message->receiver_id = $receiver_id;
            $message->sender_role = $role;
            $message->receiver_role = $receiver_role;
            $message->conversation_id = $conversation_id;
            $message->msg = $msg;
            $message->sender_id = $id;
            $message->save();
            if($message->save()){
                if($receiver_role==1){
                    broadcast(new NewMessageToStudent($message));
                 }else if ($receiver_role==2){
                    broadcast(new NewMessageToLandlord($message));
                 }else if ($receiver_role==3){
                    broadcast(new NewMessageToStaff($message));
                 }

            }


        }

     }
    public function send_msg($id,$role, Request $request){


        $conversation_id = $request->id;
        $msg = $request->put_msg;
        $receiver_id = $request->receiver_id;
        $receiver_role = $request->receiver_role;

        $message = new Message();

            $message->sender_id = $id;
            $message->receiver_id = $receiver_id;
            $message->sender_role = $role;
            $message->receiver_role = $receiver_role;
            $message->conversation_id = $conversation_id;
            $message->msg = $msg;
            $message->sender_id = $id;
            $message->save();

            if($message->save()){
                Conversation::where('id',$conversation_id)->update([
                    'type' => 'updated',
                 ]);
                 if($receiver_role==1){
                    broadcast(new NewMessageToStudent($message));
                 }else if ($receiver_role==2){
                    broadcast(new NewMessageToLandlord($message));
                 }else if ($receiver_role==3){
                    broadcast(new NewMessageToStaff($message));
                 }

            }









     }

     public function get_noti_msg_counts($id,$role, Request $request){

        if($role == 1){

           $data= Message::where('receiver_id',$id)->where('receiver_role',$role)->get()->groupBy('conversation_id');

            // $user = Student::find($id);
            // $notifications = $user->notifications()->orderBy('created_at','desc')->get()
            // ->groupBy(function($date) {
            //     return Carbon::parse($date->created_at)->format('d M Y'); // grouping by day
            // })->toArray();

            // $user = Student::find($id);
            // $notifications = $user->notifications()->orderBy('created_at','desc')->get();
            return $data;


        }else if($role == 2){
            $user = Landlord::find($id);
            $notifications = $user->notifications()->orderBy('created_at','desc')->get();
            return $notifications;

        }else if($role == 3){
            $user = Staff::find($id);
            $notifications = $user->notifications()->orderBy('created_at','desc')->get();
            return $notifications;

        }

     }

    public function get_messages($id, Request $request){
        $data = Message::where('conversation_id', $id)->get();
        return $data;
     }

    public function authme(){
        $authme = Auth::guard('student')->user()->std_id;
            return $authme;
     }




}

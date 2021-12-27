<?php

use App\Models\Student;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Broadcast;
/*
|--------------------------------------------------------------------------
| Broadcast Channels
|--------------------------------------------------------------------------
|
| Here you may register all of the event broadcasting channels that your
| application supports. The given channel authorization callbacks are
| used to check if an authenticated user can listen to the channel.
|
*/

// Broadcast::channel('App.User.{id}', function ($user, $id) {
//     return (int) $user->id === (int) $id;
// });



Broadcast::channel('App.Models.Student.{id}', function ($user, $id) {
    $student = Student::find($id);
    return (int) $user->id === (int) $id;
    //return  (int) $student->std_id === (int) $id;

});

// Broadcast::channel('order.{orderId}', function ($user, $orderId) {
//     return $user->id === Order::findOrNew($orderId)->user_id;
// });

// Broadcast::channel('user.*', function ($user) {
//     return Auth::check();
// });

// Broadcast::channel('conversation.{id}', function ($user, $conversationId) {
//     Auth::check();
//     return $user->isInConversation(Conversation::find($conversationId));
// });

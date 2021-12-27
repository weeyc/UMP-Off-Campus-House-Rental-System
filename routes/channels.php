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

Broadcast::channel('App.Models.Student.*', function ($user) {
    return Auth::guard('student')->check();
});

// Broadcast::channel('App.Models.Student.{id}', function ($user, $id) {
//     Auth::guard('student')->check();
//     return  $user->std_id === $id;
//     //return  (int) $student->std_id === (int) $id;
// });

// Broadcast::channel('App.User.*', function ($user, $id) {
//     return (int) $user->id === (int) $id;
// });

// Broadcast::channel('order.{orderId}', function ($user, $orderId) {
//     return $user->id === Order::findOrNew($orderId)->user_id;
// });


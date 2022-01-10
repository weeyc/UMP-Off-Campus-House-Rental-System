<?php

use Illuminate\Support\Facades\Auth;
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

Broadcast::channel('App.Models.Landlord.*', function ($user) {
    return Auth::guard('landlord')->check();
});

Broadcast::channel('App.Models.Staff.*', function ($user) {
    return Auth::guard('staff')->check();
});

// Broadcast::channel('messages.{id}', function ($user, $id) {
//     if (Auth::guard('student')->check()){
//         return (int) Auth::guard('student')->user()->std_id === (int) $id;
//     }else if (Auth::guard('landlord')->check()){
//         return (int) Auth::guard('landlord')->user()->landlord_id === (int) $id;
//     }else if (Auth::guard('staff')->check()){
//         return (int) Auth::guard('staff')->user()->staff_id === (int) $id;
//     }
// });
Broadcast::channel('messages_to_std.{id}', function ($user, $id) {
    return (int) Auth::guard('student')->user()->std_id === (int) $id;
});

Broadcast::channel('messages_to_landlord.{id}', function ($user, $id) {
    return (int) Auth::guard('landlord')->user()->landlord_id === (int) $id;
});

Broadcast::channel('messages_to_staff.{id}', function ($user, $id) {
    return (int) Auth::guard('staff')->user()->staff_id === (int) $id;

});

// Broadcast::channel('App.Customer.{id}', function ($user, $id){
//     return (int) auth()->guard('customer')->user()->id === (int) $id;
// });

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


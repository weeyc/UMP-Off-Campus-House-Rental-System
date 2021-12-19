<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
*/


Route::post('register_std', 'UserController@signUp_Std');
Route::post('register_landlord', 'UserController@signUp_landlord');
Route::post('create_staff', 'UserController@create_Staff');
Route::post('logout', 'UserController@logout');
Route::get('get_std', 'UserController@getStudent');
Route::get('get_landlord', 'UserController@getLandlord');
Route::get('get_staff', 'UserController@getStaff');
Route::delete('delete_std/{id}', 'UserController@delete_Student');
Route::delete('delete_landlord/{id}', 'UserController@delete_Landlord');
Route::delete('delete_staff/{id}', 'UserController@delete_Staff');
Route::get('get_profile/{id}/{role}', 'UserController@get_Profile');
Route::post('update_profile/{id}/{role}', 'UserController@update_Profile');

Route::post('create_property', 'PropertyListController@create_Property');
Route::get('get_properties/{id}', 'PropertyListController@get_Properties');
Route::get('get_rooms/{id}', 'PropertyListController@get_Rooms');
Route::get('get_room/{id}', 'PropertyListController@get_Room');
Route::get('get_property/{id}', 'PropertyListController@get_Property');
Route::post('update_property/{id}', 'PropertyListController@update_Property');
Route::post('update_room/{id}/{chgPic}', 'PropertyListController@update_Room');
Route::post('create_room', 'PropertyListController@create_Room');
Route::get('get_properties_list/{campus}', 'PropertyListController@getPropList');
Route::get('get_BrowseList/{campus}', 'PropertyListController@get_BrowseList');
Route::get('get_Recommendation/{campus}', 'PropertyListController@get_Recommendation');
Route::post('update_prop_status/{id}', 'PropertyListController@updatePropStatus');
Route::post('create_booking/', 'PropertyListController@create_booking');
Route::delete('delete_property/{id}', 'PropertyListController@delete_Property');
Route::get('get_room_list/{id}', 'PropertyListController@get_RoomList');


Route::get('get_payments/{id}/{role}', 'PaymentController@get_Payments');
Route::get('get_bookings/{id}/{role}', 'PaymentController@get_bookings');
Route::post('cancel_booking/{id}', 'PaymentController@cancel_booking');
Route::delete('delete_booking/{id}', 'PaymentController@delete_booking');

Route::get('get_rentalRoom/{id}/{role}', 'RentalRoomController@get_rentalRoom');




//Route::post('login', [UserController::class, 'login']); cant use tis format
//Route::resource('user', UserController::class);

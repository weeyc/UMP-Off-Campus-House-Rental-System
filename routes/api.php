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
Route::get('get_role', 'UserController@getRole');
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
Route::get('get_all_rooms/{id}', 'PropertyListController@get_all_rooms');
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

Route::get('getpropertiesCount/{id}', 'PropertyListController@getpropertiesCount');
Route::get('gettenantsCount/{id}', 'PropertyListController@gettenantsCount');
Route::get('getvacantCount/{id}', 'PropertyListController@getvacantCount');
Route::get('gettotalsCount/{id}', 'PropertyListController@gettotalsCount');



Route::get('getallpropertyCount', 'PropertyListController@getallpropertyCount');
Route::get('getalltenantsCount', 'PropertyListController@getalltenantsCount');
Route::get('getallroomCount', 'PropertyListController@getallroomCount');
Route::get('getalllandlordCount', 'PropertyListController@getalllandlordCount');
Route::get('get_properties_list_Unverified', 'PropertyListController@get_properties_list_Unverified');




Route::get('get_payments/{id}/{role}', 'PaymentController@get_Payments');
Route::get('get_bookings_landlord/{id}', 'PaymentController@get_bookings_landlord');
Route::get('get_bookings/{id}/{role}', 'PaymentController@get_bookings');
Route::post('cancel_booking/{id}', 'PaymentController@cancel_booking');
Route::delete('delete_booking/{id}', 'PaymentController@delete_booking');
Route::get('get_bills/{id}/{role}', 'PaymentController@get_bills');
Route::get('get_bills_months/{id}/{role}', 'PaymentController@get_bills_months');
Route::post('pay_bill', 'PaymentController@pay_bill');

Route::get('get_rentalRoom/{id}/{role}', 'RentalRoomController@get_rentalRoom');
Route::get('get_roomPlatform/{id}/{room_id}', 'RentalRoomController@get_roomPlatform');
Route::get('get_HousePlatform/{id}', 'RentalRoomController@get_HousePlatform');
Route::get('get_tenants/{campus}', 'RentalRoomController@get_tenants');

Route::get('get_Property_Tenants_Bills/{id}', 'RentalRoomController@get_Property_Tenants_Bills');
Route::get('get_Property_Tenants_Bills_Months/{id}', 'RentalRoomController@get_Property_Tenants_Bills');

Route::post('post_bulletin/{id}/{role}/{prop_id}', 'RentalRoomController@post_bulletin');
Route::post('send_requestRoommate/{id}', 'RentalRoomController@send_requestRoommate');
Route::get('get_post/{id}/{prop_id}', 'RentalRoomController@get_post');
Route::get('get_property_bills_total/{id}/{prop_id}', 'RentalRoomController@get_property_bills_total');
Route::get('get_housemate/{room_id}/{prop_id}', 'RentalRoomController@get_housemate');
Route::delete('delete_post/{id}', 'RentalRoomController@delete_post');
Route::get('get_mate/{id}', 'RentalRoomController@get_mate');
Route::get('get_tenant_payment_status/{room_id}/{tenant_id}', 'RentalRoomController@get_tenant_payment_status');
Route::post('response_request', 'RentalRoomController@response_request');
Route::delete('kick_tenant/{id}', 'RentalRoomController@kick_tenant');

Route::get('get_notifications/{id}/{role}', 'ChatController@get_notifications');
Route::get('get_notifications_counts/{id}/{role}', 'ChatController@get_notifications_counts');
Route::get('mark_as_read/{id}/{role}', 'ChatController@mark_as_read');

Route::get('authme', 'ChatController@authme');
Route::get('getTimeNow', 'ChatController@getTimeNow');
Route::post('setTime', 'ChatController@setTime');
Route::get('resetTime', 'ChatController@resetTime');

Route::post('send_msg/{id}/{role}', 'ChatController@send_msg');
Route::post('send_msg_new/{id}/{role}', 'ChatController@send_msg_new');
Route::get('getConverstations/{id}/{role}', 'ChatController@getConverstations');
Route::get('mark_msg_read/{id}/{role}/{chat_id}', 'ChatController@mark_msg_read');
Route::get('get_messages/{id}', 'ChatController@get_messages');
Route::get('getContact/{id}/{role}', 'ChatController@getContact');
Route::get('get_noti_msg_counts/{id}/{role}', 'ChatController@get_noti_msg_counts');




Route::post('get_one', 'TestController@get_one');
Route::post('get_Time_Now', 'TestController@get_Time_Now');
Route::get('resetBill', 'TestController@resetBill');
Route::get('resetBill_OneStd/{id}', 'TestController@resetBill_OneStd');
Route::get('getTimeNow', 'TestController@getTimeNow');







//Route::post('login', [UserController::class, 'login']); cant use tis format
//Route::resource('user', UserController::class);

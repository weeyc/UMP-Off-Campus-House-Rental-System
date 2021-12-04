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








//Route::post('login', [UserController::class, 'login']); cant use tis format
//Route::resource('user', UserController::class);

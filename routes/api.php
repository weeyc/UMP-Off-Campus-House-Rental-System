<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/


Route::post('register_std', 'UserController@signUp_Std');
Route::post('register_landlord', 'UserController@signUp_landlord');
Route::post('logout', 'UserController@logout');
Route::get('get_std', 'UserController@getStudent');
Route::get('get_landlord', 'UserController@getLandlord');
Route::delete('delete_std/{id}', 'UserController@delete_Student');
Route::delete('delete_landlord/{id}', 'UserController@delete_Landlord');





//Route::post('login', [UserController::class, 'login']); cant use tis format
//Route::resource('user', UserController::class);

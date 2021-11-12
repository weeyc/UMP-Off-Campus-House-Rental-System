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

// Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
//     return $request->user();
// });
// Route::middleware('auth:sanctum')->get('/athenticated', function () {
//     return true;
// });
//Route::post('register', 'RegisterController@register');
//Route::post('login', 'LoginController@login');
//Route::post('logout', 'LoginController@logout');




Route::post('register_std', 'UserController@signUp_Std');
Route::post('register_landlord', 'UserController@signUp_landlord');
Route::post('logout', 'UserController@logout');


//Route::post('login', [UserController::class, 'login']); cant use tis format
//Route::resource('user', UserController::class);

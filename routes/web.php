<?php

namespace App\Http\Controllers;
use App\Http\Controllers\UserController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Middleware\Checking;



/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/


Route::get('/', function () {
    return view('ManageRegistrationUsers.login');
});

//Auth::routes();

// Route::get('{any}', function () {
//     return view('ManageRegistrationUsers.registration');
// })->where('any', '.*');

// Route::any('/registration/{all}', function () {
//     return view('ManageRegistrationUsers.registration');
// })
// ->where(['all' => '.*']); not used

Route::get('/registration-student', function(){
    return view('ManageRegistrationUsers.registration');
});


Route::get('/home-landlord', 'UserController@authLandlord');
Route::get('/home-student', 'UserController@authStudent');
Route::get('/home-staff', 'UserController@authStaff');

Route::get('/logout', 'UserController@logout');

Route::post('/Login', [UserController::class, 'Login'])->name('Sign_In');







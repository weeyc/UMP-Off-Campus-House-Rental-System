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
//     return view('ManageRegistrationUsers.home_staff');
// })->where('any', '.*');

// Route::any('/home-staff/{all}', function () {
//     return view('ManageRegistrationUsers.home_staff');
// })
// ->where(['all' => '.*']);


// Route::get('/home-staff', function(){
//     return view('ManageRegistrationUsers.home_staff');
// });

// Route::get('/home-staff/{any?}', function() {
//     return view('ManageRegistrationUsers.home_staff');
//   })->where('any', '.*');

  Route::get('/staff/{any?}', [UserController::class, 'authStaff'])->where('any', '.*');

Route::get('/registration-student', function(){
    return view('ManageRegistrationUsers.registration');
});

Route::get('/registration-landlord', function(){
    return view('ManageRegistrationUsers.registration');
});




Route::get('/home-landlord', 'UserController@authLandlord');
Route::get('/home-student', 'UserController@authStudent');
//Route::get('/home-staff', 'UserController@authStaff');

Route::get('/logout', 'UserController@logout');

Route::post('/Login', [UserController::class, 'Login'])->name('Sign_In');







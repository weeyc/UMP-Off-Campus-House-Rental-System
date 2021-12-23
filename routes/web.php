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

Route::post('/Login', [UserController::class, 'Login'])->name('Sign_In');

Route::get('/registration-student', function(){
    return view('ManageRegistrationUsers.registration');
});

Route::get('/registration-landlord', function(){
    return view('ManageRegistrationUsers.registration');
});
Route::get('/forbidden', function(){
    return view('unauthorize');
});

Route::get('/logout', 'UserController@logout');




// Route::get('{any}', function () {
//     return view('ManageRegistrationUsers.home_staff');
// })->where('any', '.*');

// Route::any('/home-staff/{all}', function () {
//     return view('ManageRegistrationUsers.home_staff');
// })
// ->where(['all' => '.*']);




  Route::get('/staff/{any?}', [UserController::class, 'authStaff'])->where('any', '.*');
  Route::get('/landlord/{any?}', [UserController::class, 'authLandlord'])->where('any', '.*');
  Route::get('/student/{any?}', [UserController::class, 'authStudent'])->where('any', '.*');



// Route::get('/home-landlord', 'UserController@authLandlord');
// Route::get('/home-student', 'UserController@authStudent');
// Route::get('/home-staff', 'UserController@authStaff');









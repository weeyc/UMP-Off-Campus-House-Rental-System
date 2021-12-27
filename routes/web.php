<?php

namespace App\Http\Controllers;
use App\Events\Hello;
use Illuminate\Http\Request;
use App\Http\Middleware\Checking;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\UserController;
use App\Http\Controllers\LoginUController;


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

Auth::routes();

Route::post('/Login', 'UserController@Login')->name('Sign_In');


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


// Route::get('/staff/{any?}', [UserController::class, 'authStaff'])->where('any', '.*');
// Route::get('/landlord/{any?}', [UserController::class, 'authLandlord'])->where('any', '.*');
// Route::get('/student/{any?}', [UserController::class, 'authStudent'])->where('any', '.*');



// Route::post('/login/admin', 'Auth\LoginController@adminLogin');
// Route::post('/login/blogger', 'Auth\LoginController@bloggerLogin');
// Route::post('/register/admin', 'Auth\RegisterController@createAdmin');
// Route::post('/register/blogger', 'Auth\RegisterController@createBlogger');


//Route::post('/Login', 'LoginUController@Login')->name('Sign_In');




Route::group(['middleware' => 'auth:student'], function () {
    Route::get('/student/{any?}', [UserController::class, 'authStudent'])->where('any', '.*');
});

Route::group(['middleware' => 'auth:landlord'], function () {

    Route::get('/landlord/{any?}', [UserController::class, 'authLandlord'])->where('any', '.*');
});

Route::group(['middleware' => 'auth:staff'], function () {

    Route::get('/staff/{any?}', [UserController::class, 'authStaff'])->where('any', '.*');
});

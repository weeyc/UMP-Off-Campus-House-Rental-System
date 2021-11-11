<?php

namespace App\Http\Controllers;
use App\Http\Controllers\UserController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;



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


// Route::get('/{any}', function () {
//     return view('ManageRegistrationUsers.login');
// })->where('any', '.*');

Route::get('/', function () {
    return view('ManageRegistrationUsers.login');
});

//Auth::routes();

// Route::get('{any}', function () {
//     return view('ManageRegistrationUsers.registration');
// })->where('any', '.*');

Route::get('/registration-student', function(){
    return view('ManageRegistrationUsers.registration');
});

Route::get('/home_student',[UserController::class, 'toStudentHome']);
Route::get('/registration',[UserController::class, 'toRegistration']);

Route::post('/check',[UserController::class, 'check'])->name('Check_Login');







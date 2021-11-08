<?php

namespace App\Http\Controllers;

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Modules\UserController;

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
//     return view('ManageRegistrationUsers.Login');
// })->where('any', '.*');

// Route::get('/', function () {
//     return view('welcome');
// });

// Route::get('/', function () {
//     return view('ManageRegistrationUsers.Login');
// });

// Route::view('/', 'ManageRegistrationUsers.login');

// Route::get('/landlord', function () {
//     return view('ManageRegistrationUsers.register_landlord');
// });

Route::get('/', function () {
    return view('ManageRegistrationUsers.register_std');
});

Route::get('/landlord_register', function () {
    return view('ManageRegistrationUsers.register_landlord');
});

// Route::post('/signup',[UserController::class, 'signUp_Student'])->name('signup_std');

// Route::get('/',[UserController::class, 'login'])->name('Login');



// Route::get('/home_student', function () {
//     return view('ManageRegistrationUsers.Landing_Student');
// });







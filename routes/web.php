<?php

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
//     return view('ManageRegistrationUsers.Login');
// })->where('any', '.*');


Route::get('/', function () {
    return view('ManageRegistrationUsers.Login');
});

Route::get('/landlord', function () {
    return view('ManageRegistrationUsers.Register_Landlord');
});

Route::get('/student', function () {
    return view('ManageRegistrationUsers.Register_Student');
});






//Route::get('/',[UserController::class, 'home'])->name('ManageRegisterUsers.Login');

/*Route::get('/cushomepage',[RegistrationController::class, 'directToCusHome']);
Route::get('/riderhomepage',[RegistrationController::class, 'directToRiderHome']);

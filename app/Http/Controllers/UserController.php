<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Customer;
use App\Models\Staff;
use App\Models\Rider;
use App\Models\RequestService;
use Illuminate\Support\Facades\Hash;

class UserController extends Controller
{

    function home(){
        return view('ManageRegistrationUsers.Login');
    }



}

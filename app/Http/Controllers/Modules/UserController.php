<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Student;
use App\Models\Staff;
use App\Models\Landlord;

use Illuminate\Support\Facades\Hash;

class UserController extends Controller
{

    function login(){
        return view('ManageRegistrationUsers.Login');

    }
    function logout(){
        if(session()->has('LoggedUser')){
            session()->pull('LoggedUser');
            return redirect('/');
        }
    }

    function cusregister(){
        return view('ManageRegistrationUsers.Register_Student');
    }

    function landlordregister(){
        return view('ManageRegistrationUsers.Register_Landlord');
    }

    function staffregister(){
        return view('ManageRegistrationUsers.Register_Staff');
    }


    function signUp_Student(Request $request){

       // return $request ->input();

         $request->validate([
          'name' =>'required',
          'password' =>'required',
          'email' =>'required|email|unique:students',
          'password' =>'required|min:4|max:12'
         ]);

         //$Student -> <<table column name>> = $request -> label name

         $Student = new Student();
         $Student->std_name = $request ->name;
         $Student->std_email = $request ->email;
         $Student->std_password = Hash::make($request ->password); //PASSWORD HASHED
         $save = $Student->save();

         if($save){
            echo "success";
             return back()->with('success','User has successfully register');

         }else{
            echo "fail";
          return back()->with('fail','Something went wrong, try again later');
         }


      }










}

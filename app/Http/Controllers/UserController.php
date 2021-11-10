<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Student;
use App\Models\Staff;
use App\Models\Landlord;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Illuminate\Validation\ValidationException;

class UserController extends Controller
{

    public function login(Request $request){

        $request->validate([
            'email' =>'required|email',
            'password' =>'required',
           ]);

           if(Auth::attempt($request->only('email', 'password'))){
                return response()->json(Auth::user(),200);
           }
           throw ValidationException::withMessages([
               'email'=> ['The provided credentials are incorrect.']
           ]);




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

    function sendme(){

        return view('ManageRegistrationUsers.login');
        // return $request ->input();
       // return (['message'=>'fuck']);

    }


    public function signUp(Request $request){

      // return $request ->input();

        //  $request->validate([
        //   'name' =>'required',
        //   'password' =>'required',
        //   'email' =>'required|email|unique:students',
        //   'password' =>'required|min:4|max:12'
        //  ]);

         //$Student -> <<table column name>> = $request -> label name

         $Student = new Student();
         $Student->std_name = $request ->name;
         $Student->std_email = $request ->email;
         $Student->std_password = Hash::make($request ->password); //PASSWORD HASHED
         $save = $Student->save();
        // return view('/', 'ManageRegistrationUsers.login');

        //  if($save){
        //     echo "success";
        //      return back()->with('success','User has successfully register');

        //  }else{
        //     echo "fail";
        //   return back()->with('fail','Something went wrong, try again later');
        //  }


        // Student::create([
        //     'std_name' => $request ->name,
        //     'std_email' => $request ->email,
        //     'std_password' => Hash::make($request ->password),

        // ]);


      }










}

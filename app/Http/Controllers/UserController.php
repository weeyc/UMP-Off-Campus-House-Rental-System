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

    function toStudentHome(){
        return view('ManageRegistrationUsers.home_std');
    }

    function toRegistration(){
        return view('ManageRegistrationUsers.registration');
    }


    public function signUp_Std(Request $request){

      // return $request ->input();
         //$Student -> <<table column name>> = $request -> label name

        //  $request->validate([
        //     'name' =>'required',
        //     'password' =>'required',
        //     'email' =>'required|email|unique:students',
        //     'password' =>'required|min:4|max:12'
        //    ]);

         $Student = new Student();
         $Student->std_name = $request ->name;
         $Student->std_email = $request ->email;
         $Student->std_password = Hash::make($request ->password); //PASSWORD HASHED
         $save = $Student->save();

      }


      public function signUp_landlord(Request $request){

        //define at <landlord model>   namespace App\Models;
            $Landlord = new Landlord();
           $Landlord->landlord_name = $request ->name;
           $Landlord->landlord_email = $request ->email;
           $Landlord->landlord_password = Hash::make($request ->password); //PASSWORD HASHED
           $save = $Landlord->save();

        }



        public function check(Request $request){

            if($request ->role == "Student"){
                $std_info = Student::where('std_email','=', $request->email)->first();

                    if(!$std_info){
                        //return back()->with('fail','email not recognized');
                        return response()->json(['Message'=>'Wrong Credential']);
                    }
                    else{
                        if(Hash::check($request->password, $std_info->std_password)){

                             $request->session()->put('LoggedUser',$std_info->std_id);
                            return response()->json(['id'=>$std_info->std_id, 'name' => $std_info->std_name ]);
                              //return redirect('home_student');
                        }
                        else{
                            return response()->json(['Message'=>'Wrong Password']);
                        }
                    }
            }
            else if($request ->role == "Landlord"){
                    $landlord_info = Landlord::where('landlord_email','=', $request->email)->first();
                    return response()->json(['id'=>'2', 'name' => 'Bulba']);

                    if(!$landlord_info){
                        //return back()->with('fail','email not recognized');
                    }
                    else{
                        if(Hash::check($request->password, $landlord_info->password)){
                            $request->session()->put('LoggedUser',$landlord_info->landlord_id);
                            return redirect('/');
                        }
                        else{
                            return back()->with('fail','Incorrect Password');
                        }
                    }
            }








             }














}

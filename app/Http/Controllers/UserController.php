<?php

namespace App\Http\Controllers;

use App\Http\Resources\StudentResource;

use App\Http\Resources\LandlordResource;
use App\Http\Resources\StaffResource;
use Illuminate\Http\Request;
use App\Models\Student;
use App\Models\Staff;
use App\Models\Landlord;
use Illuminate\Support\Str;

use Illuminate\Support\Facades\Hash;


class UserController extends Controller
{

    public function login(Request $request){

        $request->validate([
            'email' =>'required|email',
            'password' =>'required|min:4|max:12',
            'role' => 'required'
           ]);

        if($request ->role == "Student"){
            $std_info = Student::where('std_email','=', $request->email)->first();

                if(!$std_info){
                    return back()->with('fail','Email not recognized !');
                    //return response()->json(['Message'=>'Wrong Credential']);
                }
                else{
                    if(Hash::check($request->password, $std_info->std_password)){

                        // $request->session()->put([
                        //     'ID' => $std_info->std_id,
                        //     'Role' => 'Student'
                        // ]);
                        $Role = 1;
                        $request ->session()->put('ID', $std_info->std_id);
                        $request ->session()->put('Role', $Role);
                        return redirect('/student');
                    }
                    else{
                        return back()->with('fail','Incorrect password !');
                    }
                }
        }
        else if($request ->role == "Landlord"){
                $landlord_info = Landlord::where('landlord_email','=', $request->email)->first();

                if(!$landlord_info){
                    return back()->with('fail','Email not recognized !');
                }
                else{
                    if(Hash::check($request->password, $landlord_info->landlord_password)){

                        $Role = 2;
                        $request ->session()->put('ID', $landlord_info->landlord_id);
                        $request ->session()->put('Role', $Role);
                        return redirect('/landlord');
                    }
                    else{
                        return back()->with('fail','Incorrect Password');
                    }
                }
        }
        else if($request ->role == "Staff"){
            $Staff_info = Staff::where('staff_email','=', $request->email)->first();

            $SuperStaff = Staff::where([
                ['staff_email', $request->email],
                ['staff_type',  'super_staff']])
                ->first();

            if(!$Staff_info){
                return back()->with('fail','Email not recognized !');
            }
            else{
                if($SuperStaff){
                    if($request->password == $Staff_info->staff_password){

                        $Role = 3;
                        $request ->session()->put('ID', $Staff_info->staff_id);
                        $request ->session()->put('Role', $Role);
                        return redirect('/staff');
                    }
                    else{
                        return back()->with('fail','Incorrect Super staff Password');
                    }
                }else{
                        if(Hash::check($request->password, $Staff_info->staff_password)){
                            $Role = 3;
                            $request ->session()->put('ID', $Staff_info->staff_id);
                            $request ->session()->put('Role', $Role);

                            return redirect('/staff');
                        }
                        else{
                            return back()->with('fail','Incorrect Hash Password');
                        }
                }

            }
        }

    }

    function authStaff(Request $request){
        if($request->session()->get('ID')==""){
            return redirect('/');
        }
        else{
            $ID = $request -> session()->get('ID');
            $Role = $request -> session()->get('Role');
            $capsule = array('user_id' => $ID, 'role' => $Role);
            return view('ManageRegistrationUsers.home_staff')->with($capsule);
           // return redirect('/home-staff')->with($capsule);

        }
    }

    function authStudent(Request $request){
        if($request->session()->get('ID')==""){
            return redirect('/');
        }
        else{
            $ID = $request -> session()->get('ID');
            $Role = $request -> session()->get('Role');
            $capsule = array('user_id' => $ID, 'role' => $Role);
            return view('ManageRegistrationUsers.home_std')->with($capsule);
        }
    }

    function authLandlord(Request $request){
        if($request->session()->get('ID')==""){
            return redirect('/');
        }
        else{
            $ID = $request -> session()->get('ID');
            $Role = $request -> session()->get('Role');
            $capsule = array('user_id' => $ID, 'role' => $Role);
            return view('ManageRegistrationUsers.home_landlord')->with($capsule);
        }
    }


    function logout(Request $request){
      $request->session()->forget('ID');
      $request->session()->forget('Role');
      return redirect('/');
    }

    public function signUp_Std(Request $request){
        //Valitdate form and return error message if not meet requirement
        $this->validate($request,[
            'name' =>'required',
            'password' =>'required',
            'email' =>'required|email|unique:students,std_email',  //unique email
            'password' =>'required|min:4|max:12',
            'phone_num' => 'required|regex:/(01)[0-9]{8}/'
        ]);

        //Insert Student
        //(FORMAT) $Student -> <<table column name>> = $request -> input name
            $Student = new Student();
            $Student->std_name = $request ->name;
            $Student->std_email = $request ->email;
            $Student->std_password = Hash::make($request ->password);
            $Student->std_gender = $request ->gender;
            $Student->std_phone_no = $request ->phone_num;
            $Student->save();
      }


      public function signUp_landlord(Request $request){

        //define at <landlord model>   namespace App\Models;

            $request->validate([
            'name' =>'required',
            'password' =>'required',
            'email' =>'required|email|unique:landlords,landlord_email',
            'password' =>'required|min:4|max:12',
            'phone_num' => 'required|regex:/(01)[0-9]{8}/'
           ]);

            $Landlord = new Landlord();
            $Landlord->landlord_name = $request ->name;
            $Landlord->landlord_email = $request ->email;
            $Landlord->landlord_password = Hash::make($request ->password);
            $Landlord->landlord_gender = $request ->gender;
            $Landlord->landlord_phone_no = $request ->phone_num; //PASSWORD HASHED
            $Landlord->save();

        }

        public function create_Staff(Request $request){

            //define at <landlord model>   namespace App\Models;

                $request->validate([
                'name' =>'required',
                'password' =>'required',
                'email' =>'required|email|unique:staff,staff_email',
                'password' =>'required|min:4|max:12',
                'phone_num' => 'required|regex:/(01)[0-9]{8}/'
               ]);

                $Staff = new Staff();
                $Staff->staff_name = $request ->name;
                $Staff->staff_email = $request ->email;
                $Staff->staff_password = Hash::make($request ->password);
                $Staff->staff_gender = $request ->gender;
                $Staff->staff_phone_no = $request ->phone_num;

                // if picture uploaded
                if($request->pic!= NULL){
                  $filename = $this->decodeImage($request->pic);
                  $Staff->staff_pic = $filename;
                }
                $Staff->save();

        }

            public function decodeImage($request_picture){

                $exploded = explode(',', $request_picture);
                $decoded = base64_decode($exploded[1]);
                    if(str_contains($exploded[0], 'jpeg')){
                        $extension = 'jpg';
                    }else{
                        $extension = 'png';
                    }
                $filename = str_random().'.'.$extension;
                $path = public_path().'/images/Profile/'.$filename;
                file_put_contents($path, $decoded);
                return $filename;

            }



        public function getStudent(){
             $students = Student::paginate(10);
             return StudentResource::collection($students);
        }

        public function getLandlord(){
             $landlord = Landlord::paginate(10);
             return LandlordResource::collection($landlord);

        }

        public function getStaff(){
            $staff = Staff::paginate(10);
            return StaffResource::collection($staff);

       }


        public function delete_Student($id){
            Student::where('std_id', $id)->delete();
            return response()->json("Student Deleted!");

       }

       public function delete_Landlord($id){
        Landlord::where('landlord_id', $id)->delete();
        return response()->json("Landlord Deleted!");
   }

       public function delete_Staff($id){
        Staff::where('staff_id', $id)->delete();
        return response()->json("Staff Deleted!");
   }

       public function get_Profile($id, $role){

        if($role == 1){
           $data = Student::where('std_id', $id)->get();
           return StudentResource::collection($data);

        }else if ($role == 2){
            $data = Landlord::where('landlord_id', $id)->get();
            return LandlordResource::collection($data);
        }else{
             $data =  Staff::where('staff_id', $id)->get();
            return StaffResource::collection($data);
        }

   }
       public function update_Profile($id, $role, Request $request){

            $request->validate([
                'name' =>'required',
                'password' =>'required',
                'email' => 'required|string|email|unique:staff,staff_email,'.$request->id.',staff_id', //update email, ignore registed own email
                'phone_num' => 'required|regex:/(01)[0-9]{8}/'
            ]);

               if(strlen($request->pic)>100){
                $filename = $this->decodeImage($request->pic);
              }else{
                 $filename = $request->pic;
              }

        if($role==1){
            $data = Student::where('std_id',$id)
            ->update([
                'std_name' => $request ->name,
                'std_email' => $request ->email,
                'std_phone_no' => $request ->phone_num,
                'std_gender' => $request ->gender,
                'std_pic' => $filename,
                'std_description' => $request ->des,
            ]);

            return $data;

        }else if ($role==2){
            $data = Landlord::where('landlord_id',$id)
            ->update([
                'landlord_name' => $request ->name,
                'landlord_email' => $request ->email,
                'landlord_phone_no' => $request ->phone_num,
                'landlord_gender' => $request ->gender,
                'landlord_pic' => $filename,
                'landlord_description' => $request ->des,
            ]);

            return $data;
        }else{

            $data = Staff::where('staff_id',$id)
            ->update([
                'staff_name' => $request ->name,
                'staff_email' => $request ->email,
                'staff_phone_no' => $request ->phone_num,
                'staff_gender' => $request ->gender,
                'staff_pic' => $filename,
                'staff_description' => $request ->des,
            ]);

            return $data;
        }

   }




















}

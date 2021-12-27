<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use Illuminate\Foundation\Auth\AuthenticatesUsers;
use Illuminate\Http\Request;
use Auth;


class LoginUController extends Controller
{

    /*
    |--------------------------------------------------------------------------
    | Login Controller
    |--------------------------------------------------------------------------
    |
    | This controller handles authenticating users for the application and
    | redirecting them to your home screen. The controller uses a trait
    | to conveniently provide its functionality to your applications.
    |
    */

    use AuthenticatesUsers;

    /**
     * Where to redirect users after login.
     *
     * @var string
     */
    protected $redirectTo = '/home';

    /**
     * Create a new controller instance.
     *
     * @return void
     */

    public function __construct()
    {
            $this->middleware('guest')->except('logout');
            $this->middleware('guest:student')->except('logout');
            $this->middleware('guest:landlord')->except('logout');
            $this->middleware('guest:staff')->except('logout');
    }

    public function adminLogin(Request $request)
    {
        $this->validate($request, [
            'email'   => 'required|email',
            'password' => 'required|min:6'
        ]);

        if (Auth::guard('admin')->attempt(['email' => $request->email, 'password' => $request->password], $request->get('remember'))) {

            return redirect()->intended('/admin');
        }
        return back()->withInput($request->only('email', 'remember'));
    }


    public function bloggerLogin(Request $request)
    {
        $this->validate($request, [
            'email'   => 'required|email',
            'password' => 'required|min:6'
        ]);

        if (Auth::guard('blogger')->attempt(['email' => $request->email, 'password' => $request->password], $request->get('remember'))) {

            return redirect()->intended('/blogger');
        }
        return back()->withInput($request->only('email', 'remember'));
    }


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
                    if (Auth::guard('student')->attempt(['email' => $request->email, 'password' => $request->password])) {
                    // if(Hash::check($request->password, $std_info->std_password)){
                        $Role = 1;
                        $request ->session()->put('ID', $std_info->std_id);
                        $request ->session()->put('Role', $Role);
                        return redirect()->intended('/student');
                        //return redirect('/student');
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
}

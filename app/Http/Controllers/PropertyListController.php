<?php

namespace App\Http\Controllers;

use App\Http\Resources\StudentResource;

use App\Http\Resources\LandlordResource;
use App\Http\Resources\StaffResource;
use Illuminate\Http\Request;
use App\Models\Student;
use App\Models\Staff;
use App\Models\Landlord;
use App\Models\Property;
use App\Models\Photo;


class PropertyListController extends Controller
{
    /**
     * Create a new controller instance.
     *
     * @return void
     */


    /**
     * Show the application dashboard.
     *
     * @return \Illuminate\Contracts\Support\Renderable
     */

    public function index()
    {

    }


    public function create_Property(Request $request){


        //     $request->validate([
        //     'name' =>'required',
        //     'password' =>'required',
        //     'email' =>'required|email|unique:staff,staff_email',
        //     'password' =>'required|min:4|max:12',
        //     'phone_num' => 'required|regex:/(01)[0-9]{8}/'
        //    ]);

            $Property = new Property();
            $Property->landlord_id = $request ->id;
            $Property->property_name = $request ->propertyName;
            $Property->address = $request ->address;
            $Property->postcode = $request ->postcode;
            $Property->description = $request ->description;
            $Property->property_furnishing = implode(',', (array) $request ->furnishing);
            $Property->campus =  $request ->campus;
            $Property->save();

            // $Property->latitude = $request ->phone_num;
            // $Property->logitude = $request ->phone_num;

            // $Photo = new Photo();
            // $Photo->photo = $request ->images;
            // $Photo->photo_label = $request ->imageLabel;
            // $Photo->property_id = $request ->imageLabel;

            // // if picture uploaded
            // if($request->pic!= NULL){
            //   $filename = $this->decodeImage($request->pic);
            //   $Staff->staff_pic = $filename;
            // }


    }






}


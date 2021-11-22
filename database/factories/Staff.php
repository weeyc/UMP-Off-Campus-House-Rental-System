<?php

/** @var \Illuminate\Database\Eloquent\Factory $factory */


use App\Models\Staff;
use Faker\Generator as Faker;



$factory->define(Staff::class, function (Faker $faker) {



    $randomNumber = function($length)
    {
        $result = '';

        for($i = 0; $i < $length; $i++) {
            $result .= random_int(0, 9);
        }

        return $result;
    };

    $mobileNumber = '+60109181410';
    /**
     * Try generating a unique number by replacing the last 4 digits of the example phone number with 4 randomly
     * generated digits.
     */
    $mobileNumberUnique = substr($mobileNumber, 0, -8) . $randomNumber(8);

    $filePath='public/images/Profile';

    $gender = $faker->randomElement($array = array('male','female'));
    return [
        'staff_name' => $faker-> name($gender),
        'staff_email' => $faker->unique()->safeEmail,
        'staff_password' => bcrypt('112233'),
        'staff_gender' => $gender,
        'staff_phone_no' => $mobileNumberUnique,
        'staff_pic' =>  $faker->image($filePath,400,300, 'people', false)
    ];


});

<?php

/** @var \Illuminate\Database\Eloquent\Factory $factory */


use App\Models\Student;
use Faker\Generator as Faker;



$factory->define(Student::class, function (Faker $faker) {



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
        'std_name' => $faker-> name($gender),
        'std_email' => $faker->unique()->safeEmail,
        'std_password' => bcrypt('112233'),
        'std_gender' => $gender,
        'std_phone_no' => $mobileNumberUnique,
        'std_pic' =>  $faker->image($filePath,400,300, 'people', false)
    ];


});

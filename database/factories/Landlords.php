<?php

/** @var \Illuminate\Database\Eloquent\Factory $factory */


use App\Models\Landlord;
use Faker\Generator as Faker;



$factory->define(Landlord::class, function (Faker $faker) {

    $faker->addProvider(new \Mmo\Faker\PicsumProvider($faker));

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
        'landlord_name' => $faker-> name($gender),
        'landlord_email' => $faker->unique()->safeEmail,
        'landlord_password' => bcrypt('112233'),
        'landlord_gender' => $gender,
        'landlord_phone_no' => $mobileNumberUnique,
        //'landlord_pic' =>  $faker->image($filePath,400,300, 'people', false),
        'landlord_description' =>$faker-> sentence,
        'landlord_pic' =>   $faker->picsum($filePath, 400, 300, false),
    ];


});

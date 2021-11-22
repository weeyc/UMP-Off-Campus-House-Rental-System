<?php

use Illuminate\Database\Seeder;


class LandlordSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {


        factory(App\Models\Landlord::class, 15)->create();






    }
}

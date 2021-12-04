<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateRoomsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('rooms', function (Blueprint $table) {

            $table->increments('room_id');
            $table->integer('landlord_id');
            $table->integer('property_id');
            $table->string('room_name')->nullable();
            $table->string('listing_name')->nullable();
            $table->string('room_type')->nullable();
            $table->string('room_description')->nullable();
            $table->string('campus')->nullable();
            $table->float('penalty_fees')->nullable();
            $table->string('room_furnishing')->nullable();
            $table->integer('number_of_tenant')->nullable();
            $table->float('booking_fees')->nullable();
            $table->float('monthly_rent')->nullable();
            $table->float('room_status')->nullable();

        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('rooms');
    }
}

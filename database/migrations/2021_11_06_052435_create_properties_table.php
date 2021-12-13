<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreatePropertiesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('properties', function (Blueprint $table) {
            $table->increments('property_id');
            $table->integer('landlord_id')->nullable();
            $table->string('property_name')->nullable();
            $table->decimal('latitude', 8, 6)->nullable();
            $table->decimal('logitude', 9, 6)->nullable();
            $table->string('address')->nullable();
            $table->string('postcode')->nullable();
            $table->string('description')->nullable();
            $table->string('campus')->nullable();
            $table->string('gender_preferences')->nullable();
            $table->string('toilet_num')->nullable();
            $table->string('property_furnishing')->nullable();
            $table->string('verify_status')->default('unverified');
            $table->string('Verify_by')->nullable();
            $table->timestamps();

            // $table->string('cust_status')->default('Active');
            // $table->timestamps();
            // $table->integer('request_id')->nullable();
            // $table->float('total_cost');
            // $table->string('payment_method');
            // $table->time('payment_time')->timestamps();
            // $table->date('payment_date')->timestamps();
            // $table->float('monthly_rental')->nullable();
            // $table->string('payment_status')->nullable()->default('Unpaid');;
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('properties');
    }
}

<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateTenantsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('tenants', function (Blueprint $table) {

            $table->increments('tenant_id');

            $table->integer('student_id');
            $table->integer('property_id');
            $table->integer('room_id');

            $table->string('tenant_status')->nullable();;
            $table->string('tenancy_period')->nullable();;
            $table->date('move-in-date')->nullable();;
            $table->string('tenancy_invitation')->nullable();


            // $table->string('cust_status')->default('Active');
            // $table->timestamps();
            // $table->integer('request_id')->nullable();
            // $table->float('total_cost');
            // $table->string('payment_method');
            // $table->time('payment_time')->timestamps();
            // $table->date('payment_date')->timestamps();
            // $table->float('cost')->nullable();
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
        Schema::dropIfExists('tenants');
    }
}

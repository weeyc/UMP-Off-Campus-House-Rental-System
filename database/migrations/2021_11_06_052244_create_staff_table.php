<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateStaffTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('staff', function (Blueprint $table) {

            $table->increments('staff_id');

            $table->string('staff_name');
            $table->string('staff_email')->unique();
            $table->string('staff_password');
            $table->string('staff_gender');
            $table->string('staff_pic')->nullable();
            $table->string('staff_phone_no')->nullable();
            $table->string('staff_chat_id')->nullable();
            $table->string('staff_type')->nullable();
            $table->string('staff_description')->nullable();
            $table->string('user_role')->default('staff');





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
        Schema::dropIfExists('staff');
    }
}

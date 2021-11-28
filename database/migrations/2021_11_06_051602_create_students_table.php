<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateStudentsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('students', function (Blueprint $table) {
            //$table->id('student_id');
            $table->increments('std_id');

            $table->string('std_name');
            $table->string('std_email')->unique();
            $table->string('std_password');

            $table->string('std_gender');
            $table->string('std_phone_no');

            $table->string('std_pic')->nullable();
            $table->string('std_chat_id')->nullable();
            $table->string('std_description')->nullable();

            $table->string('user_role')->default('student');


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
        Schema::dropIfExists('_students');
    }
}

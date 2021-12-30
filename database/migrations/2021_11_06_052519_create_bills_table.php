<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateBillsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('bills', function (Blueprint $table) {

            $table->increments('bills_id');
            $table->integer('tenant_id');
            $table->integer('student_id');
            $table->integer('property_id');
            $table->integer('room_id');
            $table->integer('previous_bill_id')->nullable();
            $table->integer('landlord_id')->nullable();
            $table->string('payment_status')->default('Unpaid');
            $table->string('bills_status')->default('Unready');
            $table->integer('bills_cue')->default(0);
            $table->float('penalty_fees')->nullable()->default(0);
            $table->float('outstanding_bills')->nullable()->default(0);
            $table->float('total_bills')->nullable();
            $table->date('bills_date');
            $table->date('due_date')->nullable();
            $table->timestamps();

            //timestap, created at, updated at,
            //Due date, date

            // $table->string('cust_status')->default('Active');
            // $table->timestamps();
            // $table->integer('request_id')->nullable();
            // $table->float('total_bills');
            // $table->string('payment_method');
            // $table->time('payment_time')->timestamps();
            // $table->date('bills_date')->timestamps();
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
        Schema::dropIfExists('bills');
    }
}

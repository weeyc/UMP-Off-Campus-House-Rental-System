<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreatePaymentsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('payments', function (Blueprint $table) {

            $table->increments('payment_id');
            $table->integer('student_id')->nullable();
            $table->integer('tenant_id')->nullable();
            $table->integer('property_id')->nullable();
            $table->integer('landlord_id')->nullable();
            $table->integer('room_id')->nullable();
            $table->integer('booking_id')->nullable();
            $table->integer('bill_id')->nullable();
            $table->string('payment_details')->nullable();
            $table->string('payment_status')->nullable();
            $table->float('total_payment')->nullable();
            $table->timestamp('payment_date');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('payments');
    }
}

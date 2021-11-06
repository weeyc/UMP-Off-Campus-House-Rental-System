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

            $table->id('bills_id');

            $table->integer('tenant_id');
            $table->integer('propertyRental_id');

            $table->string('landlord_name');
            $table->string('payment_status');

            $table->float('utilities_bills');
            $table->float('total_bills');

            $table->date('bills_date');



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

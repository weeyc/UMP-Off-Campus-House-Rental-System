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
            $table->date('move_in_date')->nullable();;
            $table->string('tenancy_invitation')->nullable();
            $table->integer('invite_by')->nullable();
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

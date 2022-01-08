<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateConversationsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('conversations', function (Blueprint $table) {
            $table->increments('id');
            $table->integer('user1_id')->nullable();
            $table->integer('user1_role')->nullable();


            $table->integer('user2_id')->nullable();
            $table->integer('user2_role')->nullable();

            // $table->string('user1_name')->nullable();
            // $table->string('user1_photo')->nullable();
            // $table->string('user2_name')->nullable();
            // $table->string('user2_photo')->nullable();

            $table->string('type')->nullable();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('conversations');
    }
}

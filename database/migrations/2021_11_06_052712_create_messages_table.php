<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateMessagesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('messages', function (Blueprint $table) {

            $table->increments('id');
            $table->integer('sender_id')->nullable();
            $table->integer('sender_role')->nullable();
            $table->integer('receiver_id')->nullable();
            $table->integer('receiver_role')->nullable();
            $table->integer('conversation_id')->nullable();
            $table->integer('type')->nullable();
            $table->integer('room_name')->nullable();
            $table->integer('room_id')->nullable();
            $table->integer('rent_month')->nullable();
            $table->longText('msg')->nullable();
            $table->string('image')->nullable();
            $table->timestamp('read_at')->nullable();
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
        Schema::dropIfExists('messages');
    }
}

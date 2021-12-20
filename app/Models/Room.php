<?php

namespace App;
namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Room extends Model
{
    public $timestamps = true;

    public function getPhotoRelation(){
        return $this->hasMany('App\Models\Photo', 'room_id', 'room_id' );
    }
    public function getBookingRelation(){
        return $this->hasMany('App\Models\Booking', 'room_id', 'room_id' );
    }
    public function getTenantRelation(){
        return $this->hasMany('App\Models\Tenant', 'room_id', 'room_id' );
    }

    public function getPropertyRelation(){
        return $this->belongsTo('App\Models\Property', 'property_id', 'property_id');
    }
}

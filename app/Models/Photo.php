<?php

namespace App;
namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Photo extends Model
{
    public $timestamps = false;

    public function getPropertyRelation(){
        return $this->belongsTo('App\Models\Property', 'property_id', 'property_id');
    }

    public function getRoomRelation(){
        return $this->belongsTo('App\Models\Room', 'room_id', 'room_id');
    }

}

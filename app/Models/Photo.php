<?php

namespace App;
namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Photo extends Model
{
    public $timestamps = false;

    public function getPropertyRelation(){
        return $this->hasOne('App\Models\Property', 'property_id', 'property_id' );
    }

}

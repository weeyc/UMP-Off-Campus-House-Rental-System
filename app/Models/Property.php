<?php

namespace App;
namespace App\Models;
use App\Models\Student;
use App\Models\Staff;
use App\Models\Landlord;
use App\Models\Photo;

use Illuminate\Database\Eloquent\Model;

class Property extends Model
{
    public $timestamps = false;

    protected $fillable = ['landlord_id','property_name','latitude','logitude','address','postcode','description','campus','property_furnishing','verify_status','Verify_by'];


    public function setCategoryAttribute($value)
    {
        $this->attributes['property_furnishing'] = json_encode($value);
    }

    public function getCategoryAttribute($value)
    {
        return $this->attributes['property_furnishing'] = json_decode($value);
    }

    public function getPhotoRelation(){
        return $this->hasMany('App\Models\Photo', 'property_id', 'property_id' );
    }

    public function getRoomRelation(){
        return $this->hasMany('App\Models\Room', 'property_id', 'property_id' );
    }

    public function getLandlordRelation(){
        return $this->belongsTo('App\Models\Landlord', 'landlord_id', 'landlord_id');
    }




}


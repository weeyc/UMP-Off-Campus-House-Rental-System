<?php

namespace App;
namespace App\Models;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Notifications\Notifiable;

class Bulletin extends Model
{
    //
    protected $table = 'bulletins';
    use Notifiable;

    public function getPropertyRelation(){
        return $this->belongsTo('App\Models\Property', 'property_id', 'property_id');
    }
    public function getStudentRelation(){
        return $this->belongsTo('App\Models\Student', 'student_id', 'std_id');
    }
    public function getLandlordRelation(){
        return $this->belongsTo('App\Models\Landlord', 'landlord_id', 'landlord_id');
    }

}

<?php

namespace App;
namespace App\Models;
use Illuminate\Notifications\Notifiable;

use Illuminate\Database\Eloquent\Model;

class Payment extends Model
{
    public $timestamps = false;
    use Notifiable;


    public function getStudentRelation(){
        return $this->belongsTo('App\Models\Student', 'student_id', 'std_id');
    }
    public function getLandlordRelation(){
        return $this->belongsTo('App\Models\Landlord', 'landlord_id', 'landlord_id');
    }

}

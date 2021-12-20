<?php

namespace App;
namespace App\Models;


use Illuminate\Database\Eloquent\Model;

class Tenant extends Model
{
    public $timestamps = false;

    public function getRoomRelation(){
        return $this->belongsTo('App\Models\Room', 'room_id', 'room_id');
    }
    public function getStudentRelation(){
        return $this->belongsTo('App\Models\Student', 'student_id', 'std_id');
    }
}

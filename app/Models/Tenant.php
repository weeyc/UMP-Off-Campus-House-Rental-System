<?php

namespace App;
namespace App\Models;
use Illuminate\Notifications\Notifiable;

use Illuminate\Database\Eloquent\Model;

class Tenant extends Model
{
    public $timestamps = false;
    use Notifiable;
    protected $primaryKey = 'tenant_id';
    protected $table = 'tenants';


    public function getRoomRelation(){
        return $this->belongsTo('App\Models\Room', 'room_id', 'room_id');
    }
    public function getBillsRelation(){
        return $this->hasMany('App\Models\Bill', 'tenant_id', 'tenant_id');
    }
    public function getStudentRelation(){
        return $this->belongsTo('App\Models\Student', 'student_id', 'std_id');
    }
}

<?php

namespace App\Models;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class Student extends Model
{
    public $timestamps = false;
    protected $hidden = ['std_password'];

    public function getTenantRelation(){
        return $this->hasMany('App\Models\Tenant', 'student_id', 'std_id');
    }

}

<?php

namespace App\Models;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;


class Student extends Authenticatable
{

    use Notifiable;
    protected $guard = 'student';
    protected $primaryKey = 'std_id';
    protected $hidden = ['std_password', 'remember_token'];



    public function getTenantRelation(){
        return $this->hasMany('App\Models\Tenant', 'student_id', 'std_id');
    }
    public function getPaymentRelation(){
        return $this->hasMany('App\Models\Payment', 'student_id', 'std_id');
    }

    public function getAuthPassword () {

        return $this->std_password;

    }

    public function routeNotificationForMail($notification)
    {
        // Return email address only...
        //  return $this->std_email;
        /// Return email address and name...
         return [$this->std_email => $this->std_name];
    }


}

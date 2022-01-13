<?php

//namespace App;

namespace App\Models;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Notifications\Notifiable;
use Illuminate\Foundation\Auth\User as Authenticatable;


class Landlord extends Authenticatable
{
    protected $guard = 'landlord';
    use Notifiable;
    protected $hidden = ['landlord_password', 'remember_token'];
    protected $primaryKey = 'landlord_id';

    public function getPropertyRelation(){
        return $this->hasMany('App\Models\Property', 'landlord_id', 'landlord_id' );

    }

    public function getPaymentRelation(){
        return $this->hasMany('App\Models\Payment', 'landlord_id', 'landlord_id');
    }

    public function getAuthPassword () {

        return $this->landlord_password;

    }


    public function routeNotificationForMail($notification)
    {
        // Return email address only...
        //  return $this->std_email;
        /// Return email address and name...
         return [$this->landlord_email => $this->landlord_name];
    }


}


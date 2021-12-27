<?php

namespace App;

namespace App\Models;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Notifications\Notifiable;
use Illuminate\Foundation\Auth\User as Authenticatable;


class Landlord extends Authenticatable
{
    // include  public $timestamps = false; //
    public $timestamps = false;
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


}

// <?php

// namespace App;

// namespace App\Models;
// use Illuminate\Notifications\Notifiable;
// use Illuminate\Foundation\Auth\User as Authenticatable;
// use Illuminate\Database\Eloquent\Model;

// class Landlord extends Model
// {
//     // include  public $timestamps = false; //
//     public $timestamps = false;
//     use Notifiable;

//     protected $guard = 'landlord';
//     protected $fillable = ['landlord_name','landlord_email', 'landlord_password'];
//     protected $hidden = ['landlord_password','remember_token'];

// }

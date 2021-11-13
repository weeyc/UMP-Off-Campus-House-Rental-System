<?php

namespace App;

namespace App\Models;
use Illuminate\Database\Eloquent\Model;

class Landlord extends Model
{
    // include  public $timestamps = false; //
    public $timestamps = false;
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

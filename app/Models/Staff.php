<?php

namespace App;
namespace App\Models;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Notifications\Notifiable;

class Staff extends Authenticatable
{
    public $timestamps = false;
    protected $table = 'staff';
    use Notifiable;
    protected $hidden = ['staff_password', 'remember_token'];
    protected $primaryKey = 'staff_id';
    protected $guard = 'staff';


    public function getAuthPassword () {

        return $this->staff_password;

    }
}

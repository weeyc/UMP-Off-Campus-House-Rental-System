<?php

namespace App;
namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Notifications\Notifiable;

class Bill extends Model
{
    use Notifiable;
    public $timestamps = true;
    protected $primaryKey = 'bills_id';
    protected $table = 'bills';
    protected $fillable = ['tenant_id', 'student_id','property_id','room_id','previous_bill_id','landlord_id','payment_status','bills_cue','penalty_fees',
    'outstanding_bills','bills_status','total_bills','bills_date', 'due_date'];


    public function getTenantRelation(){
        return $this->belongsTo('App\Models\Tenant', 'tenant_id', 'tenant_id');
    }
    // public function getRoomManyRelation(){
    //     return $this->hasMany('App\Models\Room', 'room_id', 'room_id');
    // }
    public function getLandlordRelation(){
        return $this->belongsTo('App\Models\Landlord', 'landlord_id', 'landlord_id');
    }
    public function getRoomRelation(){
        return $this->belongsTo('App\Models\Room', 'room_id', 'room_id');
    }


}

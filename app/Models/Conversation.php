<?php

namespace App;
namespace App\Models;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Notifications\Notifiable;

class Conversation extends Model
{
    public $timestamps = true;
    protected $table = 'conversations';
    use Notifiable;
    protected $primaryKey = 'id';

    public function getMsgRelation(){
        return $this->hasMany('App\Models\Message', 'conversation_id', 'id' )->orderBy('created_at','desc');
    }

    public function getStudent1Relation(){
        return $this->belongsTo('App\Models\Student', 'user1_id', 'std_id');
    }
    public function getStudent2Relation(){
        return $this->belongsTo('App\Models\Student', 'user2_id', 'std_id');
    }

    public function getLandlord1Relation(){
        return $this->belongsTo('App\Models\Landlord', 'user1_id', 'landlord_id');
    }
    public function getLandlord2Relation(){
        return $this->belongsTo('App\Models\Landlord', 'user2_id', 'landlord_id');
    }
    public function getStaff1Relation(){
        return $this->belongsTo('App\Models\Landlord', 'user1_id', 'landlord_id');
    }
    public function getStaff2Relation(){
        return $this->belongsTo('App\Models\Landlord', 'user2_id', 'landlord_id');
    }


}

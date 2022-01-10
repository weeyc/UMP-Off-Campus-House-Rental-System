<?php

namespace App;
namespace App\Models;
use Illuminate\Notifications\Notifiable;
use Illuminate\Database\Eloquent\Model;

class Message extends Model
{
    public $timestamps = true;
    protected $table = 'messages';
    use Notifiable;
    protected $primaryKey = 'id';

    public function getMessageRelation(){
        return $this->belongsTo('App\Models\Student', 'conversation_id', 'id');
    }
}

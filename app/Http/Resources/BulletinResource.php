<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class BulletinResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array
     */
    public function toArray($request)
    {
        $student = $this->whenLoaded('getStudentRelation');
        $landlord = $this->whenLoaded('getLandlordRelation');
        return [
            'id' => $this->id,
            'property_id' => $this->property_id,
            'student_id' => $this->student_id,
            'landlord_id' => $this->landlord_id,
            'post' => $this->post,
            'name' => $this->name,
            'post_status' => $this->post_status,
            'created_at' => $this->created_at,
            'updated_at' => $this->updated_at,
            'student' => new StudentResource($student),
            'landlord' => new LandlordResource($landlord)
        ];
    }
}

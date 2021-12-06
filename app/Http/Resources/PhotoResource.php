<?php

namespace App\Http\Resources;
use App\Http\Resources\PropertyResource;
use Illuminate\Http\Resources\Json\JsonResource;

class PhotoResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array
     */
    public function toArray($request)
    {
        $property = $this->whenLoaded('getPropertyRelation');
        return [
            'id' => $this->photo_id,
            'property_id' => $this->property_id,
            'room_id' => $this->room_id,
            'photo_label' => $this->photo_label,
            'photo_name' => $this->photo,
            'property' => new PropertyResource($property)
        ];



    }
}

<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class PropertyResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array
     */
    public function toArray($request)
    {
        return [
            'id' => $this->property_id,
            'landlord_id' => $this->landlord_id,
            'name' => $this->property_name,
            'lat' => $this->latitude,
            'log' => $this->logitude,
            'address' => $this->address,
            'postcode' => $this->postcode,
            'des' => $this->description,
            'campus' => $this->campus,
            'furnishing' => $this->property_furnishing,
            'status' => $this->verify_status,
        ];

    }
}

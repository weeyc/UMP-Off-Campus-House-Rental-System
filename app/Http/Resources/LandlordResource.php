<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class LandlordResource extends JsonResource
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
            'landlord_id' => $this->landlord_id,
            'landlord_name' => $this->landlord_name,
            'landlord_email' => $this->landlord_email,
            'landlord_gender' => $this->landlord_gender,
            'landlord_phone_no' => $this->landlord_phone_no,
            'landlord_pic' => $this->landlord_pic,
        ];


    }
}

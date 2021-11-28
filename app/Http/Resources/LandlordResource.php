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
            'id' => $this->landlord_id,
            'name' => $this->landlord_name,
            'email' => $this->landlord_email,
            'gender' => $this->landlord_gender,
            'password' => $this->landlord_password,
            'phone_no' => $this->landlord_phone_no,
            'pic' => $this->landlord_pic,
            'des' => $this->landlord_description,
            'role' => $this->user_role,


        ];


    }
}

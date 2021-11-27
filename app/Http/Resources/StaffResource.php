<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class StaffResource extends JsonResource
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
            'id' => $this->staff_id,
            'name' => $this->staff_name,
            'email' => $this->staff_email,
            'gender' => $this->staff_gender,
            'password' => $this->staff_password,
            'phone_no' => $this->staff_phone_no,
            'pic' => $this->staff_pic,
        ];


    }
}

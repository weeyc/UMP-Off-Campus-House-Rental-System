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
            'staff_id' => $this->staff_id,
            'staff_name' => $this->staff_name,
            'staff_email' => $this->staff_email,
            'staff_gender' => $this->staff_gender,
            'staff_phone_no' => $this->staff_phone,
            'staff_pic' => $this->staff_pic,
        ];


    }
}

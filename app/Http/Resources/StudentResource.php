<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class StudentResource extends JsonResource
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
            'id' => $this->std_id,
            'name' => $this->std_name,
            'email' => $this->std_email,
            'gender' => $this->std_gender,
            'password' => $this->std_password,
            'phone_no' => $this->std_phone_no,
            'pic' => $this->std_pic,
            'des' => $this->std_description,
            'role' => $this->user_role,
        ];


    }
}

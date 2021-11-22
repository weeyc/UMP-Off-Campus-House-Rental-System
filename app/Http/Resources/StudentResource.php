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
            'std_id' => $this->std_id,
            'std_name' => $this->std_name,
            'std_email' => $this->std_email,
            'std_gender' => $this->std_gender,
            'std_phone_no' => $this->std_phone_no,
            'std_pic' => $this->std_pic,
        ];


    }
}

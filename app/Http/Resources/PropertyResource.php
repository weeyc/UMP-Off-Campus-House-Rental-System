<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;
use App\Http\Resources\PhotoResource;
use App\Http\Resources\LandlordResource;

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
        $landlord = $this->whenLoaded('getLandlordRelation');
        $getLand = $request->land;
        $getPhoto = $request->imej;
            return [
                'id' => $this->property_id,
                'land'  => $getLand ? (new LandlordResource($landlord))->where('landlord_id', $this->landlord_id)->first() : 'null',
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
                'verify_by' => $this->Verify_by,


                'photo' => $getPhoto ? PhotoResource::collection($this->whenLoaded('getPhotoRelation')) : 'null',
                'cover' => $getPhoto ?  PhotoResource::collection($this->whenLoaded('getPhotoRelation'))->where('photo_label', 'Cover')->first() :'null'
            ];



    }


}

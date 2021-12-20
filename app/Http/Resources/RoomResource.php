<?php

namespace App\Http\Resources;
use App\Http\Resources\PropertyResource;
use Illuminate\Http\Resources\Json\JsonResource;

class RoomResource extends JsonResource
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
            'id' => $this->room_id,
            'property_id' => $this->property_id,
            'room_name' => $this->room_name,
            'landlord_id' => $this->landlord_id,
            'listing_name' => $this->listing_name,
            'room_type' => $this->room_type,
            'room_description' => $this->room_description,
            'campus' => $this->campus,
            'penalty_fees' => $this->penalty_fees,
            'room_furnishing' => $this->room_furnishing,
            'number_of_tenant' => $this->number_of_tenant,
            'booking_fees' => $this->booking_fees,
            'monthly_rent' => $this->monthly_rent,
            'room_status' => $this->room_status,
            'created_at' => $this->created_at,
            'updated_at' => $this->updated_at,
            'booking_key' => $this->booking_key,
            'property' => new PropertyResource($property),
            'photo_room' => PhotoResource::collection($this->whenLoaded('getPhotoRelation')),
            'tenants' => TenantResource::collection($this->whenLoaded('getTenantRelation')),
            //'cover_room' => PhotoResource::collection($this->whenLoaded('getPhotoRelation'))->where('photo_label', 'Cover')->first()
        ];




    }
}

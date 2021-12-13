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
            'property' => new PropertyResource($property),
            'photo_room' => PhotoResource::collection($this->whenLoaded('getPhotoRelation')),
            //'cover_room' => PhotoResource::collection($this->whenLoaded('getPhotoRelation'))->where('photo_label', 'Cover')->first()
        ];

        $table->increments('room_id');
        $table->integer('landlord_id');
        $table->integer('property_id');
        $table->string('room_name')->nullable();
        $table->string('listing_name')->nullable();
        $table->string('room_type')->nullable();
        $table->string('room_description')->nullable();
        $table->string('campus')->nullable();
        $table->float('penalty_fees')->nullable();
        $table->string('room_furnishing')->nullable();
        $table->integer('number_of_tenant')->nullable();
        $table->float('booking_fees')->nullable();
        $table->float('monthly_rent')->nullable();
        $table->float('room_status')->nullable();


    }
}

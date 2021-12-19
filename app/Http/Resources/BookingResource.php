<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class BookingResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array
     */
    public function toArray($request)
    {
        $room = $this->whenLoaded('getRoomRelation');
        return [
            'booking_id' => $this->booking_id,
            'student_id' => $this->student_id,
            'property_id' => $this->property_id,
            'room_id' => $this->room_id,
            'booking_date' => $this->booking_date,
            'phone' => $this->phone,
            'booking_fees' => $this->booking_fees,
            'period_tenancy' => $this->period_tenancy,
            'booking_status' => $this->booking_status,
            'move_in_date' => $this->move_in_date,
            'room' => new RoomResource($room),
            //'photo_room' => PhotoResource::collection($this->whenLoaded('getPhotoRelation')),
            //'cover_room' => PhotoResource::collection($this->whenLoaded('getPhotoRelation'))->where('photo_label', 'Cover')->first()


        ];
    }
}

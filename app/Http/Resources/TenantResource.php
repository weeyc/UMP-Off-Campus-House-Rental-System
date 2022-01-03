<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class TenantResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array
     */
    public function toArray($request)
    {
        $student = $this->whenLoaded('getStudentRelation');
        $room = $this->whenLoaded('getRoomRelation');
        return [
            'tenant_id' => $this->tenant_id,
            'student_id' => $this->student_id,
            'property_id' => $this->property_id,
            'room_id' => $this->room_id,
            'tenant_status' => $this->tenant_status,
            'tenancy_period' => $this->tenancy_period,
            'move_in_date' => $this->move_in_date,
            'tenancy_invitation' => $this->tenancy_invitation,
            'invite_by' => $this->invite_by,
            'student' => new StudentResource($student),
            'room' => new RoomResource($room),
            'bills' => BillResource::collection($this->whenLoaded('getBillsRelation')),
        ];




    }
}

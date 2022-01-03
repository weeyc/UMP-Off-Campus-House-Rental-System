<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class BillResource extends JsonResource
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
        $tenants = $this->whenLoaded('getTenantRelation');
        return [
            'bills_id' => $this->bills_id,
            'tenant_id' => $this->tenant_id,
            'student_id' => $this->student_id,
            'property_id' => $this->property_id,
            'room_id' => $this->room_id,
            'previous_bill_id' => $this->previous_bill_id,
            'payment_status' => $this->payment_status,
            'bills_cue' => $this->bills_cue,
            'bills_status' => $this->bills_status,
            'penalty_fees' => $this->penalty_fees,
            'outstanding_bills' => $this->outstanding_bills,
            'total_bills' => $this->total_bills,
            'bills_date' => $this->bills_date,
            'due_date' => $this->due_date,
            'created_at' => $this->created_at,
            'student' => new StudentResource($student),
            'tenants' => new TenantResource($tenants),
            'room' => new RoomResource($room)
        ];


    }
}

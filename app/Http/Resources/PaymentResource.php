<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class PaymentResource extends JsonResource
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
        $landlord = $this->whenLoaded('getPaymentRelation');
        return [
            'payment_id' => $this->payment_id,
            'student_id' => $this->student_id,
            'tenant_id' => $this->tenant_id,
            'property_id' => $this->property_id,
            'room_id' => $this->room_id,
            'landlord_id' => $this->landlord_id,
            'booking_id' => $this->booking_id,
            'bill_id' => $this->bill_id,
            'payment_details' => $this->payment_details,
            'payment_status' => $this->payment_status,
            'total_payment' => $this->total_payment,
            'payment_date' => $this->payment_date,
            'student' => new StudentResource($student),
            'landlord' => new LandlordResource($student),

        ];

    }
}

<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class ClientResource extends JsonResource
{

    public function toArray($request): array
    {
        return [
            'id'                    => $this->id,
            'first_name'            => $this->first_name,
            'last_name'             => $this->last_name,
            'email'                 => $this->email,
            'primary_legal_counsel' => $this->primary_legal_counsel,
            'date_of_birth'         => $this->date_of_birth,
            'case_details'          => $this->case_details
        ];
    }
}

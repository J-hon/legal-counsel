<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class CreateClientRequest extends FormRequest
{

    public function authorize(): bool
    {
        return true;
    }

    public function rules(): array
    {
        return [
            'first_name'            => ['required'],
            'last_name'             => ['required'],
            'email'                 => ['required', 'email', 'unique:clients'],
            'primary_legal_counsel' => ['required'],
            'date_of_birth'         => ['required', 'date'],
            'profile_picture'       => ['nullable', 'file', 'mimes:jpg,jpeg,png,bmp,tiff', 'max:2048'],
            'case_details'          => ['required']
        ];
    }
}

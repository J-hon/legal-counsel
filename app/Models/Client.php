<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Concerns\HasUuids;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Client extends Model
{

    use HasFactory;
    use HasUuids;

    protected $fillable = [
        'first_name',
        'last_name',
        'email',
        'primary_legal_counsel',
        'date_of_birth',
        'profile_picture',
        'case_details'
    ];

}

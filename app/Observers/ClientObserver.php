<?php

namespace App\Observers;

use App\Mail\WelcomeEmail;
use App\Models\Client;
use Illuminate\Support\Facades\Mail;

class ClientObserver
{

    public function created(Client $client): void
    {
        Mail::to($client->email)->queue(new WelcomeEmail($client));
    }

}

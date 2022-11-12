<?php

namespace App\Service;

use App\Contracts\ClientContract;

class ClientService
{

    public function __construct(protected ClientContract $clientRepository)
    {
    }

}

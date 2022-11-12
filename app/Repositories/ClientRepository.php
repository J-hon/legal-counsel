<?php

namespace App\Repositories;

use App\Contracts\ClientContract;
use App\Models\Client;

class ClientRepository extends BaseRepository implements ClientContract
{

    public function __construct(Client $model)
    {
        parent::__construct($model);
        $this->model = $model;
    }

}

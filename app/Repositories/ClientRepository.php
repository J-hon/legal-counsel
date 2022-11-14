<?php

namespace App\Repositories;

use App\Contracts\ClientContract;
use App\Models\Client;
use Illuminate\Support\Collection;

class ClientRepository extends BaseRepository implements ClientContract
{

    public function __construct(Client $model)
    {
        parent::__construct($model);
        $this->model = $model;
    }

    public function sort(string $column, string $order): Collection
    {
        return $this->getQuery()->orderBy($column, $order)->get();
    }

}

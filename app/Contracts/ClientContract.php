<?php

namespace App\Contracts;

use Illuminate\Support\Collection;

interface ClientContract extends BaseContract
{

    public function sort(string $column, string $order): Collection;

}

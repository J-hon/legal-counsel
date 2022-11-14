<?php

namespace App\Service;

use App\Contracts\ClientContract;

class ClientService
{

    public function __construct(protected ClientContract $clientRepository)
    {
    }

    public function get(): array
    {
        $clients = $this->clientRepository->all();
        return [
            'status'  => false,
            'message' => 'Clients retrieved',
            'code'    => 200,
            'data'    => $clients
        ];
    }

    public function view(string $id): array
    {
        $client = $this->clientRepository->find($id);
        return [
            'status'  => false,
            'message' => 'Client retrieved',
            'code'    => 200,
            'data'    => $client
        ];
    }

    public function sort(string $order): array
    {
        $clients = $this->clientRepository->sort('last_name', $order);
        return [
            'status'  => false,
            'message' => 'Clients sorted',
            'code'    => 200,
            'data'    => $clients
        ];
    }

    public function create(array $params): array
    {
        if (isset($params['profile_picture'])) {
            $path                      = $params['profile_picture']->store('images');
            $params['profile_picture'] = $path;
        }

        $this->clientRepository->create($params);
        return [
            'status'  => false,
            'message' => 'Client profiled.',
            'code'    => 201,
            'data'    => []
        ];
    }

}

<?php

namespace App\Http\Controllers;

use App\Http\Requests\CreateClientRequest;
use App\Http\Resources\ClientResource;
use App\Service\ClientService;
use Illuminate\Http\JsonResponse;

class ClientController extends BaseController
{

    public function __construct(protected ClientService $clientService)
    {
    }

    public function index(): JsonResponse
    {
        $response = $this->clientService->get();
        return $this->responseJson(
            $response['status'],
            $response['code'],
            $response['message'],
            ClientResource::collection($response['data'])
        );
    }

    public function show(string $id): JsonResponse
    {
        $response = $this->clientService->view($id);
        return $this->responseJson(
            $response['status'],
            $response['code'],
            $response['message'],
            new ClientResource($response['data'])
        );
    }

    public function sort(): JsonResponse
    {
        $response = $this->clientService->sort(request('order', 'desc'));
        return $this->responseJson(
            $response['status'],
            $response['code'],
            $response['message'],
            ClientResource::collection($response['data'])
        );
    }

    public function store(CreateClientRequest $request): JsonResponse
    {
        $response = $this->clientService->create($request->validated());
        return $this->responseJson(
            $response['status'],
            $response['code'],
            $response['message'],
            $response['data']
        );
    }

}

<?php

namespace Tests\Feature;

use Illuminate\Http\UploadedFile;
use Illuminate\Support\Arr;
use Tests\TestCase;

class ClientTest extends TestCase
{

    public function test_client_can_be_profiled()
    {
        $payload = [
            'first_name'            => $this->faker->firstName,
            'last_name'             => $this->faker->lastName,
            'email'                 => $this->faker->email,
            'primary_legal_counsel' => $this->faker->text,
            'profile_picture'       => UploadedFile::fake()->image('avatar.jpg'),
            'date_of_birth'         => $this->faker->date,
            'case_details'          => $this->faker->realText
        ];

        $this->postJson("$this->baseUrl/client", $payload)
            ->assertStatus(201);

        $this->assertFileExists($payload['profile_picture']);

        $this->assertDatabaseHas('clients', Arr::except($payload, ['profile_picture']));
    }
}

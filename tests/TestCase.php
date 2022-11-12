<?php

namespace Tests;

use Illuminate\Foundation\Testing\TestCase as BaseTestCase;
use Illuminate\Foundation\Testing\WithFaker;
use Illuminate\Support\Facades\Artisan;

abstract class TestCase extends BaseTestCase
{

    use CreatesApplication, WithFaker;

    protected string $baseUrl = 'api/v1';

    protected function setUp(): void
    {
        parent::setUp();

        Artisan::call('migrate:fresh');

        $this->withoutExceptionHandling();
    }

}

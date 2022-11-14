<?php

use App\Http\Controllers\ClientController;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('api')->group(function () {
    Route::prefix('client')->group(function () {
        Route::get('sort/{order?}', [ClientController::class, 'sort']);

        Route::get('', [ClientController::class, 'index']);
        Route::get('{id}', [ClientController::class, 'show']);
        Route::post('', [ClientController::class, 'store']);
    });
});

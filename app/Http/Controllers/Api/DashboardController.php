<?php


namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;

class DashboardController extends Controller
{
    public function stats()
    {
        return [
            "customers" => 25,
            "products" => 12
        ];
    }
}


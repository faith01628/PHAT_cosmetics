<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class NewsController extends Controller
{
    public function news(Request $request)
    {
        return view('user.news');
    }
}

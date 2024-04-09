<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;
use App\Providers\RouteServiceProvider;
use Illuminate\Support\Facades\Auth;
use App\Http\Requests\Auth\LoginRequest;
class LoginController extends Controller
{
    public function login(Request $request) {
        return inertia::render('Auth/MyLogin');
    }
    public function handleLogin(LoginRequest $request) {
        $request->authenticate();

        $request->session()->regenerate();

        return redirect()->route('list');
    }

    public function logout(Request $request) {
        Auth::guard('web')->logout();

        $request->session()->invalidate();

        $request->session()->regenerateToken();
        return redirect()->route('my-login');
    }

}

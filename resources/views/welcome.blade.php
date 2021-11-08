@extends('layouts.app')
@section('content')
    <div class="flex bg-gray-800 border-b border-gray-300 py-4">
        <div class="container mx-auto flex justify-between">
            <div class="flex text-coolGray-50">
                <router-link class="mr-4" to='/student' exact>Student</router-link>
                <router-link to='/landlord'>Landlord</router-link>
            </div>
            <div class="flex">
                <router-link class="mr-4" to='/login' exact>Login</router-link>
                <router-link to='/register'>Register</router-link>
            </div>
        </div>
    </div>
    <div class="">
        <router-view></router-view>
    </div>

@endsection

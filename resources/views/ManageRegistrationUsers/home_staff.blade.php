<title>UOCA-Staff</title>

@extends('layouts.app')
@section('content')

<div id="app">

    <staff-app
        :user_id="{{ $user_id }}"
        :role="{{ $role }}"
        >
    </staff-app>


</div>


@endsection



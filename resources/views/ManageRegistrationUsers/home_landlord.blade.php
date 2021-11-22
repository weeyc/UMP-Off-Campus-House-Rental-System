<title>UOCA</title>

@extends('layouts.app')
@section('content')

<div id="app">

    {{ $role }}
    <landlord-app
        :user_id="{{ $user_id }}"
        :role="{{ $role }}">
    </landlord-app>

</div>


@endsection



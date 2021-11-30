<title>UOCA-Landlord</title>

@extends('layouts.app')
@section('content')

<div id="app">

    <landlord-app
        :user_id="{{ $user_id }}"
        :role="{{ $role }}">
    </landlord-app>

</div>


@endsection



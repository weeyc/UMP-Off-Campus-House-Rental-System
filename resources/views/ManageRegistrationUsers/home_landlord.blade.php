<title>UOCA</title>

@extends('layouts.app')
@section('content')

<div id="app">

    {{ $role }}
    <landlord-home
        :user_id="{{ $user_id }}"
        :role="{{ $role }}">
    </landlord-home>

</div>


@endsection



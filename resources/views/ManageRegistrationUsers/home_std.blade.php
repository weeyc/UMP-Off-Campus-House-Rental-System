<title>UOCA</title>

@extends('layouts.app')
@section('content')


<div id="app">
    <std-app :user_id="{{ $user_id }}"
    :role="{{ $role }}">></std-app>
</div>


@endsection



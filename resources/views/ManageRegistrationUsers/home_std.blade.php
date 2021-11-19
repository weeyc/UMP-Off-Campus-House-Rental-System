<title>UOCA</title>

@extends('layouts.app')
@section('content')


<div id="app">
    {{ $role }}
    <std-home :user_id="{{ $user_id }}"
    :role="{{ $role }}">></std-home>


</div>


@endsection



<title>UOCA-Staff</title>
<?php ?>

@extends('layouts.app')
@section('content')

<div id="app">

    <staff-home
        :user_id="{{ $user_id }}"
        :role="{{ $role }}">
    </staff-home>


</div>


@endsection



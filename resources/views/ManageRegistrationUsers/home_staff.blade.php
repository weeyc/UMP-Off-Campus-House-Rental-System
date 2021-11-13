<title>UOCA</title>
<?php $user_id = session('ID');
    $user_role = session('Role');?>

@extends('layouts.app')
@section('content')

<div id="app">

        <nav-staff :user_id="{{ $user_id }}"></nav-staff>
    <staff-home :user_id="{{ $user_id }}"> </staff-home>

</div>


@endsection



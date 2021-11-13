<title>UOCA</title>
<?php $user_id = session('ID');
    $user_role = session('Role');?>
@extends('layouts.app')
@section('content')


<div id="app">

    <std-home :user_id="{{ $user_id }}"></std-home>

</div>


@endsection



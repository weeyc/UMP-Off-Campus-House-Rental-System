<title>UOCA</title>
<?php $cust_id = session('LoggedUser');
echo $cust_id?>

@extends('layouts.app')
@section('content')

<div id="app">
halo
    <router-view> </router-view>

</div>


@endsection



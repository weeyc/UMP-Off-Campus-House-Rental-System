<title>UOCA</title>
<?php $user_id = session('ID');
    $user_role = session('Role');?>

@extends('layouts.app')
@section('content')

<div id="app">
    BLADE => ID:
    <?php  echo $user_id ;
          echo $user_role; ?>
    <landlord-home> </landlord-home>

</div>


@endsection



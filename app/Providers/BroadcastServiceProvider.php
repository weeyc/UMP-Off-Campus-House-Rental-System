<?php

namespace App\Providers;

use Illuminate\Support\Facades\Auth;
use Illuminate\Support\ServiceProvider;
use Illuminate\Support\Facades\Broadcast;

class BroadcastServiceProvider extends ServiceProvider
{
    /**
     * Bootstrap any application services.
     *
     * @return void
     */
    public function boot()
    {
    //Broadcast::routes();
    //Broadcast::routes(['middleware' => ['auth:api']]);
  // Broadcast::routes(['middleware' => ['auth:student']]);

  Broadcast::routes(['middleware' => ['web','auth:student,landlord,staff']]);

        // if(Auth::guard('student')->check()){
        //     Broadcast::routes(['middleware' => ['web','auth:student']]);
        // }else if(Auth::guard('landlord')->check()){
        //     Broadcast::routes(['middleware' => ['web','auth:landlord']]);
        // }else if(Auth::guard('staff')->check()){
        //     Broadcast::routes(['middleware' => ['web','auth:staff']]);
        // }



        require base_path('routes/channels.php');
    }
}

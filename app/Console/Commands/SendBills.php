<?php

namespace App\Console\Commands;

use Carbon\Carbon;
use App\Models\Bill;
use App\Models\Tenant;
use App\Models\Student;
use Illuminate\Console\Command;
use App\Notifications\BillsNotification;
use App\Models\Room;
use Illuminate\Support\Facades\Notification;

class SendBills extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'send:bills';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Check Monthly Bills';

    /**
     * Create a new command instance.
     *
     * @return void
     */
    public function __construct()
    {
        parent::__construct();
    }

    /**
     * Execute the console command.
     *
     * @return int
     */
    public function handle()
    {

        $go_to_date = Carbon::now()->format('Y-m-d');
        $Today_Bills_First = Bill::where('bills_date', '=', $go_to_date)
                            ->where('previous_bill_id', null)
                            ->where('bills_status', 'Unready')
                            ->get()
                            ->pluck('bills_id')
                            ->toArray();

        //if count more than 1
        if(count($Today_Bills_First)>0){
                            $Today_Bills_First_Room_Id = Bill::where('bills_date', '=', $go_to_date)
                            ->where('previous_bill_id', null)
                            ->where('bills_status', 'Unready')
                            ->get()
                            ->pluck('room_id')
                            ->toArray();

                $Today_Bills_First_Tenant_Id = Bill::where('bills_date', '=', $go_to_date)
                            ->where('previous_bill_id', null)
                            ->where('bills_status', 'Unready')
                            ->get()
                            ->pluck('tenant_id')
                            ->toArray();

                $Today_Bills_First_Student_Id = Bill::where('bills_date', '=', $go_to_date)
                            ->where('previous_bill_id', null)
                            ->where('bills_status', 'Unready')
                            ->get()
                            ->pluck('student_id')
                            ->toArray();



                $tenant_counts = [];
                $monthly_per_room = [];
                $monthly_per_tenant = [];
                $Billing = [];
                $Sender_std = [];
                $Sender_land = [];
                for($t=0; $t <count($Today_Bills_First); $t++){
                    $tenant_counts[$t] = Tenant::where('room_id',$Today_Bills_First_Room_Id[$t])->where('tenant_status', 'Tenancy')->get()->count();

                    $monthly_per_room [$t] = Room::query()->with(['getTenantRelation' => function ($query) use($Today_Bills_First_Tenant_Id, $t) {
                        $query->select('room_id','tenant_id')
                                ->where('tenant_id', $Today_Bills_First_Tenant_Id[$t]);
                    }])->where('room_id',$Today_Bills_First_Room_Id[$t])->value('monthly_rent');

                    $monthly_per_tenant [$t] =  $monthly_per_room [$t] / $tenant_counts[$t];
                     Bill::where('bills_id', $Today_Bills_First[$t])
                            ->update([
                                'bills_status' => 'Ready',
                                'bills_cue' => 1,
                                'total_bills' =>  $monthly_per_tenant [$t],

                    ]);
                    $Billing[$t] =  Bill::where('bills_id', $Today_Bills_First[$t])->first();

                    if($Billing[$t]){
                        $Sender_std[$t] = Student::find($Today_Bills_First_Student_Id[$t]);
                        $Sender_land[$t] = null;
                        Notification::send($Sender_std[$t], new BillsNotification($Billing[$t], $Sender_std[$t], $Sender_land[$t]));
                    }
                }


        }


        $Today_Bills_Next = Bill::where('bills_date', '=', $go_to_date)
                            ->where('previous_bill_id','!=' , null)
                            ->where('bills_status', 'Unready')
                            ->get()
                            ->pluck('bills_id')
                            ->toArray();



            if(count($Today_Bills_Next)>0){
                        $Today_Bills_Next_Room_Id = Bill::where('bills_date', '=', $go_to_date)
                        ->where('previous_bill_id','!=' , null)
                        ->where('bills_status', 'Unready')
                        ->get()
                        ->pluck('room_id')
                        ->toArray();

                        $Today_Bills_Next_Tenant_Id = Bill::where('bills_date', '=', $go_to_date)
                        ->where('previous_bill_id', '!=' , null)
                        ->where('bills_status', 'Unready')
                        ->get()
                        ->pluck('tenant_id')
                        ->toArray();

                        $Today_Bills_Next_Student_Id = Bill::where('bills_date', '=', $go_to_date)
                        ->where('previous_bill_id', '!=' , null)
                        ->where('bills_status', 'Unready')
                        ->get()
                        ->pluck('student_id')
                        ->toArray();


                $check_previous_bill_id = Bill::where('bills_date', '=', $go_to_date)
                ->where('previous_bill_id','!=' , null)
                ->where('payment_status', 'Unpaid')
                ->where('bills_status', 'Unready')
                ->get()
                ->pluck('previous_bill_id')
                ->toArray();


                //Check Overdue
                $previous_bill_overdue_id =[];

                for($t=0; $t <count($check_previous_bill_id); $t++){
                    $previous_bill_overdue_id[$t]= Bill::where('bills_id', '=', $check_previous_bill_id[$t])
                    ->where('payment_status', 'Unpaid')
                    ->where('bills_status', 'Ready')
                    ->value('bills_id');

                    Bill::where('bills_id', $previous_bill_overdue_id[$t])
                    ->update([
                        'bills_status' => 'Overdue',
                     ]);

                }



                    $tenant_counts_n = [];
                    $Bills_total_Overdue = [];
                    $monthly_per_room_n = [];
                    $monthly_per_tenant_n = [];
                    $penalty_fees = [];
                    $Billing = [];
                    $Sender_std = [];
                    $Sender_land = [];
                    for($t=0; $t <count($Today_Bills_Next); $t++){

                        $Bills_total_Overdue[$t]= Bill::where('bills_id', '=', $check_previous_bill_id[$t])
                        ->where('payment_status', 'Unpaid')
                        ->where('bills_status', 'Overdue')
                        ->value('total_bills');

                        $tenant_counts_n[$t] = Tenant::where('room_id',$Today_Bills_Next_Room_Id[$t])->where('tenant_status', 'Tenancy')->get()->count();

                        $monthly_per_room_n [$t] = Room::query()->with(['getTenantRelation' => function ($query) use($Today_Bills_Next_Tenant_Id, $t) {
                            $query->select('room_id','tenant_id')
                                    ->where('tenant_id', $Today_Bills_Next_Tenant_Id[$t]);
                        }])->where('room_id',$Today_Bills_Next_Room_Id[$t])->value('monthly_rent');

                        $penalty_fees  [$t] = Room::query()->with(['getTenantRelation' => function ($query) use($Today_Bills_Next_Tenant_Id, $t) {
                            $query->select('room_id','tenant_id')
                                ->where('tenant_id', $Today_Bills_Next_Tenant_Id[$t]);
                            }])->where('room_id',$Today_Bills_Next_Room_Id[$t])->value('penalty_fees');

                            $monthly_per_tenant_n [$t] =  $monthly_per_room_n [$t] / $tenant_counts_n[$t];

                        if($Bills_total_Overdue[$t]==null){

                            Bill::where('bills_id', $Today_Bills_Next[$t])
                            ->update([
                                'bills_status' => 'Ready',
                                'bills_cue' => 1,
                                'total_bills' =>  $monthly_per_tenant_n [$t],
                             ]);

                             $Billing[$t] =  Bill::where('bills_id', $Today_Bills_Next[$t])->first();

                             if($Billing[$t]){
                                $Sender_std[$t] = Student::find($Today_Bills_Next_Student_Id[$t]);
                                $Sender_land[$t] = null;
                                Notification::send($Sender_std[$t], new BillsNotification($Billing[$t], $Sender_std[$t], $Sender_land[$t]));
                            }

                        }else {
                         Bill::where('bills_id', $Today_Bills_Next[$t])
                            ->update([
                                'bills_status' => 'Ready',
                                'bills_cue' => 1,
                                'total_bills' =>  $monthly_per_tenant_n [$t] +  $Bills_total_Overdue [$t] +$penalty_fees  [$t] ,
                                'outstanding_bills' =>  $Bills_total_Overdue [$t],
                                'penalty_fees' =>  $penalty_fees  [$t] ,
                              ]);
                              $Billing[$t] =  Bill::where('bills_id', $Today_Bills_Next[$t])->first();
                              if($Billing[$t]){
                                $Sender_std[$t] = Student::find($Today_Bills_Next_Student_Id[$t]);
                                $Sender_land[$t] = null;
                                Notification::send($Sender_std[$t], new BillsNotification($Billing[$t], $Sender_std[$t], $Sender_land[$t]));
                            }

                        }




                    }
            }
    }
}

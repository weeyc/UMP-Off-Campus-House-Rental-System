<?php

namespace App\Http\Controllers;

use Carbon\Carbon;
use App\Models\Bill;
use App\Models\Room;
use App\Models\Photo;
use App\Models\Staff;
use App\Models\Tenant;
use PHPUnit\Util\Json;
use App\Models\Booking;
use App\Models\Payment;
use App\Models\Student;
use App\Models\Bulletin;
use App\Models\Landlord;
use App\Models\Property;
use Illuminate\Support\Str;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use App\Http\Resources\RoomResource;
use App\Http\Resources\PhotoResource;
use App\Http\Resources\StaffResource;
use App\Http\Resources\NotifyResource;
use App\Http\Resources\StudentResource;
use App\Http\Resources\LandlordResource;
use App\Http\Resources\PropertyResource;
use App\Notifications\BillsNotification;
use Illuminate\Notifications\Notifiable;
use Illuminate\Support\Facades\Notification;



class TestController extends Controller
{

    public function get_Time_Now(Request $request){

        $go_to_date = $request->setDate;
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


//  -----------------------------------------------------------------------------------------Bill Table Illustration--------------------------------------------------------------------------------------------
//  |bills_id  | tenant_id | property_id | room_id | previous_bill_id | landlord_id | payment_status | bill_status   | bills_cue  |  penalty_fees | Outstanding_bills |  total_bills   | bills_date | due_date  |
//  ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
//  |    1     |     7     |     1       |    10   |      null        |    20       |    Unpaid      |   Ready       |     0      |     null      |        null       |       150      |  23/2/2022 | 22/3/2022 |
//  ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
//  |    2     |     7     |     1       |    10   |      1           |    20       |    Unpaid      |    Unready    |     0      |     null      |        null       |       150      |  23/3/2022 | 22/3/2022 |
//  ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
//  |    3     |     7     |     1       |    10   |      2           |    20       |    Unpaid      |    Unready    |     0      |      null     |        null       |       340      |  23/4/2022 | 22/5/2022 |
//  ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
//  |    4     |     8     |     1       |    9    |      null        |    20       |    Unpaid      |   Unready     |     0      |     null      |        null       |       250      |  23/2/2022 | 22/3/2022 |
//  ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
//  |    5     |     8     |     1       |    9    |      4           |    20       |    Unpaid      |    Unready    |     0      |     null      |        null       |       250      |  23/3/2022 | 22/3/2022 |
//  ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
//  |    6     |     8     |     1       |    9    |      5           |    20       |    Unpaid      |    Unready    |     0      |      null     |        null       |       250      |  23/4/2022 | 22/5/2022 |
//  ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

//$future_Date = Carbon::parse($go_to_date);
//$today = Carbon::parse('25/09/2022 00:00:00');
    }

    public function resetBill(Request $request){

       Bill::query()
            ->update([
                'bills_status' => 'Unready',
                'payment_status' => 'Unpaid',
                'bills_cue' => 0,
                'outstanding_bills' => 0.0,
                'penalty_fees' => 0.0,
                ]);
    }
    public function resetBill_OneStd($id, Request $request){

       Bill::query()
            ->update([
                'bills_status' => 'Unready',
                'payment_status' => 'Unpaid',
                'bills_cue' => 0,
                'outstanding_bills' => 0.0,
                'penalty_fees' => 0.0,
                'student_id'=>$id,
                ]);
    }

    public function getTimeNow(Request $request){

        $go_to_date = Carbon::now();
        return  $go_to_date->format('d m Y');

    }



    public function get_one(Request $request){

    // $room_id =9;
    // $tenant_id =11;
    $room_id =10;
    $tenant_id =7;
    $prop_id = 1;
    $student_id =23;
    $tenants = Tenant::where('room_id',$room_id)->where('tenant_status', 'Tenancy')->get();
    $tenant_counts =  $tenants->count();

    $move_in_date = Tenant::where('tenant_id',$tenant_id)->where('tenant_status', 'Tenancy')->value('move_in_date');
    $tenancy_period = (int) Tenant::where('tenant_id',7)->where('tenant_status', 'Tenancy')->value('tenancy_period');

    $monthly_rent = Room::query()->with(['getTenantRelation' => function ($query) use($tenant_id) {
        $query->select('room_id','tenant_id')
                ->where('tenant_id', $tenant_id);
    }])->where('room_id',$room_id)->value('monthly_rent');

    $penalty_fees = Room::query()->with(['getTenantRelation' => function ($query) use($tenant_id) {
        $query->select('room_id','tenant_id')
                ->where('tenant_id', $tenant_id);
    }])->where('room_id',$room_id)->value('penalty_fees');

    $landlord_id = Property::where('property_id',$prop_id)->value('landlord_id');



    //------------------TEST INSERT MULTIPLE BILLS----------------------------
     //Get Dates for Move in, End, Due
     $Entering_Date = new Carbon($move_in_date);
     $Entering_DueDate = new Carbon($move_in_date);
     $End_Date= new Carbon($move_in_date);
     $End_DueDate= new Carbon($move_in_date);

     $firstBills_Date = $Entering_Date->addMonth(1);
     $LastBills_Date = $End_Date->addMonths($tenancy_period);

     $firstDueBills_Date = $Entering_DueDate->addMonth(1)->addDays(29);
     $LastDueBills_Date = $End_DueDate->addMonths($tenancy_period)->addDays(29);

     $dateBills = [];
     $dueDates = [];

     for ($i = $firstBills_Date; $i <$LastBills_Date; $i->addMonth()) {
         $dateBills[] =  $i->toDateTimeString();
     }
     for ($d = $firstDueBills_Date; $d <$LastDueBills_Date; $d->addMonth()) {
         $dueDates[] =  $d->toDateTimeString();
     }


     //Insert All Bills for one Move In
        $Bills = [];
        $stoper = (int)($tenancy_period-1);

        DB::beginTransaction();
            for($t=0; $t <$stoper; $t++){
                $Bills[$t] = [
                    'tenant_id' => $tenant_id,
                    'property_id' => $prop_id,
                    'student_id' => $student_id,
                    'room_id' => $room_id,
                    'landlord_id' => $landlord_id,
                    'bills_date' => Carbon::parse($dateBills[$t]),
                    'due_date' => Carbon::parse($dueDates[$t]),
                    'total_bills' => $monthly_rent,
                    'created_at' => Carbon::now(),
                    'updated_at' => Carbon::now(),

                ];

            }
            Bill::insert($Bills);
            //update previously bill id
            $lastRowID = Bill::where('tenant_id',$tenant_id)->latest('created_at')->value('bills_id');
            $firstRowID = Bill::where('tenant_id',$tenant_id)->oldest('bills_id')->value('bills_id');

            $TenantBills = Bill::where('tenant_id',$tenant_id)->where('bills_id', '!=', $firstRowID)->get()->pluck('bills_id')->toArray();
            $lastInsertedIds = Bill::where('tenant_id',$tenant_id)->select('bills_id')->get()->except($lastRowID)->pluck('bills_id')->toArray();

            for($t=0; $t <count($lastInsertedIds); $t++){
                Bill::where('tenant_id', $tenant_id)
                        ->where('bills_id', $TenantBills[$t])
                        ->update([
                            'previous_bill_id' => $lastInsertedIds[$t]
                        ]);
            }
        DB::commit();

    //  }
    //------------------TEST INSERT MULTIPLE BILLS----------------------------




    //--------TEST SOME PART OF FUNCTIONS/THEORY------------------//



    //Change move in date to currentDateTime when apply scheduler
    $currentDateTime = Carbon::now();


    //chg to  bills date/Carbon nowNow()
    $date_carboned_add_due = new Carbon($move_in_date);
    $date_carboned_notify = new Carbon($move_in_date);
    $date_carboned_move_out = new Carbon($move_in_date);
    //$date_carboned_minus = new Carbon($move_in_date);
     //return $LastBills_Date->format('d M Y');

    $Entering_Date = new Carbon($move_in_date);
    $Entering_DueDate = new Carbon($move_in_date);
    $End_Date= new Carbon($move_in_date);
    $End_DueDate= new Carbon($move_in_date);

    $firstBills_Date = $Entering_Date->addMonth(1);
    $LastBills_Date = $End_Date->addMonths($tenancy_period);

    $firstDueBills_Date = $Entering_DueDate->addMonth(1)->addDays(29);
    $LastDueBills_Date = $End_DueDate->addMonths($tenancy_period)->addDays(29);

    $dateBills = [];
    $dueDates = [];

    for ($i = $firstBills_Date; $i <$LastBills_Date; $i->addMonth()) {
        $dateBills[] =  $i->toDateTimeString();
    }
    for ($d = $firstDueBills_Date; $d <$LastDueBills_Date; $d->addMonth()) {
        $dueDates[] =  $d->toDateTimeString();
    }
    return Carbon::parse($dueDates);

    // get('date', function() {
    //     $start = Carbon::now();
    //     $end = Carbon::now()->addHours(7);
    //     $data = [];
    //     for($d = $start;$d < $end;$d->addHour()){
    //         $data[] = $d->toDateTimeString(); // this line here!
    //     };
    //     return $data;
    // });


    $dueDate = $date_carboned_add_due->addDays(29);
    $remainderDueDate = $date_carboned_notify->addDays(22);
    $move_out_date = $date_carboned_move_out->addMonth($tenancy_period);

    $diff_in_months = $currentDateTime->diffInDays($move_in_date);

    //if date now - move_in_date = one months ->format('d M Y');

    $test = Room::where('property_id',3)->latest('created_at')->value('room_id');


    //return $move_out_date;

    $start_date = "2021-12-31";
    // return Carbon::now();
    //return Carbon::createFromDate($start_date);
   // return Carbon::parse($start_date)->format('Y-m-d H:i');


        $s_date = $request->setDate;
        $newDate =  new Carbon($s_date);
        Carbon::setTestNow($newDate);





    $Bill = new Bill();

    if (Tenant::where('tenant_id',$tenant_id )->exists()) {

        $bill_latest = Bill::where('tenant_id',$tenant_id)->latest('created_at')->first();

        //first insert
        if($bill_latest==null){
            $Bill->tenant_id = $tenant_id;
            $Bill->property_id = $prop_id;
            $Bill->student_id = $student_id;
            $Bill->room_id = $room_id;
            $Bill->landlord_id = $landlord_id;
            $Bill->due_date = $dueDate;
            $Bill->total_bills = ($monthly_rent/$tenant_counts);
            $Bill->save();

        //second and next insert
        }else{
            $bill_latest_id = Bill::where('tenant_id',$tenant_id)->latest('bills_date')->value('bills_id');
            $bill_latest_paymentStatus = Bill::where('tenant_id',$tenant_id)->latest('bills_date')->value('payment_status');
            $bill_latest_billStatus = Bill::where('tenant_id',$tenant_id)->latest('bills_date')->value('bills_status');
            $bill_latest_billTotals = Bill::where('tenant_id',$tenant_id)->latest('bills_date')->value('total_bills');

            $Bill->tenant_id = $tenant_id;
            $Bill->property_id = $prop_id;
            $Bill->student_id = $student_id;
            $Bill->room_id = $room_id;
            $Bill->landlord_id = $landlord_id;
            $Bill->due_date = $dueDate;
            $Bill->previous_bill_id = $bill_latest_id;

            if($bill_latest_paymentStatus=='Paid'){
                $Bill->total_bills = ($monthly_rent/$tenant_counts);
            }else if($bill_latest_paymentStatus=='Unpaid'){
                Bill::where('tenant_id',$tenant_id)->latest('bills_date')->update([
                    'bills_status' => 'Overdue'
                ]);
                $Bill->penalty_fees = $penalty_fees;
                $Bill->Outstanding_bills = $bill_latest_billTotals;
                $Bill->total_bills = $bill_latest_billTotals + ($monthly_rent/$tenant_counts) + $penalty_fees ;
            }
            $Bill->save();

                //notification
                if($Bill->save()){
                    $ID = $request -> session()->get('ID');
                    $Sender_std = Student::find($student_id);
                    $Sender_land = null;
                    Notification::send($Sender_std, new BillsNotification($Bill, $Sender_std, $Sender_land));
                }


        }


      }else{
         return "no record";
      }



    //--------TEST SOME PART OF FUNCTIONS/THEORY------------------*/




//  ----------------------------------Conversation-----------------------
//  |    id    | user1_id  | user1_role  | user2_id | user2_role  | type |
//  ----------------------------------------------------------------------
//  |    1     |     1     |  student    |    3     |  student    |      |
//  ----------------------------------------------------------------------
//  |    2     |     1     |  student    |    8     |  Landlord   |      |
//  ----------------------------------------------------------------------
//  |    3     |     3     |  Staff      |    10    |  Landlord   |      |
//  ----------------------------------------------------------------------
//  |    4     |     1     |  student    |    6     |  Staff      |      |
//  ----------------------------------------------------------------------
//  |    4     |     9     |  student    |    1     |  Student    |      |
//  ----------------------------------------------------------------------

//std login go to chat
// check conversation where user1_role = student and user1_role = auth->di Orwhere -> user2_role =2 and user2_id = auth->id - >get()





    }


}

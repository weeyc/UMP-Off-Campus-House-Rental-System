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


    }

    public function get_one(Request $request){
    //Theory
    // Run schedule at insert of tenant, pass inserted tenant to schedular
    // if tenant still exist in tenant table
    // if date now - move_in_date = one months
    //    then execute next date (date now + one months) on Auto schedular function (pass tenant)
    //
    // Auto schedular function
    // if tenant still exist in tenant table
    // date now

    //Testing Billing Algorithm
    // Variables:
    //- For each tenants
    //- $tenant_no = count tenants in a room by room id, tenant_status=Tenancy
    //- $move_in_date, $tenancy_period(parseInt) from tenant
    //- (tenant - room) number_of_tenant, booking_fees, penalty_fees

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




    /*--------TEST SOME PART OF FUNCTIONS/THEORY------------------//



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







        //$Bill_id = tenant id = 1 and latest inserted bills
        //  insert table bill tenant id = 1 / bill date 23/3/2021, previous bill id = $Bill_id   (penalty_fees=0, total_bills=200)
        //  if previous bill ($Bill_id) payment status = not paid,
        //       update table -> penalty fees = room_id penalty fees, total_bills = room_id monthly_bills + penalty fees total_bills_previous;

        //----------------------------------------------------------------Bill Table Illustration--------------------------------------------------------------------------------------------------------------------
        //|bills_id  | tenant_id | property_id | room_id | previous_bill_id | landlord_id | payment_status | bill_status | bills_cue |  penalty_fees | Outstanding_bills |  total_bills   | bills_date | due_date    |
        //-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
        //|    1     |     7     |     1       |    10   |      null        |    20       |    Unpaid       |   Overdue    |     1      |     null    |        null       |       150       |  23/2/2022 | 22/3/2022 |
        //-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
        //|    2     |     7     |     1       |    10   |      1           |    20       |    Unpaid      |     Ready     |     1     |     null    |        null       |       150       |  23/3/2022 | 22/3/2022  |
        //------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
        //|    3     |     7     |     1       |    10   |      2           |    20       |    Unpaid      |     Ready     |     0     |      40      |        150        |       340       |  23/4/2022 | 22/5/2022 |
        //------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------


    // Calculation
    // (Move in date) + one months 6months
    // 23/1/2022 Move in date                                       (first month no bills) 23/1/2022
    // 23/2/2022 Bill insert first bill, due: + 29days => 22/3/22   (second month)
    // 23/3/2022 Bill insert second bill, due: + 29days => 22/4/22  (third month)
    // 23/4/2022 Bill insert third bill, due: + 29days => 22/5/22   (fourth month)
    // 23/4/2022 Bill insert fourth bill, due: + 29days => 22/5/22  (fifth month)
    // 23/5/2022 Bill insert fifth bill, due: + 29days => 22/6/22   (sixth month)

    // Check Overdue
    // First Insert
    //   table bill tenant id = 1 and bill date = (Move in date) + one months = 23/2/2021 previous bill id = null
    // Second Insert
    //  $Bill_id = tenant id = 1 and latest inserted bills
    //  insert table bill tenant id = 1 / bill date 23/3/2021, previous bill id = $Bill_id   (penalty_fees=0, total_bills=200)
    //  if previous bill ($Bill_id) payment status = not paid,
    //       update table -> penalty fees = room_id penalty fees, total_bills = room_id monthly_bills + penalty fees total_bills_previous;



    //$minusDate = $currentDateTime->subDays($date_carboned_minus)->format('d M Y');
    // $to = Carbon::createFromFormat('Y-m-d H:s:i', '2015-5-5 3:30:34');
    // $from = Carbon::createFromFormat('Y-m-d H:s:i', '2016-6-6 9:30:34');
    //$diff_in_months = $to (passed) ->diffInMonths($from (future));


    // $room_tenants_num = Room::query()->with(['getTenantRelation' => function ($query) use($tenant_id) {
    //     $query->select('room_id','tenant_id')
    //             ->where('tenant_id', $tenant_id);
    // }])->where('room_id',$room_id)->value('number_of_tenant');


    }


}

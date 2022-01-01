<?php

namespace App\Notifications;

use Carbon\Carbon;
use App\Models\Payment;
use Illuminate\Bus\Queueable;
use Illuminate\Notifications\Notifiable;
use Illuminate\Notifications\Notification;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Notifications\Messages\MailMessage;
use Illuminate\Notifications\Messages\BroadcastMessage;

class BillsNotification extends Notification implements ShouldQueue
{
    use Queueable;
    use Notifiable;
    protected $Content;
    protected $Sender_std;
    protected $Sender_land;

    /**
     * Create a new notification instance.
     *
     * @return void
     */
    public function __construct($Content, $Sender_std,$Sender_land)
    {
        $this->Content = $Content;
        $this->Sender_std = $Sender_std;
        $this->Sender_land =$Sender_land;
    }

    /**
     * Get the notification's delivery channels.
     *
     * @param  mixed  $notifiable
     * @return array
     */
    public function via($notifiable)
    {
        return ['database', 'broadcast','mail'];
       // return ['database'];
    }

    /**
     * Get the mail representation of the notification.
     *
     * @param  mixed  $notifiable
     * @return \Illuminate\Notifications\Messages\MailMessage
     */

            /**
         * Get the broadcastable representation of the notification.
         *
         * @param  mixed  $notifiable
         * @return BroadcastMessage
         */


    /**
     * Get the array representation of the notification.
     *
     * @param  mixed  $notifiable
     * @return array
     */
    public function toArray($notifiable)
    {
        return [
            'Content' =>  $this->Content,
            'Sender_std' =>  $this->Sender_std,
            'Sender_land' =>    $this->Sender_land,
        ];
    }


    public function toBroadcast($notifiable)
    {
        return new BroadcastMessage([
            'notification' => $notifiable->notifications()->latest()->first()

        ]);
    }
    public function toMail($notifiable)
    {
        if($notifiable->user_role=="student"){
            $receiver_name = $notifiable->std_name;
        }else if ($notifiable->user_role=="landlord"){
            $receiver_name = $notifiable->landlord_name;
        }else {
            $receiver_name = "no name";
        }

        $bills_id = $this->Content->bills_id;
        $tenant_id = $this->Content->tenant_id;
        $total_bills = $this->Content->total_bills;
        $bills_date = Carbon::parse($this->Content->bills_date)->format('M Y') ;
        $due_date =Carbon::parse($this->Content->due_date)->format('d M Y') ;

        return (new MailMessage)
                    ->subject("UOCA Rental Bill $bills_date (Tenant ID: $tenant_id)")
                    ->greeting("Hello $receiver_name,")
                    ->line("Your rental bill for $bills_date is ready!")
                    ->line("Total amount needed to be pay: RM $total_bills ")
                    ->action('Check Now', url('http://localhost:3000'))
                    ->line("Please make payment before $due_date to avoid getting penalize.")
                    ->line('Thank you for using our application!')
                    ->line('Regard,')
                    ->salutation('UOCA Team');
    }



}

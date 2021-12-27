<?php

namespace App\Notifications;

use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Notifications\Messages\MailMessage;
use Illuminate\Notifications\Notification;
use Illuminate\Notifications\Messages\BroadcastMessage;
use App\Models\Payment;
use Illuminate\Notifications\Notifiable;

class PaymentNotification extends Notification
{
    use Queueable;
    use Notifiable;

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
        // return ['database', 'broadcasting'];
        return ['database', 'broadcast'];
    }

    /**
     * Get the mail representation of the notification.
     *
     * @param  mixed  $notifiable
     * @return \Illuminate\Notifications\Messages\MailMessage
     */
    public function toMail($notifiable)
    {
        return (new MailMessage)
                    ->line('The introduction to the notification.')
                    ->action('Notification Action', url('/'))
                    ->line('Thank you for using our application!');
    }

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
}

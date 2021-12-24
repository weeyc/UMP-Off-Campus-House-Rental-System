<?php

namespace App\Notifications;

use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Notifications\Messages\MailMessage;
use Illuminate\Notifications\Notification;
use Illuminate\Notifications\Messages\BroadcastMessage;
use App\Models\Payment;
use Illuminate\Notifications\Notifiable;

class RoommateNotification extends Notification
{
    use Queueable;
    use Notifiable;
    protected $Content;

    /**
     * Create a new notification instance.
     *
     * @return void
     */
    public function __construct($Content, $Sender)
    {
        $this->Content = $Content;
        $this->Sender = $Sender;
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
        return ['database'];
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
    public function toBroadcast($notifiable)
{
    return new BroadcastMessage([
        'notification' => $notifiable->notification()->latest()->first()
    ]);
}

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
            'Sender' =>  $this->Sender,
        ];
    }
}

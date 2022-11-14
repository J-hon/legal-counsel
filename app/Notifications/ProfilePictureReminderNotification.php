<?php

namespace App\Notifications;

use App\Models\Client;
use App\Models\Reminder;
use Carbon\Carbon;
use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Notifications\Messages\MailMessage;
use Illuminate\Notifications\Notification;

class ProfilePictureReminderNotification extends Notification implements ShouldQueue
{
    use Queueable;

    /**
     * Create a new notification instance.
     *
     * @return void
     */
    public function __construct()
    {
        //
    }

    /**
     * Get the notification's delivery channels.
     *
     * @param  mixed  $notifiable
     * @return array
     */
    public function via($notifiable)
    {
        return ['mail'];
    }

    /**
     * Get the mail representation of the notification.
     *
     * @param  mixed  $notifiable
     * @return \Illuminate\Notifications\Messages\MailMessage
     */
    public function toMail($notifiable)
    {
        $this->updateReminder($notifiable->id);
        return (new MailMessage)
            ->subject('Reminder')
            ->greeting('Hello ' . $notifiable->first_name)
            ->line("You haven't uploaded a profile picture.")
            ->line('Please do that as soon as possible');
    }

    public function shouldSend(mixed $notifiable)
    {
        $date = Client::find($notifiable->id)->reminder->next_date;
        return Carbon::parse($date)->isToday();
    }

    protected function updateReminder($clientId): void
    {
        Reminder::where('client_id', '=', $clientId)
            ->update([
                'next_date' => today()->addDays(3)->toDateString()
            ]);
    }
}

@component('mail::layout')
{{-- Header --}}
@slot('header')
@component('mail::header', ['url' => config('app.url')])
{{ config('app.name') }}
@endcomponent
@endslot

{{-- Body --}}
{{ $slot }}

{{-- @component('mail::panel')
    <center>Total Bill To Pay: RM 200</center
    @component('mail::button', ['url' => 'http://localhost:3000'])
        Check Now
    @endcomponent
@endcomponent --}}






@component('mail::subcopy')
    Disclaimer: This is a system generated email. Please do not reply to this email.
@endcomponent

{{-- Footer --}}
@slot('footer')
@component('mail::footer')
© {{ date('Y') }} UOCA. @lang('All rights reserved.')
@endcomponent
@endslot
@endcomponent

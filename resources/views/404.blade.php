

     <!doctype html>
     <html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
     <head>
         <meta charset="utf-8">
         <meta name="viewport" content="width=device-width, initial-scale=1">

         <!-- CSRF Token -->
         <meta name="csrf-token" content="{{ csrf_token() }}">

         <title>{{ config('app.name', 'Laravel') }}</title>

         <!-- Scripts -->
         <script src="{{ asset('js/app.js') }}" defer></script>
         <script defer src="https://unpkg.com/alpinejs@3.2.3/dist/cdn.min.js"></script>
         <script src="https://cdn.jsdelivr.net/gh/alpinejs/alpine@v2.8.2/dist/alpine.min.js" defer></script>




         <!-- Fonts -->
         <link rel="dns-prefetch" href="//fonts.gstatic.com">
         <link href="https://fonts.googleapis.com/css?family=Nunito" rel="stylesheet">
         <link href="https://unpkg.com/tailwindcss@2.0.3/dist/tailwind.min.css" rel="stylesheet">



         <!-- Styles -->
         <link href="{{ asset('css/app.css') }}" rel="stylesheet">


     </head>
     <body>
         <div id="app">
            <div class="w-full h-screen bg-no-repeat bg-cover" style="background-image: url(/images/Background/Gotham1.jpg);">
                <div class="flex items-center justify-center h-screen overflow-hidden text-3xl text-center text-gray-700">Page Not Found! <br>404 ERROR!</div>
             </div>
         </div>
     </body>
     </html>

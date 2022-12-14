<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <meta name="csrf-token" content="{{ csrf_token() }}">
        
        <title>Laravel</title>

        <!-- Fonts -->
        <link href="https://fonts.bunny.net/css2?family=Nunito:wght@400;600;700&display=swap" rel="stylesheet">

        <!-- Styles -->
        <link rel="stylesheet" href="{{ mix('/build/css/app.css') }}">

        <!-- Scripts -->
        <script src="{{ mix('/build/js/index.js') }}" defer></script>
        <script src="{{ mix('/build/js/manifest.js') }}" defer></script>
        <script src="{{ mix('/build/js/vendor.js') }}" defer></script>

    </head>
    <body>
        <div id="root"></div>
    </body>
</html>

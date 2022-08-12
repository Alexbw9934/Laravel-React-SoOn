let mix = require('laravel-mix');

mix.js('resources/js/index.js', 'build/js')
    .react()
    .extract(['react'])
    .sass('resources/scss/app.scss', 'build/css')
    .postCss('resources/css/app.css', 'build/css', [
        require('tailwindcss'),
    ])
    .options({
        processCssUrls: false,
    })
    .version();
Footer
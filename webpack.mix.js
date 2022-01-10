const mix = require('laravel-mix');
const tailwindcss = require('tailwindcss');
require('laravel-mix-purgecss');



/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for the application as well as bundling up all the JS files.
 |
 */
mix.setPublicPath('./public');
mix.js('resources/js/app.js', 'js/')
    .sass('resources/sass/app.scss', 'css/')
    .options({
        processCssUrls: false,
        postCss: [ tailwindcss('./tailwind.config.js') ],
      }).purgeCss()


     // mix.browserSync('http://127.0.0.1:8000/');

      mix.browserSync({
        proxy: 'http://127.0.0.1:8000/',
        ghostMode: false,
    });

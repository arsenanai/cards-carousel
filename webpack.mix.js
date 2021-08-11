const mix = require('laravel-mix');
const tailwindcss = require("tailwindcss");

mix.js('resources/js/app.js', 'public/js')
  .vue()
  .extract(['vue'])
  .sass('resources/css/app.scss', 'public/css')
  .options({
    processCssUrls: false,
    postCss: [tailwindcss("./tailwind.config.js")]
  });

/* uncomment this if you need local server, but unfortunately it will serve to smth like localhost:3000 */
/*mix.browserSync({
  proxy: 'cstore.test',
  host: 'cstore.test',
  open: 'external'
});*/
//mix.disableNotifications();

/*function gzipFile(p) {
  const { exec } = require('child_process');
  exec('gzip -9 -c '+p+' > '+p+'.gz', (err, stdout, stderr) => {
    if (err) {
      console.log('ERROR: failed to gzip '+p)
    }
    else {
      console.log('COMPRESSED: '+p+'.gz');
    }
  });
}

mix.then(function () {
  console.log('gzipping files...');
  gzipFile('public/js/app.js')
  gzipFile('public/js/manifest.js')
  gzipFile('public/js/vendor.js')
  gzipFile('public/css/app.css')
});*/

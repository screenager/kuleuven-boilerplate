process.env.DISABLE_NOTIFIER = true;

// First some variables

const gulp = require('gulp');
const concat = require("gulp-concat");
const cleancss = require('gulp-clean-css');
const download = require("gulp-download");
const rename = require("gulp-rename");
const symlink = require('gulp-symlink');
const sass = require('gulp-sass');
const replace = require('gulp-replace');

var latestKulStijlUrl = 'https://stijl.kuleuven.be/2016/release/latest';
var vendorDir = './resources/vendors/';
var assetsDir = './resources/assets/';
var kulFetchedDir = './resources/kul_fetched/';
var fetchedTemplatesDir = './templates/icts';


// First fetch the latest KUL assets from ICTS

download(latestKulStijlUrl + '/css/main.css')
  .pipe(gulp.dest(kulFetchedDir));

download(latestKulStijlUrl + '/js/all.min.js')
  .pipe(gulp.dest(kulFetchedDir));

/*
 // Fetch the CSS for the Google fonts
 // @fixme : disabled, as the URI looks at your user agent, and thereby does not return definitions suitable for all browsers
 download('https://fonts.googleapis.com/css?family=Material+Icons|Open+Sans:400italic,600italic,700italic,400,700,600|Merriweather:400italic,400,700')
 .pipe(rename('google-for-kul'))
 .pipe(gulp.dest(vendorDir + 'kul_latest/fonts'));
 */

var layoutsDirs = [
  '', // default one
  '/intranet',
  '/kulak',
  '/hosted-by',
  // '/corp',
  '/landingpage'
];
layoutsDirs.forEach(function(layoutDir) {
  // copy the templates and convert to Blade template files
  download([
    latestKulStijlUrl + '/includes' + layoutDir + '/header.nl.inc',
    latestKulStijlUrl + '/includes' + layoutDir + '/header.en.inc',
    latestKulStijlUrl + '/includes' + layoutDir + '/footer.nl.inc',
    latestKulStijlUrl + '/includes' + layoutDir + '/footer.en.inc',
    latestKulStijlUrl + '/includes' + layoutDir + '/flyout.nl.inc',
    latestKulStijlUrl + '/includes' + layoutDir + '/flyout.en.inc'
  ])
    .pipe(replace('https://stijl.kuleuven.be/2016/', ''))
    .pipe(gulp.dest(fetchedTemplatesDir + layoutDir));
});
// copy the images
download([
  latestKulStijlUrl + '/img/favicon.png',
  latestKulStijlUrl + '/img/sedes-kuleuven.png',
]).pipe(gulp.dest("./img"));
download([
  latestKulStijlUrl + '/img/logo.svg'
]).pipe(gulp.dest("./img/svg"));

// The CSS of KUL sometimes looks into /css/img instead of /img, so make a symlink
/*gulp.src('./img')
  .pipe(symlink('./css/img', {force: true}));
*/



// Now start concatenating stuff

gulp.task('scripts', function() {
  gulp.src([
    kulFetchedDir + '/all.min.js',
    assetsDir + '/js/layout2016.js',
    assetsDir + '/js/app.js',
    assetsDir + '/js/usability.js',
    vendorDir + 'kul_latest/js/all.min.js',
    vendorDir + 'tinymce/tinymce.js',
    vendorDir + 'bootstrap-sass/assets/javascripts/bootstrap.min.js',
    vendorDir + 'bootstrap/js/tab.js',
    vendorDir + 'select2/dist/js/select2.min.js',
    vendorDir + 'jquery.are-you-sure/jquery.are-you-sure.js'
    // .. place more vendor scripts dependencies here
  ])
    //.pipe(browserify())
    .pipe(concat('app.js'))
    .pipe(gulp.dest('./'))
});

gulp.task('sass', function (){
  gulp.src([assetsDir + 'css/layout2016.scss'])
    .pipe(sass({
      //includePaths: ['./dev/sass'],
      outputStyle: 'expanded'
    }))
    .pipe(concat('app.css'))
    .pipe(cleancss())
    .pipe(gulp.dest('./'));
});

gulp.task('css', function() {
  gulp.src([
    './css/app.css',
    vendorDir + '/select2/dist/css/select2.min.css',
    vendorDir + '/select2/dist/css/select2.min.css',
    vendorDir + '/select2-bootstrap-theme/dist/select2-bootstrap.css'
    // .. place more vendor css dependencies here
  ])
    .pipe(concat('app.css'))
    .pipe(gulp.dest('./'))
});

gulp.task('tinymce_themes', function() {
  gulp.src([vendorDir + 'tinymce/themes/modern/**']).pipe(gulp.dest('./tinymce/themes/modern'));
  gulp.src([vendorDir + 'tinymce/skins/lightgray/**']).pipe(gulp.dest('./tinymce/skins/lightgray'));
  gulp.src([vendorDir + 'tinymce/plugins/**']).pipe(gulp.dest('./tinymce/plugins'));
});

gulp.task('default', ['scripts', 'sass', 'css', 'tinymce_themes']);
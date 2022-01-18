const { src, dest, watch, parallel, series } = require('gulp');

const scss           = require('gulp-sass');
const concat         = require('gulp-concat');
const autoprefixer   = require('gulp-autoprefixer');
const uglify         = require('gulp-uglify');
const imagemin       = require('gulp-imagemin');
const rename         = require('gulp-rename');
const nunjucksRender = require('gulp-nunjucks-render');
const del            = require('del');
const browserSync    = require('browser-sync').create();



function browsersync() {
  browserSync.init({
    server: {
      baseDir: 'app/'
    },
    notify: false
  })
}

function nunjucks() {
  return src('app/*.njk') //всех нунчаков мы нашли
  .pipe(nunjucksRender()) //отрендерили
  .pipe(dest('app')) //выкидывать их в папку app
  .pipe(browserSync.stream())
}


function styles() {
  return src('app/scss/*.scss')
  .pipe(scss({outputStyle: 'compressed'}))
  .pipe(rename({
    suffix: '.min'
  }))
  .pipe(autoprefixer({
    overrideBrowserslist: ['last 10 versions'],
    grid: true
  }))
  .pipe(dest('app/css'))
  .pipe(browserSync.stream())
}

function scripts(){
  return src([
    'node_modules/jquery/dist/jquery.js',
    'node_modules/slick-carousel/slick/slick.js',
    'app/js/jquery.rateyo.min.js',
    //'node_modules/mixitup/dist/mixitup.js',
    //'node_modules/@fancyapps/fancybox/dist/jquery.fancybox.js',
    //'node_modules/jquery-form-styler/dist/jquery.formstyler.js',
    'app/js/main.js'
  ])
  .pipe(concat('main.min.js'))
  .pipe(uglify())
  .pipe(dest('app/js'))
  .pipe(browserSync.stream())
}

function images(){
  return src('app/images/**/*.*')
  .pipe(imagemin([
    imagemin.gifsicle({interlaced: true}),
    imagemin.mozjpeg({quality: 75, progressive: true}),
    imagemin.optipng({optimizationLevel: 5}),
    imagemin.svgo({
        plugins: [
            {removeViewBox: true},
            {cleanupIDs: false}
        ]
    })
  ]))
  .pipe(dest('dist/images'))
}

function build() {
  return src([
    'app/fonts/**',
    'app/**/*.html',
    'app/css/style.min.css',
    'app/css/about.min.css',
    'app/css/android_tech.min.css',
    'app/css/arr_app.min.css',
    'app/css/article.min.css',
    'app/css/author.min.css',
    'app/css/blog.min.css',
    'app/css/contacts.min.css', 
    'app/css/dedicated_dev.min.css',
    'app/css/error.min.css',
    'app/css/game_dev.min.css',
    'app/css/index.min.css',
    'app/css/ios.min.css',
    'app/css/join.min.css',
    'app/css/jquery.rateyo.min.css',
    'app/css/mobile_app.min.css',
    'app/css/portfolio.min.css',
    'app/css/products.min.css',
    'app/css/sdk_dev.min.css',
    'app/css/sdk_mod.min.css',
    'app/css/team.min.css',
    'app/css/unity.min.css',
    'app/css/vr_app.min.css',
    'app/js/main.min.js'
  ], {base: 'app'})
  .pipe(dest('dist'))
}

function watching(){
  watch(['app/**/*.scss'], styles);
  watch(['app/*.njk'], nunjucks);
  watch(['app/js/**/*.js', '!app/js/main.min.js'], scripts);
  watch(['app/**/*.html']).on('change', browserSync.reload);
}

function cleanDist() {
  return del('dist')
}


exports.styles = styles;
exports.scripts = scripts;
exports.browsersync = browsersync;
exports.watching = watching;
exports.images = images;
exports.nunjucks = nunjucks;
exports.cleanDist = cleanDist;
exports.build = series(cleanDist, images, build);



exports.default = parallel(nunjucks, styles, scripts, browsersync, watching);


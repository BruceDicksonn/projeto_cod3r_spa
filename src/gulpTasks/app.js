const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const babel = require('gulp-babel');
const concat = require('gulp-concat');
const htmlmin = require('gulp-htmlmin');
const uglify = require('gulp-uglify');
const uglifycss = require('gulp-uglifycss');

function appHtml(){
    return gulp.src('src/**/*.html')
        .pipe(htmlmin({
            collapseWhitespace:true
        }))
        .pipe(gulp.dest('build'));
}


function appCss(){
    return gulp.src('src/assets/sass/index.scss')
        .pipe(sass().on('error',sass.logError))
        .pipe(uglifycss({'uglyComments':true}))
        .pipe(concat('app.min.css'))
        .pipe(gulp.dest('build/assets/css'))
}


function appJs(){
    return gulp.src('src/assets/js/*.js')
        .pipe(babel({presets:['env']}))
        .pipe(uglify())
        .pipe(concat('app.min.js'))
        .pipe(gulp.dest('build/assets/js'))
}


function appImg(){
    return gulp.src('src/assets/imgs/**/*.*')
        .pipe(gulp.dest('build/assets/imgs'))
}

gulp.task('appHtml',appHtml);
gulp.task('appCss',appCss);
gulp.task('appJs',appJs);
gulp.task('appImg',appImg);

module.exports = {
            appHtml,
            appCss,
            appJs,
            appImg
}
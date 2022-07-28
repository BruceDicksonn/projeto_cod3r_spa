const gulp = require('gulp');
const webserver = require('gulp-webserver');
const {watch, series} = require('gulp')

function spyFiles(cb){

    watch('src/**/*.html',series('appHtml'));
    watch('src/assets/sass/*.scss',series('appCss'));
    watch('src/assets/js/*.js',series('appJs'));
    watch('src/assets/imgs/*.*',series('appImg'));

    return cb();
}

function server(){
    return gulp.src('build')
        .pipe(webserver({
            livereload:true,
            open:true
        }))
}

module.exports = {
        spyFiles,
        server
}
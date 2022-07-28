const {series,parallel} = require('gulp');
const {appHtml,appCss,appJs,appImg} = require('./src/gulpTasks/app');
const {depsCss,depsFonts} = require('./src/gulpTasks/deps');
const {spyFiles,server} = require('./src/gulpTasks/server');

exports.default = series(
    parallel(
        series(appHtml,appCss,appJs,appImg),
        series(depsCss,depsFonts)
    ),
    server,
    spyFiles
)


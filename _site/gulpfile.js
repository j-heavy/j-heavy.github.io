var gulp = require('gulp');
var csso = require('gulp-csso');

gulp.task('default', function () {
    return gulp.src('./styles.css')
        .pipe(csso());
        .pipe(gulp.dest('./dest'));
});

gulp.task('development', function () {
    return gulp.src('/_site/styles.css')
        .pipe(csso({
            restructure: false,
            sourceMap: true,
            debug: true
        }))
        .pipe(gulp.dest('/dest'));
});
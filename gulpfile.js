var gulp = require('gulp');

gulp.task('mytask', function () {
	return gulp.src('source-files');
	.pipe(plugin());
});
const gulp = require('gulp');
const less = require('gulp-less');

gulp.task('less',  () =>{
    return gulp.src(['css/*.less'])
	.pipe(less())
	.pipe(gulp.dest(file=>file.base));
});
 
gulp.task('watch', ()=>{
	gulp.watch(['css/*.less'], ['less']);
})
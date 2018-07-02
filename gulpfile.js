var gulp = require('gulp');
var bs = require('browser-sync').create();
gulp.task('browser-sync', function(){
  bs.init({
    server: {
      baseDir: "./"
    },
    index: 'tesla.html'
  });
});

gulp.task('watch', ['browser-sync'], function(){
  gulp.watch(["*.html", "*.css", "*.js"]).on('change', bs.reload);
});

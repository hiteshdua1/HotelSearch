var gulp = require('gulp');

gulp.task('serve', function () {
  var nodemon = require('gulp-nodemon');
  nodemon({ script: './src/server/app.js'
        , ext: 'js'
        , watch: ['src/server/']
  }).on('restart', function() {
        console.log('Restarting');
  });

});


gulp.task('default', function () {
    gulp.start('serve');
});


var gulp = require('gulp'),
    vinyl	= require('vinyl-source-stream'),
    browserify = require('browserify'),
    babelify = require('babelify'),
    babel = require('gulp-babel'),
    sourceMaps = require('gulp-sourcemaps'),
    nodemon = require('nodemon');
    bSync	= require('browser-sync').create();

var serverRunning = false;

//Source paths
var src = {

  client: {
    scripts: {
      entry: 'app/client/scripts/app.js',
      all: 'app/client/scripts/**/*.js'
    },
    html: "app/client/**/*.html"
  },

  server: {
    scripts: 'app/server/**/*.js'
  }
}

//Distirbution paths
var dist = {

  client: {
    root: 'dist/client',
    scripts: 'dist/client/scripts'
  },

  server: {
    root: 'dist/server',
    app: 'dist/server/server.js'
  }
}


//Convert Code to ES5 and transform JSX
gulp.task('client-scripts', function() {

	browserify({
      entries: src.client.scripts.entry,
      debug: true
    })
    .transform(babelify)
    .bundle()
    .pipe(vinyl('bundle.js'))
    .pipe(gulp.dest(dist.client.scripts))
    .pipe(bSync.stream());
});

gulp.task('server-scripts', function() {

  gulp.src(src.server.scripts)
    .pipe(sourceMaps.init())
    .pipe(babel())
    // .pipe(sourceMaps.write('.', {sourceRoot: dist.server}))
    .pipe(gulp.dest(dist.server.root));
})


//Pass over html files
gulp.task('html', function() {

	return gulp.src(src.client.html)
		.pipe(gulp.dest(dist.client.root))
		.pipe(bSync.stream());
})


//Basic build
gulp.task('default', ['server-scripts', 'client-scripts', 'html'], function() {});


//Watch and build
gulp.task('start', ['default', 'nodemon'], function() {

	bSync.init({

    proxy: "http://localhost:9000", // wrap the express server
    browser: "google chrome",
    port: 7000
	});

	gulp.watch(src.client.scripts.all, ['client-scripts'], bSync.reload());
	gulp.watch(src.client.html, ['html'], bSync.reload());
  gulp.watch(src.server.scripts, ['server-scripts']);
})

//Run the server
gulp.task('nodemon', function (cb) {

  return nodemon({

    script: dist.server.app

  }).on('start', function () {

      if (!serverRunning) {

        serverRunning = true;
        cb();
      }
  });
});

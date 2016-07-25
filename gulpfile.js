// init packages
var gulp = require('gulp'),
	nodemon = require('gulp-nodemon'),
	gulpMocha = require('gulp-mocha'),
	env = require('gulp-env'),
	supertest = require('supertest');

// default task
gulp.task('default', function(){
	nodemon({
		script: 'app.js',
		ext: 'js',
		env: {
			PORT: 8000
		},
		ignore: ['./node_modules/**']
	})
	.on('restart', function() {
		console.log('Restarting');
	});
});

// test task
gulp.task('test', function() {
	env({vars: {
		ENV: 'Test'
	}});

	gulp.src('tests/*.js', {read: false})
		.pipe(gulpMocha({reporter: 'nyan'}));
});
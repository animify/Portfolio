'use strict'

const gulp = require('gulp')
const watch = require('gulp-watch')
const nodemon = require('gulp-nodemon')
const extend = require('extend')
const runSequence = require('run-sequence')
const jetpack = require('fs-jetpack')
const parseArgs = require('minimist')
const browserSync = require('browser-sync').create("blossom")
const libs = jetpack.cwd('./libs/')

const templatesDir = libs.cwd('templates')

let config = extend({
	 env: process.env.NODE_ENV
}, parseArgs(process.argv.slice(2)))

gulp.task('set-dev', () => process.env.NODE_ENV = config.env = 'development')

gulp.task('set-prod', () => process.env.NODE_ENV = config.env = 'production')

gulp.task('sync', () => {
	browserSync.init({
		server: "./libs/static"
	})
})

gulp.task('dev', ['set-dev'], function () {
	return runSequence(
		['stylusWatch', 'templateWatch'],
		['stylus', 'template'],
		'sync'
	)
})

gulp.task('prod', ['set-prod'], function () {
	return runSequence(
		['stylus-production', 'scripts-production', 'images-production'],
		'template-production'
	)
})

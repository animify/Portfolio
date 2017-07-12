'use strict'

const gulp = require('gulp')
const watch = require('gulp-watch')
const stylus = require('gulp-stylus')
const jetpack = require('fs-jetpack')
const util = require('gulp-util')
const browserSync = require('browser-sync').get("blossom")

const nib = require('nib')
const jeet = require('jeet')
const rupture = require('rupture')

const libs = jetpack.cwd('./libs/')
const dist = jetpack.cwd('./dist/')

const stylusDir = libs.cwd('stylus')
const templatesDir = libs.cwd('templates')
const cssDir = libs.cwd('static/assets/css')
const cssDist = dist.cwd('assets/css')

gulp.task('stylusWatch', () => {
	watch(stylusDir.path('**/*.styl'), () => { gulp.start('stylus') })
})

gulp.task('stylus', () => {
	return gulp.src(stylusDir.path('blossom.styl'))
		.pipe(stylus({
			use: [jeet(), nib(), rupture()]
		}))
	 .pipe(gulp.dest(cssDir.path()))
	 .pipe(browserSync.stream())
	 .on("end", () => {
		 util.log(util.colors.underline.bold.white.bgBlue('BlossomUI'), 'Injected new Blossom css')
	 })
})

gulp.task('stylus-production', () => {
	return gulp.src(stylusDir.path('blossom.styl'))
		.pipe(stylus({
			compress: true,
			use: [jeet(), nib(), rupture()]
		}))
	 .pipe(gulp.dest(cssDist.path()))
	 .on("end", () => {
		 util.log(util.colors.underline.bold.white.bgBlue('BlossomUI'), 'Rebuilt Blossom')
	 })
})

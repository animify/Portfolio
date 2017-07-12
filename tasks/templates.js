'use strict'

const gulp = require('gulp')
const watch = require('gulp-watch')
const pug = require('gulp-pug')
const util = require('gulp-util')
const browserSync = require('browser-sync').get("blossom")
const jetpack = require('fs-jetpack')

const libs = jetpack.cwd('./libs/')
const dist = jetpack.cwd('./dist/')

const templatesDir = libs.cwd('templates')
const htmlDir = libs.cwd('static')
const htmlDist = dist.cwd('./')

gulp.task('templateWatch', () => {
	watch(templatesDir.path('*.pug'), () => { gulp.start('template') })
})

gulp.task('template', function buildHTML() {
	return gulp.src(templatesDir.path('*.pug'))
	.pipe(pug({
		pretty: true
	}))
	.pipe(gulp.dest(htmlDir.path()))
	.on("end", () => {
		util.log(util.colors.underline.bold.white.bgMagenta('Templates'), 'HTML generated from template')
		browserSync.reload()
		util.log(util.colors.underline.bold.black.bgYellow('BrowserSync'), 'Loaded HTML content')
	})
})

gulp.task('template-production', function buildHTML() {
	return gulp.src(templatesDir.path('*.pug'))
	.pipe(pug({
		pretty: false
	}))
	.pipe(gulp.dest(htmlDist.path()))
	.on("end", () => {
		util.log(util.colors.underline.bold.white.bgMagenta('Templates'), 'Production HTML generated')
	})
})

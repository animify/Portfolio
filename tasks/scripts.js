'use strict'

const gulp = require('gulp')
const util = require('gulp-util')
const uglify = require('gulp-uglify')
const pump = require('pump')
const jetpack = require('fs-jetpack')

const libs = jetpack.cwd('./libs/')
const dist = jetpack.cwd('./dist/')

const jsDir = libs.cwd('static/assets/js')
const jsDist = dist.cwd('assets/js')

gulp.task('scripts-production', (next) => {
	pump([
		gulp.src(jsDir.path('*.js')),
		uglify(),
		gulp.dest(jsDist.path())
	], () => {
		util.log(util.colors.underline.bold.white.bgMagenta('JS Scripts'), 'JS scripts uglified for prod')
		next()
	})
})

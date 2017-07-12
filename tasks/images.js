'use strict'

const gulp = require('gulp')
const util = require('gulp-util')
const uglify = require('gulp-uglify')
const imagemin = require('gulp-imagemin')
const pump = require('pump')
const jetpack = require('fs-jetpack')

const libs = jetpack.cwd('./libs/')
const dist = jetpack.cwd('./dist/')

const imagesDir = libs.cwd('static/assets/images')
const imagesDist = dist.cwd('assets/images')

gulp.task('images-production', (next) => {
	pump([
		gulp.src([imagesDir.path('*.png'), imagesDir.path('*.jpg'), imagesDir.path('*.jpeg'), imagesDir.path('*.gif')]),
		imagemin({
			verbose: true
		}),
		gulp.dest(imagesDist.path())
	], () => {
		util.log(util.colors.underline.bold.white.bgGreen('Images'), 'Images optimized and copied over')
		next()
	})
})

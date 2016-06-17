"use strict";

var gulp = require("gulp");
var less = require("gulp-less");
var plumber = require("gulp-plumber");
var postcss = require("gulp-postcss");
var autoprefixer = require("autoprefixer");
var imagemin = require('gulp-imagemin');
var server = require("browser-sync");
var del = require("del");
var svgmin = require("gulp-svgmin");
var svgstore = require("gulp-svgstore");
var rename = require("gulp-rename");
var svgsprite = require('gulp-svg-sprite');
var webpack = require('gulp-webpack');


gulp.task("style", function() {
  gulp.src("less/style.less")
    .pipe(plumber())
    .pipe(less())
    .pipe(postcss([
      autoprefixer({
        browsers: [
          "last 1 version",
          "last 2 Chrome versions",
          "last 2 Firefox versions",
          "last 2 Opera versions",
          "last 2 Edge versions"
        ]
      })
    ]))
    .pipe(gulp.dest("build/css"));
});

gulp.task('html', function() {
  gulp.src('*.html')
    .pipe(gulp.dest('build/'));
});



gulp.task('js', function() {
  return gulp.src('js/main.js')
    .pipe(webpack())
    .pipe(rename('main.js'))
    .pipe(gulp.dest('build/js/'));
});


gulp.task('images', function() {
  gulp.src('img/**/*.{jpg,png,gif}', {
      base: '.'
    })
    // .pipe(imagemin({
    //   optimizationLevel: 3,
    //   progressive: true
    // }))
    .pipe(gulp.dest('build/'));
});


gulp.task('svgicons', function() {
  gulp.src('img/svg-icons/*.svg')
    .pipe(svgstore())
    .pipe(rename('svgicons.svg'))
    .pipe(gulp.dest('img/'));
});

gulp.task('svglogo', function() {
  del('img/view/*');
  gulp.src('img/svg-logo/*.svg')
    .pipe(svgsprite({
      mode: {
        view: { // Activate the «view» mode
          bust: true,
          render: {
            css: true
          }
        }
      },
      shape: {
        spacing: {
          padding: '1px'
        }
      }
    }))
    .pipe(gulp.dest('img/'));
});

gulp.task('svgcopy', function() {

  gulp.src('img/view/svg/*.svg')
    .pipe(rename('svglogo.svg'))
    .pipe(gulp.dest('build/img/'))
    .pipe(gulp.dest('img/'));
});


gulp.task('del', function() {
  del('build/*');
})

gulp.task("build", ['del', 'html', 'style', 'js', 'images', 'svgcopy'], function() {
  gulp.src(['fonts/**/*.{woff,woff2}'], {
      base: '.'
    })
    .pipe(gulp.dest('build'));
})

gulp.task('watch', function() {
  gulp.watch("less/**/*.less", ["style"]);
  gulp.watch("*.html", ["html"]);
  gulp.watch("js/*.js", ["js"]);
  gulp.watch("img/**/*.{jpg,png,gif}", ["image"]);
})

gulp.task("serve", ['watch'], function() {
  server.init({
    server: "./build/",
    notify: false,
    open: true,
    ui: false
  });

  gulp.watch("build/**/*").on("change", server.reload);
});

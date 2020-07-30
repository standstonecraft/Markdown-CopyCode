const { watch, series, task, src, dest, parallel } = require('gulp');
const babel = require('gulp-babel');
const uglify = require('gulp-uglify');
const rename = require('gulp-rename');
const insert = require('gulp-insert');
//setting : paths
const paths = {
  root: './',
  jsSrc: './src/*.js',
  jsDist: './js/',
  minSrc: './js/mdCopyCode.min.js',
  bookmarkletDist: './bookmarklet/',
};

task('build', () => {
  return src(paths.jsSrc)
    .pipe(
      babel({
        presets: ['@babel/preset-env'],
      })
    )
    .pipe(dest(paths.jsDist))
    .pipe(uglify({ mangle: { toplevel: true } }))
    .pipe(rename({ extname: '.min.js' }))
    .pipe(dest(paths.jsDist));
});

task('bookmarklet', () => {
  return src(paths.minSrc)
    .pipe(insert.prepend('javascript:'))
    .pipe(rename({ extname: '.txt' }))
    .pipe(dest(paths.bookmarkletDist));
});

task('default', series('build', 'bookmarklet'));

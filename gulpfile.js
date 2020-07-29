const { watch, series, task, src, dest, parallel } = require('gulp');
const babel = require('gulp-babel');
const uglify = require('gulp-uglify');
const rename = require('gulp-rename');
//setting : paths
const paths = {
  root: './',
  jsSrc: './src/*.js',
  jsDist: './js/',
};

task('default', () => {
  return src(paths.jsSrc)
    .pipe(
      babel({
        presets: ['@babel/preset-env'],
      })
    )
    .pipe(dest(paths.jsDist))
    .pipe(uglify())
    .pipe(rename({ extname: '.min.js' }))
    .pipe(dest(paths.jsDist));
});

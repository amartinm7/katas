const gulp = require('gulp')
const browserSync = require('browser-sync').create()
const s3 = require('gulp-s3-upload')({})
const sass = require('gulp-sass')

// Static Server + watching scss/html files
gulp.task('serve', ['sass'], function() {
  browserSync.init({
    server: './app'
  })

  gulp.watch('app/scss/**/*.scss', ['sass']);
  gulp.watch('app/js/*.js').on('change', browserSync.reload);
  gulp.watch('app/*.html').on('change', browserSync.reload);
})

// Compile sass into CSS & auto-inject into browsers
gulp.task('sass', function() {
  return gulp
    .src('app/scss/**.scss')
    .pipe(sass())
    .on('error', sass.logError)
    .pipe(gulp.dest('app/css'))
    .pipe(browserSync.stream())
})

const s3UploadsList = [
  { src: './app/assets/*', keyTransformRoute: 'assets/' },
  { src: './app/js/*.js', keyTransformRoute: 'js/' },
  { src: './app/css/*.css', keyTransformRoute: 'css/' },
  { src: './app/fonts/*', keyTransformRoute: 'fonts/' },
  { src: './app/*.html', keyTransformRoute: '' }
]

gulp.task('upload-to-s3', function() {
  s3UploadsList.forEach(function(item) {
    gulp.src(item.src).pipe(
      s3(
        {
          Bucket: 'xxx-put-the-bucket-name-here',
          ACL: 'public-read',
          keyTransform: function(fileName) {
            return `${item.keyTransformRoute}${fileName}`
          }
        },
        {
          maxRetries: 5
        }
      )
    )
  })
})

gulp.task('default', ['serve'])

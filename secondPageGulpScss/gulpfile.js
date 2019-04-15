var gulp = require("gulp"),
    sass = require("gulp-sass"),
    postcss = require("gulp-postcss"),
    autoprefixer = require("autoprefixer"),
    cssnano = require("cssnano"),
    sourcemaps = require("gulp-sourcemaps");
    browserSync = require("browser-sync").create();

	
	
function style() {
  return (
      gulp
          .src(paths.scss.src)
          .pipe(sourcemaps.init())
          .pipe(sass())
          .on("error", sass.logError)
          .pipe(postcss([autoprefixer(), cssnano()]))
          .pipe(sourcemaps.write())
          .pipe(gulp.dest(paths.scss.dest))
          .pipe(browserSync.stream())
      );
  }
	
  function watch() {
    browserSync.init({
        server: {
            baseDir: "./"
        }
    });
    gulp.watch(paths.scss.src, style);
    gulp.watch("path/to/html/*.html", reload);
}
var paths = {
  scss: {
      src: "scss/**/*.scss",
      dest: "scss"
  }
};

exports.style = style;
exports.watch = watch;

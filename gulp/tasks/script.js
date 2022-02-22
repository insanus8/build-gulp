import webpack from "webpack-stream";

export const script = () => {
    return app.gulp.src(app.path.src.script, { sourcemaps: app.isDev })
        .pipe(webpack({
            mode: app.isDev ? 'development' : 'production',
            output: {
                filename: 'script.js'
            }
        }))
        .pipe(app.gulp.dest(app.path.build.script))
        .pipe(app.plugins.browserSync.stream())
}
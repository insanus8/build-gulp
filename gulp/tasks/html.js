import fileInclude from 'gulp-file-include'
import version from 'gulp-version-number'

export const html = () => {
    return app.gulp.src(app.path.src.html)
        .pipe(fileInclude())
        .pipe(app.plugins.replace(/@img\//g, 'img/'))
        .pipe(app.plugins.replace(/@style\//g, 'style/'))
        .pipe(app.plugins.replace(/@js\//g, 'js/'))
        .pipe(
            app.plugins.if(
                app.isBuild,
                version({
                    'value': '%DT%',
                    'append': {
                        'key': '_v',
                        'cover': 0,
                        'to': [
                            'css',
                            'js'
                        ],
                    },
                    'output': {
                        'file': 'gulp/version.json'
                    }
                })
            )
        )
        .pipe(app.gulp.dest(app.path.build.html))
        .pipe(app.plugins.browserSync.stream())
}
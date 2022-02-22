import dartSass from 'sass';
import gulpSass from 'gulp-sass';
import webpcss from 'gulp-webpcss'
import autoprefixer from 'gulp-autoprefixer'
import groupMedia from 'gulp-group-css-media-queries'

const sass = gulpSass(dartSass)

export const style = () => {
    return app.gulp.src(app.path.src.style, { sourcemaps: app.isDev })
        .pipe(app.plugins.replace(/@img\//g, '../img/'))
        .pipe(sass({
            outputStyle: 'expanded'
        }))
        .pipe(
            app.plugins.if(
                app.isBuild,
                groupMedia()
            )
        )
        .pipe(
            app.plugins.if(
                app.isBuild,
                webpcss(
                    {
                        webpClass: '.webp',
                        noWebpClass: '.no-webp',
                    }
                )
            )
        )
        .pipe(
            app.plugins.if(
                app.isBuild,
                autoprefixer({
                    grid: true,
                    overrideBrowserslist: ["last 3 versions"],
                    cascade: true,
                })
            )
        )
        .pipe(app.gulp.dest(app.path.build.style))
        .pipe(app.plugins.browserSync.stream())
}
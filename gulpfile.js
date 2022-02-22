import gulp from 'gulp'

import { path } from './gulp/config/path.js'

import { plugins } from './gulp/config/plugins.js'

import { html } from './gulp/tasks/html.js'
import { style } from './gulp/tasks/style.js'
import { script } from './gulp/tasks/script.js'
import { img } from './gulp/tasks/img.js'
import { otfToTtf, ttfToWoff } from './gulp/tasks/fonts.js'

import { copy } from './gulp/tasks/copy.js'
import { reset } from './gulp/tasks/reset.js'
import { server } from './gulp/tasks/server.js'
import { zip } from './gulp/tasks/zip.js'

global.app = {
    isBuild: process.argv.includes('--build'),
    isDev: !process.argv.includes('--build'),
    gulp,
    path,
    plugins,
}

function watcher() {
    gulp.watch(path.watch.html, html)
    gulp.watch(path.watch.style, style)
    gulp.watch(path.watch.script, script)
    gulp.watch(path.watch.img, img)
    gulp.watch(path.watch.assets, copy)
}

const fonts = gulp.series( otfToTtf, ttfToWoff )

const mainTasks = gulp.series( fonts, gulp.parallel(copy, html, style, script, img) )

const dev = gulp.series(reset, mainTasks, gulp.parallel(watcher, server))
const build = gulp.series(reset, mainTasks)
const deployZip = gulp.series(reset, mainTasks, zip)

export { dev }
export { build }
export { deployZip }

gulp.task('default', dev)
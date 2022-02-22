import * as nodePath from 'path'

const rootFolder = nodePath.basename(nodePath.resolve())
const buildFolder = './dist'
const srcFolder = './src'

export const path = {
    build: {
        img: `${buildFolder}/img/`,
        script: `${buildFolder}/js/`,
        style: `${buildFolder}/style/`,
        html: `${buildFolder}/`,
        fonts: `${buildFolder}/fonts/`,
        assets: `${buildFolder}/assets/`,
    },
    src: {
        img: `${srcFolder}/img/**/*.{jpg, jpeg, png}`,
        svg: `${srcFolder}/img/**/*.svg`,
        script: `${srcFolder}/js/script.js`,
        style: `${srcFolder}/style/style.sass`,
        html: `${srcFolder}/*.html`,
        assets: `${srcFolder}/assets/**/*.*`,
    },
    watch: {
        img: `${srcFolder}/**/*.{jpg, jpeg, png, svg, ico}`,
        script: `${srcFolder}/**/*.js`,
        style: `${srcFolder}/**/*.sass`,
        html: `${srcFolder}/**/*.html`,
        assets: `${srcFolder}/assets/**/*.*`,
    },
    clean: buildFolder,
    buildFolder,
    srcFolder,
    rootFolder,
}
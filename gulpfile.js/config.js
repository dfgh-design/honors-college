module.exports = {
    webserver: {
        target: "vcu-honors-college.dev:3001",
        host: "vcu-honors-college.dev"
    },
    pipeline: {
        html: {
            src: "source/**/*.html",
            dest: "public"
        },
        fonts: {
            src: "source/fonts/**/*",
            dest: "public/fonts"
        },
        images: {
            src: "source/images/**/*.{png,gif,jpg}",
            dest: "public/images"
        },
        svg: {
            src: "source/images/**/*.svg",
            dest: "public/images"
        }
    },
    scripts: {
        dir: {
            src: "source/scripts",
            dest: "public/scripts"
        },
        source: {
            header: "hc_header_scripts.js",
            theme: "hc_scripts.js"
        }
    },
    styles: {
        src: "source/styles",
        dest: "public/styles"
    },
    watch: {
        php: "**/*.php",
        scripts: "source/scripts/**/*.js",
        styles: "source/styles/**/*.scss",
        fonts: "source/fonts/**/*",
        images: "source/images/**/*.{png,gif,jpg}",
        svg: "source/images/**/*.svg",
        public: "public/**/*",
        html: 'source/**/*.html'
    }
}

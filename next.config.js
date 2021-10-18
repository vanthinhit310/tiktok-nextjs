const path = require("path");

module.exports = {
    reactStrictMode: true,
    eslint: {},
    typescript: {
        ignoreBuildErrors: true
    },
    compress: true,
    sassOptions: {
        includePaths: [path.join(__dirname, "styles")]
    },
    devIndicators: {
        autoPrerender: false
    }
};

const path = require("path");

module.exports = {
    reactStrictMode: true,
    eslint: {
        ignoreDuringBuilds: true
    },
    generateEtags: false,
    typescript: {
        ignoreBuildErrors: true
    },
    compress: false,
    sassOptions: {
        includePaths: [path.join(__dirname, "styles")]
    },
    devIndicators: {
        autoPrerender: false
    }
};

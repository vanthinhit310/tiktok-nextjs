const path = require("path");

module.exports = {
    reactStrictMode: true,
    eslint: {},
    typescript: {
        ignoreBuildErrors: true
    },
    compress: false,
    sassOptions: {
        includePaths: [path.join(__dirname, "styles")]
    }
};

const { mergeWithCustomize, customizeObject } = require('webpack-merge');
const common = require('./webpack.common.js');

module.exports = mergeWithCustomize({
    
})(common, {
    mode: "development",
    devServer: {
        port: 3000,
        watchContentBase: true,
        historyApiFallback: true,
        open: true,
    },
    devtool: "inline-source-map",
})
const { mergeWithCustomize, customizeObject } = require('webpack-merge');
const common = require('./webpack.common.js');

module.exports = mergeWithCustomize({
    customizeObject: customizeObject({
        'module.rules': "append"
    })
})(common, {
    mode: "development",
    module :{
        rules : [
            {
                test: /\.(png|jpeg|jpg|svg)$/i,
                use: 'file-loader',
            },
        ]
    },
    devServer: {
        port: 3000,
        watchContentBase: true,
        historyApiFallback: true,
        open: true,
    },
    devtool: "inline-source-map",
})
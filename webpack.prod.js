const HtmlMinimizerPlugin = require('html-minimizer-webpack-plugin')
const { mergeWithCustomize, customizeObject } = require('webpack-merge');
const common = require('./webpack.common.js');
const webpack = require('webpack')
const path = require('path')

module.exports = mergeWithCustomize({
    customizeObject: customizeObject({
        'plugins': 'append',
        'module.rules': "append"
    })
})(common, {
    mode: "production",
    plugins :[
        new webpack.web.JsonpTemplatePlugin(options => options.jsonpFunction),
    ],
    optimization: {
        minimizer: [
            new HtmlMinimizerPlugin({
                parallel: true,
                minimizerOptions: {
                    collapseWhitespace: true,
                },
            })
        ],
        runtimeChunk: "single",
        moduleIds: 'deterministic',
        splitChunks: {
            chunks: 'all',
            maxAsyncRequests: 30,
            maxInitialRequests: 30,
            enforceSizeThreshold: 50000,
            cacheGroups: {
                vendor: {
                    test: /[\\/]node_modules[\\/]/,
                    priority: -10,
                    reuseExistingChunk: true,
                    name: "vendors"
                },
                default: {
                    minChunks: 2,
                    priority: -20,
                    reuseExistingChunk: true
                }
            }
        }
    }
})
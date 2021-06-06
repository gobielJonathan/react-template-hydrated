const { mergeWithCustomize, customizeObject } = require('webpack-merge');
const HtmlMinimizerPlugin = require("html-minimizer-webpack-plugin");
const common = require('./webpack.common.js');

module.exports = mergeWithCustomize({
    customizeObject: customizeObject({
        'plugins': 'append',
        'module.rules': "append"
    })
})(common, {
    mode: "production",
    module: {
        rules: [
            {
                test: /\.(png|jpeg|jpg|svg)$/i,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: '[name].[ext]',
                            outputPath: './static/media/',
                        }
                    }
                ],
            },
        ]
    },
    plugins: [
        new HtmlMinimizerPlugin()
    ],
    optimization: {
        runtimeChunk: "single",
        moduleIds: 'deterministic',
        splitChunks: {
            chunks: 'all',
            minSize: 20000,
            minRemainingSize: 0,
            minChunks: 1,
            hidePathInfo: true,
            maxAsyncRequests: 30,
            maxInitialRequests: 30,
            enforceSizeThreshold: 50000,
            automaticNameDelimiter: "~",
            cacheGroups: {
                vendor: {
                    test: /[\\/]node_modules[\\/]/,
                    priority: -10,
                    reuseExistingChunk: true,
                    name(module, chunks, cacheGroupKey) {
                        const allChunksNames = chunks.map((item) => item.name).join('~');
                        return `${cacheGroupKey}-${allChunksNames}`;
                    },
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
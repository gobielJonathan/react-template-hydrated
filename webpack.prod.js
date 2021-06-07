const { mergeWithCustomize, customizeObject } = require('webpack-merge');
const { BundleAnalyzerPlugin } = require("webpack-bundle-analyzer");

const HtmlMinimizerPlugin = require("html-minimizer-webpack-plugin");
const CopyPlugin = require("copy-webpack-plugin");
const common = require('./webpack.common.js');
const path = require('path')
const WorkboxPlugin = require("workbox-webpack-plugin");


module.exports = mergeWithCustomize({
    customizeObject: customizeObject({
        'plugins': 'append',
        'module.rules': "append"
    })
})(common, {
    mode: "production",
    plugins: [
        new BundleAnalyzerPlugin({
            analyzerMode: "static",
            reportFilename: "webpack-report.html",
            openAnalyzer: false,
        }),
        new WorkboxPlugin.GenerateSW({
            cleanupOutdatedCaches: true,
            clientsClaim: true,
            skipWaiting: true,
        }),
        new HtmlMinimizerPlugin(),
        new CopyPlugin({
            patterns: [
                {
                    from: 'public',
                    filter: (resourcePath) => {
                        const filename = path.basename(resourcePath)
                        return filename != 'index.html'
                    }
                },
            ],
        })
    ],
    optimization: {
        runtimeChunk: true,
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
                        // const packageName = module.context.match(/[\\/]node_modules[\\/](.*?)([\\/]|$)/)[1];
                        const allChunksNames = chunks.map((item) => item.name).join('~');
                        return `${cacheGroupKey}_${allChunksNames}`;
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
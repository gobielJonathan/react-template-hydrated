const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const HtmlMinimizerPlugin = require("html-minimizer-webpack-plugin");

const path = require('path')

const BUILD_FOLDER = 'dist'

module.exports = {
    mode: "production",
    entry: './src/index.js',
    output: {
        filename: 'bundle.[contenthash].js',
        clean: true
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)?$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader"
                }
            },
            {
                test: /\.css$/,
                use: [
                    {
                        loader: MiniCssExtractPlugin.loader,
                        options: {
                            publicPath: "css"
                        }
                    },
                    {
                        loader: 'css-loader',
                        options: {
                            modules: {
                                exportOnlyLocals: true,
                                localIdentName: '[contenthash]'
                            },
                            sourceMap: false,
                        }
                    }]
            }, {
                test: /\.(png|jpeg|jpg|svg)$/,
                use: [
                    {
                        loader: "file-loader",
                        options: {
                            publicPath: 'assets'
                        }
                    }
                ]
            }
        ]
    },
    resolve: {
        extensions: ['.js', '.jsx', '.css', '.scss']
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './public/index.html',
        }),
        new MiniCssExtractPlugin({
            filename: "/[contenthash].css",
            chunkFilename: '/[id].css'
        }),
        new CssMinimizerPlugin(),
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
            cacheGroups : {
                vendor : {
                    test  : /[\\/]node_modules[\\/]/,
                    priority : -10,
                    reuseExistingChunk : true,
                    name(module, chunks, cacheGroupKey) {
                        const moduleFileName = module
                        .identifier()
                        .split('/')
                        .reduceRight((item) => item);
                      const allChunksNames = chunks.map((item) => item.name).join('~');
                      return `${cacheGroupKey}-${allChunksNames}-${moduleFileName}`;
                    }
                },
                default : {
                    minChunks : 2, 
                    priority : -20,
                    reuseExistingChunk : true
                }
            }
        }
    }
}
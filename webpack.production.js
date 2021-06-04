const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const path = require('path')

module.exports = {
    mode: "production",
    entry: './src/index.js',
    output: {
        filename: 'bundle.[contenthash].js',
        path: path.join(__dirname, 'dist/static/js'),
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
                use: [MiniCssExtractPlugin.loader, {
                    loader: 'css-loader',
                    options: {
                        modules: {
                            exportOnlyLocals: true,
                            localIdentName : '[contenthash]'
                        },
                        sourceMap: true
                    }
                }]
            }, {
                test: /\.(png|jpeg|jpg|svg)$/,
                use: [
                    {
                        loader : "file-loader",
                        options : { 
                            publicPath : 'assets'
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
        new MiniCssExtractPlugin(),
        new CssMinimizerPlugin()
    ],
    optimization: {
        runtimeChunk: "single",
        moduleIds: 'deterministic',
        splitChunks: {
            chunks: 'all',
            maxInitialRequests: 10,
            maxAsyncRequests: 10,
            minSize: 0,
            cacheGroups: {
                vendor: {
                reuseExistingChunk: true,
                    test: /[\\/]node_modules[\\/]/,
                    name(module) {
                        const packageName = module.context.match(/[\\/]node_modules[\\/](.*?)([\\/]|$)/)[1];

                        // npm package names are URL-safe, but some servers don't like @ symbols
                        return `npm.${packageName.replace('@', '')}`;
                    }
                }
            }
        }
    }
}
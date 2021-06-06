const CssMinimizerPlugin = require('css-minimizer-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const WorkboxPlugin = require("workbox-webpack-plugin")
const path = require('path')
const IsProduction = process.env.NODE_ENV == 'production'

module.exports = {
    entry: './src/index.js',
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'dist'),
        publicPath : "",
        clean: true
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/i,
                exclude: /node_modules/,
                use: 'babel-loader'
            },
            {
                test: /\.css$/,
                use: [MiniCssExtractPlugin.loader, {
                    loader: 'css-loader',
                    options: {
                        modules: {
                            localIdentName: 'css-[contenthash]',
                        },
                    },
                }]
            },
        ]
    },
    resolve: {
        extensions: ['.js', '.jsx'],
        alias: {
            '@component': path.resolve(__dirname, 'src/components/'),
            '@pages': path.resolve(__dirname, 'src/pages/'),
            '@context': path.resolve(__dirname, 'src/context/'),
            '@hooks': path.resolve(__dirname, 'src/hooks/'),
            '@api': path.resolve(__dirname, 'src/api/'),
            '@assets': path.resolve(__dirname, 'src/assets/'),
        }
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './public/index.html',
        }),
        new MiniCssExtractPlugin({
            filename: './static/css/[contenthash].css'
        }),
        new CssMinimizerPlugin(),
        new WorkboxPlugin.GenerateSW({
            cleanupOutdatedCaches: true,
            mode : IsProduction ? "production" : "development",
            clientsClaim : true,
            skipWaiting: true,
        })
    ],
}
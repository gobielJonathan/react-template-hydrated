const CssMinimizerPlugin = require('css-minimizer-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const path = require('path')
const webpack = require('webpack')

module.exports = {
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename : "./static/js/[name].bundle.js",
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
            {
                test: /\.(png|jpeg|jpg|svg)$/i,
                use: [
                    {
                        loader: 'url-loader',
                        // options: {
                        //     name: '[contenthash].[ext]',
                        //     outputPath: './static/media/',
                        // }
                    }
                ],
            },
        ]
    },
    resolve: {
        extensions: ['.js', '.jsx'],
        alias: {
            '@component': path.join(__dirname, 'src/components/'),
            '@pages': path.join(__dirname, 'src/pages/'),
            '@context': path.join(__dirname, 'src/context/'),
            '@hooks': path.join(__dirname, 'src/hooks/'),
            '@api': path.join(__dirname, 'src/api/'),
            '@assets': path.join(__dirname, 'src/assets/'),
        }
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './public/index.html',
            minify : {
                collapseWhitespace: true, 
                removeComments: true,
            }
        }),
        new MiniCssExtractPlugin({
            filename: './static/css/[contenthash].css'
        }),
        new CssMinimizerPlugin(),
        new webpack.ProvidePlugin({
            "React": "react",
         }),
    ],
}
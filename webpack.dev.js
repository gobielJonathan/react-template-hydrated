const { mergeWithCustomize, customizeObject } = require('webpack-merge');
const common = require('./webpack.common.js');
const path = require('path')

module.exports = mergeWithCustomize({
    customizeObject: customizeObject({
        'module.rules': "append",
        'resolve' : "append"
    })
})(common, {
    mode: "development",
    resolve : {
        alias : {
            '@component' : path.resolve(__dirname, 'src/components/'),
            '@pages' : path.resolve(__dirname, 'src/pages/'),
            '@context' : path.resolve(__dirname, 'src/context/'),
            '@hooks' : path.resolve(__dirname, 'src/hooks/'),
            '@api' : path.resolve(__dirname, 'src/api/'),
            '@assets' : path.resolve(__dirname, 'src/assets/'),
        }
    },
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
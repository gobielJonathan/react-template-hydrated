const { mergeWithCustomize, customizeObject } = require('webpack-merge');
const LoadablePlugin = require('@loadable/webpack-plugin')

const prod = require('./webpack.prod.js');

module.exports = mergeWithCustomize({
    customizeObject: customizeObject({
        'plugins' : 'append'
    })
})(prod, {
    plugins : [
        new LoadablePlugin(),
    ]
})
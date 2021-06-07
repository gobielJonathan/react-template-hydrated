const { mergeWithCustomize, customizeObject } = require('webpack-merge');
const prod = require('./webpack.prod.js');

module.exports = mergeWithCustomize({
    customizeObject: customizeObject({
    })
})(prod, {
})
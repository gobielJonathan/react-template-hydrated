module.exports = {
    "presets": [
        "@babel/preset-env",
        ["@babel/preset-react", {'runtime' : 'automatic', 'importSource': "@emotion/react"}]
    ],
    "plugins": ["@babel/plugin-transform-async-to-generator"]
}
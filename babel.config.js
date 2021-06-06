module.exports = {
    "presets": [
        "@babel/preset-env",
        ["@babel/preset-react", { 'runtime': 'automatic', 'importSource': "@emotion/react" }]
    ],
    "plugins": [
        "@babel/plugin-transform-async-to-generator",
        // [ "babel-plugin-webpack-alias", {
        //     "config": "./webpack.prod.js"
        //   }
        // ],
        [
            "@babel/plugin-transform-runtime",
            {
                "absoluteRuntime": false,
                "corejs": false,
                "helpers": true,
                "regenerator": true,
                "version": "7.0.0-beta.0"
            }
        ],
    ]
}
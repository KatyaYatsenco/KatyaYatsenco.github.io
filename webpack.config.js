module.exports = {
    entry: "./js/main.js",
    output: {
        path: __dirname,
        filename: "script.js"
    },
    module: {
        loaders: [
            { test: /\.css$/, loader: "style!css" }
        ]
    }
};

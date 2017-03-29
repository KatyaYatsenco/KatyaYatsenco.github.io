const path = require("path");
const webpack = require("webpack");
const ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
    devtool: "source-map",
    entry: {
        main: "./script.js"
    },
    output: {
        path: path.join(__dirname, "build"),
        filename: "[name].js"
    },
    module: {
        rules: [
            {
                test: /\.(js)$/,
                exclude: /node_modules/,
                use: [
                    "babel-loader"
                ]
            },
            {
                test: /\.css$/,
                exclude: /node_modules/,
                loader: "css-loader"
            },
            {
                test: /\.scss$/,
                loader: ExtractTextPlugin.extract({
                    fallbackLoader: "style-loader",
                    loader: "css-loader!resolve-url-loader!sass-loader"
                })
            },
            {
                test: /\.(jpe?g|png|gif|svg)$/i, loader: "file-loader?name=[name].[ext]&publicPath=assets/foo/&outputPath=images/"
            },
            {
                test: /\.(ttf)$/i, loader: "file-loader?name=fonts/[name].[ext]"
            }

        ]
    },
    plugins: [
        new ExtractTextPlugin({filename: "[name].css", allChunks: true})
    ]
};


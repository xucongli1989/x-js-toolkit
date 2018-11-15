const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require("webpack")
const cleanWebpackPlugin = require('clean-webpack-plugin');
const config = {
    entry: "./src/index.ts",
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'index.js',
        libraryTarget: "umd"
    },
    resolve: {
        extensions: ['.ts', '.js', '.json']
    },
    devtool: "source-map",
    module: {
        rules: [
            {
                test: /\.[jt]sx?$/,
                exclude: /node_modules/,
                loader: "babel-loader"
            }
        ]
    },
    plugins: [
        new cleanWebpackPlugin(["dist"]),
        new HtmlWebpackPlugin({
            template: './src/index.html'
        }),
        new webpack.HotModuleReplacementPlugin()
    ],
    devServer: {
        inline: true,
        open: true,
        contentBase: path.join(__dirname, "./dist")
    }
}
module.exports = config;
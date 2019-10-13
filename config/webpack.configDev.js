const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
    mode: 'development',
    entry:{
        main: './src/app.js',
    },
    output:{
        filename: 'js/[name].js',
        path: path.resolve(__dirname, '../docs'),
    },
    devServer:{
        open: true,
    },
    module:{
        rules:[
            {
                test: /\.(scss|sass)$/i,
                use: [
                    MiniCssExtractPlugin.loader,
                    'css-loader',
                    'sass-loader',
                ]
            },
        ]
    },
    plugins:[
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            template: './src/assets/template/template.html',
            filename: 'index.html',
        }),
        new MiniCssExtractPlugin({
            filename: '[name].css',
        }),
    ],
}
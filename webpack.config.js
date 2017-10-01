const path = require('path')
const merge = require('webpack-merge')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin');
const devServer = require('./webpack/dev-server')
const css = require('./webpack/css')
const extractCSS = require('./webpack/css.extract')

const common = merge([
     {
        entry: [
            './app/css/reset.css',
            './app/css/main.css',
			'./app/js/index.js'
        ],
        output: {
            filename: 'js/bundle.js',
            path: path.resolve(__dirname, 'build')
        },
        module: {
            rules: [
                {
                    test: /\.js$/,
                    use: ['babel-loader'], 
                    exclude: /node_modules/
                }
            ]
        },
        plugins: [
            new HtmlWebpackPlugin({
                filename: 'index.html',
                template: 'app/index.html'
            }),
            new CopyWebpackPlugin([
                {
                    from: './app/model/',
                    to: './model/'
                }
            ])
        ]
    }
])

module.exports = function (env) {
    if (env == 'prod') {
        return merge([
            common,
            extractCSS()
        ])
    } else {
        return merge([
            common,
            devServer(),
            css()
         ])
    }
};
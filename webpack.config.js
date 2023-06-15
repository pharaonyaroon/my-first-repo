/**
 * 开启wbpack之旅
 * 
    我们可以直接使用npm进行全局安装
    npm install webpack -g

    在常规项目中把webpack依赖加入到package.json
    npm init npm install webpack --save

    webpak命令行常见使用的操作

    启动
    webpack

    如果你想当改变一个文件而让webpack实时编译
    webpack --watch

    如果你想把默认的配置文件webpack.config.js改成自定义文件
    webpack --config customconfig.js

    常用模块
    $ npm install style-loader css-loader image-webpack-loader webpack --save-dev

 */


// webpack.config.js
var path = require('path')
var webpack = require('webpack');

module.exports = {
    entry: ['./src/webpack'],
    output: {
        path: path.join(__dirname, 'dist'),
        filename: 'bundleJs.js'
    },
    plugins: [
        new webpack.optimize.UglifyJsPlugin({
            compressor: {
                warnings: false,
            },
        }),
        new webpack.ProvidePlugin({
            $: "jquery",
            jQuery: "jquery",
            "window.jQuery": "jquery"
        }),
    ],
    module: {
        loaders: [
            { test: /\.css$/, loaders: ['style', 'css'] },
            { test: /\.(png|jpg)$/, loaders: ['file?hash=sha512&digest=hex&name=[hash].[ext]', 'image-webpack?bypassOnDebug&optimizationLevel=7&interlaced=false'] },
            { test: /\.(eot|woff|woff2|svg|ttf)([\?]?.*)$/, loader: "file-loader" },
        ]
    }
}
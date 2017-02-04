/*
 启动服务器  webpack-dev-server
 自动打包  webpack --watch
 */
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var path = require("path");
module.exports = {
    devtool: 'eval-source-map',//配置生成Source Maps，选择合适的选项
    // devtool: 'source-map',//配置生成Source Maps，选择合适的选项
    //  devtool: 'cheap-module-source-map',//配置生成Source Maps，选择合适的选项
    entry: {
        // "main" : path.resolve(__dirname,"js/public/main.js"),
        // "index" : [path.resolve(__dirname,'js/index.js')]
        // "main" : path.resolve(__dirname,"js/public/main.js"),
        //首页
        "index": path.resolve(__dirname, "js/index.js"),
        //氦氪云
        "HKyunIndex": path.resolve(__dirname, "js/HKyun/index.js"),
        "HKyunTerrace": path.resolve(__dirname, "js/HKyun/terrace.js"),
        "HKyunMarketing": path.resolve(__dirname, "js/HKyun/marketing.js"),
        "HKyunDeviceInfo": path.resolve(__dirname, "js/HKyun/device-info.js"),
        "HKyunSoftware": path.resolve(__dirname, "js/HKyun/software.js"),
        //智能硬件方案
        hardwareInxed : path.resolve(__dirname, "js/hardware/index.js"),
        hardwareYun : path.resolve(__dirname, "js/hardware/yun.js"),
    },
    output: {
        path: __dirname + '/build',
        filename: '[name].js'
    },
    module: {//在配置文件里添加JSON loader
        loaders: [
            // {test: /\.json$/,loader: "json"},
            //.less文件解析
            { test: /\.less$/, loader: 'style-loader!css-loader!less-loader' },
            { test: /\.png$/, loader: "url-loader?mimetype=image/png" },
        ]
    },
    devServer: {
        port: "8888",
        contentBase: path.resolve(__dirname, ""),//本地服务器所加载的页面所在的目录
        colors: true,//终端中输出结果为彩色
        inline: true//实时刷新
    },
    plugins: [
        new HtmlWebpackPlugin({
            filename: __dirname + '/html/index.html',
            template: __dirname + '/template/index.html',
            inject: 'head',
            chunks: ['index']
        }),
        new HtmlWebpackPlugin({
            filename: __dirname + '/html/HKyun/index.html',
            template: __dirname + '/template/HKyun/index.html',
            inject: 'head',
            chunks: ['HKyunIndex'],
            // hash:true
        }),
        new HtmlWebpackPlugin({
            filename: __dirname + '/html/HKyun/terrace.html',
            template: __dirname + '/template/HKyun/terrace.html',
            inject: 'head',
            chunks: ['HKyunTerrace'],
            // hash:true
        }),
        new HtmlWebpackPlugin({
            filename: __dirname + '/html/HKyun/marketing.html',
            template: __dirname + '/template/HKyun/marketing.html',
            inject: 'head',
            chunks: ['HKyunMarketing'],
            // hash:true
        }),
        new HtmlWebpackPlugin({
            filename: __dirname + '/html/HKyun/device-info.html',
            template: __dirname + '/template/HKyun/device-info.html',
            inject: 'head',
            chunks: ['HKyunDeviceInfo'],
            // hash:true
        }),
        new HtmlWebpackPlugin({
            filename: __dirname + '/html/HKyun/software.html',
            template: __dirname + '/template/HKyun/software.html',
            inject: 'head',
            chunks: ['HKyunSoftware'],
            // hash:true
        }),
        new HtmlWebpackPlugin({
            filename: __dirname + '/html/hardware/index.html',
            template: __dirname + '/template/hardware/index.html',
            inject: 'head',
            chunks: ['hardwareInxed'],
            // hash:true
        }),
        new HtmlWebpackPlugin({
            filename: __dirname + '/html/hardware/yun.html',
            template: __dirname + '/template/hardware/yun.html',
            inject: 'head',
            chunks: ['hardwareYun'],
            // hash:true
        }),
    ]
} 
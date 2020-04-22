const path = require('path');
const webpack = require('webpack')
    // 插件把打包好的 bundle.js自动添加到 index.html上
const HtmlWebpackPlugin = require('html-webpack-plugin')
const VueLoaderPlugin = require('vue-loader/lib/plugin')

module.exports = {
    entry: path.join(__dirname, './main.js'),
    output: {
        path: path.join(__dirname, './dist'),
        filename: 'bundle.js'
    },
    module: { //这个节点，用于配置所有的第三方模块加载器
        rules: [ //所有第三方模块的匹配规则  调用loader顺序：从右到左
            { test: /\.css$/, use: ['style-loader', 'css-loader'] }, //配置处理，css文件的第三方loader规则
            //匹配.css结尾的文件  给后面的loader处理；  
            { test: /\.less$/, use: ['style-loader', 'css-loader', 'less-loader'] }, //配置less第三方loader规则
            {
                test: /\.(png|svg|jpg|gif|woff|woff2|webp|svg|eot|ttf|jpeg)$/,
                use: "url-loader"
                    // use: "url-loader?limit=1024&name=[path][name].[ext]"
            },
            {
                test: /\.(svg|ttf|eot|woff|woff2)$/,
                use: "url-loader"
            },

            { test: /\.js$/, use: 'babel-loader', exclude: /node_modules/ },
            { test: /\.vue$/, use: 'vue-loader' }

        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.join(__dirname, './index.html'), // 指定模板页面
            filename: 'index.html' // 指定生成的页面名称
        }),
        new VueLoaderPlugin()
    ],
    resolve: {
        alias: {
            // vue$: "./node_modules/vue/dist/vue.js"
        }
    }
};
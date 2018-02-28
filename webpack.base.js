const path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');

 module.exports = {
     /**
      * 入口
      */
     entry: {
         app: './src/index.js'
       },
     /**
      * 插件
      */
   plugins: [
        new CleanWebpackPlugin(['dist']),
         new HtmlWebpackPlugin({
               title: 'Production'
    })
  ],
     /**
      * 输出
      */
  output: {
         filename: 'bundle.js',
             path: path.resolve(__dirname, 'dist')
       },
     module: {
         rules: [
             {
                 test: /\.css$/,
                 exclude:/node_modules/,
                 use: [
                     {
                         loader: "style-loader"
                     }, {
                         loader: "css-loader",
                         options: {
                             modules: true, // 指定启用css modules
                             localIdentName: '[name]_[local]_[hash:base64:5]' // 指定css的类名格式
                         }
                     },
                 ],
             },
             {
                 test: /\.css$/,
                 include:/node_modules/,
                 use: [
                     {
                         loader: "style-loader"
                     }, {
                         loader: "css-loader",
                     },
                 ],
             },
             {
                 test: /\.less/,
                 use: [
                     {
                         loader: "style-loader"
                     },
                     {
                         loader: "css-loader",
                     },
                     {
                         loader:"less-loader"
                     }
                 ],
             },
             {
                 test: /\.(png|svg|jpg|gif)$/,
                 use: [
                     'file-loader'
                 ]},
             {
                 test:/\.js$/,
                 exclude: /node_modules/,
                 use:[
                     'babel-loader'
                 ],
             }
         ]
     },

     /**
      * 设置模块别名
      */
     resolve:{
         alias:{
             root:path.resolve(__dirname,'src')
         }
     },
 };

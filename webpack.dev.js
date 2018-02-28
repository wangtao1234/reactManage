const merge = require('webpack-merge');
const common = require('./webpack.base.js');

module.exports = merge(common,{
    devtool:'inline-source-map',
    /**
     * 热部署配置
     */
    devServer:{
        contentBase: './dist',
        hot: true
    }
});

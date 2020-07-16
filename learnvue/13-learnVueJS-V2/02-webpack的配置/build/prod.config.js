const UglifyjsWebpackPlugin = require('uglifyjs-webpack-plugin');
const webpackMerge = require('webpack-merge');
const baseConfig = require('./base.config.js')
module.exports = webpackMerge(baseConfig,{
     plugins:[
      new webpack.BannerPlugin('最终版权归fy所有'),
      // new HtmlWebpackPlugin({
      //  template: 'index.html'
      // }),
      //new UglifyjsWebpackPlugin(),//和声明那个不要重用
    ]
})
module.exports = {
 
}
// 生产时需要
//做一个映射，可直接使用webpack命令打包
const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin'); //通过 npm 安装
module.exports = {
	entry:'./src/main.js',
	output:{
		path:path.resolve(__dirname,'dist'),//绝对路径，动态获取路径
		filename:'bundle.js',
//		publicPath:'dist/'
	},
  	module: {
    	rules: [
        { 
      		test: /\.css$/, 
      		use:['style-loader','css-loader']
        },//css-loader只负责加载css文件
        //style-loader负责将样式添加到dom中，使用多个loader值是从右往左
   		//   { test: /\.ts$/, use: 'ts-loader' }
   		{
            test: /\.less$/,
            use: [{
                loader: "style-loader" // creates style nodes from JS strings
            }, {
                loader: "css-loader" // translates CSS into CommonJS
            }, {
                loader: "less-loader" // compiles Less to CSS
            }]
        },
        {
        	test: /\.(png|jpg|gif|jpeg)$/,
        	use: [{
            	loader: 'url-loader',
            //当加载的图片小于limit会将起加载成一个base64的字符串形式
            //大于时，用file-loader加载
            	options: {
              		limit: 13000,
              		//name:'img/[name].[Hash:7].[ext]'//有点问题
            	},

          		}]
      	},
      	{
      		test: /\.js$/,
      		exclude: /(node_modules|bower_components)/,
      		use: {
        		loader: 'babel-loader',
        		// options: {
          // 			presets: ['@babel/preset-env']
        		// }
      		}
    	},
    	{
    		test:/\.vue$/,
    		use:['vue-loader']
    	}
    	]
  	},
  	resolve: {
      alias: {
        // 别名
        vue$: "vue/dist/vue.esm.js", //加上这一句
      }
    },
}

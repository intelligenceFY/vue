module.exports = {
    devServer:{
    	contentBase:'./dist',//为哪一个文件夹提供本地服务，默认是根文件夹，我们这里要填./dist
    	inline: true,//页面实时刷新，即及时监听
    	// port:,//端口号默认8080
    	//historyApiFallback
    }

}//开发时需要的
A
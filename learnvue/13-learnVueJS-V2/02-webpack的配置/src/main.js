// 3.依赖css文件
require('./css/normal.css')
// console.log(ppp)
//4.依赖less文件
require('./css/special.less')
//5.使用Vue进行开发
import Vue from 'vue';
// import App from './vue/app';
import App from './vue/App.vue';
// const App = 
document.write('<button @click="btn2">按钮</button>');
// alert(5555);
const app = new Vue({
	el:'#app',
	template:'<App></App>',
	components:{
		App,
	},
	methods:{
		btn2(){
			alert("btn2")
		}
	}
	
})
	

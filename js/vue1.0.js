//let(定义变量)/const（定义常量） = var(无作用域的概念);
//编程范式：声明式编程
const app = new Vue({//创建一个vue对象
	el:"#app",//用于挂载要管理的元素
	data:{//定义数据，可以是自己定义的，也可以是请求过来的
		message:'你好，vue！' + new Date().toLocaleString(),
		name:'努力努力再努力'
	}
})
/*原生js（编程范式：命令式编程）
1.创建div，设置id属性，
2.定义一个变量叫message
3.将message放在前面div显示
*/
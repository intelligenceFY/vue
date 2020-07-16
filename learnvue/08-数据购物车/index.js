const app = new Vue({
	el:'#app',
	data:{
		books:[
		{
			id:1,
			name:'《算法导论》',
			date:'2006-9',
			price:85.00,
			count:1,
			bool:false,
		},
		{
			id:2,
			name:'《unix编程艺术》',
			date:'2006-9',
			price:85.00,
			count:1,
			bool:false,
		},
		{
			id:3,
			name:'《编程珠玑》',
			date:'2006-9',
			price:85.00,
			count:1,
			bool:false,
		},
		{
			id:4,
			name:'《算法导论》',
			date:'2006-9',
			price:85.00,
			count:1,
			bool:false,
		},
		],
		
	},
	methods:{
		increment(index){
			// if()
			this.books[index].count++;
			console.log(index)
		},
		decrement(index){
			this.books[index].count--;
			if(this.books[index].count<=1){
				this.books[index].bool = !this.books[index].bool;
				console.log(1)
			}//可直接在disabled后面加 item.count<=1
		},
		remove(index){
			this.books.splice(index,1);
		}
	},
	// methods:{
	// 	totalPrice(price){
	// 		return '￥'+price.toFixed(2);
	// 	}
	// },
	filters:{
		showPrice(price){
			return '￥'+price.toFixed(2);
		}
	},//过滤器
	computed:{
		totalPrice(){
			let sum = 0;
			// 1.
			// for(let i = 0;i<this.books.length;i++){
			// 	sum += this.books[i].count*this.books[i].price;
			// }
			// 2.
			// for(let i in this.books){
			// 	 sum += this.books[i].count*this.books[i].price;
			// 	console.log(i);
			// }
			// 3.
			// for(let item of this.books){
			// 	 sum += item.count*item.price;
			// }			
			// return sum;
			// 4.
			return this.books.reduce(function(preValue,book){
				return preValue + book.price *book.count
			},0)

		}
	}

})
//编程范式：命令式编程，声明式编程
//编程范式：面向对象编程（第一公民：对象）/函数式编程（第一公民：函数）
//fifter/map/reduce
// const a = [10,20,30,55,9,200]
// //1.取出所有小于100的数字
// let newa = [];
// for(let n of a){
// 	if(n<100){
// 		newa.push(n)
// 	}
// }
// //2.将所有小于100的数进行转化：全部*2
// let new2a = [];
// for(let n of a){
// 	new2a.push(n*2)
// }
// //3.将数组内所有数字相加得到最终结果
// let total = 0;
// for(let n of a){
// 	total += n;
// }
//filter中的回调函数有一个要求：必须返回一个boolean值
//true：当返回true时，函数内部会自动将这次回调的n加入到新的数组中
//false：函数内部会过滤这次的n
// const a = [10,20,30,55,9,200];

// let newa =a.filter(function(n){
// 	return n<100;
	
// })

//map函数的使用
//  const a = [10,20,30,55,9,200];
// let newa =a.map(function(n){
// 	return n*10;
	
// })
// console.log(newa);
//reduce函数的使用
//  const a = [10,20,30,55,9,200];
// let total =a.reduce(function(preValue,n){
// 	return preValue + n;
	
// },0)
//第一次preValue 0 n 10
//第二次 preValue 10 n 20
//第三次 preValue 30 n 30

// console.log(total);
const a = [10,20,30,55,9,200];
let total = a.filter(function(n){
	return n<100;
}).map(function(n){
	return n*2
}).reduce(function(preValue,n){
	return preValue + n;
},0)
console.log(total);
let total2 = a.filter(n => n <100).map(n => n*2).reduce((preValue,n) => preValue + n );
console.log(total2);
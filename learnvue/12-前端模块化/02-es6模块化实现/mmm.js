//1.导入的{}中定义的变量
import{flag,sum}from"./aaa.js";

if(flag){
	console.log('小明弟弟I地')
}
//2.直接导入export定义的变量
import{num1,height} from"./aaa.js";
console.log(num1+'小明')
//3.导入export的function
import {mul,person}from'./aaa.js';
console.log(mul(30,40))
const p = new person();
p.run();
// 4.import default
import add from'./aaa.js';
console.log(add);
// 5.统一全部导入
import * as aaa from './aaa.js'
console.log(aaa.height+'统一');
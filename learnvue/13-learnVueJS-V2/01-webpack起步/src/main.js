//使用commonjsde 模块化规范
const {add,mul} = require('./mathUtils.js')
console.log(add(20,30));
console.log(mul(10,2));
// const {name,age,height} =require('./info.js');
//使用es6模块化规范
import {age} from './info.js';
console.log(age);
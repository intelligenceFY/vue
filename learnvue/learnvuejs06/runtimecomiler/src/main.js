import Vue from 'vue' //import Vue from "../node_modules/vue/dist/vue.js";
import App from './App.vue' //组件

Vue.config.productionTip = false
const cpn = {
        template: '<div>{{message}}</div>',
        data() {
            return {
                message: '我是组件'
            }
        }
    }
    /* eslint-disable no-new */
new Vue({
    el: '#app',
    // components: { App }, //注册组件
    // template: '<App/>'
    render: function(createElement) {
        return createElement(cpn)
            //1.普通用法createElement('标签',{标签属性},[''])
            // return createElement('h2', { class: 'box' }, ['hellow world！', createElement('button', ['按钮'])]) //替换app
            //2.传入组件对象

    }
})
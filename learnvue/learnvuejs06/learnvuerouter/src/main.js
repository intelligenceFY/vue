import Vue from 'vue'
import App from './App'
import router from './router' //会自动找后面的index文件

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
    el: '#app',
    router, //router：router
    render: h => h(App)
})
console.log(router);
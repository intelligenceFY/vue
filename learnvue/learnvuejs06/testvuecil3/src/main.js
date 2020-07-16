import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

new Vue({
    render: h => h(App),
    //原形 render:()=>{
    // return h(App)
    //}
}).$mount('#app')
import Vue from 'vue'
import Vuex from 'vuex'

// 1.安装插件
Vue.use(Vuex)
    // 2.创建对象
const store = new Vuex.Store({
        state: {
            counter: 1000
        }, //保存状态
        mutations: {
            //定义方法
            increament(state) {
                state.counter++
            },
            decreament(state) {
                state.counter--
            }
        },
        actions: {

        },
        getters: {

        },
        modules: {

        }
    })
    // 3.导出
export default store
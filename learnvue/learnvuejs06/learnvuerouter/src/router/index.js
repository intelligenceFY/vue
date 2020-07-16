import Vue from 'vue'
import Router from 'vue-router' //导入router
// import HelloWorld from '@/components/HelloWorld'
// import Home from '../components/Home.vue'
// import About from '../components/About.vue'
// import User from '../components/User.vue'

import VueRouter from 'vue-router'
const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {
    return originalPush.call(this, location).catch(err => err)
}

const Home = () =>
    import ('../components/Home')
const HomeNews = () =>
    import ("../components/HomeNews")
const HomeMessage = () =>
    import ("../components/HomeMessage")
const About = () =>
    import ('../components/About')
const User = () =>
    import ('../components/User')
const Profile = () =>
    import ('../components/Profile')
    //1.通过Vue.use（插件），安装插件
Vue.use(VueRouter)
    // 2.创建路由对象
const routes = [{
        path: '',
        // redirect重定向
        redirect: '/home',
        component: Home,
        meta: {
            title: '首页'
        }
    },
    {
        path: '/home',
        component: Home,
        children: [
            // {
            //       path: '',
            //       redirect: 'news', //这里前面不要加/
            //       component: HomeNews
            //   },
            {
                path: 'news',
                component: HomeNews
            },
            {
                path: 'message',
                component: HomeMessage
            }
        ],
        meta: {
            title: '首页'
        }
    },
    {
        path: '/about',
        component: About,
        meta: {
            title: '关于'
        }
    },
    {
        path: '/user/:abc',
        component: User,
        meta: {
            title: '用户'
        }
    },
    {
        path: '/profile',
        component: Profile,
        meta: {
            title: '档案'
        }
    }
]
const router = new VueRouter({
        routes,
        linkActiveClass: 'active', //让点击的class为active
        mode: 'history', //改成router模式
    })
    //前置钩子
router.beforeEach((to, from, next) => {
        document.title = to.matched[0].meta.title
        next();
        // console.log('+++')
    })
    //后置钩子
router.afterEach((to, from) => {
        // console.log('---')
    })
    //导出，将router对象传入Vue实例
export default router
// export default new Router({
//     // 配置路由和组件之间的应用关系
//     // routes: [{
//     //     path: '/',
//     //     name: 'HelloWorld',
//     //     component: HelloWorld
//     // }]
//     // routes
// })
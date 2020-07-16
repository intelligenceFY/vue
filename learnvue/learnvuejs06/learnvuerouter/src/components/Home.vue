<template>
  <div>
    <h2>我是首页</h2>
    <p>我是首页内容</p>
    <router-link to="/home/news">新闻</router-link>
    <router-link to="/home/message">消息</router-link>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'Home',
  data () {
    return {
      path: '/home/news'
    }
  },
  created () {
    console.log('created');
  },
  destroyed () {
    console.log('destroyed')
  },
  activated () {
    console.log('A');
    this.$router.push(this.path)
  },//界面进入活跃时执行，否则执行后面那个函数
  // deactivated () {
  //   console.log('DA');
  //   this.path = this.$route.path
  // }
  beforeRouteLeave (to, from, next) {
    // 导航离开该组件的对应路由时调用
    // 可以访问组件实例 `this`
    console.log(this.$route.path);
    this.path = this.$route.path;
    next()
  }
}
</script>

<style>
</style>

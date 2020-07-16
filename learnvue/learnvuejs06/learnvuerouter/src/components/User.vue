<template>
  <div>
    <h2>我是用户</h2>
    <p>我是用户内容</p>
    <h2>{{userId}}</h2>
    <h2>{{$route.abc}}</h2>
    <button @click='btn()'>按钮</button>
  </div>
</template>

<script>
export default {
  name: 'User',
  computed: {//计算属性
    userId () {
      return this.$route.params.abc;//this.$route拿到活跃的那个路由的parameters参数
    }
  },
  methods: {
    btn () {
      console.log(this.$router);
      console.log(this.$route);
    }
  },
  // created () {
  //   console.log('created');
  // }

}
</script>

<style>
</style>

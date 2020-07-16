<template>
  <div id="app">
    <router-link to="/home"
                 tag="button"
                 active-class="active">首页</router-link>
    <router-link to="/about"
                 active-class="active">关于</router-link>
    <!-- <router-link v-bind:to="'/user/'+userId">用户</router-link> -->
    <!-- <router-link to="/profile">档案</router-link> -->
    <!-- <router-link :to="{path:'/profile',query:{name:'fy',age:18}}">档案</router-link> -->
    <!-- <button @click="homeClick()">home</button>
    <button @click="aboutClick()">about</button> -->
    <button @click="userClick()">user</button>
    <button @click="profileClick()">profile</button>
    <!-- 决定最外层的显示位置 -->
    <!-- <router-view></router-view> -->
    <!-- 换成keep-alive里面 -->
    <keep-alive>
      <router-view></router-view>
    </keep-alive>
  </div>
</template>

<script>
export default {
  name: 'App',
  data () {
    return {
      userId: 'zhangsan'
    }
  },
  methods: {
    userClick () {
      this.$router.push('/user/' + this.userId)
    },
    profileClick () {
      this.$router.push({
        path: '/profile',
        query: {
          name: 'kobe'
        }
      })
    }
  }

  // methods: {
  //   homeClick () {
  //     //通过代码的方式修改由vue-router
  //     //push=>pushState
  //     // this.$router.push('/home');
  //     this.$router.replace('/home');//无返回跳转选项
  //     console.log('homeclick')
  //   },
  //   aboutClick () {
  //     // this.$router.push('/about');
  //     this.$router.replace('/about');
  //     console.log('aboutclick')
  //   }
  // }
}

</script>

<style>
/* .router-link-active {
  color: red;
} */
.active {
  color: red;
}
</style>

<template>
  <div class="hello">
    <h2>{{$store.state.counter}}</h2>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  // props: {
  //   counter: Number
  // },//父子组件通信
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>

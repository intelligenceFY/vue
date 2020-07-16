<template>
  <div id="app">
    <h2>APP---------</h2>
    <h2>{{message}}</h2>
    <h2>{{$store.state.counter}}</h2>
    <button @click="add">+</button>
    <button @click="sub">-</button>
    <h2>Vuex---------</h2>
    <hello-world></hello-world>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld'
export default {
  name: 'App',
  data () {
    return {
      message: '我是App组件',
      // counter: 0
    }
  },
  components: {
    HelloWorld
  },
  methods: {
    add () {
      this.$store.commit('increament')
    },
    sub () {
      this.$store.commit('decreament')
    }
  }
}
</script>

<style>
</style>

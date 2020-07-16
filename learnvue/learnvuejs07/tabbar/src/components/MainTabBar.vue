<template>
  <tab-bar>
    <tab-bar-item path="/home">
      <img slot="item-icon"
           src="../assets/img/tabbar/Home_1.png"
           alt="">
      <img slot="item-icon-active"
           src="../assets/img/tabbar/Home_2.png"
           alt="">
      <div slot="item-text">首页</div>
    </tab-bar-item>
    <tab-bar-item path="/category">
      <img slot="item-icon"
           src="../assets/img/tabbar/Category1.png"
           alt="">
      <img slot="item-icon-active"
           src="../assets/img/tabbar/Category_2.png"
           alt="">
      <div slot="item-text">分类</div>
    </tab-bar-item>
    <tab-bar-item path="/cart">
      <img slot="item-icon"
           src="../assets/img/tabbar/Shopping Cart_1.png"
           alt="">
      <img slot="item-icon-active"
           src="../assets/img/tabbar/Shopping Cart_2.png"
           alt="">
      <div slot="item-text">购物车</div>
    </tab-bar-item>
    <tab-bar-item path="/profile">
      <img slot="item-icon"
           src="../assets/img/tabbar/Profile_1.png"
           alt="">
      <img slot="item-icon-active"
           src="../assets/img/tabbar/Profile_2.png"
           alt="">
      <div slot="item-text">我的</div>
    </tab-bar-item>
  </tab-bar>
</template>

<script>
import TabBar from './tabbar/TabBar.vue'
import TabBarItem from './tabbar/TabBarItem.vue'
export default {
  name: 'MainTabBar',
  components: {
    TabBar, TabBarItem
  }
}
</script>

<style>
</style>

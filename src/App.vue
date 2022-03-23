<template>
  <div id="app">
    <!-- 默认渲染为a标签 -->
    <!-- <router-link to="/home" tag="button" replace>首页</router-link>  
    <router-link to="/about" tag="button" replace>关于</router-link> -->
    <router-view/>
    <main-tab-bar></main-tab-bar>
  </div>
</template>

<script>
  import MainTabBar from '@/components/content/mainTabbar/MainTabBar.vue'

  export default {
    name: 'App',
    components: {
      MainTabBar
    }
  }
</script>

<style>
  @import "@/assets/css/base.css";
  
</style>

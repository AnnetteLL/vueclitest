<template>
  <div id="home">
    <nav-bar class="home-nav">
      <div slot="center">首页</div>
    </nav-bar>
  </div>
</template>

<script>
  import NavBar from '@/components/common/navbar/NavBar'
  import {getHomeMultidate} from '@/network/home.js'

  export default {
    components: {
      NavBar
    },
    created() {
      // 1.请求多个数据
      getHomeMultidate().then(res => {
        console.log(res);
      })
    }
  }
</script>

<style scoped>
  .home-nav {
    background-color: var(--color-tint);
    color: #fff;
  }
</style>
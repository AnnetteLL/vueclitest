<template>
  <tab-bar>
    <tab-bar-item v-for="item in itemList" :key="item.text" :path="item.url" activeColor="#0375ee">
      <img slot="item-icon" :src="require(`assets/img/tabbar/${item.icon}`)">
      <img slot="item-icon-active" :src="require(`assets/img/tabbar/${item.icon_active}`)">
      <div slot="item-text">{{item.text}}</div>
    </tab-bar-item>
  </tab-bar>
</template>

<script>
  import TabBar from '@/components/common/tabbar/TabBar.vue'
  import TabBarItem from '@/components/common/tabbar/TabBarItem.vue'

  export default {
    name: 'MainTabBar',
    components: {
      TabBar,
      TabBarItem
    },
    data(){
      return {
        itemList: [{
          icon: 'detailTab.png',
          icon_active: 'detailTab_active.png',
          text: '首页',
          url: '/home'
        },{
          icon: 'integralTab.png',
          icon_active: 'integralTab_active.png',
          text: '分类',
          url: '/category'
        },{
          icon: 'distributionTab.png',
          icon_active: 'distributionTab_active.png',
          text: '购物车',
          url: '/cart'
        },{
          icon: 'mineTab.png',
          icon_active: 'mineTab_active.png',
          text: '个人',
          url: '/profile'
        }]
      }
    },
    
  }
</script>

<style scoped>

</style>
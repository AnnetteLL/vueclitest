<template>
  <div class="tab-bar-item" @click="itemClick">
    <!-- 尽量不要再slot上做响应式，外套div -->
    <div v-if="isActive"><slot name="item-icon"></slot></div>
    <div v-else><slot name="item-icon-active"></slot></div>
    <div :style="activeStyle"><slot name="item-text"></slot></div>
    <!-- <slot></slot> -->
  </div>
</template>

<script>
  export default {
    name: 'TabbarItem',
    props: {
      path: String,
      activeColor: {
        type:String,
        default: 'blue',
      }
    },
    computed: {
      isActive() {
        return this.$route.path.indexOf(this.path)
      },
      activeStyle(){
        return this.isActive? {} : {color: this.activeColor}
      }
    },
    methods: {
      itemClick() {
        this.$router.replace(this.path);
      }
    }
  }
</script>

<style scoped>
  .tab-bar-item {
    flex: 1;
    text-align: center;
    height: 49px;
    font-size: 14px;
  }
  .tab-bar-item img {
    width: 22px;
    height: 22px;
    margin: 5px 0 2px;
    vertical-align: middle;
  }
</style>
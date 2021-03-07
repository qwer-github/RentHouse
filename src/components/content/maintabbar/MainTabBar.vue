<template>
  <tab-bar class="tab-bar" >
<!--               首页                              -->
    <tab-bar-item path="/home" activeColor="#42b983">
      <template v-slot:item-icon-active>
        <img src="../../../assets/img/tabbar/home_active.png" alt="">
      </template>
      <template v-slot:item-icon>
        <img src="../../../assets/img/tabbar/home.png" alt="">
      </template>
      <template v-slot:item-text>
        <div>首页</div>
      </template>
    </tab-bar-item>
<!--               分类                              -->
    <tab-bar-item path="/collect" activeColor="#42b983">
      <template v-slot:item-icon-active>
        <img src="../../../assets/img/tabbar/collect_active.png" alt="">
      </template>
      <template v-slot:item-icon>
        <img src="../../../assets/img/tabbar/collect.png" alt="">
      </template>
      <template v-slot:item-text>
        <div>收藏</div>
      </template>
    </tab-bar-item>
<!--               我的                              -->
    <tab-bar-item path="/melogin" activeColor="#42b983">
      <template v-slot:item-icon-active>
        <img src="../../../assets/img/tabbar/my_active.jpg" alt="">
      </template>
      <template v-slot:item-icon>
        <img src="../../../assets/img/tabbar/my.jpg" alt="">
      </template>
      <template v-slot:item-text>
        <div>我的</div>
      </template>
    </tab-bar-item>
  </tab-bar>
</template>

<script>
  import TabBar from "../../common/tabbar/TabBar";
  import TabBarItem from "../../common/tabbar/TabBarItem";
  export default {
    name: "MainTabBar",
    components:{
      TabBar,
      TabBarItem
    }
  }
</script>

<style scoped>
  .tab-bar-item img{
    height: 20px;
    /*width: 40px;*/
    margin-top: 3px;
    vertical-align: middle;
  }
</style>

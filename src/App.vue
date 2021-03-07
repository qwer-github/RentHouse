<template>
  <div id="app">
    <router-view></router-view>
    <main-tab-bar v-if="$route.meta.MainTabBarShow"></main-tab-bar>
  </div>
</template>

<script>
  import MainTabBar from "./components/content/maintabbar/MainTabBar";
  export default {
    name: "App",
    components:{
      MainTabBar
    }
  }
</script>

<style scoped>

</style>
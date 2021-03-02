<template>
  <div id="home">
    <nav-bar class="home-nav">
      <template v-slot:left></template>
<!--        搜索框-->
      <template v-slot:center><div><home-search></home-search></div></template>
    </nav-bar>
<!--    轮播图-->
<!--    <carsouel></carsouel>-->
<!--    房源推荐-->
    <tab-control :titles="['整 租','合 租',]" class="control"></tab-control>
<!--    房源列表-->
    <house-list></house-list>
  </div>
</template>

<script>
  //引用的一些组件
  import NavBar from "../../components/common/navbar/NavBar";
  import HomeSearch from "./showHome/HomeSearch";
  // import Carsouel from "./showHome/Carsouel";
  import TabControl from "../../components/content/tabControl/TabControl";
  import HouseList from "./showHome/HouseList";

  import {getHomeMultidata} from "../../../../111mail/src/network/home";

  export default {
    name: "Home",
    components:{
      NavBar,
      HomeSearch,
      // Carsouel,
      TabControl,
      HouseList
    },
    data(){
      return{
        // result:null,
        // banners:[],
        recommends:[],
      }
    },
    created() {
      //请求首页轮播图数据
      this.getHome()
    },
    methods:{
      getHome() {
        getHomeMultidata().then(res => {
          // console.log(res);
          this.banners =res.data.data.banner.list
          console.log(this.banners);
          //this.recommends =res.data.data.recommend
          this.recommends=res.data.data.recommend
          console.log(this.recommends);
        })
      }
    }
  }
</script>

<style scoped>
  #home{
    padding-top: 44px;
  }
  .home-nav{
    background-color: #42b983;
    color: white;
    position: fixed;
    left: 0;
    right: 0;
    top: 0;
    z-index: 9;
  }
  .control{
    position: sticky;
    top:44px;
    background-color:darkseagreen;
  }
</style>
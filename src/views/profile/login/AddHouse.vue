<template>
  <div class="addhouse">
    <div class="add">
      <span>我的房源</span>
      <el-button class="btn" @click="goto">添加房源</el-button>
    </div>
  </div>
</template>

<script>
  export default {
    name: "AddHouse",
    methods:{
      goto(){
        this.$router.replace('/add');
        console.log('监听跳转点击');
      }
    }
  }
</script>

<style scoped>
  .add{
    line-height: 35px;
    background-color: lightgreen;
    border-top: 3px solid green;
    border-bottom:3px solid grey ;
  }
.add  span{
  color: darkgoldenrod;
  text-align: left;
  border-bottom: 3px solid green;
}
  .btn{
    color: black;
    border: none;
    background-color: lightgreen;
    margin-left: 50px;
  }
</style>
<template>
  <div class="carsouel">
    <el-carousel :interval="4000" type="card" height="200px">
      <el-carousel-item v-for="item in 6" :key="item">
        <h2 :href="item">
        </h2>
      </el-carousel-item>
    </el-carousel>
  </div>
</template>

<script>
  export default {
    name: "Carsouel"
    // props: {
    //   banners: {
    //     type: Array,
    //     default() {
    //       return [];
    //     }
    //   }
    // }
  }
</script>

<style scoped>
  .carsouel{
    background-color: darkseagreen;
  }
  .el-carousel__item h3 {
    color: #475669;
    font-size: 14px;
    opacity: 0.75;
    line-height: 200px;
    margin: 0;
  }

  .el-carousel__item:nth-child(2n) {
    /*background-color: #99a9bf;*/
    background-image: url("../../../assets/img/house/one.jpg");
  }

  .el-carousel__item:nth-child(2n+1) {
    /*background-color: #d3dce6;*/
  background-image: url("../../../assets/img/house/two.jpg");
  }
</style>
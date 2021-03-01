<template>
  <div class="serach">
    <el-input placeholder="请输入区域、商圈、小区开始找房" v-model="serach" class="input-with-select">
      <el-button slot="append" icon="el-icon-search"></el-button>
    </el-input>
  </div>
</template>

<script>
  export default {
    name: "HomeSearch",
    data(){
      return{
        serach:'',
        select: ''
      }
    }

  }
</script>

<style scoped>
.serach{
  /*margin-left: 160px;*/
}
</style>
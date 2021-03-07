<template>
  <div class="loginheader">
    <a><img src="~assets/img/tabbar/my.jpg" alt=""></a>
<!--    <div>-->
<!--      <el-avatar icon="el-icon-user-solid"></el-avatar>-->
<!--    </div>-->
    <div class="info">
      姓名：
      <label>{{input1}}</label>
      <br>
      手机号：
      <label>{{input2}}</label>
    </div>
  </div>
</template>

<script>
  export default {
    name: "LoginHeader",
    data(){
      return{
       input1:"张三",
       input2:'12456465456'
      }
    },
    methods:{


    }
  }
</script>

<style scoped>

.loginheader{
  background-color: #42b983;

}
  .loginbef img{
    height: 60px;
    width: 60px;
    padding-left: 10px;
    margin-top: 15px;
  }
  .loginbef div{
    display: inline;
    flex: 1;
    font-size: 25px;
  }
.button {
  background-color: #42b983;
  border: none;
  color: white;
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  margin: 4px 2px;
  cursor: pointer;
}
.info{
  float: right;
}
</style>
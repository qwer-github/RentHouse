<template>
  <div class="loginbef">
    <a><img src="~assets/img/tabbar/my.jpg" alt=""></a>
<!--    <div v-if="!this.$store.state.user"-->
<!--         @click="gotolink">-->
<!--      <span class="button">登录/注册</span>-->
<!--    </div>-->
<!--&lt;!&ndash;  用户已登录,用户名为导航名&ndash;&gt;-->
<!--    <div v-else>-->
<!--      <span>{{this.$store.state.user}}</span>-->
<!--    </div>-->
    <div @click="gotolink"><span class="button">登陆/注册</span></div>
  </div>
</template>

<script>
  export default {
    name: "LoginBefore",
    methods:{
      gotolink(){
        // this.$router.replace('/LoginAfter')
        this.$router.replace('/melogin')
        console.log('监听跳转点击');
      }

    }
  }
</script>

<style scoped>
.loginbef{
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

</style>
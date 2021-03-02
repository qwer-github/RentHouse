<template>
  <div class="loging">
  <header>
    <div class="nav">
      <el-button icon="el-icon-back" class="close-btn" @click="back"></el-button>
<!--      <button class="close-btn" @click="back">返回</button>-->

    </div>
    <h1 style="text-align: center">欢迎登录</h1>
  </header>

  <div class="login-tab">
    　　<ul class="tab">
    　　　　<li>账号密码登录</li>
    　　</ul>
    　　<ul class="tab-content">
    　　　　<li>
    　　　　　　<div class="input-item tel-item">
    　　　　　　　　<input class="tel" placeholder="请输入手机号码">
    　　　　　　　　<span></span>
    　　　　　　　</div>
    　　　　　　<div class="input-item">
    　　　　　　　　<input type="text" class="tel" placeholder="请输入密码">
    　　　　　　</div>
    　　　　</li>
    　　</ul>
    <div class="pwd-z">
      <button class="code-btn" >忘记密码?</button>|
      <button class="code-btn" @click="registerclick">点击注册</button>
    </div>
    　　<div class="login">
    　　　　<button type="text" value="登录">登 录</button>
    　　</div>
  </div>
  </div>
</template>

<script>
  export default {
    name: "Loging",
    methods:{
      registerclick(){
        console.log('点击我注册哟');
        this.$router.replace('/register')
        // this.$router.back('/register')
      },
      back(){
        console.log('点击返回');
        this.$router.replace('/profile');
      }
    }
  }
</script>

<style scoped>
  .pwd-z{
    margin-left: 35%;
  }
  * {
    padding: 0;
    margin: 0;
    text-decoration: none;
    list-style: none;
  }
  .login{
    text-align: center;
  }

  header {
    display: block;
    height:10rem;
    padding-top: .2rem;
    background-size: 100% 100%;
    background-color:green;
  }
.close-btn{
  background-color: green;
  border: none;
  font-size: 30px;
  color: #171717;
}
  .nav{
    display: -webkit-box;
    display: -ms-flexbox;
     display: flex;
     -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    -webkit-box-pack: justify;
    -ms-flex-pack: justify;
    justify-content: space-between;
    height: .48rem;
    /*padding: 0 .4rem;*/
    padding-top: 20px;
  }

  .register-btn {
    display: block;
    width: 1.88rem;
    height: 0.48rem;
    line-height:0.48rem;
    border: 1px solid #fff;
    border-radius: 2px;
    text-align: center;
    color: grey;
    font-size: .28rem;
    margin-top: 1rem;
    padding: 0.4rem 0;
  }

  h1 {
    margin: 30px 0;
    padding: 2rem 1.56rem;
    font-size: 2rem;
    color: #fff;
  }
  .login-tab{
    margin-top: 2.32rem;
    background:#fff;
  }
  .tab{
    display: flex;
    height: 3rem;
    padding: 0 .4rem;
    border-bottom: 1px solid #ddd;
  }
  .tab li{
    position: relative;
    -webkit-box-flex:1;
    flex:1;
    height: 1rem;
    line-height: 1rem;
    margin:0 .4rem;
    text-align: center;
    font-size: 15px;
    -webkit-tap-highlight-color: transparent;
    color:darkseagreen;
  }
  .tab ::after{
    content:'';
    display: block;
    position: absolute;
    left:0;
    bottom:-1px;
    width:100%;
    height: 2px;
    background:grey;
    top:48px;
  }
  .tab-content li{
    margin: 3.5rem 0 0 2.5rem;
  }
  .input-item {
    box-sizing: border-box;
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    border-bottom: 1px solid #ddd;
    margin-right: 2.3rem;
  }
  .input-item input{
    -webkit-appearance: none;
    /*margin: 6px;*/
    border: none;
    outline: none;
    -webkit-box-flex: 1;
    flex: 1;
    padding: 0.5rem .14rem;
    font-size: .9rem;
    color: #171717;
    margin-top: 1rem;
  }
  .input-item:first-child{
    margin-bottom: 2.26rem;
  }
  .code-btn{
    margin: 0 10px 0 0;
    color: gainsboro;
    font-size: 15px;
    border: none;
    background: #fff;
  }
  .login{
    padding: 40px;
  }
  .login button{
    display: block;
    margin: 0 auto;
    width: 20rem;
    height:3rem;
    border: 0;
    background:darkseagreen;
    color: white;
    font-size: 18px;
  }
</style>
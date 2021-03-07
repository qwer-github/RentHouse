<template>
  <div class="loging">
  <header>
    <h1 style="text-align: center">欢迎登录</h1>
  </header>

  <div class="login-tab">
    　　<ul class="tab">
    　　　　<li>账号密码登录</li>
    　　</ul>
    <el-form ref="loginform" :model="loginform"
             label-width="100px" :rules="loginrules">
      <el-form-item label="手机号" prop="username">
        <el-input v-model="loginform.username"></el-input>
      </el-form-item>
      <el-form-item label="密码" prop="password">
        <el-input v-model="loginform.password"></el-input>
      </el-form-item>

<!--      忘记密码以及注册-->
      <el-form-item class="code-btn">
        <el-button type="text">忘记密码？</el-button>|
        <el-button  type="text" @click="registerclick">点击注册</el-button>
      </el-form-item>
<!--      登陆注册-->
      <el-form-item class="login">
        <el-button class="btn" type="primary" @click="gotologin()">登陆</el-button>
      </el-form-item>
    </el-form>
  </div>
  </div>
</template>

<script>
  import {request} from "../../network/request";
  import {userInfo} from "../../network/home";

  export default {
    name: "Loging",
    data(){
      return{
        loginform:{
          username:'',
          password:''
        },
        loginrules: {
          username: [
            { required: true, message: '请输入姓名', trigger: 'blur'  }
          ],
          password: [
            { required: true, message: '请输入密码', trigger: 'blur'  }
          ]
        },
        // logindata:[]
      }
    },
    methods:{
      registerclick(){
        console.log('点击我注册哟');
        this.$router.replace('/register')
      },
      gotologin(){
        //简单的验证，只能验证账号密码有没有
        this.$refs.loginform.validate(valid=>{
          if (valid){
            request({
              url:'/sys/login/login',
              params:{
                username:this.loginform.username,
                password:this.loginform.password
              }
            }).then((res)=>{

               // 判断后端数据data中的状态码是否是成功的状态码
              // 成功后调取获取用户信息的方法，
              // 接下来操作就在用户信息的方法中操作
              if (res.data.code==200){
                localStorage.setItem("user",res.data);
                console.log('user');
                this.$router.replace('/profile')
              }else {
                this.$message.error("用户名或密码不存在")
              }
            })
          }else{
            return false
          }
        })
      },
    }
  }
</script>

<style scoped>
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
  .code-btn{
    display: inline;
    color: gainsboro;
    margin: 0 10px 0 0;
    font-size: 15px;
  }
  .login{
    padding: 10px;
  }
  .btn{
    background-color: #4CAF50; /* Green */
    border: none;
    width: 200px;
    color: white;
    padding: 15px 32px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 16px;
    margin: 2px 2px;
    cursor: pointer;
  }

</style>
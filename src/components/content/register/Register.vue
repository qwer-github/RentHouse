<template>
  <div class="register">
    <header>
      <div class="nav">
        <el-button icon="el-icon-back" class="close-btn" @click="back"></el-button>
<!--        <button class="close-btn" @click="back">返回</button>-->
      </div>
      <h1 style="text-align: center">欢迎注册</h1>
    </header>
    <br>
    <el-form :model="ruleForm" ref="ruleForm">
      <el-form-item prop="surname">
        <el-input type="text" placeholder="姓氏" v-model="ruleForm.surname" required></el-input>
      </el-form-item>
      <el-form-item prop="name">
        <el-input type="text" placeholder="姓名" v-model="ruleForm.name" required></el-input>
      </el-form-item>
      <el-form-item prop="sex">
        <el-input type="text" placeholder="性别" v-model="ruleForm.sex" required></el-input>
      </el-form-item>
      <el-form-item prop="dataOfBirth">
        <el-input type="text" placeholder="出生日期" v-model="ruleForm.dataOfBirth" required></el-input>
      </el-form-item>
      <el-form-item prop="phone">
        <el-input type="text" placeholder="手机号" v-model="ruleForm.phone" required></el-input>
      </el-form-item>
      <el-form-item prop="idno">
        <el-input type="text" placeholder="身份证号" v-model="ruleForm.idno" required></el-input>
      </el-form-item>
      <el-form-item prop="email">
        <el-input type="text" placeholder="邮箱" v-model="ruleForm.email" required></el-input>
      </el-form-item>
      <el-form-item prop="password">
        <el-input type="text" placeholder="密码" v-model="ruleForm.password" required></el-input>
      </el-form-item>
      <el-form-item prop="addressProvice">
        <el-input type="text" placeholder="地址省" v-model="ruleForm.addressProvice" required></el-input>
      </el-form-item>
      <el-form-item prop="addressCity">
        <el-input type="text" placeholder="地址市" v-model="ruleForm.addressCity" required></el-input>
      </el-form-item>
      <el-form-item prop="addressCounty">
        <el-input type="text" placeholder="地址县" v-model="ruleForm.addressCounty" required></el-input>
      </el-form-item>
      <el-form-item prop="addressDetail">
        <el-input type="text" placeholder="详细地址" v-model="ruleForm.addressDetail" required></el-input>
      </el-form-item>
      <el-form-item class="btn-form" style="text-align: center">
        <el-button type="primary"
                   :loading="loading"
                   loading-text="注册中"
                   :disabled="reLoading">提交
        </el-button>
        <el-button @click="resetForm('ruleForm')">重置</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
  export default {

    name: "Register",
    data(){
      return{
        reLoading:false,
        loading:false,
        ruleForm:{
            surname:'',
            name:'',
            sex:'',
            dataOfBirth:'',
            phone:'',
            idno:'',
            email:'',
            password:'',
            addressProvice:'',
            addressCity:'',
            addressCounty:'',
            addressDetail:''
          }
      }
    },
    methods:{
      back(){
        console.log('点击返回');
        this.$router.replace('/home');
      },
      resetForm(formName) {
        this.$refs[formName].resetFields();
      },
      submitForm(formName) {
        console.log('成功');
        this.$router.replace('/melogin');
        // this.$refs[formName].validate((valid) => {
        //   if (valid) {
        //     alert('submit!');
        //   } else {
        //     console.log('error submit!!');
        //     return false;
        //   }
        // })
      }
    }
  }
</script>

<style scoped>
  header {
    display: block;
    height:100px;
    padding-top: .2rem;
    background-size: 100% 100%;
    background-color: green;
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
  .close-btn{
    background-color: green;
    border: none;
    font-size: 30px;
    color: #171717;
  }
  .el-form{
    margin-bottom: 50px;
  }
</style>
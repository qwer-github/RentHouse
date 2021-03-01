<template>
  <div>
    <header>
      <div class="nav">
        <el-button icon="el-icon-back" class="close-btn" @click="back"></el-button>
        <!--        <button class="close-btn" @click="back">返回</button>-->
      </div>
      <h1 style="text-align: center">出租房屋登记</h1>
    </header>
    <br>
    <el-form :model="houseForm" ref="houseForm">
      <el-form-item prop="rentingstyle">
        <el-input type="text" placeholder="出租类型" v-model="houseForm.rentingstyle" required></el-input>
      </el-form-item>
      <el-form-item prop="housestyle">
        <el-input type="text" placeholder="户型" v-model="houseForm.housestyle" required></el-input>
      </el-form-item>
      <el-form-item prop="flow">
        <el-input type="text" placeholder="楼层" v-model="houseForm.flow" required></el-input>
      </el-form-item>
      <el-form-item prop="direction">
        <el-input type="text" placeholder="朝向" v-model="houseForm.direction" required></el-input>
      </el-form-item>
      <el-form-item prop="area">
        <el-input type="text" placeholder="面积" v-model="houseForm.area" required></el-input>
      </el-form-item>
      <el-form-item prop="bedroomstyle">
        <el-input type="text" placeholder="卧室类型" v-model="houseForm.bedroomstyle" required></el-input>
      </el-form-item>
      <el-form-item prop="money">
        <el-input type="text" placeholder="租金" v-model="houseForm.money" required></el-input>
      </el-form-item>
      <el-form-item class="btn-form" style="text-align: center">
        <el-button type="primary" @click="submitForm('houseForm')">提交</el-button>
        <el-button @click="resetForm('houseForm')">重置</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
  export default {
    name: "SourceHouseDetail",
    data() {
      return {
        houseForm: {
          rentingstyle: '',
          housestyle:'',
          flow:'',
          direction:'',
          area:'',
          bedroomstyle:'',
          money:''
        }
      }
    },
    methods: {
      back() {
        console.log('点击返回');
        this.$router.replace('/profile');
      },
      resetForm(formName) {
        this.$refs[formName].resetFields();
      },
      submitForm(formName) {
        console.log('成功');
        this.$router.replace('/home');
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
</style>
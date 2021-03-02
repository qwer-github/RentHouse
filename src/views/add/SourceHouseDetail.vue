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
      <el-form-item prop="rentalType">
        <el-input type="text" placeholder="出租类型" v-model="houseForm.rentalType" required></el-input>
      </el-form-item>
      <el-form-item prop="houseType">
        <el-input type="text" placeholder="户型" v-model="houseForm.houseType" required></el-input>
      </el-form-item>
      <el-form-item prop="floor">
        <el-input type="text" placeholder="楼层" v-model="houseForm.floor" required></el-input>
      </el-form-item>
      <el-form-item prop="orientation">
        <el-input type="text" placeholder="朝向" v-model="houseForm.orientation" required></el-input>
      </el-form-item>
      <el-form-item prop="area">
        <el-input type="text" placeholder="面积" v-model="houseForm.area" required></el-input>
      </el-form-item>
      <el-form-item prop="bedroomType">
        <el-input type="text" placeholder="卧室类型" v-model="houseForm.bedroomType" required></el-input>
      </el-form-item>
      <el-form-item prop="rentMonthly">
        <el-input type="text" placeholder="月租金" v-model="houseForm.rentMonthly" required></el-input>
      </el-form-item>
      <el-form-item prop="peyType">
        <el-input type="text" placeholder="支付类型" v-model="houseForm.peyType" required></el-input>
      </el-form-item>
      <el-form-item prop="deposit">
        <el-input type="text" placeholder="押金" v-model="houseForm.deposit" required></el-input>
      </el-form-item>
      <el-form-item prop="label">
        <el-input type="text" placeholder="标签" v-model="houseForm.label" required></el-input>
      </el-form-item>
      <el-form-item prop="remarks">
        <el-input type="text" placeholder="备注" v-model="houseForm.remarks" required></el-input>
      </el-form-item>
      <el-form-item prop="addressProvice">
        <el-input type="text" placeholder="地址省" v-model="houseForm.addressProvice" required></el-input>
      </el-form-item>
      <el-form-item prop="addressCity">
        <el-input type="text" placeholder="地址市" v-model="houseForm.addressCity" required></el-input>
      </el-form-item>
      <el-form-item prop="addressCounty">
        <el-input type="text" placeholder="地址区/县" v-model="houseForm.addressCounty" required></el-input>
      </el-form-item>
      <el-form-item prop="addressDetail">
        <el-input type="text" placeholder="详细地址" v-model="houseForm.addressDetail" required></el-input>
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
          rentalType: '',
          houseType:'',
          floor:'',
          orientation:'',
          area:'',
          bedroomType:'',
          rentMonthly:'',
          peyType:'',
          deposit:'',
          label:'',
          remarks:'',
          addressProvice: '',
          addressCity: '',
          addressCounty: '',
          addressDetail: ''
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
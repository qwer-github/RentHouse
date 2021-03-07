<template>
  <div class="profile">
<!--    登陆-->
    <login-header></login-header>
<!--    添加房源-->
    <add-house></add-house>
<!--    房源信息-->
    <add-source-house></add-source-house>
  </div>
</template>

<script>
  import LoginHeader from "./login/LoginHeader";
  import AddHouse from "./login/AddHouse";
  import AddSourceHouse from "./login/AddSourceHouse";

  export default {
    name: "Profile",
    components:{
     LoginHeader,
      AddHouse,
      AddSourceHouse

    }
  }
</script>

<style scoped>

</style>

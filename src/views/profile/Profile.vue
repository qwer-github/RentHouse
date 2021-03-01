<template>
  <div class="profile">
<!--    登陆-->
    <login-before></login-before>
<!--    添加房源-->
    <add-house></add-house>
<!--    房源信息-->
    <add-source-house></add-source-house>
  </div>
</template>

<script>
  import LoginBefore from "./login/LoginBefore";
  import AddHouse from "./login/AddHouse";
  import AddSourceHouse from "./login/AddSourceHouse";

  export default {
    name: "Profile",
    components:{
      LoginBefore,
      AddHouse,
      AddSourceHouse

    }
  }
</script>

<style scoped>

</style>

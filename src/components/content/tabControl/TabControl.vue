<template>
  <div class="tab-control">
    <div v-for="(item,index) in titles"
         class="tab-control-item"
    :class="{active:index===currentIndex}"
    @click="itemClick(index)">
      <span>{{item}}</span>
    </div>
  </div>
</template>

<script>
  export default {
    name: "TabControl",
    props:{
      titles: {
        type:Array,
        default(){
          return[]
        }
      }
    },
    data(){
        return{
          currentIndex:0
        }
    },
    methods:{
      itemClick(index){
        this.currentIndex=index
      }
    }
  }
</script>

<style scoped>
.tab-control{
  display: flex;
  text-align: center;
  border-top: 5px solid white;
}
  .tab-control-item{
    flex: 1;
    height: 40px;
    line-height: 40px;
    font-size: 20px;
  }
  .active{
    color: var(--color-high-text);

  }
  .active span{
    border-bottom: 3px solid forestgreen;
  }
</style>

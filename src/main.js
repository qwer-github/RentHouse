import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import axios from "axios";
Vue.use(ElementUI);
Vue.config.productionTip = false

router.beforeEach((to, from, next)=>{
  if (to.meta.requireAuth){
    if(localStorage.getItem('user')){
      next();
    }else {
      if (to.path==='/melogin'){
        next()
      }else {
        alert("请先登陆！")
        next({
          path:'/melogin'
        })
      }
    }
  }else {
    next();
  }
  //如果本地存在账号，则不允许直接跳转到登陆界面
  // if (to.fullPath=='/melogin'){
  //   if (localStorage.getItem('userInfo')){
  //     alert("您已经登陆了，如果想要登陆其他账号，请先退出")
  //     next({
  //       path:from.fullPath
  //     })
  //   }else {
  //     next
  //   }
  // }
})


new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

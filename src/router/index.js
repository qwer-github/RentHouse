import Vue from 'vue'
import VueRouter from 'vue-router'

const Home=()=>import('../views/home/Home')
const Collect=()=>import('../views/collect/Collect')
const Profile=()=>import('../views/profile/Profile')
const Loging=()=>import('../views/melogin/Loging')
const Register=()=>import('../components/content/register/Register')
const SourceHouseDetail= ()=>import('../views/add/SourceHouseDetail')
Vue.use(VueRouter)

const routes = [
  {
    path:'',
    redirect:'/home'
  },
  {
    path: '/home',
    component:Home,
    meta:{
      MainTabBarShow:true,
      requireAuth:true
    }
  },
  {
    path: '/collect',
    component:Collect,
    meta:{
      MainTabBarShow:true
    }
  },
  {
    path: '/profile',
    component:Profile,
    meta:{
      MainTabBarShow:true
    }
  },
//   登陆
  {
    path: '/melogin',
    component:Loging,
    meta:{
      MainTabBarShow:true
    }
  },
  {
    path: '/register',
    component:Register,
    meta:{
      MainTabBarShow:false
    }
  },
  {
    path: '/add',
    component:SourceHouseDetail,
    meta:{
      MainTabBarShow:false
    }
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router

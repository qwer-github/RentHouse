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
    component:Home
  },
  {
    path: '/collect',
    component:Collect
  },
  {
    path: '/melogin',
    component:Loging
  },
  {
    path: '/profile',
    component:Profile
  },

  {
    path: '/register',
    component:Register
  },
  {
    path: '/add',
    component:SourceHouseDetail
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router

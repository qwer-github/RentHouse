import {request} from "./request";
export function getHomeMultidata() {
  return request({
    url:'/home/multidata'
  })
}
// 登陆页面网络请求
export function myLogin() {
  return request({
    url:'/sys/login/login',
    params:{
      username:'',
      password:''
    }
  })
}
//用户信息请求
export function userInfo() {
  return request({
    url:'/sys/user/base',
    params:{
      id:'',
      surname:'',
      name:'',
      sex:'',
      dataOfBirth: '',
      addressProvice:'',
      addressCity:'',
      addressCounty:'',
      addressDetail:''
    }
  })
}


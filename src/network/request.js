import axios from "axios";
export function request(config) {
  const instance1=axios.create({
    baseURL:'http://123.207.32.32:8000'
    // baseURL:'http://localhost:5200/renting'
  })
  return instance1(config)
}




// import axios from "axios";
//
// export function request(config) {
//   const instance1=axios.create({
//     baseURL:'http://123.207.32.32:8000'
//   })
//   //axios的拦截器
//   instance1.interceptors.request.use(config=>{
//     return config;
//   })
//   // 响应拦截
//   instance1.interceptors.request.use(res=>{
//     return res.data
//   })
//   return instance1(config)
// }

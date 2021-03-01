import {request} from "./request";
export function getHomeMultidata() {
  return request({
    url:'/home/multidata'
  })
}
export function goods(type,page) {
return request({
  url:'',
  params:{
    type,
    page
  }
})
}






// import {request} from "./request";
// export function getHomeMultidata() {
//   return request({
//     url:'/home/multidata'
//   })
// }

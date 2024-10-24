// 对 axios 二次封装
import axios from "axios";

// 利用 axios 对象的 create 方法创建一个 axios 实例
const request = axios.create({
  baseURL: '/api',
  timeout: 5000
})

// 请求拦截器
request.interceptors.request.use((config) => {
  // config 配置对象里有 headers 请求头
  return config
})

// 响应拦截器
request.interceptors.response.use((res) => {
  // 响应成功的回调
  return res.data
}, () => {
  // 响应失败的回调
  return Promise.reject(new Error('fail'))
} )

export default request
/**
 * 对axios进行二次封装
 */
import axios from "axios";

// 1. 利用axios对象的方法create创建一个axios实力
const request = axios.create({
  // 基础路径，自动拼接
  baseURL: '/api',
  // 请求超时时间
  timeout: 6000
})

// 请求拦截器：在请求发出之前，请求拦截器可以识别并执行一些操作
request.interceptors.request.use((config) => {
  // config: 配置对象
  return config
})

// 响应拦截器
request.interceptors.response.use((res) => {
  // 成功的回调：服务器请求成功后，响应拦截器可以做一些事情
  return res.data
}, (error) => {
  // 失败的回调
  return Promise.reject(new Error('faile'))
})

// 对外暴露
export default request

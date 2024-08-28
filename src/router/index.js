// 配置路由
import Vue from "vue";
import VueRouter from "vue-router";

// 使用插件
Vue.use(VueRouter);

// 重写push和replace方法，解决重复调用的警告
const originPush = VueRouter.prototype.push;
const originReplace = VueRouter.prototype.replace;

const rewriteMethod = function (func) {
  return function(location, resolve, reject) {
    if (resolve && reject) {
      func.call(this, location, resolve, reject)
    } else if (resolve) {
      func.call(this, location, resolve, () => {})
    } else if (reject) {
      func.call(this, location, () => {}, reject)
    } else {
      func.call(this, location, () => {}, () => {})
    }
  }
}

VueRouter.prototype.push = rewriteMethod(originPush)
VueRouter.prototype.replace = rewriteMethod(originReplace)

// 配置路由
import Home from '@/pages/Home';
import Search from '@/pages/Search';
import Login from '@/pages/Login';
import Register from '@/pages/Register'

export default new VueRouter({
  // 配置路由
  routes: [
    {
      path: '/home',
      component: Home,
      meta: { showFooter: true }
    },
    {
      path: '/search',
      component: Search,
      meta: { showFooter: true }
    },
    {
      path: '/login',
      component: Login
    },
    {
      path: '/register',
      component: Register
    }
  ]
})
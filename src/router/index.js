// 配置路由
import Vue from "vue";
import VueRouter from "vue-router";

// 使用插件
Vue.use(VueRouter);

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
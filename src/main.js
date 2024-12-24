import Vue from 'vue'
import App from './App.vue'
// 引入路由
import router from '@/router';
// 引入状态管理
import store from './store';

Vue.config.productionTip = false
Vue.config.devtools = true




new Vue({
  render: h => h(App),
  router,
  // 注册状态管理
  store
}).$mount('#app')

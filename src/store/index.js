import Vue from "vue";
import Vuex from 'vuex';

// 按模块引入
import home from "./home";
import search from "./search";

Vue.use(Vuex);


export default new Vuex.Store({
  // 按模块进行状态管理
  modules: {
    home,
    search
  }
})
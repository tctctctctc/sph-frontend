/**
 * 首页模块状态管理
 */
import { getBaseCategoryListData } from '@/api';

const state = {
  /** 分类导航数据 */
  categoryList: []
};

const mutations = {
  CATEGORYLIST(state, categoryList) {
    state.categoryList = categoryList
  }
};

const actions = {
  // 向服务器发请求，获取数据
  async generateCategoryList({ commit }) {
    const res = await getBaseCategoryListData();
    if (res.code === 200) {
      commit('CATEGORYLIST', res.data);
    }
  }
};

const getters = {};

export default {
  state,
  mutations,
  actions,
  getters
}
/**
 * api接口统一管理
 */
import request from "./request";

const Api = {
  /** 首页三级分类 */
  Home_NAV_CLASSIFICATION: '/product/getBaseCategoryList'
}

/**
 * 获取首页商品分类列表
 */
export function getBaseCategoryListData() {
  return request.request({
    method: 'GET',
    url: Api.Home_NAV_CLASSIFICATION
  })
}
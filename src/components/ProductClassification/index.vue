<template>
  <div class="main-container">
    <!-- 版心 -->
    <div class="type-area">
      <!-- 顶部导航 -->
      <div class="header">
        <em>全部商品分类</em>
        <nav>
          <a href="javascript:;">服装城</a>
          <a href="javascript:;">美妆城</a>
          <a href="javascript:;">尚品汇超市</a>
          <a href="javascript:;">全球购</a>
          <a href="javascript:;">闪购</a>
          <a href="javascript:;">团购</a>
          <a href="javascript:;">有趣</a>
          <a href="javascript:;">秒杀</a>
        </nav>
      </div>

      <!-- 底部商品分类明细 -->
      <div class="main-content">
        <!-- 左侧nav列表 -->
        <div class="left-panel">
          <div
            class="item"
            v-for="category in categoryList"
            :key="category.categoryId"
          >
            <a href="javascript:;">{{ category.categoryName }}</a>
            <!-- 右侧详情面板，鼠标悬浮显示 -->
            <div class="right-panel">
              <dl v-for="item in category.categoryChild" :key="item.categoryId">
                <dt>
                  <a href="javascript:;">{{ item.categoryName }}</a>
                </dt>
                <dd>
                  <em v-for="c in item.categoryChild" :key="c.categoryId">
                    <a href="javascript:;">{{ c.categoryName }}</a>
                  </em>
                </dd>
              </dl>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  name: "ProductClassification",
  mounted() {
    this.$store.dispatch("generateCategoryList");
  },
  computed: {
    ...mapState({
      categoryList: (state) => state.home.categoryList,
    }),
  },
};
</script>

<style scoped lang="less">
.main-container {
  width: 100%;
  border-bottom: 2px solid #e1251b;

  .type-area {
    width: 1200px;
    margin: 0 auto;

    .header {
      height: 45px;
      line-height: 45px;
      display: flex;

      em {
        width: 210px;
        text-align: center;
        color: #fff;
        background-color: #e1251b;
        font-size: 14px;
        font-weight: bold;
      }

      nav a {
        font-size: 16px;
        color: #333;
        margin: 0 22px;
      }
    }

    .main-content {
      position: relative;

      .left-panel {
        position: absolute;
        height: 460px;
        width: 210px;
        background-color: #fafafa;

        .item {
          > a {
            line-height: 25px;
            font-size: 12px;
            font-weight: 400;
            padding: 0 20px;
            overflow: hidden;
            margin: 0;
          }

          .right-panel {
            position: absolute;
            left: 210px;
            top: 0;
            border: 1px solid #ccc;
            background-color: #f7f7f7;
            width: 714px;
            min-height: 460px;
            padding: 0 10px;
            visibility: hidden;

            dl {
              display: flex;
              margin-top: 10px;
              zoom: 1;

              dt {
                height: 22px;
                line-height: 22px;
                width: 54px;
                text-align: right;
                padding: 0 10px;

                a {
                  font-weight: 700;
                  text-decoration: none;
                  color: #333;
                  font-size: 12px;
                }
              }

              dd {
                display: flex;
                flex-wrap: wrap;
                width: 650px;

                em {
                  border-left: 1px solid #ccc;
                  height: 22px;
                  line-height: 22px;
                  margin-bottom: 5px;

                  a {
                    text-decoration: none;
                    color: #666;
                    font-size: 12px;
                    padding: 0 10px;
                  }
                }
              }
            }
          }

          &:hover .right-panel {
            visibility: inherit;
          }
        }
      }
    }
  }
}
</style>
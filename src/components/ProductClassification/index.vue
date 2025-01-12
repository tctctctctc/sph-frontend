<template>
  <div class="main-container">
    <!-- 版心 -->
    <div class="type-area">
      <!-- 顶部导航 -->
      <div class="header">
        <em
          @mouseenter="visible = true"
          @mouseleave="visible = fixedDisplay || false"
          >全部商品分类</em
        >
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
        <!-- 过渡动画 -->
        <transition name="nav">
          <!-- 左侧nav列表 -->
          <div
            class="left-panel"
            @click="onSearch"
            v-show="visible"
            @mouseenter="visible = true"
            @mouseleave="visible = fixedDisplay || false"
          >
            <div
              class="item"
              v-for="category in categoryList"
              :key="category.categoryId"
            >
              <a
                href="javascript:;"
                :data-categoryName="category.categoryName"
                :data-category1Id="category.categoryId"
              >
                {{ category.categoryName }}
              </a>
              <!-- 右侧详情面板，鼠标悬浮显示 -->
              <div class="right-panel">
                <dl
                  v-for="item in category.categoryChild"
                  :key="item.categoryId"
                >
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
        </transition>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  name: "ProductClassification",
  data() {
    return {
      visible: false,
    };
  },
  props: {
    /** 是否固定显示 */
    fixedDisplay: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    ...mapState({
      categoryList: (state) => state.home.categoryList,
    }),
  },
  methods: {
    /**
     * 点击三级联动导航项跳转
     */
    onSearch(event) {
      let element = event.target;
      const {
        categoryname: categoryName,
        category1id: category1Id,
        category2id: category2Id,
        category3id: category3Id,
      } = element.dataset;
      if (categoryName) {
        const query = {
          categoryName,
        };
        if (category1Id) {
          query.category1Id = category1Id;
        } else if (category2Id) {
          query.category1Id = category2Id;
        } else if (category3Id) {
          query.category3Id = category3Id;
        }
        this.$router.push({
          path: "/search",
          query,
        });
      }
    },
  },
  mounted() {
    // 请求三级联动导航数据
    this.$store.dispatch("generateCategoryList");
    if (this.fixedDisplay) {
      this.visible = true;
    }
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

      // 过渡动画开始进入
      .nav-enter {
        height: 0 !important;
      }
      // 过渡动画结束进入
      .nav-enter-to {
        height: 460px !important;
        overflow: initial;
      }
      // 过渡动画进入中
      .nav-enter-active {
        transition: all 0.5s linear;
        overflow: hidden;
      }

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
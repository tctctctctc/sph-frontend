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
          <div class="item">
            <a href="javascript:;">图书、音像、数字商品</a>
            <!-- 右侧详情面板，鼠标悬浮显示 -->
            <div class="right-panel">
              <dl>
                <dt><a href="javascript:;">电子书</a></dt>
                <dd><a href="javascript:;">婚恋/两性</a></dd>
                <dd><a href="javascript:;">文学</a></dd>
                <dd><a href="javascript:;">经管</a></dd>
                <dd><a href="javascript:;">畅读VIP</a></dd>
              </dl>
            </div>
          </div>
          <div class="item">
            <a href="javascript:;">家用电器</a>
            <div class="right-panel">
              <dl>
                <dt><a href="javascript:;">音像</a></dt>
                <dd><a href="javascript:;">v音乐</a></dd>
                <dd><a href="javascript:;">影视</a></dd>
                <dd><a href="javascript:;">教育音像</a></dd>
                <dd><a href="javascript:;">游戏</a></dd>
              </dl>
              <dl>
                <dt><a href="javascript:;">文艺</a></dt>
                <dd><a href="javascript:;">小说</a></dd>
                <dd><a href="javascript:;">文学</a></dd>
                <dd><a href="javascript:;">青春文学</a></dd>
                <dd><a href="javascript:;">传记</a></dd>
                <dd><a href="javascript:;">艺术</a></dd>
              </dl>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ProductClassification",
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
          a {
            line-height: 30px;
            font-size: 14px;
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
            padding: 0 20px;
            visibility: hidden;

            dl {
              display: flex;
              margin-top: 10px;
              font-size: 12px;

              dt {
                a {
                  font-weight: 700;
                  text-decoration: none;
                  color: #333;
                  height: 22px;
                  line-height: 22px;
                }
              }

              dd {
                border-left: 1px solid #ccc;
                a {
                  height: 22px;
                  line-height: 22px;
                  text-decoration: none;
                  color: #666;
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
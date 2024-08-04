<template>
  <footer>
    <div class="footer-container">
      <div class="footerList">
        <div class="footerItem">
          <h4>购物指南</h4>
          <ul class="footerItemCon">
            <li>购物流程</li>
            <li>会员介绍</li>
            <li>生活旅行/团购</li>
            <li>常见问题</li>
            <li>购物指南</li>
          </ul>
        </div>
        <div class="footerItem">
          <h4>配送方式</h4>
          <ul class="footerItemCon">
            <li>上门自提</li>
            <li>211限时达</li>
            <li>配送服务查询</li>
            <li>配送费收取标准</li>
            <li>海外配送</li>
          </ul>
        </div>
        <div class="footerItem">
          <h4>支付方式</h4>
          <ul class="footerItemCon">
            <li>货到付款</li>
            <li>在线支付</li>
            <li>分期付款</li>
            <li>邮局汇款</li>
            <li>公司转账</li>
          </ul>
        </div>
        <div class="footerItem">
          <h4>售后服务</h4>
          <ul class="footerItemCon">
            <li>售后政策</li>
            <li>价格保护</li>
            <li>退款说明</li>
            <li>返修/退换货</li>
            <li>取消订单</li>
          </ul>
        </div>
        <div class="footerItem">
          <h4>特色服务</h4>
          <ul class="footerItemCon">
            <li>夺宝岛</li>
            <li>DIY装机</li>
            <li>延保服务</li>
            <li>尚品汇E卡</li>
            <li>尚品汇通信</li>
          </ul>
        </div>
        <div class="footerItem">
          <h4>帮助中心</h4>
        </div>
      </div>
      <div class="copyright">
        <ul class="helpLink">
          <li>
            关于我们
            <span class="space"></span>
          </li>
          <li>
            联系我们
            <span class="space"></span>
          </li>
          <li>
            关于我们
            <span class="space"></span>
          </li>
          <li>
            商家入驻
            <span class="space"></span>
          </li>
          <li>
            营销中心
            <span class="space"></span>
          </li>
          <li>
            友情链接
            <span class="space"></span>
          </li>
          <li>
            关于我们
            <span class="space"></span>
          </li>
          <li>
            联系我们
            <span class="space"></span>
          </li>
        </ul>
        <p>地址：长沙市天心区暮云路街道</p>
        <p>湘ICP备19006379号</p>
      </div>
    </div>
  </footer>
</template>

<style scoped lang="less">
footer {
  background-color: #eaeaea;
  padding-bottom: 30px;

  .footer-container {
    width: 1200px;
    margin: 0 auto;

    .footerList {
      display: flex;
      justify-content: space-around;
      padding: 20px;
    }

    .copyright {
      text-align: center;
      margin-top: 50px;

      .helpLink {
        display: flex;
        justify-content: center;

        li {
          margin-left: 10px;
          padding-right: 10px;
          border-right: 2px solid #b3aeae;

          &:first-child {
            margin-left: 0;
          }

          &:last-child {
            border: none;
          }
        }
      }

      p {
        margin: 10px;
      }
    }
  }
}
</style>
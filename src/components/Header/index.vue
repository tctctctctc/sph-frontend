<template>
  <header>
    <!-- 头部第一行 -->
    <div class="headTop">
      <!-- 版心元素 -->
      <div class="headTopMain">
        <!-- 左边 -->
        <div class="headTopLeft">
          <h5>尚品汇欢迎您！&nbsp;请</h5>
          <p>
            <router-link to="/login">登录</router-link>
            <router-link to="/register">免费注册</router-link>
          </p>
        </div>
        <!-- 右边 -->
        <div class="headTopRight">
          <nav>
            <a href="javascript:;">我的订单</a>
            <a href="javascript:;">我的购物车</a>
            <a href="javascript:;">我的尚品汇</a>
            <a href="javascript:;">尚品汇会员</a>
            <a href="javascript:;">企业采购</a>
            <a href="javascript:;">关注尚品汇</a>
            <a href="javascript:;">合作招商</a>
            <a href="javascript:;">商家后台</a>
          </nav>
        </div>
      </div>
    </div>

    <!-- 头部第二行 -->
    <div class="headBottom">
      <!-- 版心 -->
      <div class="headBottomMain">
        <!-- logo -->
        <h1>
          <router-link to="/home">
            <img src="@/assets/images/logo.png">
          </router-link>
        </h1>
        <!-- 搜索 -->
        <div class="search">
          <input type="text" placeholder="请输入搜索内容">
          <input type="submit" value="搜索" @click="handleSearch">
        </div>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  name: '',
  methods: {
    handleSearch() {
      this.$router.push({
        path: '/search'
      })
    }
  }
}
</script>

<style scoped lang="less">
.headTop {
  background-color: #eaeaea;
  height: 30px;

  .headTopMain {
    width: 1200px;
    margin: 0 auto;
    line-height: 30px;
    display: flex;
    justify-content: space-between;

    .headTopLeft {
      display: flex;

      p {
        a {
          margin-right: 5px;
        }
        a:first-child {
          border-right: 1px solid #b3aeae;
          padding-right: 5px;
        }
      }
    }

    .headTopRight {
      nav {
        a {
          margin-left: 10px;
          padding-right: 10px;
          border-right: 1px solid #b3aeae;
          &:last-child {
            border: none;
            padding-right: 0;
          }
        }
      }
    }
  }
}

.headBottom {
  .headBottomMain {
    width: 1200px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;

    h1 {
      a {
        width: 175px;
        height: 56px;
        margin: 25px 45px;
      }
    }

    .search {
      margin-top: 35px;
      input {
        height: 32px;
        &:first-child {
          width: 490px;
          padding: 0 4px;
          border: 3px solid #ea4a46;
          box-sizing: border-box;
        }
        &:last-child {
          width: 68px;
          background: #ea4a36;
          color: #fff;
          cursor: pointer;
          border: none;
        }
        // 修饰 placeholder
        &::-webkit-input-placeholder {
          color: yellowgreen;
        }
      }
    }
  }
}
</style>
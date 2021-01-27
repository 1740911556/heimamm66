<template>
  <div class="login">
    <!-- 顶部—————————————————— -->
    <div class="head">
      <!-- 顶部 -->
      <van-nav-bar>
        <template #left>
          <!-- 顶部箭头 -->
          <icon class="iconfont arrows">&#xe637;</icon>
        </template>
      </van-nav-bar>
    </div>
    <!-- 文字_________________ -->
    <div class="fontsize">
      <span>您好,请登录</span>
    </div>
    <!-- 输入框form表单———————————————————— -->
    <van-form @submit="onSubmit" class="inputForm">
      <!-- 手机号 -->
      <van-field v-model="value" placeholder="请输入手机号" class="inputone">
        <template #left-icon>
          <icon class="iconfont mobileIcon">&#xe60b;</icon>
        </template>
      </van-field>
      <!-- 验证码 -->
      <van-field v-model="text" placeholder="请输入验证码" class="inputtwo">
        <template #left-icon>
          <icon class="iconfont mobileIcon">&#xe60c;</icon>
        </template>
        <!-- 点击获取验证码 -->
        <template #button>
          <van-button
            type="default"
            class="buttonVerification"
            @click="show = true"
            >获取验证码</van-button
          >
        </template>
      </van-field>
    </van-form>
    <!-- 用户协议 -->
    <p class="agreement">
      登录即同意<span class="one">《用户使用协议》</span>和<span
        >《隐私协议》</span
      >
    </p>
    <!-- 登录按钮 -->
    <van-button type="danger" size="large" class="loginBuuton">确定</van-button>
    <!-- 点击验证码的遮罩层弹框 -->
    <van-overlay :show="show" @click="show = false" class="mask" />
  </div>
</template>

<script>
export default {
  data () {
    return {
      // 手机号
      value: '',
      // 验证码
      text: '',
      // 遮罩层弹框
      show: false
    }
  },
  methods: {
    onSubmit (values) {
      console.log('submit', values)
    }
  }
}
</script>

<style lang="less" scoped>
.login {
  height: 100vh;
  background-color: #f9f9f9;
  position: relative;
  // 顶部
  .head {
    // 去除默认padding
    ::v-deep .van-nav-bar__left,
    ::v-deep.van-nav-bar__right {
      padding: 0;
      .arrows {
        font-size: 44px;
      }
    }
  }
  // 文字
  .fontsize {
    margin-top: 50px;
    padding-left: 15px;
    font-size: 18px;
    color: #222222;
    font-weight: 600;
  }
  // form表单
  .inputForm {
    margin-top: 63px;
    margin-left: 15px;
    //  手机号输入框
    .inputone {
      width: 350px;
      height: 40px;
      line-height: 40px;
      text-indent: 15px;
    }
    // 验证码输入框
    .inputtwo {
      height: 40px;
      line-height: 40px;
      text-indent: 15px;
      //  验证码倒计时
      .buttonVerification {
        width: 100px;
        background: #f9f9f9;
        border: 0;
        color: #00b8d4;
      }
    }
    //  输入框左侧图标
    .mobileIcon {
      margin-right: 16px;
    }
  }
  // 用户协议
  .agreement {
    font-size: 12px;
    float: left;
    padding: 15px;

    span:nth-child(1) {
      color: #00b8d4;
    }
    span:nth-child(2) {
      color: #00b8d4;
    }
  }
  // 登录按钮
  .loginBuuton {
    height: 44px;
    padding: 15px;
    border-radius: 20px;
    margin-top: 44px;
  }
  // 遮罩层
  // .mask {
  //   width: 100px;
  //   height: 100px;
  //   // line-height: 100px;
  //   position: absolute;
  //   left: 50%;
  //   top: 50%;
  //   margin-left: -50px;
  //   margin-top: -50px;
  // }
}
</style>

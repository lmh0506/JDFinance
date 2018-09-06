<template>
  <header :class="$style.header">
    <span :class="$style.left">
      <router-link tag="em" to="/regist">
        注册
      </router-link>
      &nbsp;|&nbsp;
      <router-link tag="em" to="/login">
        登录
      </router-link>
    </span>
    <btn :class="$style.btnDownload">APP下载</btn>
  </header>
</template>

<script>
import Btn from '@/core/btn.vue'

export default {
  name: 'MyHeader',
  components: {
    Btn
  }
}
</script>

<style lang="scss" module>
  .header{
    color: #666;
    height: 100px;
    line-height: 100px;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    font-size: 32px;
    background: #fff url(https://m.jr.jd.com/spe/qyy/main/images/jr-logo.png) center center no-repeat;
    background-size: auto 50%;
    z-index: 100;

    .left{
      font-size: 28px;
      height: 30px;
      line-height: 30px;
      margin: 17px 0 0 18px;
    }
    .btnDownload{
      float: right;
      font-size: 24px;
      border-width: 0;
      height: 56px;
      line-height: 56px;
      min-width: 120px;
      padding: 0;
      border-radius: 4px;
      margin: 28px 24px 0 0;
    }
  }
</style>

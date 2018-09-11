<template>
  <div>
    <my-header></my-header>
    <slider></slider>
    <ada></ada>
    <money></money>
    <adb></adb>
    <finance></finance>
    <adc></adc>
    <my-footer cname="mfooter"></my-footer>
    <my-navbar></my-navbar>
  </div>
</template>

<script>
import MyHeader from '@/public/header.vue'
import Slider from './mslider.vue'
import Ada from './ada.vue'
import Money from './money.vue'
import Adb from './adb.vue'
import Adc from './adc.vue'
import Finance from './finance.vue'
import MyFooter from '@/public/footer'
import MyNavbar from '@/public/navbar'

export default {
  name: 'moneyIndex',
  components: {
    MyHeader,
    Slider,
    Ada,
    Money,
    Adb,
    Finance,
    Adc,
    MyFooter,
    MyNavbar
  }
}
</script>

<style lang="scss">
  .mfooter{
    margin-top: 0px !important;
    ul{
      li{
        &:first-child{
          display: none;
        }
      }
    }
  }
</style>

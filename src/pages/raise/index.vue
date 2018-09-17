<template>
  <div>
    <my-header></my-header>
    <slider></slider>
    <daily></daily>
    <in></in>
    <more></more>
    <my-footer cname="mfooter"></my-footer>
    <my-navbar></my-navbar>
  </div>
</template>

<script>
import MyHeader from '@/public/header.vue'
import Slider from './islider.vue'
import Daily from './daily.vue'
import In from './in.vue'
import More from './more.vue'
import MyFooter from '@/public/footer'
import MyNavbar from '@/public/navbar'

export default {
  name: 'raiseIndex',
  components: {
    MyHeader,
    Slider,
    Daily,
    In,
    More,
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

<template>
  <div>
    <my-header></my-header>
    <slider></slider>
    <welfare></welfare>
    <service></service>
    <my-footer></my-footer>
    <my-navbar></my-navbar>
  </div>
</template>

<script>
import MyHeader from '@/public/header.vue'
import Slider from './islider.vue'
import Welfare from './welfare.vue'
import Service from './service.vue'
import MyFooter from '@/public/footer'
import MyNavbar from '@/public/navbar'

export default {
  name: 'iousIndex',
  components: {
    MyHeader,
    Slider,
    Welfare,
    Service,
    MyFooter,
    MyNavbar
  }
}
</script>

<style lang="scss">

</style>

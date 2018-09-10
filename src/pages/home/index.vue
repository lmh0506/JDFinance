<template>
  <div>
    <my-header></my-header>
    <slider></slider>
    <novice></novice>
    <borrow></borrow>
    <money></money>
    <product></product>
    <life></life>
    <my-footer></my-footer>
    <my-navbar></my-navbar>
  </div>
</template>

<script>
import MyHeader from '@/public/header.vue'
import Slider from './hslider.vue'
import Novice from './novice.vue'
import Borrow from './borrow.vue'
import Money from './money.vue'
import Product from './product.vue'
import Life from './life.vue'
import MyFooter from '@/public/footer'
import MyNavbar from '@/public/navbar'

export default {
  name: 'Index',
  components: {
    MyHeader,
    Slider,
    Novice,
    Borrow,
    Money,
    Product,
    Life,
    MyFooter,
    MyNavbar
  }
}
</script>

<style lang="scss" scoped>

</style>

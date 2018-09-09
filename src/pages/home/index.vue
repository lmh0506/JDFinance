<template>
  <div>
    <my-header></my-header>
    <slider></slider>
    <novice></novice>
    <borrow></borrow>
    <money></money>
  </div>
</template>

<script>
import MyHeader from '@/public/header.vue'
import Slider from './hslider.vue'
import Novice from './novice.vue'
import Borrow from './borrow.vue'
import Money from './money.vue'

export default {
  name: 'Index',
  components: {
    MyHeader,
    Slider,
    Novice,
    Borrow,
    Money
  }
}
</script>

<style lang="scss" scoped>

</style>

<template>
  <div>
    <my-header></my-header>
    <slider></slider>
  </div>
</template>

<script>
import MyHeader from '@/public/header.vue'
import Slider from './hslider.vue'

export default {
  name: 'Index',
  components: {
    MyHeader,
    Slider
  }
}
</script>

<style lang="scss" scoped>

</style>

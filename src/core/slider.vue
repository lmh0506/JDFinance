<template>
  <section :class="cname">
    <swiper :options="options" :not-next-tick="options.notNextTick">
      <swiper-slide v-for="item in sliders" :key="item.src">
        <router-link tag="div" :to="{name: item.href}">
          <img :src="item.src" alt="">
        </router-link>
      </swiper-slide>
      <div class="swiper-pagination"  v-if="options.pagination" slot="pagination"></div>
    </swiper>
  </section>
</template>

<script>
import {swiper, swiperSlide} from 'vue-awesome-swiper'
import 'swiper/dist/css/swiper.css'

export default {
  name: 'MySlider',
  props: {
    cname: {
      type: String,
      default: ''
    },
    options: {
      type: Object,
      default () {
        return {
          autoplay: true,
          loop: true,
          pagination: {
            el: '.swiper-pagination'
          },
          notNextTick: false
        }
      }
    },
    sliders: {
      type: Array,
      default () {
        return []
      }
    }
  },
  components: {
    swiper,
    swiperSlide
  }
}
</script>

<style lang="scss">

</style>

<template>
  <section class="panel" :class="cname">
    <h4>-{{ title }}-</h4>
    <slot></slot>
  </section>
</template>

<script>
export default {
  name: 'Panel',
  props: {
    title: {
      type: String,
      default: ''
    },
    cname: {
      type: String,
      default: ''
    }
  }
}
</script>

<style lang="scss">
  @import 'css/element.scss';

  .panel{
    @include panel;
  }
</style>

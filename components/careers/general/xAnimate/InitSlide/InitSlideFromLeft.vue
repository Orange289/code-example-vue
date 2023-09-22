<template>
  <AnimateBase class="InitSlideFromLeft"><slot></slot></AnimateBase>
</template>

<script>
import AnimateBase from '../InitAnimateBase.vue'

export default {
  components: { AnimateBase }
}
</script>

<style lang="postcss" scoped>
.InitSlideFromLeft {
  @media (--sm) {
    transform: translateX(
      -99.5%
    ); /* not 100 cause we need some part of object in viewport */
  }
  &.animate--visible {
    @media (--sm) {
      transform: translateX(0);
    }
  }
}
</style>

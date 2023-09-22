<template>
  <div
    v-observe-visibility="{ callback: isViewableNow, once: once }"
    class="animate"
    :class="[{ 'animate--visible': isVisible }]"
  >
    <slot></slot>
  </div>
</template>

<script>
// based on vue-observe-visibility[https://github.com/Akryum/vue-observe-visibility] and v-observe-visibility directive
export default {
  props: {
    once: {
      type: Boolean,
      default: true
    }
  },
  data() {
    return {
      isVisible: false
    }
  },
  methods: {
    isViewableNow(isVisible) {
      this.isVisible = isVisible
    }
  }
}
</script>

<style lang="postcss" scoped>
.animate {
  transition-delay: 0.1s;
  transition-timing-function: ease-in-out;
  transition-duration: 0.3s;

  will-change: transform, opacity;
  opacity: 0;

  @media (--xs) {
    & > * {
      transform: translateY(100%);
    }
  }

  &.animate--visible {
    opacity: 1;

    @media (--xs) {
      & > * {
        transform: translateY(0);
      }
    }
  }
}
</style>

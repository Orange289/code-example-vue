<template>
  <a
    v-if="item.class && item.href"
    :href="item.href"
    :aria-label="item.label"
    :class="['social-item', 'social-item--' + item.class]"
    target="_blank"
    rel="noopener"
  >
    <svg-icon :name="'general/' + item.class" class="social-item__icon" />
  </a>
</template>

<script>
export default {
  name: 'SocialItem',
  props: {
    item: {
      type: Object,
      default: null
    }
  }
}
</script>

<style lang="scss" scoped>
.social-item {
  max-width: 17px;
  max-height: 17px;

  .social-item__icon {
    max-width: 100%;
    height: 100%;
  }

  &:hover,
  &:focus {
    opacity: 0.8;
  }

  &:focus {
    outline: none;
  }

  &.social-item--youtube {
    max-width: 12px;
  }
}
</style>

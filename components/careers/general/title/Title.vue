<template>
  <h2 :class="['title', { 'title--underlined': underlined }]">
    <slot></slot>
  </h2>
</template>

<script>
export default {
  name: 'Title',
  props: {
    underlined: {
      type: Boolean,
      default: false
    }
  }
}
</script>

<style lang="postcss" scoped>
.title {
  font-size: 24px;
  line-height: 1.3;
  margin-bottom: 22px;

  @media (--sm) {
    font-size: 32px;
    line-height: 2;
    margin-bottom: 35px;
  }
  @media (--lg) {
    font-size: 36px;
    line-height: 64px;
  }
  @media (--xl) {
    font-size: 48px;
    margin-bottom: 47px;
  }
}

.title--underlined {
  padding-bottom: 16px;
  position: relative;

  &:after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 36px;
    height: 2px;
    background: var(--primary-300-color);
  }

  @media (--sm) {
    padding-bottom: 11px;

    &:after {
      width: 32px;
    }
  }
  @media (--xl) {
    padding-bottom: 23px;

    &:after {
      width: 48px;
    }
  }
}
</style>

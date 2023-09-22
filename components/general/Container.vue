<template>
  <div :class="['container', { 'container--wide': wide }]">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'Container',
  props: {
    wide: {
      type: Boolean,
      default: false
    }
  }
}
</script>

<style lang="scss" scoped>
$container__padding: $padding-base;

.container {
  @include bp(mobile tablet) {
    padding-right: $container__padding * 2;
    padding-left: $container__padding * 2;
  }
  @include bp(desktop) {
    // 960 + 95 * 2
    max-width: 100%;
    padding-right: $padding-base-tablet;
    padding-left: $padding-base-tablet;
  }
  @include bp(desktop-prewide) {
    // 1200 + 120 * 2
    padding-right: $padding-base-desktop;
    padding-left: $padding-base-desktop;
  }
  @include bp(desktop-wide) {
    // 1600 + 40 * 2
    max-width: $container__width--desktop-wide;
    padding-right: $padding-base-desktop-wide;
    padding-left: $padding-base-desktop-wide;
  }

  position: relative;

  box-sizing: border-box;
  width: 100%;
  max-width: $container__width--desktop + 2 * $padding-base;
  margin: 0 auto;
  padding-right: $container__padding;
  padding-left: $container__padding;

  &.container--wide {
    @include bp(tablet) {
      padding-right: 75px;
      padding-left: 75px;
    }
    @include bp(desktop) {
      padding-right: $padding-base-tablet / 2;
      padding-left: $padding-base-tablet / 2;
    }
    @include bp(desktop-prewide) {
      padding-right: $padding-base-desktop / 2;
      padding-left: $padding-base-desktop / 2;
    }
    @include bp(desktop-wide) {
      padding-right: $padding-base-desktop-wide / 2;
      padding-left: $padding-base-desktop-wide / 2;
    }
  }
}
</style>

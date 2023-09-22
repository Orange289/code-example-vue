<template>
  <div v-if="tKey && $te(tKey)" class="icon-text-list">
    <IconText
      v-for="(item, key, index) in $t(tKey)"
      :key="index + key || index"
      v-animate.repeat.fade="'slide-up'"
      :style="{ 'transition-delay': `${0.15 * (index + 1)}s` }"
      :t-key="`${tKey}.${key}`"
      :to-row-icon="toRowIcon"
      class="icon-text-list__item"
    ></IconText>
    <slot></slot>
  </div>
</template>

<script>
import IconText from './IconText'

export default {
  name: 'IconTextList',
  components: {
    IconText
  },
  props: {
    toRowIcon: {
      type: Boolean,
      default: false
    },
    tKey: {
      type: String,
      default: ''
    }
  }
}
</script>

<style lang="scss" scoped>
.icon-text-list {
  @include bp(tablet) {
    display: flex;

    flex-wrap: wrap;
  }
  .icon-text-list__item {
    @include bp(tablet) {
      margin-bottom: 20px;
      padding-right: 50px;
    }
    @include bp(desktop) {
      margin-bottom: 35px;
    }
    @include bp(desktop-large) {
      margin-bottom: 40px;
    }
    @include bp(desktop-wide) {
      margin-bottom: 58px;
      padding-right: 120px;
    }

    margin-bottom: 25px;
  }
}
</style>

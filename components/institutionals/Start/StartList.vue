<template>
  <ul v-if="tKey" class="start-list">
    <li
      v-for="(item, index) of $t(tKey)"
      :key="index"
      v-animate.repeat.fade="'slide-left'"
      v-html="$t(`${tKey}.${index}`)"
    ></li>
  </ul>
</template>

<script>
export default {
  name: 'StartList',
  props: {
    tKey: {
      type: String,
      default: ''
    }
  }
}
</script>

<style lang="scss" scoped>
.start-list {
  padding-left: 0;

  list-style: none;

  li {
    @include bp(tablet) {
      font-size: 22px;
      padding-bottom: 40px;
    }
    @include bp(desktop-large) {
      font-size: 18px;
      line-height: 29px;
      padding-left: 42px;

      &:last-child {
        padding-bottom: 32px;
      }
    }
    @include bp(desktop-wide) {
      font-size: 22px;
    }

    font-size: 16px;
    line-height: 1.25;

    position: relative;

    padding-bottom: 30px;
    padding-left: 40px;

    &:before {
      position: absolute;
      z-index: 1;
      top: 0;
      left: 0;

      width: 24px;
      height: 24px;

      content: '';

      // background-color: $color__black--lighter;
      background-image: url('/static/images/traders/radiocheck.svg');
      background-size: 24px 24px;
    }

    &:after {
      position: absolute;
      bottom: 8px;
      left: 12px;

      width: 2px;
      height: calc(
        100% - 39px
      ); // 100% - 25px(height of check) - 16px (paddings from top and bottom)

      content: '';
      transform: translateX(-50%);

      background: $color__green--lighter;
    }

    &:last-child {
      &:after {
        display: none;
      }
    }
  }
}
</style>

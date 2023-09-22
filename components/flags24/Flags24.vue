<template>
  <div class="flags-24">
    <flag
      :name="flag"
      :key="flag"
      v-for="(flag, index) in flags"
      :style="{ 'transition-delay': `${0.15 * (index + 1)}s` }"
      class="flags-24__flag"
    ></flag>
    <flag
      v-animate.repeat.fade="'slide-right'"
      :style="{ 'transition-delay': `${0.15 * (flags.length + 1)}s` }"
      class="flags-24__flag"
      >24/7</flag
    >
  </div>
</template>

<script>
import flag from './Flag24'

export default {
  name: 'Flags24',
  components: { flag },
  data() {
    return {
      flags: ['EN', 'DE', 'IT', 'NL', 'SA', 'PT', 'CN']
    }
  }
}
</script>

<style lang="scss" scoped>
.flags-24 {
  // @include bp(tablet) {
  //   width: calc(100% + ((100% - 72px * 4) / 3));
  //   margin-right: calc((100% - 72px * 4) / -3);
  //   margin-left: 0;
  // }
  // @include bp(desktop-large) {
  //   width: calc(100% + ((100% - 80px * 4) / 3));
  //   max-width: 530px;
  //   margin-right: calc((100% - 80px * 4) / -3);
  // }
  @include bp(mobile-med) {
    margin-right: calc((100% - 72px * 4) / -3);
  }
  @include bp(tablet) {
    margin-left: -20%;

    transform: translateX(15px);
  }
  @include bp(desktop-large) {
    // margin-right: -40px;
    margin-left: 0;
  }
  @include bp(desktop-large desktop-wide) {
    margin-top: 20px;
    // margin-right: 0;
  }
  @include bp(desktop-prewide) {
    // width: calc(100% + ((100% - 100px * 4) / 3));
    max-width: 600px;
    margin-right: calc((100% - 100px * 4) / -3);
    margin-bottom: -80px;
  }
  @include bp(desktop-wide) {
    margin-left: -20px;
  }

  display: flex;

  margin-right: -16px;
  margin-bottom: -23px;

  color: $color__green;

  justify-content: space-around;
  flex-wrap: wrap;

  .flags-24__flag {
    @include bp(mobile-med) {
      margin-right: calc((100% - ((100% - 72px * 4) / 3) - (72px * 4)) / 3);
      // margin-right: calc((100% - 72px * 4) / 3);
    }
    @include bp(tablet) {
      margin-bottom: 27px;
    }
    @include bp(desktop-prewide) {
      margin-right: calc((100% - ((100% - 100px * 4) / 3) - (100px * 4)) / 3);
      // margin-right: calc((100% - 100px * 4) / 3);
      margin-bottom: 80px;
    }

    margin-right: 12px;
    // margin-right: 16px; // for none sticking to each others
    margin-bottom: 23px;
  }
}
</style>

<template>
  <div v-animate.repeat.fade="'slide-right'" class="flag">
    <slot
      ><svg-icon
        v-if="name"
        :name="`flags24/${name}-flag`"
        class="flag__flag"
      ></svg-icon
    ></slot>
  </div>
</template>

<script>
export default {
  name: 'Flag24',
  props: {
    name: {
      type: String,
      default: null
    }
  }
}
</script>

<style lang="scss" scoped>
.flag {
  // @include bp(tablet) {
  //   font-size: 24px;
  //   width: 72px;
  //   height: 72px;
  //   margin-right: calc((100% - ((100% - 72px * 4) / 3) - (72px * 4)) / 3);
  //   margin-bottom: 30px;
  //   padding: 13px;
  //   justify-content: left;
  // }
  // @include bp(desktop-large) {
  //   width: 80px;
  //   height: 80px;
  //   margin-right: calc((100% - ((100% - 80px * 4) / 3) - (80px * 4)) / 3);
  //   padding: 15px;
  // }
  @include bp(desktop-prewide) {
    font-size: 36px;

    width: 100px;
    height: 100px;
    // margin-right: calc((100% - ((100% - 100px * 4) / 3) - (100px * 4)) / 3);
    padding: 13px;
  }

  font-size: 20px;
  font-weight: 400;

  position: relative;

  display: flex;

  box-sizing: border-box;
  width: 72px;
  height: 72px;
  // margin-right: calc((100% - ((100% - 72px * 4) / 3) - (72px * 4)) / 3);
  padding: 11px;

  border: 2px solid $color__green;
  border-radius: 50%;

  justify-content: center;
  align-items: center;

  .flag__flag {
    width: 100%;
    height: 100%;
  }
}
</style>

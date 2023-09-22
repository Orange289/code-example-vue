<template>
  <div class="foot-address"><slot></slot></div>
</template>

<script>
export default {
  name: 'FootAddress'
}
</script>

<style lang="scss" scoped>
.foot-address {
  @include bp(tablet) {
    font-size: 14px;

    flex-grow: 0;
    grid-row: 2;
  }
  @include bp(desktop-large) {
    font-size: 16px;
  }
  @include bp(desktop-wide) {
    font-size: 18px;
  }

  font-size: 16px;
  font-weight: 300;
  line-height: 20px;

  width: 100%;
  margin-bottom: 30px;

  color: $color__black--light;

  // br {
  //   display: none;
  // }
}
</style>

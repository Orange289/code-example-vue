<template>
  <div class="notice"><slot></slot></div>
</template>

<script>
export default {
  name: 'Notice'
}
</script>

<style lang="scss" scoped>
.notice {
  @include bp(tablet) {
    font-size: 16px;
    line-height: 1.25;

    padding: 15px 0 15px 20px;
  }
  @include bp(desktop-large) {
    font-size: 22px;
    line-height: 1.36;

    padding: 20px 0 15px 40px;
  }
  @include bp(desktop-wide) {
    font-size: 24px;
    line-height: 1.25;

    padding: 25px 0 25px 40px;
  }

  font-size: 18px;
  line-height: 1.44;

  padding: 15px 0 15px 40px;

  border-left: 2px solid currentColor;
}
</style>

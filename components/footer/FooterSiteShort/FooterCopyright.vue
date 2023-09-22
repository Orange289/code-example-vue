<template>
  <div class="foot-copyright"><slot></slot></div>
</template>

<script>
export default {
  name: 'FootCopyright'
}
</script>

<style lang="scss" scoped>
.foot-copyright {
  @include bp(desktop) {
    margin-bottom: 0;
  }

  font-size: 14px;
  font-weight: 300;
  line-height: 20px;

  width: 100%;
  margin-bottom: 20px;

  color: rgba($color__black--light, 0.5);
}
</style>

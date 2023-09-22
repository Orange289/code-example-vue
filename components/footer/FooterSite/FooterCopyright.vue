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
  @include bp(tablet) {
    margin-bottom: 20px;
    &:last-of-type {
      margin-bottom: 0;
    }
  }

  font-size: 12px;
  font-weight: 300;
  line-height: 20px;

  width: 100%;
  margin-bottom: 10px;

  color: rgba($color__black--light, 0.5);

  ::v-deep h6 {
    font-size: inherit;

    margin: 0;

    color: rgba($color__black--light, 0.5);
  }

  &.foot-copyright--copy {
    color: $color__black--light;
  }
}
</style>

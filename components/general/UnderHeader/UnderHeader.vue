<template>
  <div class="underheader">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'UnderHeader'
}
</script>

<style lang="scss" scoped>
.underheader {
  @include bp(mobile) {
    padding-top: 150px;
  }
  @include bp(tablet) {
    padding-top: 120px;
  }

  width: 100%;
  padding-top: 100px;
}
</style>

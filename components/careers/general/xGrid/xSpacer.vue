<template>
  <div class="xSpacer" v-bind="$attrs"></div>
</template>

<script>
export default {
  name: 'XSpacer'
}
</script>

<style lang="postcss" scoped>
.xSpacer {
  flex-grow: 1;
}
</style>

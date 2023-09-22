<template>
  <xContainer class="xgrid" v-bind="$attrs" v-on="$listeners">
    <slot></slot>
  </xContainer>
</template>

<script>
import xContainer from '../xContainer/xContainer.vue'

export default {
  name: 'XGrid',
  components: { xContainer }
}
</script>

<style lang="postcss" scoped>
.xgrid {
  .xgrid {
    padding: 0;
  }
}
</style>

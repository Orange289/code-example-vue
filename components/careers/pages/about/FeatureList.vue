<template>
  <xRow class="feature-list">
    <xCol
      v-for="(item, index) in items"
      :key="index"
      cols="24"
      sm="8"
      md="24"
      lg="12"
    >
      <!-- <transition name="down"> -->
      <Feature
        :class="item.icon"
        :icon="item.icon"
        :text="item.text"
        :desc="item.desc"
        :style="{ 'transition-delay': `${0.15 * index}s` }"
      />
      <!-- </transition> -->
    </xCol>
  </xRow>
</template>

<script>
import { xRow, xCol } from '../../general/xGrid'
import Feature from './Feature.vue'

export default {
  name: 'FeatureList',
  components: {
    xRow,
    xCol,
    Feature
  },
  props: {
    items: {
      type: Array,
      default: null
    }
  }
}
</script>

<style lang="scss" scoped>
.feature-list {
  @media (--md) {
    justify-content: space-between;
  }
}
</style>

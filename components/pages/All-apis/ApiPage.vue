<template>
  <DefaultLayout>
    <slot></slot>
    <ForDevelopers
      :integrate-link="integrateLink"
      class="httpapi__ForDevelopers"
    >
    </ForDevelopers>
  </DefaultLayout>
</template>

<script>
import ForDevelopers from './ForDevelopers.vue'
import DefaultLayout from '~/components/layouts/default.vue'

export default {
  name: 'ApiPage',
  components: {
    DefaultLayout,
    ForDevelopers
  },
  props: {
    integrateLink: {
      type: String,
      default: '#'
    }
  }
}
</script>

<style lang="scss">
html {
  scroll-behavior: smooth;
}
</style>

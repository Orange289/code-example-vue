<template>
  <ApiPage :integrate-link="integrate_link" class="fixapi">
    <Intro class="intro" />
    <Fixscheme :integrate-link="integrate_link" />
  </ApiPage>
</template>

<script>
import ApiPage from '../ApiPage.vue'
import Fixscheme from './Fixscheme.vue'
import Intro from './Intro.vue'

export default {
  name: 'TechnologyFIXAPI',
  components: {
    ApiPage,
    Intro,
    Fixscheme
  },
  created() {
    this.$route.meta.currentPageName = this.$t(
      'exante.pages.apis.items.fix-api.name'
    )
  }
}
</script>

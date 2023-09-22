<template>
  <ApiPage :integrate-link="integrate_link" class="httpapi">
    <Intro class="httpapi__intro" />
    <Integration class="httpapi__features"> </Integration>
    <Examples class="httpapi__examples"> </Examples>
  </ApiPage>
</template>

<script>
import ApiPage from '../ApiPage.vue'
import Intro from './Intro.vue'
import Integration from './Integration.vue'
import Examples from './examples.vue'

export default {
  name: 'HTTPAPIPage',
  components: {
    ApiPage,
    Intro,
    Integration,
    Examples
  },
  created() {
    this.$route.meta.currentPageName = this.$t(
      'exante.pages.apis.items.http-api.name'
    )
  }
}
</script>

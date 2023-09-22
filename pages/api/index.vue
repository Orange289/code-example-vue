<script>
import AllApis from '~/components/pages/All-apis/All-apis.vue'

export default {
  name: 'AllApisPage',
  mixins: [AllApis],
  data() {
    return {
      noBreadcrumbs: true
    }
  },
  head() {
    return {
      link: [{ rel: 'canonical', href: 'https://exante.eu/all-apis/' }]
    }
  }
}
</script>

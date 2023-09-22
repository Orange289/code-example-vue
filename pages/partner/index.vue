<script>
import Partner from '~/components/pages/Partner/Partner.vue'

export default {
  name: 'PartnerPage',
  mixins: [Partner],
  data() {
    return {
      noBreadcrumbs: true
    }
  }
}
</script>

<style lang="scss">
html {
  scroll-behavior: smooth;
  @include bp(tablet) {
    scroll-padding-top: 80px;
  }
}
</style>

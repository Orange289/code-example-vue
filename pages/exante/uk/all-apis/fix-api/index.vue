<script>
import FixApiPage from '~/components/pages/All-apis/fix/fix.vue'

export default {
  name: 'FixApiPage',
  mixins: [FixApiPage],
  data() {
    return {
      integrate_link: 'https://api.exante.eu/fix-api/'
    }
  }
}
</script>

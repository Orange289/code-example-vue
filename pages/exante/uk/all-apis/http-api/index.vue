<script>
import HttpApiPage from '~/components/pages/All-apis/http/http.vue'

export default {
  name: 'HttpApiPage',
  mixins: [HttpApiPage],
  data() {
    return {
      integrate_link: 'https://api.exante.eu/http-api/'
    }
  }
}
</script>

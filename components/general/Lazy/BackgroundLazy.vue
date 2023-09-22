<script>
import lozad from 'lozad'

export default {
  name: 'BackgroundLazy',
  props: {
    size: {
      type: String,
      default: 'cover'
    }
  },
  data() {
    return {
      loaded: false,
      lozadSelector: false
    }
  },
  mounted() {
    const self = this

    if (process.browser) {
      this.$el.classList.add('BackgroundLazy')
      this.$el.addEventListener('load', this.setLoaded)

      lozad(this.lozadSelector || this.$el, {
        loaded() {
          self.setLoaded()
        }
      }).observe()
    }

    // this.$el.setAttribute('data-background-image', this.backgroundImage)
    // this.$el.addClass('bg-loaded')
  },
  beforeDestroy() {
    if (process.browser) {
      this.$el.removeEventListener('load', this.setLoaded)
    }
  },
  methods: {
    setLoaded() {
      this.$el.style.backgroundSize = this.size
      this.loaded = true
    }
  }
}
</script>

<style lang="scss">
.BackgroundLazy {
  color: $color__text;
  background-size: cover;

  &[data-loaded='true'] {
    color: #fff;
  }
}
</style>

// source: https://markus.oberlehner.net/blog/lazy-loading-responsive-images-with-vue/
import lozad from 'lozad'

export default {
  name: 'LazyMixin',
  props: {
    backgroundColor: {
      type: String,
      default: '#efefef'
    },
    height: {
      type: Number,
      default: null
    },
    width: {
      type: Number,
      default: null
    }
  },
  data() {
    return {
      loaded: false,
      defaultType: 'image'
    }
  },
  computed: {
    aspectRatio() {
      // Calculate the aspect ratio of the image
      // if the width and the height are given.
      if (!this.width || !this.height) return null

      return (this.height / this.width) * 100
    },
    style() {
      // The background color is used as a
      // placeholder while loading the image.
      // You can use the dominant color of the
      // image to improve perceived performance.
      // See: https://manu.ninja/dominant-colors-for-lazy-loading-images/
      const style = { backgroundColor: this.backgroundColor }

      if (this.width) style.width = `${this.width}px`

      // If the image is still loading and an
      // aspect ratio could be calculated, we
      // apply the calculated aspect ratio by
      // using padding top.
      const applyAspectRatio = this.loading && this.aspectRatio
      if (applyAspectRatio) {
        // Prevent flash of unstyled image
        // after the image is loaded.
        style.height = 0
        // Scale the image container according
        // to the aspect ratio.
        style.paddingTop = `${this.aspectRatio}%`
      }

      return style
    }
  },
  mounted() {
    // not in prerender
    // if (!this.$root.context.isDev) {
    // As soon as the <img> element triggers
    // the `load` event, the loading state is
    // set to `false`, which removes the apsect
    // ratio we've applied earlier.
    // this.$el.addEventListener('load', this.setLoaded)
    // We remove the event listener as soon as
    // the component is destroyed to prevent
    // potential memory leaks.
    // this.$once('hook:destroyed', () => {
    //   this.$el.removeEventListener('load', this.setLoaded)
    // })
    const _self = this
    lozad(this.$el.querySelector('.lazy'), {
      loaded() {
        _self.setLoaded()
        _self.$emit('load')
      }
    }).observe()
    // }
  },
  methods: {
    setLoaded() {
      this.loaded = true
    },
    getExtention(scrset) {
      const pathWithout2x = scrset.split(' 2x')[0]
      const extention = pathWithout2x.split('.').pop()
      return extention === 'svg' ? 'svg+xml' : extention
    },
    gettype(scrset) {
      return this.defaultType + '/' + this.getExtention(scrset)
    }
  }
  // beforeDestroy() {
  //   this.$el.removeEventListener('load', this.setLoaded)
  // }
}

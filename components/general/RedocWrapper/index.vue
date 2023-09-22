<template>
  <client-only placeholder="Loading...">
    <div id="redoc-container"></div>
  </client-only>
</template>

<script>
// import and require not working normal
// script in head work well
// import * as Redoc from 'redoc/bundles/redoc.standalone'
// const Redoc = require('redoc/bundles/redoc.standalone.js')

export default {
  name: 'RedocWrapper',
  props: ['specOrSpecUrl', 'options'],
  data() {
    return {
      // extra initial options
      options_: {
        // scrollYOffset: 50
        // hideDownloadButton: true
      }
    }
  },
  created() {
    if (this.options) {
      this.options_ = Object.assign(this.options_, this.options)
    }
  },
  mounted() {
    if (process.browser) {
      const self = this

      window.addEventListener('load', function() {
        // eslint-disable-next-line no-undef
        Redoc.init(
          self.specOrSpecUrl || self.specOrSpecUrlData,
          self.options_ || self.optionsData,
          document.getElementById('redoc-container')
        )
      })
    }
  },
  head() {
    return {
      script: [
        {
          src: '/static/libs/redoc.standalone.js'
          // src: 'https://cdn.jsdelivr.net/npm/redoc/bundles/redoc.standalone.js'
        }
      ]
    }
  }
}
</script>

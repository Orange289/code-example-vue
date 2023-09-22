<template>
  <highlight-code :lang="lang">{{ code }}</highlight-code>
</template>

<script>
import Vue from 'vue'
import VueHighlightJS from 'vue-highlight.js'

// Highlight.js languages (Only required languages)
import bash from 'highlight.js/lib/languages/bash'
import json from 'highlight.js/lib/languages/json'

/*
 * Import Highlight.js theme
 * Find more: https://highlightjs.org/static/demo/
 */
import 'highlight.js/styles/default.css'

/*
 * Use Vue Highlight.js
 */
Vue.use(VueHighlightJS, {
  // Register only languages that you want
  languages: {
    bash,
    json
  }
})

export default {
  name: 'Highlight',
  props: {
    code: {
      type: String,
      requred: true
    },
    lang: {
      type: String,
      requred: true
    }
  }
}
</script>

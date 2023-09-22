<template>
  <div v-if="source" class="lazypicture_fallback">
    <PicturePartLazy
      v-if="source.length > 1"
      :style="pictureStyle"
      :default-src="defaultSrc"
      :default-srcset="defaultSrcset"
      :source="source"
      :alt="alt"
      @load="onload"
    >
    </PicturePartLazy>

    <ImageLazy
      v-if="source.length == 1"
      :style="pictureStyle"
      :lazy-src="src"
      :lazy-srcset="source[0].srcset"
      :alt="alt"
      class="lazypicture__picture"
      @load="onload"
    ></ImageLazy>
  </div>
</template>

<script>
import PicturePartLazy from './PicturePartLazy.vue'
import ImageLazy from './ImageLazy.vue'

export default {
  name: 'Picturelazy',
  components: {
    PicturePartLazy,
    ImageLazy
  },
  props: {
    defaultSrc: {
      type: String,
      default: null
    },
    defaultSrcset: {
      type: String,
      default: null
    },
    alt: {
      type: String,
      default: null
    },
    pictureStyle: {
      type: Object,
      default: null
    },
    source: {
      type: Array,
      default: null
    },
    src: {
      type: String,
      default: null
    }
  },
  methods: {
    onload() {
      this.$emit('load')
    }
  }
}
</script>

<style lang="scss" scoped>
.lazypicture_fallback {
  display: inline-flex;

  max-width: 100%;
  height: auto;
}
</style>

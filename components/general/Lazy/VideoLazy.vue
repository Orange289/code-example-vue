<template>
  <div class="lazyvideo">
    <video :data-poster="lazyPoster" class="lazy">
      <source
        v-for="video in source"
        :key="video.src"
        :data-src="video.src"
        :type="gettype(video.src)"
      />
    </video>
    <noscript v-if="loaded">
      <video :poster="lazyPoster" v-bind="$attrs" v-on="$listeners">
        <source
          v-for="video in source"
          :key="video.src"
          :src="video.src"
          :type="gettype(video.src)"
        />
      </video>
    </noscript>
  </div>
</template>

<script>
import LazyMixin from './Lazy'

export default {
  name: 'Videolazy',
  mixins: [LazyMixin],
  props: {
    source: {
      type: Array,
      default: null
    },
    lazyPoster: {
      type: String,
      default: null
    }
  },
  data() {
    return {
      defaultType: 'video'
    }
  }
}
</script>

<style lang="scss" scoped>
.lazyvideo {
  display: inline-flex;
  max-width: 100%;
  height: auto;
}
</style>

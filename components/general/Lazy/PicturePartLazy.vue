<template>
  <div v-if="source" class="lazypicture">
    <picture
      ref="picture"
      :data-alt="alt"
      :data-iesrc="defaultSrcset || source[source.length - 1].srcset"
      class="lazy lazypicture__picture"
    >
      <source
        v-for="image in source"
        :key="image.srcset"
        :media="image.media"
        :srcset="image.srcset"
        :type="gettype(image.srcset)"
        :data-iesrc="defaultSrc || defaultSrcset"
      />
    </picture>
    <noscript>
      <picture v-bind="$attrs" v-on="$listeners" class="lazypicture__picture">
        <source
          v-for="image in source"
          :key="image.srcset"
          :media="image.media"
          :srcset="image.srcset"
          :type="gettype(image.srcset)"
        />
        <img
          :srcset="defaultSrcset || source[source.length - 1].srcset"
          :alt="alt"
        />
      </picture>
    </noscript>
  </div>
</template>

<script>
import LazyMixin from './Lazy'

export default {
  name: 'PicturePartLazy',
  mixins: [LazyMixin],
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
    source: {
      type: Array,
      default: null
    }
  }
}
</script>

<style lang="scss" scoped>
.lazypicture {
  display: inline-flex;

  width: 100%;
  max-width: 100%;
  height: auto;
}
</style>

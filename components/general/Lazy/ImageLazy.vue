<template>
  <div class="lazyimg">
    <img
      :data-src="lazySrc"
      :data-srcset="lazySrcset"
      :alt="alt"
      v-bind="$attrs"
      class="lazy"
      loading="lazy"
      v-on="$listeners"
    />
    <noscript>
      <img
        :alt="alt"
        v-bind="$attrs"
        v-on="$listeners"
        :src="lazySrc"
        :srcset="lazySrcset"
        loading="lazy"
      />
    </noscript>
  </div>
</template>

<script>
import LazyMixin from './Lazy'

export default {
  name: 'ImageLazy',
  mixins: [LazyMixin],
  props: {
    lazySrc: {
      type: String,
      default: null
    },
    lazySrcset: {
      type: String,
      default: null
    },
    alt: {
      type: String,
      default: null
    }
  }
}
</script>

<style lang="scss" scoped>
.lazyimg {
  display: inline-flex;

  max-width: 100%;
  height: auto;

  img {
    display: inline-block;

    width: 100%;
    max-width: 100%;
    height: auto;
  }

  // img.lazy:not([data-loaded='true']) {
  //   overflow: hidden;

  //   width: 0;
  //   height: 0;
  // }
}
</style>

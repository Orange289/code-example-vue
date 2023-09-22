<template>
  <div class="backmap">
    <picturelazy
      v-if="!inited || !mdAndUp"
      :src="defaultSrc"
      :source="mapSrcset"
      class="backmap__image"
      alt="map"
    ></picturelazy>
    <client-only>
      <BackMapAnimation
        v-show="inited"
        v-if="mdAndUp"
        class="backmap__animation"
        @init="inited = true"
      ></BackMapAnimation>
    </client-only>
  </div>
</template>

<script>
import picturelazy from '~/components/general/Lazy/PictureLazy.vue'

export default {
  name: 'BackMap',
  components: {
    picturelazy,
    BackMapAnimation: () => import('./BackMapAnimation.vue')
  },
  data() {
    return {
      defaultSrc: '/static/images/careers/about/map.png',
      mdAndUpMedia: false,
      mdAndUp: false,
      inited: null
    }
  },
  computed: {
    mapSrcset() {
      return [
        {
          srcset: `/static/images/careers/about/map.2x.webp 2x`
        },
        {
          srcset: `${this.defaultSrc} 1x, /static/images/careers/about/map.2x.png 2x`
        }
      ]
    }
  },
  beforeMount() {
    this.mdAndUpMedia = window.matchMedia('(min-width:1152px)')
  },
  mounted() {
    this.onResize()
    window.addEventListener('resize', this.onResize)
  },
  beforeDestroy() {
    window.removeEventListener('resize', this.onResize)
  },
  methods: {
    onResize() {
      this.mdAndUp = this.mdAndUpMedia.matches
    }
  }
}
</script>

<style lang="postcss" scoped>
.backmap {
  margin: 0;

  pointer-events: none;
  position: absolute;
  display: block;
  width: 100%;
  height: auto;
  z-index: -1;
  top: 15%;
  left: 0;

  padding-bottom: calc(100% / (316 / 201));
  @media (--sm) {
    margin: 0 -24px;
  }
  @media (--md) {
    width: 1500px;
    height: 1000px;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    margin: 0;

    padding-bottom: 0;
  }
}

.backmap__image,
.backmap__animation {
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  position: absolute;
  width: 100%;
  height: 100%;
}

.backmap__image {
  width: 100%;
  height: 100%;
}

.backmap__image ::v-deep {
  picture,
  img {
    width: 100%;
    height: 100%;
  }
}
</style>

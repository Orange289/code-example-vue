<template>
  <div
    :is="tag"
    v-scroll="onScroll"
    v-resize="setHeights"
    :class="['parallax', { 'parallax--image-loaded': loaded }]"
    :style="{ color: loaded ? loadedColor : defaultColor }"
  >
    <picturelazy
      v-if="parallaxImages"
      ref="picture"
      :source="parallaxImages"
      :picture-style="{ transform: transform }"
      role="presentation"
      alt=""
      class="parallax__image"
      @load="onLoad"
    ></picturelazy>
    <div class="parallax__content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
import picturelazy from '~/components/general/Lazy/PictureLazy.vue'
import MobileBP from '~/components/general/Mixins/MobileBP.vue'

export default {
  name: 'Parallax',
  components: {
    picturelazy
  },
  mixins: [MobileBP],
  props: {
    dataBackgroundImageSet: {
      type: String,
      default: null
    },
    parallaxImages: {
      type: Array,
      default: null
    },
    defaultColor: {
      type: String,
      default: '#222224'
    },
    loadedColor: {
      type: String,
      default: '#fff'
    },
    tag: {
      type: String,
      default: 'section'
    },
    extraOffset: {
      type: Number,
      default: 0
    }
  },
  data() {
    return {
      loaded: false,
      containerHeight: 0,
      pictureHeight: 0,
      offset: 0,
      extraInitialTranslate: this.extraOffset
    }
  },
  computed: {
    transform() {
      return `translate3d(0, calc(${this.startTranslate}px - ${this.translate}px), -1px)`
    },
    maxPossibleTranslate() {
      return (
        this.pictureHeight -
        this.containerHeight -
        Math.abs(this.extraInitialTranslate)
      )
    },
    extraTranslate() {
      return Math.abs(this.maxPossibleTranslate) >
        Math.abs(this.extraInitialTranslate)
        ? this.extraInitialTranslate
        : 0
    },
    maxoffset() {
      return this.maxPossibleTranslate >= 0 ? this.maxPossibleTranslate : 0
    },
    translate() {
      return this.offset - this.extraTranslate || 0
    },
    startTranslate() {
      if (this.notMobile && this.pictureHeight > this.containerHeight) {
        return (this.pictureHeight - this.containerHeight) / 2
      } else if (!this.notMobile) {
        return this.extraInitialTranslat
      } else {
        return 0
      }
    }
  },
  mounted() {
    this.setHeights()
  },
  methods: {
    onLoad() {
      this.loaded = true
      this.setHeights()
    },
    setHeights() {
      if (this.$refs.picture) {
        this.$nextTick(function() {
          this.pictureHeight = this.$refs.picture.$el.querySelector(
            'img'
          ).clientHeight
          this.containerHeight = this.$el.clientHeight
        })
      }
    },
    onScroll() {
      if (process.browser && window && this.parallaxImages) {
        if (window.scrollY <= this.containerHeight) {
          this.offset = (this.maxoffset * window.scrollY) / this.containerHeight
        }
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.parallax {
  position: relative;
  z-index: 0;

  overflow: hidden;

  .parallax__image {
    position: absolute;
    z-index: -1;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;

    display: inline-flex;
    // background-repeat: no-repeat;
    // background-attachment: fixed;
    // background-position: center;
    // background-size: cover;

    width: auto;
    max-width: none;
    min-height: 100%;

    transition: transform 0.2s linear;
    pointer-events: none;

    align-items: center;
    justify-content: center;
    // transform: translateZ(-1px) scale(1.25); // css parallax
    // transform: translate3d(0, -180px, -1px); // default transform
    will-change: transform;

    ::v-deep .lazypicture__picture {
      @include bp(tablet) {
        flex-shrink: 0;
      }

      display: inline-flex;

      flex-grow: 1;
    }
    ::v-deep img {
      @supports (object-fit: cover) {
        @include bp(0 desktop-large) {
          object-position: left;
        }

        object-fit: cover;
      }
      @supports not (object-fit: cover) {
        @include bp(0 desktop-large) {
          left: 0;

          transform: none;
        }

        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        left: 50%;

        transform: translateX(-50%);
      }
    }

    ::v-deep {
      .lazypicture__picture,
      img {
        width: auto;
        min-width: 100%;
        max-width: none;
        min-height: 100%;
      }
    }
  }

  .parallax__content {
    width: 100%;
  }
}
</style>

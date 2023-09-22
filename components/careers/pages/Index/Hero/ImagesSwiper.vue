<template>
  <div
    :key="resizeKey"
    v-swiper:swiper="initSwiper"
    class="slider"
    @click="onClick"
  >
    <div class="swiper-wrapper">
      <div
        v-for="(item, index) in items"
        :key="index"
        class="swiper-slide slide slider__slide"
      >
        <div class="slide__img">
          <img
            :src="`${apiUrl}${item.attributes.url}`"
            :alt="item.attributes.name"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Vue from 'vue'
import 'swiper/swiper-bundle.min.css'

if (process.browser) {
  const VueAwesomeSwiper = require('vue-awesome-swiper/dist/ssr')
  Vue.use(VueAwesomeSwiper)
}

export default {
  props: {
    items: {
      type: Array,
      required: true
    }
  },
  data() {
    return {
      swiperOptionsImages: {
        effect: 'fade',
        loop: true,
        autoHeight: true,
        autoplay: {
          disableOnInteraction: false
        }
      },
      apiUrl: 'https://content.exante.eu',
      resizeKey: 0 // for recreate swiper
    }
  },
  computed: {
    initSwiper() {
      return this.swiperOptionsImages
    }
  },
  mounted() {
    this.$nextTick(() => {
      if (this.getSwiper()) {
        this.$emit('isMounted', this.getSwiper())
      }
    })
  },
  methods: {
    getSwiper() {
      return this.swiper
    },
    onClick() {
      this.swiper.slideNext()
    }
    // setController(controller) {
    //   if (controller) {
    //     this.swiper.controller.control = controller
    //   }
    // }
  }
}
</script>

<style lang="postcss" scoped>
.slider {
  color: var(--accent-300-color);
  height: 100%;
  cursor: pointer;

  @media (--sm) {
    margin-right: calc(
      var(--xContainer__padding) * -1
    ); /* for full right width */
  }
  /* @media (--sm) {
    margin: 0 -74px 0 0;
  }
  @media (--md) {
    margin: 0 -106px 0 0;
  } */
  @media (--xl) {
    margin-right: calc((100vw - ((100% / 13) * 24)) / -2);
  }

  .slider__slide {
    height: 100%;
    @media (--sm) {
      max-height: 552px;
      /* max-height: 100vh;
      max-height: calc(var(--vh, 1vh) * 100); */
    }
    @media (--xl) {
      max-height: 720px;
    }
  }

  .swiper-wrapper {
    @media (--sm) {
      height: 100%;
    }
  }

  .slide__img {
    display: flex;
    justify-content: flex-start;
    height: 100%;
  }

  .slide__img,
  .slide__img img {
    width: 100%;
    /* object-fit: contain; */
    object-fit: cover;
    /* @media (--sm) {
      width: auto;
      height: 100%;
    } */
  }

  img[src='/static/images/careers/hero/image-7.jpg'],
  img[src='/static/images/careers/hero/image-12.jpg'] {
    object-position: left;
  }
}

.swiper-slide {
  opacity: 0 !important;
}
.swiper-slide.swiper-slide-active {
  opacity: 1 !important;
}
</style>

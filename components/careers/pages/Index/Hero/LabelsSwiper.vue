<template>
  <div :key="resizeKey" v-swiper:swiper="initSwiper" class="sliderlabels">
    <div class="swiper-wrapper">
      <div
        v-for="(item, index) in items"
        :key="index"
        class="swiper-slide slide"
      >
        <div class="slide__title">{{ item.title }}</div>
      </div>
    </div>
    <div class="swiper-pagination"></div>
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
      swiperOptionsLabels: {
        effect: 'fade',
        loop: true,
        pagination: {
          el: '.swiper-pagination',
          clickable: true
        },
        autoplay: {
          delay: 5000
        }
      },
      resizeKey: 0 // for recreate swiper
    }
  },
  computed: {
    initSwiper() {
      return this.items.length > 1 ? this.swiperOptionsLabels : false
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
    setController(controller) {
      if (controller) {
        this.swiper.controller.control = controller
      }
    }
  }
}
</script>

<style lang="postcss" scoped>
.sliderlabels {
  width: 100%;
  display: flex;
  flex-direction: column-reverse;

  @media (--sm) {
    margin-top: auto;
    flex-direction: column;
  }

  &::v-deep {
    .swiper-pagination-bullet {
      width: 4px;
      height: 4px;
      margin: 0 16px 0 0;
      background-color: var(--grayscale-475-color);
      opacity: 1;
    }
    .swiper-pagination-bullet.swiper-pagination-bullet-active {
      background-color: var(--accent-300-color);
    }
  }
}

.swiper-pagination {
  position: relative;
  line-height: 1;
  font-size: 0px;
  bottom: 0;
  margin: 16px -16px 16px 0;

  @media (--sm) {
    margin: 20px 0 0;
    text-align: right;
  }
}

.slide {
  .slide__title {
    font-weight: 300;
    font-size: 12px;
    line-height: 16px;
    padding: 0 20px;

    display: flex;
    align-items: center;
    text-align: center;
    color: var(--accent-300-color);

    &::v-deep br {
      display: none;
    }

    @media (--sm) {
      padding: 0;
      text-align: right;
      width: 90%;
      margin-left: auto;
      display: flex;
      justify-content: flex-end;

      &::v-deep br {
        display: inline-block;
      }
    }
  }
}

.swiper-slide {
  opacity: 0 !important;
}
.swiper-slide.swiper-slide-active {
  opacity: 1 !important;
}
</style>

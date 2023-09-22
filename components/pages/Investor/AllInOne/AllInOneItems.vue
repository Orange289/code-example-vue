<template>
  <div
    @mousemove="onMousemove"
    @mouseleave="onMouseLeave"
    class="allinone-items"
  >
    <div v-swiper:mySwiper="swiperOptions" class="allinone-items__swiper">
      <div class="allinone-items__wrapper swiper-wrapper">
        <AllInOneItem
          :itemTKey="`${itemsTKey}.${icon}`"
          v-for="(item, icon, index) in $t(itemsTKey)"
          :key="icon + index"
          class="allinone-items__item swiper-slide"
        ></AllInOneItem>
      </div>
    </div>
    <DemoAccountButton
      v-if="!loggedin"
      class="allinone-items__button"
      data-style-type="fgreen"
    ></DemoAccountButton>
    <div class="allinone-items__scrollbar"></div>
  </div>
</template>

<script>
import Vue from 'vue'
import AllInOneItem from './AllInOneItem.vue'
import 'swiper/swiper-bundle.min.css'
import DemoAccountButton from '~/components/general/DemoAccountButton/DemoAccountButton.vue'

if (process.browser) {
  const VueAwesomeSwiper = require('vue-awesome-swiper/dist/ssr')
  Vue.use(VueAwesomeSwiper)
}

export default {
  name: 'AllInOneItems',
  components: {
    AllInOneItem,
    DemoAccountButton
  },
  data() {
    return {
      itemsTKey: 'exante.pages.investor.allInOne.items',
      mobileBreakpoint: false,
      tabletBreakpoint: false,
      swiperOptions: {
        slidesPerView: 'auto',
        spaceBetween: 0,
        breakpointsInverse: true,
        freeMode: true,
        // freeModeSticky: true,
        mousewheel: {
          eventsTarget: '.allinone'
        },
        scrollbar: {
          el: '.allinone-items__scrollbar',
          dragClass: 'allinone-items__handle'
        },
        breakpoints: {
          '480': {
            spaceBetween: 30
          },
          '980': {
            spaceBetween: 20
          },
          // when window width is >= 1680px
          '1680': {
            spaceBetween: 55
          }
        },
        on: {
          resize() {
            this.updateSize()
          }
        }
      }
    }
  },
  computed: {
    loggedin() {
      return this.$store.state.loggedin
    }
  },
  beforeMount() {
    this.mobileBreakpoint = window.matchMedia('(max-width:979px)')
    this.tabletBreakpoint = window.matchMedia('(max-width:1279px)')
  },
  mounted() {
    this.breakpointEvent()
    window.addEventListener('resize', this.breakpointEvent)
  },
  beforeDestroy() {
    window.removeEventListener('resize', this.breakpointEvent)
  },
  methods: {
    breakpointEvent() {
      if (this.mobileBreakpoint.matches) {
        this.mySwiper.slideTo(0, 0)
        this.mySwiper.allowTouchMove = false
      } else {
        this.mySwiper.allowTouchMove = true
      }
    },
    onMousemove(e) {
      if (!this.mobileBreakpoint.matches) {
        const offsetLeft = this.$el.offsetLeft - 300
        let widthOfSwiper = document.body.clientWidth
        if (!this.tabletBreakpoint.matches) {
          widthOfSwiper -= offsetLeft
        }
        const part = widthOfSwiper / 4
        const rightPart = widthOfSwiper * 0.75

        if (this.tabletBreakpoint.matches) {
          if (e.pageX >= rightPart) {
            this.mySwiper.slideNext(3000)
          } else if (e.pageX <= part) {
            this.mySwiper.slidePrev(3000)
          } else {
            this.mySwiper.setTranslate(this.mySwiper.getTranslate())
          }
        } else if (!this.tabletBreakpoint.matches) {
          if (e.pageX >= rightPart + offsetLeft) {
            this.mySwiper.slideNext(3000)
          } else if (e.pageX > offsetLeft && e.pageX <= part + offsetLeft) {
            this.mySwiper.slidePrev(3000)
          } else {
            this.mySwiper.setTranslate(this.mySwiper.getTranslate())
          }
        }
      }
    },
    onMouseLeave() {
      if (!this.mobileBreakpoint.matches) {
        this.mySwiper.slideTo(0, 3000)
        //     this.mySwiper.slideReset()
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.allinone-items {
  @include bp(mobile-med tablet) {
    margin-right: -30px;
  }

  width: 100%;
  .allinone-items__wrapper {
    @include bp(0 tablet) {
      height: auto;

      justify-content: center;
      flex-wrap: wrap;
    }
    @include bp(tablet) {
      align-items: flex-start;
    }

    display: flex;
  }

  .allinone-items__swiper {
    @include bp(mobile-med tablet) {
      padding-right: 15px;
      padding-left: 15px;
    }

    z-index: 2;

    overflow: visible;
  }

  .allinone-items__item {
    @include bp(0 tablet) {
      margin-bottom: 20px;
    }
  }

  .allinone-items__button {
    @include bp(tablet) {
      display: none;
    }

    display: block;

    max-width: 180px;
    margin: 0 auto;
  }
  .allinone-items__scrollbar {
    @include bp(tablet) {
      top: 0;
      bottom: auto;

      display: inline-block;

      transform: translateY(400px);
    }
    @include bp(desktop-wide) {
      bottom: 70px;
    }

    position: absolute;
    z-index: 1;
    bottom: 0;
    left: 0;

    display: none;

    width: 100%;
    height: 2px;

    pointer-events: none;

    background: $color__gray--light;
  }
  ::v-deep .allinone-items__handle {
    @include bp(tablet) {
      width: 240px;
    }
    @include bp(desktop) {
      width: 290px;
    }

    width: 100px;
    height: 100%;

    border-radius: 4px;
    background: $color__green;
  }
}
</style>

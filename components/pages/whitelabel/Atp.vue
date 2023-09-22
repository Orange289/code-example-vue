<template>
  <div v-if="$te('exante.pages.whitelabel.atp.items')" class="atp">
    <Container class="atp__container">
      <div class="atp__items-wrap swiper-container">
        <ul class="atp__items swiper-wrapper">
          <li
            v-for="(item, icon, index) in $t(
              'exante.pages.whitelabel.atp.items'
            )"
            :key="index"
            v-animate.repeat.fade="'slide-up'"
            class="atp__item swiper-slide"
          >
            <div class="atp__item-icon-wrap">
              <svg-icon :name="icon" class="atp__item-icon"></svg-icon>
            </div>
            <div v-html="item.text" class="atp__item-text"></div>
          </li>
        </ul>
        <ul class="atp__control-items swiper-pagination">
          <li
            v-for="index in Math.ceil(
              Object.keys($t('exante.pages.whitelabel.atp.items')).length / 4
            )"
            :class="[
              'atp__control-item',
              { 'atp__control-item--active': index == 0 }
            ]"
            :key="index"
          >
            <button
              :aria-label="`Slide to page ${index + 1}`"
              class="atp__control-button"
              type="button"
            ></button>
          </li>
        </ul>
      </div>
    </Container>
  </div>
</template>

<script>
// TODO: rewrite to vue-awesome-swiper, or rewrite vue-awesome-swiper to swiper
import SwiperObj, { Pagination } from 'swiper'
import Container from '~/components/general/Container.vue'

import 'swiper/swiper-bundle.min.css'

SwiperObj.use([Pagination])

export default {
  name: 'Atp',
  components: { Container },
  data() {
    return {
      swiper: false,
      swiperOptions: {
        pagination: {
          el: '.atp__control-items',
          bulletClass: 'atp__control-item',
          bulletActiveClass: 'atp__control-item--active',
          clickable: true,
          renderBullet(index, className) {
            return `<li class="${className}"><button class="atp__control-button"type="button" aria-label="Slide to page ${index +
              1}"></button></li>`
          }
        },
        slidesPerGroup: 2,
        slidesPerView: 2,
        slidesPerColumn: 2,
        breakpoints: {
          640: {
            slidesPerGroup: 4,
            slidesPerView: 4,
            slidesPerColumn: 2
          },
          960: {
            slidesPerColumn: 1,
            slidesPerGroup: 8,
            slidesPerView: 'auto'
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
  mounted() {
    this.swiper = new SwiperObj('.swiper-container', this.swiperOptions)
    window.addEventListener('resize', this.onResize)
    this.onResize()
  },
  beforeDestroy() {
    window.removeEventListener('resize', this.onResize)

    if (this.swiper) {
      this.swiper.destroy(true, true)
    }
  },
  methods: {
    onResize() {
      if (this.swiper.pagination.bullets.length <= 1) {
        this.swiper.pagination.el.classList.add('atp__control-items--hide')
      } else {
        this.swiper.pagination.el.classList.remove('atp__control-items--hide')
      }
    }
  }
}
</script>

<style lang="scss" scoped>
// @keyframes atp__control-item--active {
//   from {
//     width: 0;
//   }

//   to {
//     width: 100%;
//   }
// }
.atp {
  @include bp(tablet) {
    padding-top: 50px;
    padding-bottom: 48px;
  }
  @include bp(desktop-wide) {
    padding-top: 93px;
    padding-bottom: 140px;
  }

  overflow: hidden;

  padding-top: 40px;
  padding-bottom: 55px;

  .atp__items {
    @include bp(tablet) {
      // flex-wrap: nowrap;
      // max-height: 135px;
      min-width: 100%;
      margin-bottom: 0px;

      justify-content: space-around;
    }
    // @include bp(desktop-wide) {
    //   margin-right: -110px;
    // }
    // display: flex;

    max-height: 270px;
    margin-top: 0;
    margin-bottom: 10px;
    margin-left: 0;
    padding-left: 0;

    list-style: none;

    // flex-wrap: wrap;
    // justify-content: space-between;
  }

  .atp__item {
    @include bp(tablet) {
      max-width: 90px;
      // max-width: none;
      margin: 0;
    }

    display: flex;
    flex-direction: column;

    margin: 0 0 25px;

    align-items: center;
  }

  .atp__item-icon-wrap {
    @include bp(desktop-large) {
      margin-bottom: 18px;
    }

    margin-bottom: 15px;
  }

  .atp__item-icon {
    @include bp(desktop-large) {
      max-width: 60px;
      max-height: 60px;
    }
    @include bp(desktop-wide) {
      max-width: 80px;
      max-height: 80px;
    }

    max-width: 50px;
    max-height: 50px;
  }

  .atp__item-text {
    @include bp(tablet) {
      max-width: 100px;
    }
    @include bp(desktop-large) {
      font-size: 18px;
      line-height: 1.39;
    }
    @include bp(desktop-wide) {
      font-size: 22px;
      line-height: 1.36;
    }

    font-family: $font-family-second;
    font-size: 16px;
    font-weight: normal;
    line-height: 1.25;

    max-width: 96px;

    text-align: center;
  }

  .atp__control-items {
    @include bp(tablet) {
      margin-top: 40px;
    }
    @include bp(desktop-large) {
      margin-top: 65px;
    }
    @include bp(desktop-wide) {
      margin-top: 0;
    }

    position: relative;

    display: flex;

    margin: 0;
    padding-left: 0;

    list-style: none;

    transition-property: transform;
    transform: translate3d(0, 0, 0);

    justify-content: center;

    &.atp__control-items--hide {
      display: none;
    }
  }

  ::v-deep .atp__control-item {
    // @include bp(tablet) {
    //   margin-right: 20px;
    // }
    margin-right: 20px;

    text-align: center;

    .atp__control-button {
      position: relative;

      display: block;

      width: 40px;
      height: 2px;

      color: inherit;
      border: 0;
      background-color: #bfdfcd;

      &:hover {
        background-color: $color__green;
      }
    }

    &:last-child {
      margin-right: 0;
    }

    &.atp__control-item--active {
      .atp__control-button {
        background-color: $color__green;

        // &:after {
        //   position: absolute;
        //   top: 0;
        //   bottom: 0;
        //   left: 0;

        //   height: 100%;

        //   content: '';
        //   animation: atp__control-item--active 2.7s ease;

        //   background-color: $color__green;
        // }
      }
    }
  }
}
</style>

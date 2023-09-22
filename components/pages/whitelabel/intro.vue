<template>
  <section
    class="intro"
    data-background-image-set="url('/static/images/whitelabel/intro.jpg') 1x, url('/static/images/whitelabel/intro@2x.jpg') 2x"
  >
    <Container class="intro__container">
      <div v-animate.repeat.fade="'slide-left'" class="intro__top">
        <h2
          class="whitelabel__header intro__header"
          v-html="$t('exante.pages.whitelabel.intro.header')"
        ></h2>
      </div>
      <div
        v-if="$t('exante.pages.whitelabel.intro.questions')"
        class="questions"
      >
        <div class="questions__items-wrap ">
          <ul class="questions__items">
            <li
              v-for="(question, index) in $t(
                'exante.pages.whitelabel.intro.questions'
              )"
              :key="index"
              v-animate.repeat.fade="'slide-up'"
              :class="[
                'questions__item',
                { 'questions__item--active': index == 0 }
              ]"
              v-html="question.text"
            ></li>
          </ul>
          <ul class="questions__control-items">
            <li
              v-for="(question, index) in $t(
                'exante.pages.whitelabel.intro.questions'
              )"
              :key="index"
              :class="[
                'questions__control-item',
                { 'questions__control-item--active': index == 0 }
              ]"
            >
              <button
                :aria-label="`Slide to question ${index + 1}`"
                class="questions__control-button"
                type="button"
              ></button>
            </li>
          </ul>
        </div>
        <div class="questions__answer">
          <div v-animate.repeat.fade="'slide-left'">
            <p v-html="$t('exante.pages.whitelabel.intro.answer')"></p>
          </div>
          <div v-animate.repeat.fade="'slide-right'">
            <SiteButton
              class="branded__button"
              data-style-type="fgreenwt"
              href="#models"
            >
              <span v-html="$t('exante.pages.whitelabel.intro.button')"></span>
            </SiteButton>
          </div>
        </div>
      </div>
    </Container>
  </section>
</template>

<script>
// TODO: rewrite to vue-awesome-swiper, or rewrite vue-awesome-swiper to swiper
import SwiperObj, { Autoplay, Pagination } from 'swiper'
import Container from '~/components/general/Container.vue'
import Block800 from '~/components/general/blocks/Block-800.vue'
import bglazy from '~/components/general/Lazy/BackgroundLazy.vue'
import MobileBP from '~/components/general/Mixins/MobileBP.vue'
import SiteButton from '~/components/general/SiteButton/SiteButton.vue'

import 'swiper/swiper-bundle.min.css'

SwiperObj.use([Autoplay, Pagination])

export default {
  name: 'WhiteLabelIntro',
  components: { Container, SiteButton },
  mixins: [bglazy, Block800, MobileBP],
  data() {
    return {
      swiper: false,
      swiperOptions: {
        containerModifierClass: 'questions__items-wrap--',
        slideClass: 'questions__item',
        slideActiveClass: 'questions__item--active',
        slideDuplicatedActiveClass: 'questions__item--duplicate-active',
        slideVisibleClass: 'questions__item--visible',
        slideDuplicateClass: 'questions__item--duplicate',
        slideNextClass: 'questions__item--next',
        slideDuplicatedNextClass: 'questions__item--duplicate-next',
        slidePrevClass: 'questions__item--prev',
        slideDuplicatedPrevClass: 'questions__item--duplicate-prev',
        wrapperClass: 'questions__items',
        loop: true,
        autoplay: {
          delay: 3000,
          disableOnInteraction: false
        },
        pagination: {
          el: '.questions__control-items',
          bulletClass: 'questions__control-item',
          bulletActiveClass: 'questions__control-item--active',
          clickable: true,
          dynamicBullets: true,
          renderBullet(index, className) {
            return `<li class="${className}"><button class="questions__control-button" type="button" aria-label="Slide to question ${index +
              1}"></button></li>`
          }
        },
        slidesPerView: 1
      }
    }
  },
  beforeDestroy() {
    this.destroySwiper()
  },
  methods: {
    destroySwiper() {
      if (this.swiper) {
        this.swiper.destroy(true, true)
        this.swiper = false
      }
    },
    beforeCheckMobileBreakpoint() {
      if (!process.browser) {
        return false
      }
    },
    onNotMobile() {
      this.destroySwiper()
    },
    onMobile() {
      if (!this.swiper) {
        this.swiper = new SwiperObj(
          '.questions__items-wrap',
          this.swiperOptions
        )
      }
    }
  }
}
</script>

<style lang="scss" scoped>
@keyframes questions__control-item--active {
  from {
    width: 0;
  }

  to {
    width: 100%;
  }
}

.intro {
  @include bp(tablet) {
    min-height: 600px;
    padding-top: 55px;
    padding-bottom: 80px;

    background-position: center;
    // background-position: 35% 100%;
    // background-size: 125% 108% !important;
  }
  @include bp(desktop-large) {
    min-height: 650px;
    padding-top: 75px;
    padding-bottom: 82px;

    // background-position: 49% 100%;
    // background-size: cover !important;
  }
  @include bp(desktop-wide) {
    min-height: 800px;
    padding-top: 100px;
    padding-bottom: 110px;

    // background-position: 49% 75%;
  }

  display: inline-block;
  display: flex;
  overflow: hidden;
  flex-direction: column;

  min-height: 700px;
  padding-top: 50px;
  padding-bottom: 60px;

  background-position: 55% 75%;

  .intro__container,
  .intro__text {
    display: flex;
    flex-direction: column;

    flex-grow: 1;
    justify-content: space-between;
  }

  .intro__header.whitelabel__header {
    @include bp(tablet desktop-large) {
      font-size: 46px;
    }
    @include bp(desktop-large desktop-wide) {
      padding-bottom: 16px;
    }

    margin-top: 0;

    color: inherit;
  }

  ::v-deep .site-button {
    @include bp(desktop-wide) {
      padding: 14px 57px;
    }
  }

  .intro__top {
    height: 100%;

    align-items: flex-start;
    flex-grow: 1;
  }
}

.questions {
  height: auto;

  flex-grow: 0;
  flex-shrink: 1;

  .questions__items-wrap {
    position: relative;

    overflow: hidden;
  }

  .questions__items {
    @include bp(tablet) {
      line-height: 1.56;

      margin-right: -70px;
    }
    @include bp(desktop-large) {
      font-size: 18px;
      line-height: 1.67;
    }
    @include bp(desktop-wide) {
      font-size: 22px;
      line-height: 1.59;

      margin-right: -100px;
    }

    font-family: $font-family-second;
    font-size: 16px;
    line-height: 1.25;

    position: relative;

    display: flex;

    height: 100%;
    margin: 0;
    padding-left: 0;

    list-style: none;

    transition-property: transform;
    transform: translate3d(0, 0, 0);

    flex-grow: 0;
  }

  .questions__item {
    @include bp(tablet) {
      max-width: 230px;
      margin-right: 70px;
      margin-bottom: 30px;

      flex-shrink: 1;
    }
    @include bp(desktop-large) {
      max-width: 280px;
      margin-right: 70px;
      margin-bottom: 35px;
    }
    @include bp(desktop-wide) {
      max-width: 295px;
      margin-right: 100px;
      margin-bottom: 45px;
    }

    display: inline-flex;

    width: 100%;
    height: auto !important;

    flex-grow: 0;
    flex-shrink: 0;
  }

  .questions__answer {
    @include bp(tablet) {
      display: flex;

      align-items: center;
    }

    p {
      @include bp(tablet) {
        font-size: 18px;
        line-height: 1.67;

        display: flex;

        margin-right: 60px;
        margin-bottom: 0;
      }
      @include bp(desktop-large) {
        font-size: 22px;
        line-height: 1.36;

        margin-right: 60px;
      }
      @include bp(desktop-wide) {
        margin-right: 55px;
      }

      margin-top: 0;
      margin-bottom: 30px;
    }

    ::v-deep b {
      font-weight: 700;
    }
  }

  .questions__control-items {
    @include bp(tablet) {
      display: none;
    }

    display: flex;

    margin: 20px 0 40px;
    padding-left: 0;

    list-style: none;
  }

  ::v-deep .questions__control-item {
    margin-right: 10px;

    .questions__control-button {
      position: relative;

      display: block;

      width: 40px;
      height: 2px;
      margin: 0;
      padding: 0;

      color: inherit;
      border: 0;
      background-color: currentColor;

      &:hover {
        background-color: $color__green;
      }
    }

    &:last-child {
      margin-right: 0;
    }

    &.questions__control-item--active {
      .questions__control-button {
        &:after {
          position: absolute;
          top: 0;
          bottom: 0;
          left: 0;

          height: 100%;

          content: '';
          animation: questions__control-item--active 3.2s ease;

          background-color: $color__green;
        }
      }
    }
  }
}
</style>

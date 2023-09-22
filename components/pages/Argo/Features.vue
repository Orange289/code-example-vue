<template>
  <section
    class="features"
    data-background-image-set="url('/static/images/argo/features-bg.jpg') 1x, url('/static/images/argo/features-bg@2x.jpg') 2x"
  >
    <Container>
      <h3
        class="argo__title"
        v-html="$t('exante.pages.funds.argo.features.header')"
      ></h3>
      <div class="features__text">
        <p
          class="features__desc"
          v-html="$t('exante.pages.funds.argo.features.desc')"
        ></p>
        <p
          class="features__note"
          v-html="$t('exante.pages.funds.argo.features.note')"
        ></p>
      </div>
      <div
        :key="resizeKey"
        v-swiper:mySwiper="swiperOptions"
        class="features__swiper"
      >
        <div class="features__wrapper swiper-wrapper icon-text-list">
          <IconText
            v-for="(item, key, index) in $t(
              'exante.pages.funds.argo.features.items'
            )"
            :key="index + item.title || item.text"
            v-animate.repeat.fade="'slide-up'"
            :style="{ 'transition-delay': `${0.15 * (index + 1)}s` }"
            :item="item"
            :icon="item.icon ? false : key"
            class="icon-text-list__item swiper-slide"
          ></IconText>
        </div>
        <div class="swiper-pagination"></div>
      </div>
    </Container>
  </section>
</template>

<script>
import Vue from 'vue'
import bglazy from '~/components/general/Lazy/BackgroundLazy.vue'
import Container from '~/components/general/Container'
import IconText from '~/components/icon-text/IconText.vue'
import MobileBP from '~/components/general/Mixins/MobileBP.vue'

import 'swiper/swiper-bundle.min.css'

if (process.browser) {
  const VueAwesomeSwiper = require('vue-awesome-swiper/dist/ssr')
  Vue.use(VueAwesomeSwiper)
}

export default {
  components: {
    Container,
    IconText
  },
  mixins: [bglazy, MobileBP],
  data() {
    return {
      // tablet: false,
      resizeKey: 0,
      swiperOptions: {
        breakpoints: {
          '960': {
            slidesPerView: 1
          }
        },
        pagination: {
          el: '.swiper-pagination',
          clickable: true
        }
      }
    }
  },
  methods: {
    onNotMobile() {
      this.mySwiper.destroy()
    },
    onMobile() {
      this.resizeKey += 1
    }
  }
}
</script>

<style lang="scss" scoped>
.features {
  @include bp(tablet) {
    padding-top: 160px;
    padding-bottom: 80px;
  }

  position: relative;

  padding-top: 50px;
  padding-bottom: 50px;

  color: $color__white;
  background-position: center;

  &:before {
    position: absolute;
    top: 0;
    left: 0;

    width: 100%;
    height: 100%;

    content: '';

    background: rgba($color__black-2, 0.9);
  }

  h3 {
    @include argoTitle();
    @include bp(tablet) {
      font-size: 80px;
      line-height: 95px;

      margin-bottom: 80px;
    }

    margin-top: 0;
    margin-bottom: 40px;

    color: #fff;
  }
}

.features__desc {
  @include bp(tablet) {
    font-family: $font-family-second;
    font-size: 40px;
    line-height: 60px;

    max-width: 432px;
    margin-top: 0;
    margin-bottom: 0;
  }
  @include bp(desktop-large) {
    max-width: 540px;
    margin-right: 120px;
  }

  font-family: $font-family-second;
  font-size: 20px;

  margin-bottom: 30px;

  color: $color__green-2;
}

.features__note {
  @include argoNote();
  @include bp(tablet) {
    font-size: 20px;
  }

  font-weight: 600;

  margin-bottom: 50px;
}

.features__wrapper {
  @include bp(tablet) {
    flex-wrap: wrap;
    justify-content: space-between;
  }

  ::v-deep .icon-text .icon-text__icon-wrap {
    @include bp(desktop-large) {
      margin-bottom: 30px;
    }

    margin-bottom: 20px;
  }

  ::v-deep .icon-text .icon-text__title {
    @include bp(desktop-large) {
      font-size: 30px;
      line-height: 36px;
    }

    font-family: $font-family-base;
    font-size: 20px;
    font-weight: 600;
    line-height: 24px;
  }

  ::v-deep .icon-text .icon-text__text {
    @include bp(desktop-large) {
      font-size: 20px;
      line-height: 28px;
    }

    line-height: 24px;
  }
}

.features__swiper {
  @include bp(tablet) {
    padding-bottom: 0;
  }

  padding-bottom: 40px;

  .swiper-pagination {
    @include bp(tablet) {
      display: none;
    }

    bottom: 0;

    text-align: left;
  }

  ::v-deep .swiper-slide {
    @include bp(tablet) {
      max-width: 288px;
      margin-bottom: 80px;
    }
    @include bp(desktop-large) {
      max-width: 360px;
    }
    @include bp(desktop-wide) {
      max-width: 500px;
    }
  }

  ::v-deep .swiper-pagination-bullet {
    width: 10px;
    height: 10px;

    background: rgba($color__white, 0.7);
  }

  ::v-deep .swiper-pagination-bullet-active {
    background: $color__white;
  }
}

.features__text {
  @include bp(tablet) {
    display: flex;

    margin-bottom: 80px;

    align-items: flex-start;
  }
}
</style>

<template>
  <section class="performance">
    <Container>
      <h3 v-html="$t('exante.pages.funds.argo.performance.header')"></h3>
      <div
        v-swiper:mySwiper="swiperOptions"
        :key="resizeKey"
        class="performance__table"
      >
        <div class="performance__side-headers">
          <div
            v-for="(item, index) in $t(
              'exante.pages.funds.argo.performance.table.sideHeaders'
            )"
            :key="index"
            v-html="item"
            class="performance__cell performance__cell--side"
          ></div>
        </div>
        <div class="performance__data swiper-wrapper">
          <div
            v-for="(col, colIndex) in $t(
              'exante.pages.funds.argo.performance.table.cols'
            )"
            :key="colIndex"
            class="performance__col swiper-slide"
          >
            <div class="performance__head">
              <strong v-html="col.title"></strong>
              <span v-html="col.subtitle"></span>
            </div>
            <div class="performance__cells">
              <div
                v-for="(cell, cellIndex) in col.cells"
                :key="cellIndex"
                v-html="cell"
                class="performance__cell"
              ></div>
            </div>
          </div>
        </div>
        <div class="swiper-pagination"></div>
      </div>
      <p
        v-html="$t('exante.pages.funds.argo.performance.note')"
        class="performance__note"
      ></p>
    </Container>
  </section>
</template>

<script>
import Vue from 'vue'
import Container from '~/components/general/Container'
import 'swiper/swiper-bundle.min.css'

if (process.browser) {
  const VueAwesomeSwiper = require('vue-awesome-swiper/dist/ssr')
  Vue.use(VueAwesomeSwiper)
}

export default {
  name: 'Performance',
  components: {
    Container
  },
  data() {
    return {
      desktop: false,
      resizeKey: 0,
      swiperOptions: {
        breakpoints: {
          '1150': {
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
  beforeMount() {
    this.desktop = window.matchMedia('(min-width:1151px)')
  },
  mounted() {
    this.checkBreakpoint()
    window.addEventListener('resize', this.checkBreakpoint)
  },
  beforeDestroy() {
    window.removeEventListener('resize', this.checkBreakpoint)
  },
  methods: {
    checkBreakpoint() {
      if (this.desktop.matches) {
        this.mySwiper.destroy()
      } else {
        this.resizeKey += 1
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.performance {
  @include bp(desktop) {
    padding-top: 160px;
    // padding-bottom: 160px;
    padding-bottom: 60px;
  }

  padding-top: 50px;
  padding-bottom: 50px;

  h3 {
    @include argoTitle();

    margin-top: 0;

    text-align: center;

    ::v-deep span {
      color: $color__green-2;
    }
  }
}

.performance__table {
  @include bp(desktop) {
    font-size: 20px;

    display: flex;

    margin-right: 0;
    margin-bottom: 60px;
    margin-left: 0;
    padding-bottom: 0;
  }
  @include bp(desktop-wide) {
    margin-bottom: 80px;
  }

  margin-right: -20px;
  margin-bottom: 40px;
  margin-left: -20px;
  padding-bottom: 30px;

  .swiper-slide {
    @include bp(desktop) {
      width: 14%;
    }
  }

  .swiper-pagination {
    @include bp(desktop) {
      display: none;
    }

    bottom: 0;

    padding-left: 15px;

    text-align: left;

    ::v-deep .swiper-pagination-bullet {
      width: 10px;
      height: 10px;
      margin-right: 16px;

      background: rgba($color__black-2, 0.7);
    }

    ::v-deep .swiper-pagination-bullet-active {
      background: $color__black-2;
    }
  }
}

.performance__data {
  position: relative;

  .performance__cell:nth-child(1),
  .performance__cell:nth-child(5),
  .performance__cell:nth-child(6) {
    height: 60px;
  }

  .performance__cell {
    @include bp(desktop) {
      padding-right: 0;

      text-align: center;

      &:nth-child(5) {
        height: 55px;
      }

      &:nth-child(1),
      &:nth-child(6) {
        height: 80px;
      }
    }
    @include bp(desktop-large) {
      padding-top: 14px;
      padding-bottom: 15px;

      &:nth-child(5) {
        height: auto;
      }
    }
    @include bp(desktop-wide) {
      &:nth-child(1),
      &:nth-child(5),
      &:nth-child(6) {
        height: 60px;
      }
    }

    font-weight: 600;

    padding-right: 20px;

    text-align: right;
  }
}

.performance__side-headers {
  @include bp(desktop) {
    position: static;

    width: 245px;
    margin-top: 141px;
  }
  @include bp(desktop-large) {
    margin-top: 165px;
  }
  @include bp(desktop-wide) {
    width: 490px;
    margin-top: 140px;
  }

  position: absolute;
  z-index: 10000;
  top: 91px;

  width: 154px;
}

.performance__cell {
  @include bp(desktop) {
    padding-top: 15px;
    padding-bottom: 15px;
  }
  @include bp(desktop-large) {
    min-height: 56px;
    // padding-top: 13px;
    // padding-bottom: 13px;
  }
  @include bp(desktop-prewide) {
    padding-top: 13px;
    padding-bottom: 13px;
  }
  @include bp(desktop-wide) {
    min-height: 60px;
  }

  padding-top: 10px;
  padding-bottom: 10px;

  ::v-deep strong {
    font-size: inherit;
    line-height: 1;
  }

  &:nth-child(2n + 1) {
    background: $color__gray-2-light;
  }

  &--side {
    padding-left: 20px;
  }
}

.performance__head {
  @include bp(desktop) {
    margin-left: 0;

    text-align: center;
  }

  margin-left: -134px;

  text-align: right;

  strong {
    @include bp(desktop) {
      max-width: 100%;
      height: 70px;
      padding-top: 0;
      padding-right: 0;
      // padding-bottom: 20px;
    }
    // @include bp(desktop-large) {
    //   padding-bottom: 24px;
    // }
    // @include bp(desktop-prewide) {
    //   padding-bottom: 20px;
    // }

    font-size: inherit;
    line-height: inherit;

    display: block;

    max-width: 180px;
    margin-left: auto;
    padding-top: 20px;
    padding-right: 20px;
    padding-bottom: 10px;

    color: $color__green-2;
  }

  span {
    @include bp(desktop) {
      display: flex;

      margin-right: 15px;
      margin-left: 15px;
      padding-right: 0;

      align-items: center;
    }
    @include bp(desktop-large) {
      min-height: 95px;
      // padding-top: 20px;
      // padding-bottom: 20px;
    }
    @include bp(desktop-wide) {
      //   min-height: 63px;
      min-height: 70px;
    }

    display: block;

    padding-top: 10px;
    padding-right: 20px;
    padding-bottom: 10px;

    border-top: 1px solid $color__gray-2-light;
  }
}

.performance__col {
  @include bp(desktop) {
    &:nth-child(1) .performance__head strong {
      padding-top: 25px;
    }

    &:nth-child(3) {
      width: 24%;
    }

    &:nth-child(3) .performance__head,
    &:nth-child(4) .performance__head,
    &:nth-child(5) .performance__head,
    &:nth-child(6) .performance__head,
    &:nth-child(7) .performance__head {
      padding-top: 70px;
    }

    &:nth-child(3) .performance__head strong,
    &:nth-child(5) .performance__head strong {
      position: absolute;
      top: 0;
      left: 30%;

      width: 208px;
      max-width: 208px;
    }

    &:nth-child(5) .performance__head strong {
      left: 68%;

      width: 132px;
      max-width: 132px;
    }

    &:nth-child(4) .performance__head strong,
    &:nth-child(6) .performance__head strong,
    &:nth-child(7) .performance__head strong {
      display: none;
    }

    &:nth-child(5),
    &:nth-child(6) {
      width: 10%;
    }

    &:nth-child(7) {
      width: 13%;
    }

    &:nth-child(3) .performance__head span,
    &:nth-child(5) .performance__head span,
    &:nth-child(6) .performance__head span {
      margin-right: 0;
      padding-right: 15px;
    }

    &:nth-child(4) .performance__head span,
    &:nth-child(6) .performance__head span,
    &:nth-child(7) .performance__head span {
      margin-left: 0;
      padding-left: 15px;
    }
  }
  @include bp(desktop-large) {
    // &:nth-child(1) .performance__head strong {
    //   padding-top: 25px;
    // }

    // &:nth-child(3) .performance__head,
    // &:nth-child(4) .performance__head,
    // &:nth-child(5) .performance__head,
    // &:nth-child(6) .performance__head,
    // &:nth-child(7) .performance__head {
    //   padding-top: 74px;
    // }

    // &:nth-child(2) {
    //   width: 12%;
    // }

    &:nth-child(6) {
      width: 11%;
    }

    &:nth-child(7) {
      width: 14%;
    }

    &:nth-child(3) .performance__head strong {
      left: 45%;
    }

    &:nth-child(5) .performance__head strong {
      left: 84%;
    }
  }
  @include bp(desktop-prewide) {
    &:nth-child(1) .performance__head strong {
      padding-top: 23px;
    }
  }
  @include bp(desktop-wide) {
    &:nth-child(5) .performance__head strong {
      left: 110%;
    }
    &:nth-child(4) {
      width: 17%;
    }

    // &:nth-child(3) .performance__head,
    // &:nth-child(4) .performance__head,
    // &:nth-child(5) .performance__head,
    // &:nth-child(6) .performance__head,
    // &:nth-child(7) .performance__head {
    //   padding-top: 73px;
    // }
  }
  &:nth-child(2) {
    display: none;
  }
  &:nth-child(3) .performance__head strong,
  &:nth-child(4) .performance__head strong {
    padding-top: 0;
  }
}

.performance__note {
  @include bp(desktop) {
    font-size: 20px;
    line-height: 24px;

    text-align: center;
  }

  margin: 0;

  color: $color__gray-2;
}
</style>

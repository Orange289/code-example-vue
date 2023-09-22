<template>
  <div class="markets">
    <Container>
      <div class="markets__item markets__item--markets">
        <h2
          v-html="$t('exante.pages.banks-institutionals.markets.headerMarkets')"
          v-animate.repeat.fade="'slide-left'"
          class="markets__header"
        ></h2>
        <imagelazy
          v-animate.repeat.fade="'slide-left'"
          :alt="$t('exante.pages.banks-institutionals.markets.headerMarkets')"
          lazy-srcset="/static/images/banks-institutionals/markets.png 1x, /static/images/banks-institutionals/markets@2x.png 2x"
          class="markets__item-logos markets__item-logos--desktop"
        />
        <imagelazy
          v-animate.repeat.fade="'slide-left'"
          :alt="$t('exante.pages.banks-institutionals.markets.headerMarkets')"
          lazy-srcset="/static/images/banks-institutionals/markets_300.png 1x, /static/images/banks-institutionals/markets_300@2x.png 2x"
          class="markets__item-logos markets__item-logos--mobile"
        />
        <imagelazy
          v-animate.repeat.fade="'slide-left'"
          :alt="$t('exante.pages.banks-institutionals.markets.headerMarkets')"
          lazy-srcset="/static/images/banks-institutionals/markets_900.png 1x, /static/images/banks-institutionals/markets_900@2x.png 2x"
          class="markets__item-logos markets__item-logos--tablet"
        />
      </div>
      <div class="markets__item markets__item--partners">
        <h2
          v-html="
            $t('exante.pages.banks-institutionals.markets.headerPartners')
          "
          v-animate.repeat.fade="'slide-right'"
          class="markets__header"
        ></h2>
        <picturelazy
          :source="[
            {
              srcset:
                '/static/images/banks-institutionals/partners_1440.png 1x, /static/images/banks-institutionals/partners_1440@2x.png 2x',
              media: '(min-width:960px) and (max-width:1679px)'
            },
            {
              srcset:
                '/static/images/banks-institutionals/partners.png 1x, /static/images/banks-institutionals/partners@2x.png 2x',
              media: '(min-width:1680px)'
            },
            {
              srcset:
                '/static/images/banks-institutionals/partners_300.png 1x, /static/images/banks-institutionals/partners_300@2x.png 2x'
            }
          ]"
          v-animate.repeat.fade="'slide-right'"
          :alt="$t('exante.pages.banks-institutionals.markets.headerPartners')"
          class="markets__item-logos"
        ></picturelazy>
      </div>
      <div class="markets__item markets__item--banks">
        <h2
          v-html="$t('exante.pages.banks-institutionals.markets.headerBanks')"
          v-animate.repeat.fade="'slide-up'"
          class="markets__header"
        ></h2>
        <picturelazy
          :source="[
            {
              srcset:
                '/static/images/banks-institutionals/banks/banks-tablet_3@2x.png',
              media: '(min-width:960px) and (max-width:1679px)'
            },
            {
              srcset:
                '/static/images/banks-institutionals/banks/banks_3@2x.png',
              media: '(min-width:1680px)'
            },
            {
              srcset:
                '/static/images/banks-institutionals/banks/banks-mobile_3.png'
            }
          ]"
          v-animate.repeat.fade="'slide-up'"
          :alt="$t('exante.pages.banks-institutionals.markets.headerBanks')"
          class="markets__item-logos"
        ></picturelazy>
      </div>
    </Container>
  </div>
</template>

<script>
import Container from '~/components/general/Container.vue'
// import Block800 from '~/components/general/blocks/Block-800.vue'
import imagelazy from '~/components/general/Lazy/ImageLazy.vue'
import picturelazy from '~/components/general/Lazy/PictureLazy.vue'

export default {
  name: 'Markets',
  components: {
    Container,
    imagelazy,
    picturelazy
  }
  // mixins: [Block800]
}
</script>

<style lang="scss" scoped>
.markets {
  @include bp(tablet) {
    padding-top: 80px;
    padding-bottom: 45px;
  }
  @include bp(desktop-large) {
    padding-top: 75px;
    padding-bottom: 62px;
  }
  @include bp(desktop-wide) {
    padding-top: 85px;
    padding-bottom: 53px;
  }

  padding-top: 40px;
  padding-bottom: 11px;

  background: #fff;

  .container {
    @include bp(0 tablet) {
      padding-right: 10px;
      padding-left: 10px;
    }
    @include bp(tablet) {
      display: flex;

      flex-wrap: wrap;
    }
    @include bp(desktop-large) {
      display: flex;

      flex-wrap: wrap;
    }
  }
}

.markets__header {
  @include bp(tablet) {
    margin-bottom: 13px;
    margin-left: 4px;
  }
  @include bp(desktop) {
    font-size: 42px;
    line-height: 60px;
  }
  @include bp(desktop-large) {
    font-size: 48px;

    margin-bottom: 21px;
  }

  font-size: 32px;
  line-height: 40px;

  margin: 0;
  margin-left: 25px;
}

.markets__item {
  @include bp(mobile) {
    text-align: center;
  }
  @include bp(tablet) {
    text-align: left;
  }

  &.markets__item--markets {
    @include bp(tablet) {
      max-width: 56%;
      // margin-bottom: 52px;
    }
    // @include bp(desktop-large) {
    //   margin-bottom: 75px;
    // }

    width: 100%;

    .markets__item-logos {
      @include bp(desktop-large) {
        margin-left: -14px;
      }
    }
  }

  // &.markets__item--banks {
  //   width: 100%;

  //   .markets__header {
  //     @include bp(desktop-large) {
  //       margin-bottom: 13px;
  //     }
  //   }

  //   .markets__item-logos {
  //     @include bp(0 tablet) {
  //       padding-left: 5%;
  //     }
  //     ::v-deep .lazypicture {
  //       @include bp(0 tablet) {
  //         max-width: 300px;
  //       }
  //     }
  //   }
  // }

  &.markets__item--partners {
    @include bp(tablet) {
      max-width: calc(44% - 44px);
      // margin-bottom: 52px;
    }
    @include bp(desktop-large) {
      max-width: calc(44% - 30px);
      // margin-bottom: 75px;
      margin-left: 30px;
    }
    @include bp(desktop-wide) {
      max-width: calc(44% - 100px);
      margin-left: 100px;
    }

    width: 100%;
    margin-bottom: 29px;
  }
}

.markets__item-logos--mobile {
  @include bp(tablet) {
    display: none;
  }
}

.markets__item-logos--tablet {
  @include bp(tablet desktop) {
    display: block;
  }

  display: none;
}

.markets__item-logos--desktop {
  @include bp(desktop) {
    display: block;
  }

  display: none;
}
</style>

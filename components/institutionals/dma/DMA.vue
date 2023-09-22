<template>
  <section class="dma">
    <Container class="dma__container">
      <div class="dma__content">
        <h2
          v-animate.repeat.fade="'slide-left'"
          class="dma__header"
          v-html="$t('exante.pages.institutionals.dma.header')"
        ></h2>
        <p
          v-animate.repeat.fade="'slide-left'"
          v-html="$t('exante.pages.institutionals.dma.desc')"
        ></p>
        <h3
          v-animate.repeat.fade="'slide-left'"
          class="dma__listtitle"
          v-html="$t('exante.pages.institutionals.dma.listtitle')"
        ></h3>
        <StartList
          t-key="exante.pages.institutionals.dma.steps"
          class="dma__list"
        ></StartList>
        <p
          v-if="$te('exante.pages.institutionals.dma.afterlist')"
          v-animate.repeat.fade="'slide-left'"
          class="dma__afterlist"
          v-html="$t('exante.pages.institutionals.dma.afterlist')"
        ></p>
      </div>
      <div class="dma__images dma__images--desktop">
        <picturelazy
          v-animate.repeat.fade="'slide-right'"
          :source="[
            {
              srcset:
                '/static/images/screens-black.webp 1x, /static/images/screens-black@2x.webp 2x'
            },
            {
              srcset:
                '/static/images/screens-black.png 1x, /static/images/screens-black@2x.png 2x'
            }
          ]"
          alt="screens"
          class="dma_screens"
        ></picturelazy>
        <picturelazy
          v-animate.repeat.fade="'slide-right'"
          :source="[
            {
              srcset:
                '/static/images/markets.webp 1x, /static/images/markets@2x.webp 2x'
            },
            {
              srcset:
                '/static/images/markets.png 1x, /static/images/markets@2x.png 2x'
            }
          ]"
          alt="Markets"
        ></picturelazy>
      </div>
      <div class="dma__images dma__images--mobile">
        <picturelazy
          v-animate.repeat.fade="'slide-right'"
          :source="[
            {
              srcset:
                '/static/images/screens-black.webp 1x, /static/images/screens-black@2x.webp 2x'
            },
            {
              srcset:
                '/static/images/screens-black.png 1x, /static/images/screens-black@2x.png 2x'
            }
          ]"
          alt="screens"
          class="dma_screens"
        ></picturelazy>
        <picturelazy
          v-animate.repeat.fade="'slide-right'"
          :source="[
            {
              srcset:
                '/static/images/markets-1.webp 1x, /static/images/markets-1@2x.webp 2x'
            },
            {
              srcset:
                '/static/images/markets-1.png 1x, /static/images/markets-1@2x.png 2x'
            }
          ]"
          class="dma__markets"
          alt="Markets 1"
        ></picturelazy>
        <picturelazy
          v-animate.repeat.fade="'slide-right'"
          :source="[
            {
              srcset:
                '/static/images/markets-2.webp 1x, /static/images/markets-2@2x.webp 2x'
            },
            {
              srcset:
                '/static/images/markets-2.png 1x, /static/images/markets-2@2x.png 2x'
            }
          ]"
          class="dma__markets"
          alt="Markets 2"
        ></picturelazy>
      </div>
      <div v-animate.repeat.fade="'slide-left'" class="dma__button-wrap">
        <OpenAccountButton
          data-style-type="fgreen"
          is-start
          class="dma__button"
        ></OpenAccountButton>
      </div>
    </Container>
  </section>
</template>

<script>
import OpenAccountButton from '~/components/general/OpenAccountButton/OpenAccountButton.vue'
import Container from '~/components/general/Container.vue'
import Block800 from '~/components/general/blocks/Block-800.vue'
import StartList from '~/components/institutionals/Start/StartList.vue'
import picturelazy from '~/components/general/Lazy/PictureLazy.vue'

export default {
  name: 'DMA',
  components: {
    Container,
    OpenAccountButton,
    StartList,
    picturelazy
  },
  mixins: [Block800],
  props: {
    texts: {
      type: Object,
      default: null
    }
  }
}
</script>

<style lang="scss" scoped>
.dma {
  @include bp(tablet) {
    // max-height: 600px;
    padding-top: 54px;
    padding-bottom: 50px;
  }
  @include bp(desktop-large) {
    // max-height: 700px;
    padding-top: 74px;
    padding-bottom: 66px;
  }
  @include bp(desktop-wide) {
    // max-height: 800px;
    padding-top: 80px;
    padding-bottom: 78px;
  }

  position: relative;

  overflow: hidden;

  padding-top: 39px;
  padding-bottom: 50px;

  color: #fff;
  background: $color__black--lighter;

  .dma__container {
    @include bp(tablet) {
      display: grid;

      grid-template-columns: 43.75% 53.125%;
      grid-column-gap: 25px;
    }
    @include bp(desktop-large) {
      grid-column-gap: 30px;
    }

    display: flex;

    flex-wrap: wrap;
  }

  .dma__content {
    @include bp(tablet) {
      grid-column: 1;
      grid-row: 1/3;
    }
    @include bp(desktop-large) {
      grid-row: 1/2;
    }

    p {
      @include bp(desktop-large) {
        font-size: 18px;
        line-height: 25px;
      }
      @include bp(desktop-wide) {
        font-size: 22px;
        line-height: 30px;
      }
    }
  }
  .dma__images {
    @include bp(tablet) {
      padding-top: 20px;

      grid-column: 2;
      grid-row: 1/3;
    }
    // @include bp(desktop-wide) {
    //   grid-row: 1/3;
    // }
  }

  .dma__images--desktop {
    @include bp(0 tablet) {
      display: none;
    }
  }

  .dma__images--mobile {
    @include bp(tablet) {
      display: none;
    }

    margin-bottom: 27px;
  }

  .dma_screens {
    @include bp(tablet) {
      margin-top: -10px;
    }
    @include bp(desktop-large) {
      margin-top: -22px;
      margin-bottom: 54px;
    }

    margin-bottom: 20px;
  }

  .dma__header {
    @include h1;
    @include header-underline;
    @include bp(desktop-wide) {
      margin-bottom: 40px;
    }

    color: inherit;
  }

  .dma__listtitle {
    @include bp(tablet) {
      font-size: 16px;

      margin-top: 15px;
      margin-bottom: 26px;
    }
    @include bp(desktop-large) {
      font-size: 18px;
      line-height: 25px;
    }
    @include bp(desktop-wide) {
      font-size: 22px;
      line-height: 40px;

      margin-top: 37px;
      margin-bottom: 26px;
    }

    font-family: $font-family-second;
    font-size: 16px;
    font-weight: 400;

    color: inherit;
  }

  .dma__list {
    margin-bottom: 0;
  }

  .dma__afterlist {
    margin: 0 0 25px;
  }

  .dma__button {
    &:hover,
    &:focus {
      color: inherit;
    }
  }

  .dma__markets {
    width: 100%;
    margin-bottom: 8px;

    ::v-deep picture,
    ::v-deep img {
      width: 100%;
    }
  }
}
</style>

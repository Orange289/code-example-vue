<template>
  <div
    class="compliance"
    data-background-image-set="url('/static/images/compliance-bg.jpg') 1x, url('/static/images/compliance-bg@2x.jpg') 2x"
  >
    <Container>
      <div class="compliance__content">
        <h2
          v-html="$t('exante.pages.institutionals.compliance.header')"
          v-animate.repeat.fade="'slide-left'"
          class="compliance__header"
        ></h2>
        <p
          v-if="$te('exante.pages.institutionals.compliance.desc')"
          v-html="$t('exante.pages.institutionals.compliance.desc')"
          v-animate.repeat.fade="'slide-left'"
          class="compliance__desc"
        ></p>
        <IconTextList :tKey="'exante.pages.institutionals.compliance.items'" />
      </div>
      <!-- <div v-animate.repeat.fade="'slide-right'" class="compliance__logos">
        <picturelazy
          v-for="(logo, index) in logos"
          :key="index"
          :source="[
            {
              srcset: `/static/images/${logo.urlWebp} 1x, /static/images/${logo.urlWebp2x} 2x`
            },
            {
              srcset: `/static/images/${logo.urlPng} 1x, /static/images/${logo.urlPng2x} 2x`
            }
          ]"
          :alt="logo.alt"
          :class="`compliance__logo compliance__logo--${logo.alt}`"
          role="presentation"
        ></picturelazy>
      </div> -->
    </Container>
  </div>
</template>

<script>
import Container from '~/components/general/Container.vue'
import Block800 from '~/components/general/blocks/Block-800.vue'
import IconTextList from '~/components/icon-text/IconTextList.vue'
import bglazy from '~/components/general/Lazy/BackgroundLazy.vue'
// import picturelazy from '~/components/general/Lazy/PictureLazy.vue'

export default {
  name: 'Compliance',
  components: {
    Container,
    IconTextList
    // picturelazy
  },
  mixins: [bglazy, Block800]
  // data() {
  //   return {
  //     logos: [
  //       {
  //         urlPng: 'mfsa.png',
  //         urlPng2x: 'mfsa@2x.png',
  //         urlWebp: 'mfsa.webp',
  //         urlWebp2x: 'mfsa@2x.webp',
  //         alt: 'mfsa'
  //       },
  //       {
  //         urlPng: 'fca.png',
  //         urlPng2x: 'fca@2x.png',
  //         urlWebp: 'fca.webp',
  //         urlWebp2x: 'fca@2x.webp',
  //         alt: 'fca'
  //       },
  //       {
  //         urlPng: 'cysec.png',
  //         urlPng2x: 'cysec@2x.png',
  //         urlWebp: 'cysec.webp',
  //         urlWebp2x: 'cysec@2x.webp',
  //         alt: 'cysec'
  //       },
  //       {
  //         urlPng: 'sfc.png',
  //         urlPng2x: 'sfc@2x.png',
  //         urlWebp: 'sfc.webp',
  //         urlWebp2x: 'sfc@2x.webp',
  //         alt: 'sfc'
  //       }
  //     ]
  //   }
  // }
}
</script>

<style lang="scss" scoped>
.compliance {
  @include bp(desktop) {
    padding-top: 54px;
    padding-bottom: 19px;
  }
  @include bp(desktop-large) {
    padding-top: 67px;
    padding-bottom: 55px;
  }
  @include bp(desktop-wide) {
    background-position: 0 60%;
  }

  position: relative;
  z-index: 1;

  padding-top: 38px;
  padding-bottom: 51px;

  .container {
    @include bp(desktop) {
      display: flex;

      justify-content: space-between;
    }
    @include bp(desktop-wide) {
      justify-content: flex-start;
    }
  }

  ::v-deep .icon-text {
    .icon-text__icon-wrap {
      min-height: 45px;
      margin-bottom: 13px;
    }
    .icon-text__icon {
      color: #bfdfcd;
    }
    .icon-text__title {
      margin-bottom: 11px;
    }
    .icon-text__text {
      margin-top: 0;
    }
  }

  ::v-deep .icon-text-list {
    @include bp(desktop-large) {
      margin-bottom: 0;
    }

    margin-bottom: 48px;

    align-items: flex-start;

    .icon-text-list__item {
      @include bp(desktop) {
        width: 50%;
        margin-bottom: 36px;
      }
      @include bp(desktop-wide) {
        max-width: 400px;
      }

      width: 100%;
      margin-bottom: 30px;
      padding-right: 0;
    }

    .icon-text-list__item:first-child {
      @include bp(tablet) {
        padding-right: 30px;
      }
      @include bp(desktop-wide) {
        margin-right: 100px;
        padding-right: 0;
      }
    }

    .icon-text-list__item:last-child {
      @include bp(desktop) {
        width: 75%;
        max-width: 566px;
        margin-right: 0;
      }
      @include bp(desktop-large) {
        max-width: 650px;
        margin-bottom: 0;
      }
      @include bp(desktop-wide) {
        max-width: 600px;
      }
    }
  }
}

.compliance__header {
  @include h1();
  @include header-underline();
  @include bp(desktop-large) {
    margin-bottom: 49px;
  }

  color: inherit;

  &:after {
    background: currentColor;
  }
}

.compliance__desc {
  @include bp(desktop) {
    margin-bottom: 29px;
  }
  @include bp(desktop-large) {
    font-size: 18px;

    margin-bottom: 46px;
  }
  @include bp(desktop-wide) {
    font-size: 22px;
  }

  margin-bottom: 21px;
}

.compliance__content {
  @include bp(desktop) {
    max-width: 550px;
    margin-right: 100px;
  }
  @include bp(desktop-large) {
    max-width: 736px;
  }
  @include bp(desktop-wide) {
    max-width: 900px;
  }
}

// .compliance__logos {
//   @include bp(desktop) {
//     grid-template-columns: 123px 49px;
//     grid-template-rows: 33px 39px 32px;
//     grid-row-gap: 43px;
//     grid-column-gap: 76px;
//   }
//   @include bp(desktop-large) {
//     grid-row-gap: 46px;
//   }
//   @include bp(desktop-wide) {
//     grid-template-columns: 150px 150px;
//     grid-template-rows: 47px 47px 47px;
//     grid-row-gap: 53px;
//     grid-column-gap: 115px;
//   }

//   display: grid;

//   grid-template-columns: 113px 56px;
//   grid-template-rows: 30px 35px 29px;
//   grid-row-gap: 30px;
//   grid-column-gap: 81px;
// }

// .compliance__logo:last-child {
//   grid-row: 1 / 3;
//   grid-column: 2;
// }
</style>

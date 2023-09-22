<template>
  <section
    class="trading"
    data-background-image-set="url('/static/images/compliance-bg.jpg') 1x, url('/static/images/compliance-bg@2x.jpg') 2x"
  >
    <Container>
      <div class="trading__content">
        <h2
          v-animate.fade="'slide-left'"
          v-html="$t('exante.pages.partner.trading.header')"
          class="trading__title"
        ></h2>
        <p
          v-animate.fade="'slide-left'"
          v-html="$t('exante.pages.partner.trading.desc')"
          class="trading__desc"
        ></p>
        <!-- <div v-animate.repeat.fade="'slide-right'" class="trading__logos">
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
            :class="`trading__logo trading__logo--${logo.alt}`"
            role="presentation"
          ></picturelazy>
        </div> -->

        <OpenAccountButton
          v-animate.fade="'slide-left'"
          data-style-type="fgreen"
          class="trading__button"
        >
          <span v-html="$t('exante.globals.open_account.referral')"></span>
        </OpenAccountButton>
      </div>
    </Container>
  </section>
</template>

<script>
import Container from '~/components/general/Container.vue'
import bglazy from '~/components/general/Lazy/BackgroundLazy.vue'
// import picturelazy from '~/components/general/Lazy/PictureLazy.vue'
import OpenAccountButton from '~/components/general/OpenAccountButton/OpenAccountButton.vue'

export default {
  components: {
    OpenAccountButton,
    Container
    // picturelazy
  },
  mixins: [bglazy]
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
.trading {
  @include bp(desktop) {
    padding: 100px 0 140px;

    background-position-y: 50%;
  }
  @include bp(desktop-large) {
    padding: 100px 0 160px;
  }
  @include bp(desktop-wide) {
    padding: 150px 0 178px;
  }

  padding: 60px 0;

  color: $color__white;
}

.trading__title {
  @include h1();
  @include header-underline($header-underline-color: $color__white);
  @include bp(desktop) {
    max-width: 584px;
  }
  @include bp(desktop-large) {
    max-width: 668px;
  }
  @include bp(desktop-wide) {
    line-height: 60px;
  }

  margin-top: 0;

  color: $color__white;
}

.trading__desc {
  @include bp(desktop) {
    max-width: 524px;
  }
  @include bp(desktop-large) {
    font-size: 18px;

    max-width: 640px;
    margin-bottom: 50px;
  }
  @include bp(desktop-wide) {
    font-size: 22px;
  }

  margin-bottom: 30px;
}

.trading__content {
  max-width: 780px;
}

// .trading__logos {
//   @include bp(0 desktop) {
//     display: grid;

//     grid-gap: 18px;
//     grid-template-columns: 50% 50%;
//   }
//   @include bp(desktop-large) {
//     margin-bottom: 52px;
//   }

//   display: flex;

//   margin-bottom: 42px;

//   align-items: center;
// }

// .trading__logo {
//   margin-right: 40px;

//   &--mfsa {
//     @include bp(desktop-large) {
//       width: 90px;
//       height: 24px;
//     }

//     width: 75px;
//     height: 20px;
//   }

//   &--fca {
//     width: 100px;
//     height: 32px;
//   }

//   &--cysec {
//     @include bp(desktop-large) {
//       width: 100px;
//       height: 26px;
//     }

//     width: 80px;
//     height: 21px;
//   }

//   &--sfc {
//     width: 80px;
//     height: 48px;
//   }
// }

.trading__button {
  @include bp(desktop-large) {
    font-size: 22px;

    min-width: 300px;
  }
  @include bp(desktop-wide) {
    min-width: 320px;
  }
}
</style>

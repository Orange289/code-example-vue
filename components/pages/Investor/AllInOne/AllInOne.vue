<template>
  <section class="allinone">
    <Container>
      <h2
        v-html="$t('exante.pages.investor.allInOne.header')"
        class="allinone__header"
      ></h2>
      <div class="allinone__wrap">
        <picturelazy
          :source="[
            {
              srcset:
                '/static/images/investor/all-in-one.webp 1x, /static/images/investor/all-in-one@2x.webp 2x'
            },
            {
              srcset:
                '/static/images/investor/all-in-one.png 1x, /static/images/investor/all-in-one@2x.png 2x'
            }
          ]"
          alt="all-one-in"
          class="allinone__image"
        ></picturelazy>

        <AllInOneItems class="allinone__items"></AllInOneItems>
      </div>
    </Container>
  </section>
</template>

<script>
import AllInOneItems from './AllInOneItems.vue'
import Container from '~/components/general/Container.vue'
import Block800 from '~/components/general/blocks/Block-800.vue'
import picturelazy from '~/components/general/Lazy/PictureLazy.vue'

export default {
  name: 'AllInOne',
  components: {
    Container,
    AllInOneItems,
    picturelazy
  },
  mixins: [Block800]
}
</script>

<style lang="scss" scoped>
.allinone {
  @include bp(tablet) {
    padding-top: 65px;
    padding-bottom: 0;
  }
  @include bp(desktop-large) {
    padding-top: 90px;
  }
  @include bp(desktop-wide) {
    padding-top: 90px;
    padding-bottom: 21px;
  }

  position: relative;

  overflow: hidden;

  padding-top: 45px;
  padding-bottom: 55px;

  background: #f7f7f7;

  .allinone__wrap {
    @include bp(tablet) {
      display: flex;
    }

    position: relative;
  }

  .allinone__header {
    @include header-underline();
    @include h1;
    @include bp(tablet) {
      margin-bottom: 30px;
    }
    @include bp(desktop-large) {
      margin-bottom: 70px;
      padding-bottom: 10px;
    }
    @include bp(desktop-wide) {
      margin-bottom: 60px;
    }
  }

  .allinone__image {
    @include bp(desktop-large) {
      display: flex;

      width: 100%;
      max-width: 41.5%;
      margin: 0 0 40px;
      margin-bottom: 0;
      margin-left: -4%;

      flex-shrink: 0;
      ::v-deep picture {
        width: 100%;
      }
    }
    @include bp(desktop-wide) {
      max-width: 53.75%;
      margin-left: -5%;
    }
    // max-width: none;
    // margin: 0 -30px 40px;

    display: none;
  }

  .allinone__items {
    @include bp(tablet) {
      margin-top: 0;

      transition: all 0.3s ease;

      flex-shrink: 1;
      will-change: transform, max-width;
    }
    @include bp(desktop-large) {
      max-width: calc(46.25% + 305px + ((100vw - 100%) / 2) + 5%);
      margin-left: 20px;
    }
    @include bp(desktop-wide) {
      max-width: calc(46.25% + 350px + ((100vw - 100%) / 2) + 5%);
      margin-left: 0;
    }

    position: relative;

    &:hover,
    &:focus-within {
      @include bp(desktop-large) {
        transform: translateX(-305px);

        &:before {
          transform: translate(calc(-100% + 305px), 50%);

          opacity: 0;
        }

        // ::v-deep .allinone-item.swiper-slide-active,
        // ::v-deep .allinone-item.swiper-slide-next {
        //   opacity: 0;
        // }
      }
      @include bp(desktop-wide) {
        transform: translateX(-350px);

        &:before {
          transform: translate(calc(-100% + 350px), 50%);
        }
      }
    }

    &:before {
      @include bp(desktop-large) {
        position: absolute;
        z-index: 1;
        top: 58.5%;
        left: -50px;

        display: block;

        width: 100px;
        height: 2px;

        content: '';
        transition: opacity 0.3s ease;
        transform: translate(-45%, 0);
        pointer-events: none;

        background-color: $color__green;
      }
      @include bp(desktop-wide) {
        top: 40%;

        width: 150px;

        transform: translate(-100%, 50%);
      }

      // top: -15px;
      // left: 50%;

      // width: 2px;
      // height: 75px;

      // transform: translate(-50%, -100%);
    }
  }
}
</style>

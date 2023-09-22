<template>
  <section :class="['bonds', { 'bonds--dark': dark }]">
    <Container class="bonds__container">
      <div class="bonds__wrap">
        <h2
          v-animate.repeat.fade="'slide-up'"
          class="bonds__header"
          v-html="$t('exante.pages.institutionals.bonds.title')"
        ></h2>
        <IconTextList
          :t-key="'exante.pages.institutionals.bonds.items'"
          to-row-icon
          class="bonds__items"
        ></IconTextList>
      </div>
      <picturelazy
        v-animate.repeat.fade="'slide-up'"
        :source="imageSrcset"
        class="bonds__image"
        alt="Bond Screener"
      ></picturelazy>

      <div class="bonds__screener screener">
        <p
          v-animate.repeat.fade="'slide-left'"
          class="screener__text"
          v-html="
            $route.path.includes('/uk/')
              ? ukText
              : $t('exante.pages.institutionals.bonds.moreText')
          "
        ></p>
        <svg-icon
          v-animate.repeat.fade="'slide-left'"
          name="institutionals/arrow"
          class="screener__arrow"
          width="100"
          height="10"
        ></svg-icon>
        <div v-animate.repeat.fade="'slide-left'" class="screener__button-wrap">
          <OpenAccountButton
            data-style-type="fgreen"
            class="screener__button"
          ></OpenAccountButton>
        </div>
      </div>
      <!-- </div> -->
    </Container>
  </section>
</template>

<script>
import Container from '~/components/general/Container.vue'
import OpenAccountButton from '~/components/general/OpenAccountButton/OpenAccountButton.vue'
import Block800 from '~/components/general/blocks/Block-800.vue'
import IconTextList from '~/components/icon-text/IconTextList.vue'
import picturelazy from '~/components/general/Lazy/PictureLazy.vue'

export default {
  name: 'Bonds',
  components: {
    Container,
    OpenAccountButton,
    IconTextList,
    picturelazy
  },
  mixins: [Block800],
  props: {
    dark: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      ukText:
        'Use our <a href="/uk/bonds/">Bond Screener</a> to pick up the best bonds from our extensive listing.'
    }
  },
  computed: {
    imageSrcset() {
      const imageName = this.dark ? 'bonds-black' : 'bonds'

      return [
        {
          srcset: `/static/images/${imageName}.webp 1x, /static/images/${imageName}@2x.webp 2x`
        },
        {
          srcset: `/static/images/${imageName}.png 1x, /static/images/${imageName}@2x.png 2x`
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
.bonds {
  @include bp(tablet) {
    padding-top: 60px;
    padding-bottom: 60px;
  }
  @include bp(desktop-large) {
    padding-top: 70px;
    padding-bottom: 70px;
  }
  @include bp(desktop-wide) {
    padding-top: 90px;
    padding-bottom: 93px;
  }

  position: relative;
  z-index: 0;

  overflow: hidden;

  padding-top: 45px;

  color: $color__black--light;
  background-color: $color__gray--lightest;

  &:after {
    @include bp(tablet) {
      position: absolute;
      z-index: 0;
      right: 0;
      bottom: 0;
      left: 0;

      display: block;

      width: 100%;
      height: 440px;

      content: '';
      pointer-events: none;

      background-image: linear-gradient(
        to top,
        #f7f7f7 22%,
        rgba(247, 247, 247, 0) 78%
      );
    }
    @include bp(desktop-wide) {
      height: 400px;
    }
  }

  .bonds__container {
    display: flex;

    flex-wrap: wrap;
  }

  .bonds__header {
    @include h1;
    @include header-underline();
    @include bp(tablet desktop-large) {
      margin-bottom: 45px;
    }
    @include bp(desktop-large desktop-wide) {
      padding-bottom: 10px;
    }
    @include bp(desktop-wide) {
      margin-bottom: 50px;
    }

    color: inherit;
  }

  .bonds__wrap {
    @include bp(tablet) {
      width: 67%;
    }
    @include bp(desktop-large) {
      width: 60%;
    }
    @include bp(desktop-wide) {
      width: 62.5%;
    }

    z-index: 1;
  }

  .bonds__image {
    @include bp(0 tablet) {
      max-width: 115%;
      margin-top: -66%;
      margin-right: -15px;
      margin-bottom: -25px;
      margin-left: -15px;

      transform: translateY(50%);

      order: 3;
    }
    @include bp(tablet) {
      position: relative;

      max-width: 38%;
      margin: 0 -20px;

      text-align: center;

      ::v-deep picture {
        position: absolute;
        top: 0;
      }
    }
    @include bp(desktop-large) {
      right: -15px;
      // max-width: 40%;

      max-width: 50%;
      margin: -15px -11px 0;
    }
    @include bp(desktop-wide) {
      max-width: none;
      // max-width: 37.5%;
      margin: -20px -40px;
    }

    flex-grow: 1;
  }

  .bonds__items {
    @include bp(tablet) {
      display: flex;
      // margin-bottom: 60px;

      flex-wrap: wrap;
    }
    @include bp(desktop-large) {
      // margin-top: 63px;
      margin-top: 48px;
      margin-bottom: 0;
    }
    @include bp(desktop-wide) {
      margin-top: 40px;
    }

    // margin-bottom: 44px;

    ::v-deep .icon-text {
      .icon-text__text {
        @include bp(tablet desktop-large) {
          margin-top: 12px;
          padding-right: 63px;
        }
        @include bp(desktop-large) {
          margin-top: 20px;
          padding-right: 0;
        }

        margin-top: 15px;
        padding-right: 10px;
      }

      .icon-text__icon {
        @include bp(0 desktop-large) {
          opacity: 0.7;
        }
        @include bp(tablet) {
          max-height: 50px;
        }
        @include bp(desktop-large) {
          max-width: 60px;
          max-height: 55px;
        }

        max-width: 50px;
        max-height: 45px;
      }

      &:nth-child(1) {
        .icon-text__text {
          @include bp(0 tablet) {
            margin-top: 5px;
          }
          @include bp(tablet desktop-large) {
            padding-right: 30px;
          }
        }
      }
      &:nth-child(2) {
        .icon-text__text {
          @include bp(0 tablet) {
            margin-top: 10px;
          }
        }
      }
      &:nth-child(3) {
        .icon-text__text {
          @include bp(0 tablet) {
            margin-top: 20px;
          }
        }
      }
      &:nth-child(odd) {
        .icon-text__icon-wrap {
          @include bp(desktop-wide) {
            margin-right: 10px;
          }
        }
      }
      &:last-child {
        .icon-text__text {
          @include bp(0 tablet) {
            padding-right: 0;
          }
        }
      }
    }

    ::v-deep .icon-text-list__item {
      @include bp(tablet) {
        width: 50%;
        margin-bottom: 35px;
        padding-right: 0;
      }
      @include bp(desktop-large) {
        margin-bottom: 50px;
        padding-right: 40px;
      }
      @include bp(desktop-wide) {
        max-width: 50%;
        margin-bottom: 60px;
        padding-right: 130px;
      }

      margin-bottom: 30px;

      &:last-child {
        @include bp(desktop-large) {
          padding-right: 80px;
        }
        @include bp(desktop-wide) {
          padding-right: 90px;
        }
      }
    }
  }

  &.bonds--dark {
    // @include bp(tablet) {
    //   padding-bottom: 65px;
    // }
    // @include bp(desktop-large) {
    //   padding-bottom: 80px;
    // }
    // @include bp(desktop-wide) {
    //   padding-top: 100px;
    //   padding-bottom: 90px;
    // }
    // padding-bottom: 25px;
    color: #fff;
    background: #252c2e;

    &:after {
      @include bp(tablet) {
        background-image: linear-gradient(
          to top,
          #252c2e 22%,
          rgba(37, 44, 46, 0) 78%
        );
      }
    }

    .bonds__header {
      &:after {
        background-color: #46a26f;
      }
    }

    ::v-deep .icon-text .icon-text__icon {
      color: #46a26f;
    }
  }
}

.screener {
  @include bp(tablet) {
    display: flex;

    margin-top: 3px;

    justify-content: space-between;
    align-items: center;
  }
  @include bp(desktop-large) {
    margin-top: 0px;
  }
  @include bp(desktop-wide) {
    margin-top: 2px;
  }

  z-index: 1;

  width: 100%;

  .screener__text {
    @include bp(tablet) {
      margin-bottom: 0;
    }

    font-family: $font-family-second;
    font-weight: 400;

    margin: 0;
    margin-bottom: 20px;
  }

  .screener__arrow {
    @include bp(desktop-large) {
      display: inline-block;
    }

    display: none;

    transition-delay: 0.5s;

    flex-shrink: 0;
  }
  .screener__button-wrap {
    @include bp(tablet) {
      max-width: 30.5%;
      padding-right: 2%;
    }
    @include bp(desktop-large) {
      padding-right: 7%;
    }

    width: 100%;

    transition-delay: 0.75s;
    text-align: center;
  }
}
</style>

<template>
  <section class="elements">
    <Container class="elements__container">
      <h2
        v-animate.repeat.fade="'slide-left'"
        v-html="$t('exante.pages.whitelabel.elements.header')"
        class="elements__header whitelabel__header"
      ></h2>
      <div
        v-if="$te('exante.pages.whitelabel.elements.text')"
        v-animate.repeat.fade="'slide-left'"
        class="elements__text"
      >
        <p v-html="$t('exante.pages.whitelabel.elements.text')"></p>
      </div>
      <div v-animate.repeat.fade="'slide-left'" class="elements__button-wrap">
        <WlpOpenAccButt class="elements__button" data-style-type="fgreen">
        </WlpOpenAccButt>
      </div>
      <div v-animate.repeat.fade="'slide-right'" class="elements__right">
        <picturelazy
          :source="[
            {
              srcset:
                '/static/images/whitelabel/devices-2.webp 1x, /static/images/whitelabel/devices-2@2x.webp 2x'
            },
            {
              srcset:
                '/static/images/whitelabel/devices-2.png 1x, /static/images/whitelabel/devices-2@2x.png 2x'
            }
          ]"
          class="elements__platforms"
          alt="Platforms"
        ></picturelazy>
        <BrandIcon
          :text="$t('exante.pages.whitelabel.elements.BrandLogo')"
          v-animate.repeat.fade="'slide-down'"
          class="branded__BrandIcon branded__BrandIcon--logo"
          style="transition-delay:0.75s"
        ></BrandIcon>
        <BrandIcon
          :text="$t('exante.pages.whitelabel.elements.BrandBar')"
          v-animate.repeat.fade="'slide-down'"
          class="branded__BrandIcon branded__BrandIcon--bar"
          style="transition-delay:1s"
        ></BrandIcon>
        <BrandIcon
          :text="$t('exante.pages.whitelabel.elements.BrandStore')"
          v-animate.repeat.fade="'slide-down'"
          class="branded__BrandIcon branded__BrandIcon--icon"
          style="transition-delay:1.25s"
        ></BrandIcon>
        <BrandIcon
          :text="$t('exante.pages.whitelabel.elements.BrandScreen')"
          v-animate.repeat.fade="'slide-up'"
          class="branded__BrandIcon branded__BrandIcon--screen"
          style="transition-delay:1.5s"
        ></BrandIcon>
      </div>
    </Container>
  </section>
</template>

<script>
import WlpOpenAccButt from '~/components/pages/whitelabel/general/WlpOpenAccButt.vue'
import Container from '~/components/general/Container.vue'
import picturelazy from '~/components/general/Lazy/PictureLazy.vue'
import BrandIcon from '~/components/pages/whitelabel/general/BrandIcon.vue'

export default {
  name: 'Elements',
  components: { Container, WlpOpenAccButt, picturelazy, BrandIcon }
}
</script>

<style lang="scss" scoped>
.elements {
  @include bp(tablet) {
    padding-top: 50px;
  }
  @include bp(desktop-large) {
    padding-top: 93px;
  }
  @include bp(desktop-wide) {
    min-height: 600px;
    padding-top: 110px;
  }

  overflow: hidden;

  padding-top: 45px;
  padding-bottom: 120px;

  .elements__container {
    @include bp(tablet desktop-large) {
      text-align: center;
    }
    @include bp(desktop-large) {
      display: grid;

      grid-template-columns: 42% auto;

      & > ::v-deep * {
        grid-column: 1;
      }
    }
    @include bp(desktop-wide) {
      grid-template-columns: 40% auto;
    }
  }

  .elements__header.whitelabel__header {
    @include bp(desktop-large) {
      margin-bottom: 15px;
    }
    @include bp(tablet desktop-large) {
      padding-bottom: 12px;
    }
    @include bp(desktop-large desktop-wide) {
      margin-bottom: 30px;
      padding-bottom: 18px;
    }
    &:after {
      @include bp(tablet desktop-large) {
        right: 0;
        left: 0;
      }

      right: auto;
    }
  }

  .elements__text {
    @include bp(tablet desktop-large) {
      max-width: 74%;
      margin-right: auto;
      margin-left: auto;
    }
    @include bp(desktop-large) {
      max-width: 80%;
      ::v-deep p + p {
        margin-top: 25px;
      }
    }
    @include bp(desktop-wide) {
      margin-bottom: 30px;
      ::v-deep p + p {
        margin-top: 32px;
      }
    }

    margin-bottom: 40px;
  }

  .elements__container > *.elements__right {
    grid-column: 2;
    grid-row: 1 / 13;
  }
  .elements__right {
    @include bp(desktop-large desktop-wide) {
      width: 105%;
      margin-top: 6.5%;
      margin-left: -8%;
    }

    position: relative;
  }

  .elements__platforms {
    ::v-deep picture {
      @include bp(tablet) {
        margin-top: -3.5%;
        margin-right: -4%;
        margin-left: -4%;
      }

      margin-top: -5%;
      margin-right: -10%;
      margin-left: -10%;
    }
  }

  .elements__button-wrap {
    @include bp(0 desktop-large) {
      display: none;
    }
  }

  .elements__button {
    @include bp(desktop-wide) {
      min-width: 270px;
    }
  }

  .branded__BrandIcon {
    @include bp(0 tablet) {
      display: none;
    }
    @include bp(desktop-large desktop-wide) {
      font-size: 16px;
      line-height: 1.25;
    }

    position: absolute;
    &.branded__BrandIcon--logo {
      @include bp(desktop-large desktop-wide) {
        top: 3.5%;
        left: 0%;

        padding: 14px 20px 18px;
      }

      top: 9%;
      left: 3.4%;

      padding: 14px 24px 30px;
    }
    &.branded__BrandIcon--bar {
      @include bp(desktop-large desktop-wide) {
        top: -10.5%;
        right: 19%;

        padding: 8px 34px 10px;
      }

      top: -9%;
      right: 24%;
    }
    &.branded__BrandIcon--icon {
      @include bp(desktop-large desktop-wide) {
        top: 11%;
        right: -5.5%;

        padding: 10px 28px 15px;
      }

      top: 15%;
      right: -0.7%;
    }
    &.branded__BrandIcon--screen {
      @include bp(desktop-large desktop-wide) {
        right: 3.5%;
        bottom: 8%;

        padding: 20px 34px 10px;
      }

      right: 8%;
      bottom: 4%;

      padding: 30px 34px 16px;
      ::v-deep .BrandIcon__icon {
        top: 0;
        bottom: auto;

        transform: rotateZ(180deg);
      }
    }
  }
}
</style>

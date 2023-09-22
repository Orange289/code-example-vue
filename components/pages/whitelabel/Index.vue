<template>
  <defaulLayout class="whitelabel">
    <div>
      <Branded class="whitelabel__branded" />
      <Intro class="whitelabel__intro" />
      <Features class="whitelabel__features" />
      <Screen class="whitelabel__screen" />
      <WebAndMobile class="whitelabel__WebAndMobile" />
      <Models class="whitelabel__models" />
      <Start class="whitelabel__start" />
      <TextOac
        :main-text="$t('exante.pages.whitelabel.details.text')"
        :open-account-text="$t('exante.globals.open_account.getStartedNow')"
        class="whitelabel__textoac"
      >
        <template #after_button><VVoid></VVoid></template>
      </TextOac>
      <Core class="whitelabel__start" />
      <Gateways class="whitelabel__start" />
      <Clientsarea class="whitelabel__сlientsarea" />
      <Terminal class="whitelabel__terminal" />
      <Atp class="whitelabel__atp" />
      <Tools class="whitelabel__atp" />
      <Elements class="whitelabel__atp" />
    </div>
  </defaulLayout>
</template>

<script>
import Branded from './Branded.vue'
import Intro from './Intro.vue'
import Features from './Features.vue'
import Screen from './Screen.vue'
import WebAndMobile from './WebAndMobile.vue'
import Models from './Models/Models.vue'
import Start from './Start.vue'
import Core from './Core.vue'
import Gateways from './Gateways.vue'
import Clientsarea from './Clientsarea.vue'
import Terminal from './Terminal.vue'
import Atp from './Atp.vue'
import Tools from './Tools.vue'
import Elements from './Elements.vue'
import defaulLayout from '~/components/layouts/default.vue'
import TextOac from '~/components/general/TextOac/TextOac.vue'
import VVoid from '~/utils/VVoid'

export default {
  components: {
    defaulLayout,
    Branded,
    Intro,
    Features,
    Screen,
    WebAndMobile,
    Models,
    Start,
    TextOac,
    Core,
    Gateways,
    Clientsarea,
    Terminal,
    Atp,
    Tools,
    Elements,
    VVoid
  }
}
</script>

<style>
html {
  scroll-behavior: smooth;
}
</style>

<style lang="scss" scoped>
.whitelabel {
  overflow: hidden;

  color: $color__black--light;

  ::v-deep p,
  ::v-deep ul {
    @include bp(desktop-large) {
      font-size: 18px;
      line-height: 1.39;
    }
    @include bp(desktop-wide) {
      font-size: 22px;
      line-height: 1.36;
    }

    font-size: 16px;
    line-height: 1.25;
  }

  ::v-deep p + p {
    margin-top: 1.25em;
    margin-bottom: 20px;
  }

  ::v-deep .whitelabel__header {
    @include header-underline-center();
    @include h1;
    @include bp(mobile tablet) {
      margin-top: 50px;

      &:after {
        width: 40px;
        height: 2px;
      }
    }
    @include bp(tablet) {
      font-size: 42px;
      line-height: 1.19;
      // margin-top: 50px;

      padding-bottom: 20px;
    }
    @include bp(desktop) {
      // font-size: 42px;
      line-height: 1.43;
      // margin-top: 50px;

      margin-bottom: 30px;
      padding-bottom: 16px;
    }
    @include bp(desktop-large) {
      font-size: 48px;
      line-height: 1.25;
      // margin-top: 60px;

      padding-bottom: 22px;
    }
    @include bp(desktop-wide) {
      font-size: 56px;
      line-height: 1.07;
      // margin-top: 90px;

      padding-bottom: 24px;
    }

    font-family: $font-family-second;
    font-size: 32px;
    font-weight: 300;
    line-height: 1.25;

    margin-top: 0;

    color: inherit;

    &:after {
      right: auto;

      color: inherit;
    }
  }

  ::v-deep .site-button {
    @include bp(desktop-large desktop-wide) {
      font-size: 22px;

      min-width: auto;
    }
  }

  ::v-deep .WlpOpenAccButt {
    @include bp(mobile tablet) {
      width: auto;
    }
    @include bp(desktop-wide) {
      min-width: 300px;
    }
  }

  .whitelabel__textoac {
    @include bp(0 tablet) {
      padding-top: 45px;
      padding-bottom: 5px;
    }
    @include bp(tablet) {
      padding-top: 40px;
      padding-bottom: 40px;
    }
    @include bp(desktop-large) {
      padding-top: 100px;
      padding-bottom: 90px;
    }
    @include bp(desktop-wide) {
      padding-top: 100px;
      padding-bottom: 92px;
    }

    overflow: hidden;

    ::v-deep .text-oac__text {
      @include bp(tablet) {
        margin-right: 80px;
        margin-bottom: 0;
      }
      @include bp(desktop-large) {
        font-size: 48px;
        line-height: 1;

        margin-right: 125px;
      }
      @include bp(desktop-wide) {
        margin-right: 150px;
      }

      font-size: 26px;
      line-height: 1.54;

      margin-bottom: 25px;
    }

    ::v-deep .text-oac__button-wrap {
      @include bp(0 tablet) {
        width: 100%;
      }
    }
    ::v-deep .text-oac__button {
      @include bp(0 mobile) {
        width: 100%;
      }
      @include bp(tablet desktop-large) {
        min-width: 220px;
        margin-right: 0;
      }
      @include bp(desktop-large desktop-wide) {
        font-size: 20px;

        min-width: 240px;
        min-height: 50px;
      }
      .site-button__content {
        @include bp(desktop-large desktop-wide) {
          padding: 15px 34px;
        }
      }
    }
  }
}
</style>

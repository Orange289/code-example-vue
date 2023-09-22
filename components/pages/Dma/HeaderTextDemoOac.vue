<template>
  <TextOac class="text-oac--dma">
    <h6 v-html="$t('exante.pages.dma.textoac.header')"></h6>
    <p v-html="$t('exante.pages.dma.textoac.text')"></p>

    <template #before_button>
      <div v-animate.repeat.fade="'slide-left'">
        <DemoAccountButton
          v-if="!$store.state.loggedin"
          class="text-oac__button text-oac__button--demo site-button--full-white"
        >
          <span v-html="$t('exante.globals.open_account.open_demo')"></span>
        </DemoAccountButton>
      </div>
    </template>
  </TextOac>
</template>

<script>
import TextOac from '~/components/general/TextOac/TextOac.vue'
import DemoAccountButton from '~/components/general/DemoAccountButton/DemoAccountButton.vue'

export default {
  name: 'HeaderTextDemoOac',
  components: {
    TextOac,
    DemoAccountButton
  }
}
</script>

<style lang="scss" scoped>
.text-oac.text-oac--dma {
  @include bp(desktop-large) {
    padding: 85px 0;
  }
  @include bp(desktop-wide) {
    padding: 100px 0;
  }

  padding: 60px 0;

  .text-oac__wrap {
    @include bp(desktop) {
      flex-wrap: wrap;
    }
    @include bp(desktop-large) {
      flex-wrap: nowrap;
    }
  }

  h6,
  p {
    margin: 0;

    color: inherit;
  }

  h6 {
    @include bp(desktop) {
      font-size: 26px;
      line-height: 30px;

      margin-bottom: 9px;
    }
    @include bp(desktop-large) {
      font-size: 28px;

      margin-bottom: 17px;
    }
    @include bp(desktop-wide) {
      font-size: 32px;
    }

    font-size: 24px;
    line-height: 32px;

    margin-bottom: 28px;
  }

  p {
    @include bp(desktop) {
      font-size: 18px;
    }
    @include bp(desktop-large) {
      font-size: 20px;

      margin-bottom: 0;
    }
    @include bp(desktop-wide) {
      font-size: 22px;
    }

    font-size: 18px;
    line-height: 26px;

    margin-bottom: 19px;
  }

  ::v-deep .text-oac__text {
    margin-bottom: 0;
  }

  ::v-deep .text-oac__button-wrap {
    text-align: left;
  }

  ::v-deep .text-oac__text,
  ::v-deep .text-oac__button-wrap {
    @include bp(desktop) {
      flex-wrap: wrap;
    }
    @include bp(desktop-large) {
      width: auto;
    }
  }

  ::v-deep .text-oac__button {
    @include bp(desktop) {
      font-size: 20px;
    }

    vertical-align: top;
    ::v-deep .site-button__content {
      @include bp(desktop) {
        padding: 15px 30px;
      }
    }
  }

  .text-oac__button.text-oac__button--demo {
    @include bp(mobile) {
      margin-right: 25px;
      margin-bottom: 0;
    }
    @include bp(desktop-large) {
      margin-right: 20px;
    }
    @include bp(desktop-wide) {
      margin-right: 40px;
    }

    margin-bottom: 28px;

    white-space: nowrap;

    flex-shrink: 0;
  }

  ::v-deep .text-oac__button.site-button--white {
    @include bp(desktop) {
      width: auto;
      //   max-width: 202px;
    }

    margin-right: 0;
    // max-width: 174px;
  }
}
</style>

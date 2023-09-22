<template>
  <BaseBlock
    :header="$t('exante.pages.whitelabel.gateways.header')"
    :text="$t('exante.pages.whitelabel.gateways.text')"
    :list="$t('exante.pages.whitelabel.gateways.list')"
    class="gateways"
  >
    <ImageLazy
      :lazySrcset="
        '/static/images/whitelabel/logos.png 1x, /static/images/whitelabel/logos@2x.png 2x'
      "
      v-animate.repeat.fade="'slide-right'"
      class="gateways__image"
      alt="Markets"
    ></ImageLazy>
  </BaseBlock>
</template>

<script>
import BaseBlock from '~/components/pages/whitelabel/general/BaseBlock.vue'
import ImageLazy from '~/components/general/Lazy/ImageLazy.vue'

export default {
  name: 'Gateways',
  components: { BaseBlock, ImageLazy },
  props: {
    texts: {
      type: Object,
      default: null
    }
  }
}
</script>

<style lang="scss" scoped>
.gateways {
  @include bp(tablet) {
    min-height: auto;
    padding-top: 58px;
    padding-bottom: 75px;
  }
  @include bp(desktop-large) {
    min-height: auto;
    padding-top: 55px;
    padding-bottom: 0px;
  }
  @include bp(desktop-large desktop-wide) {
    grid-template-columns: 50% auto 50%;
  }
  @include bp(desktop-wide) {
    padding-top: 130px;
  }

  overflow: hidden;

  padding-top: 25px;
  padding-bottom: 0px;

  ::v-deep .base-wlpblock__header.whitelabel__header {
    @include bp(tablet) {
      margin-top: 0;
      margin-bottom: 38px;
      padding-bottom: 14px;
    }
    @include bp(desktop-large) {
      margin-bottom: 28px;
      padding-bottom: 16px;
    }
    @include bp(desktop-wide) {
      margin-bottom: 38px;
      padding-bottom: 22px;
    }
  }

  ::v-deep .base-wlpblock__container {
    @include bp(desktop-wide) {
      grid-template-columns: 48% auto 47%;
    }
  }

  ::v-deep .base-wlpblock__list-header {
    @include bp(tablet) {
      margin-bottom: 15px;
    }
    @include bp(desktop-large) {
      margin-bottom: 35px;
    }
    @include bp(desktop-wide) {
      margin-bottom: 30px;
    }
  }
  ::v-deep .base-wlpblock__text {
    @include bp(0 tablet) {
      margin-bottom: 15px;
    }
    @include bp(tablet) {
      max-width: 90%;
      margin-bottom: 28px;
    }
    @include bp(desktop-large) {
      margin-bottom: 30px;
    }
    @include bp(desktop-wide) {
      margin-bottom: 55px;
    }
  }

  ::v-deep .list {
    @include bp(tablet) {
      display: grid;

      margin-bottom: 0;

      grid-template-columns: 45% auto;
    }
    @include bp(desktop-large) {
      padding-right: 24%;

      grid-template-columns: 55% auto;
    }
    @include bp(desktop-wide) {
      padding-right: 0;

      grid-template-columns: 39% auto;
    }

    margin-bottom: 10px;
  }

  ::v-deep .list .list__item {
    @include bp(tablet) {
      margin-bottom: 10px;
    }
    @include bp(desktop-large) {
      margin-bottom: 25px;
    }
    @include bp(desktop-wide) {
      margin-bottom: 31px;
    }

    margin-bottom: 15px;
  }

  ::v-deep .list .list__icon-wrap {
    @include bp(0 tablet) {
      margin-right: 10px;
    }
    @include bp(tablet desktop-large) {
      margin-right: 0;
    }
  }

  ::v-deep .list .list__icon {
    @include bp(tablet desktop-large) {
      margin-right: 10px;
    }
  }

  ::v-deep .base-wlpblock__right {
    @include bp(tablet desktop-large) {
      margin-top: -20px;
      margin-right: -30px;
      margin-left: 45px;

      grid-row: 2 / 13;
    }
    @include bp(desktop-wide) {
      margin-top: -10px;
    }
  }

  .gateways__image {
    @include bp(desktop-large desktop-wide) {
      margin-top: 25px;
    }

    display: block;
  }
}
</style>

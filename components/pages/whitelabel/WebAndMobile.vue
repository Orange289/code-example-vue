<template>
  <BaseBlock
    :header="$t('exante.pages.whitelabel.web_and_mobile.header')"
    :text="$t('exante.pages.whitelabel.web_and_mobile.text')"
    class="web_and_mobile"
  >
    <template #end>
      <div
        v-animate.repeat.fade="'slide-left'"
        class="web_and_mobile__button-wrap"
      >
        <WlpOpenAccButt
          class="web_and_mobile__button"
          data-style-type="fgreen"
        ></WlpOpenAccButt>
      </div>
    </template>
    <div v-animate.repeat.fade="'slide-right'" class="web_and_mobile__device">
      <BrandIcon
        v-animate.repeat.fade="'slide-down'"
        :text="$t('exante.pages.whitelabel.web_and_mobile.iconText')"
        style="transition-delay:0.75s"
        class="web_and_mobile__BrandIcon"
      ></BrandIcon>
      <picturelazy
        :source="[
          {
            srcset:
              '/static/images/whitelabel/laptop.webp 1x, /static/images/whitelabel/laptop@2x.webp 2x'
          },
          {
            srcset:
              '/static/images/whitelabel/laptop.png 1x, /static/images/whitelabel/laptop@2x.png 2x'
          }
        ]"
        class="web_and_mobile__img"
        alt="laptop"
      ></picturelazy>
    </div>
  </BaseBlock>
</template>

<script>
import WlpOpenAccButt from '~/components/pages/whitelabel/general/WlpOpenAccButt.vue'
import BrandIcon from '~/components/pages/whitelabel/general/BrandIcon.vue'
import BaseBlock from '~/components/pages/whitelabel/general/BaseBlock.vue'
import picturelazy from '~/components/general/Lazy/PictureLazy.vue'

export default {
  name: 'WebAndMobile',
  components: { BaseBlock, WlpOpenAccButt, BrandIcon, picturelazy }
}
</script>

<style lang="scss" scoped>
.web_and_mobile {
  @include bp(tablet) {
    margin-bottom: -11.7%;
  }
  @include bp(desktop-large) {
    margin-bottom: -8.9%;
    padding-top: 125px;
  }
  @include bp(desktop-wide) {
    margin-bottom: -8.5%;
    padding-top: 160px;
    padding-bottom: 85px;
  }

  overflow: hidden;

  ::v-deep .whitelabel__header.base-wlpblock__header {
    @include bp(tablet desktop-large) {
      margin-right: -22%;
    }
    @include bp(desktop-large) {
      margin-bottom: 30px;
    }
    @include bp(desktop-large desktop-wide) {
      padding-bottom: 26px;
    }
    @include bp(desktop-wide) {
      margin-bottom: 20px;
    }

    margin-bottom: 10px;
  }

  ::v-deep .base-wlpblock__text {
    @include bp(tablet desktop-large) {
      margin-bottom: 35px;
    }
    p {
      @include bp(desktop-large) {
        line-height: 1.36;
      }
    }
    p + p {
      @include bp(tablet) {
        margin-top: 20px;
      }
      @include bp(desktop-large) {
        margin-top: 30px;
      }
      @include bp(desktop-wide) {
        margin-top: 35px;
      }
    }
  }

  .web_and_mobile__button-wrap {
    order: 3;
  }

  .web_and_mobile__button {
    @include bp(tablet) {
      width: auto;
    }
    @include bp(desktop-large) {
      min-width: 300px;
    }

    width: 100%;
  }

  .web_and_mobile__device {
    @include bp(tablet) {
      margin-bottom: 0;
    }

    position: relative;

    margin-bottom: 35px;
  }
  .web_and_mobile__BrandIcon {
    @include bp(mobile) {
      right: 30%;
    }
    @include bp(tablet) {
      right: 32.5%;
      bottom: 96%;

      padding: 10px 20px 12px;
    }
    @include bp(desktop-large) {
      right: 41.5%;
      bottom: 95.5%;

      padding: 16px 24px 26px;
    }
    @include bp(desktop-wide) {
      right: 43.5%;
      bottom: 101.5%;
    }

    position: absolute;
    right: 17%;
    bottom: 92%;

    padding: 12px 22px 16px;
  }

  .web_and_mobile__img {
    // @include bp(tablet) {
    //   position: absolute;
    //   z-index: -1;
    //   top: 0;
    //   right: 0;
    //   bottom: 0;
    //   left: 0;
    // }
    ::v-deep picture {
      @include bp(mobile) {
        width: 75%;
        margin: 0 auto;
      }
      @include bp(tablet) {
        width: 115%;
        margin: 0% -10% 0 -10%;
      }
      @include bp(desktop-large) {
        width: 109.5%;
        margin: -1.5% 0 0 -17.5%;
      }
      @include bp(desktop-wide) {
        width: 110%;
        margin: -7.2% -13% 0;
      }

      width: 115%;
    }
  }
}
</style>

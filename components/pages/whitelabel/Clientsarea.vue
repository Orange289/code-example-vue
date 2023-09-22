<template>
  <BaseBlock
    :header="$t('exante.pages.whitelabel.clientsarea.header')"
    :text="$t('exante.pages.whitelabel.clientsarea.text')"
    :list="$t('exante.pages.whitelabel.clientsarea.list')"
    class="clientsarea"
  >
    <template #end>
      <p
        v-if="$te('exante.pages.whitelabel.clientsarea.textEnd')"
        v-animate.repeat.fade="'slide-left'"
        v-html="$t('exante.pages.whitelabel.clientsarea.textEnd')"
        class="clientsarea__endtext"
      ></p>
    </template>

    <div class="clientsarea__screens">
      <imagelazy
        v-animate.repeat.fade="'slide-right'"
        :lazySrcset="
          '/static/images/whitelabel/screen-cl.png 1x, /static/images/whitelabel/screen-cl@2x.png 2x'
        "
        alt="screen"
        class="clientsarea__screen clientsarea__screen--1"
      />
      <imagelazy
        v-animate.repeat.fade="'slide-right'"
        :lazySrcset="
          '/static/images/whitelabel/screen-cl2.png 1x, /static/images/whitelabel/screen-cl2@2x.png 2x'
        "
        style="transition-delay:0.5s"
        alt="screen"
        class="clientsarea__screen clientsarea__screen--2"
      />
    </div>
  </BaseBlock>
</template>

<script>
import BaseBlock from '~/components/pages/whitelabel/general/BaseBlock.vue'
import imagelazy from '~/components/general/Lazy/ImageLazy.vue'

export default {
  name: 'Clientsarea',
  components: { BaseBlock, imagelazy }
}
</script>

<style lang="scss" scoped>
.clientsarea {
  @include bp(0 tablet) {
    padding-top: 35px;
    padding-bottom: 72%;
  }
  @include bp(tablet) {
    padding-top: 15px;
  }
  @include bp(tablet desktop-large) {
    min-height: 565px;
    padding-bottom: 75px;
  }
  @include bp(desktop-large) {
    padding-top: 50px;
  }
  @include bp(desktop-large desktop-wide) {
    padding-bottom: 60px;
  }
  @include bp(desktop-wide) {
    padding-top: 130px;
    padding-bottom: 68px;
  }

  ::v-deep .base-wlpblock__container {
    @include bp(desktop-wide) {
      grid-template-columns: 47% auto 50%;
    }
  }

  position: relative;

  overflow: hidden;

  ::v-deep .base-wlpblock__header.whitelabel__header {
    @include bp(tablet) {
      margin-bottom: 30px;
      padding-bottom: 14px;
    }
    @include bp(desktop-large) {
      margin-bottom: 36px;
    }
    @include bp(desktop-wide) {
      padding-bottom: 26px;
    }
  }

  ::v-deep .base-wlpblock__text {
    @include bp(tablet) {
      margin-bottom: 15px;
    }
    @include bp(desktop-large) {
      margin-bottom: 40px;
    }
    @include bp(desktop-wide) {
      margin-bottom: 55px;
    }

    margin-bottom: 16px;
  }
  ::v-deep .base-wlpblock__list-header {
    @include bp(tablet) {
      margin-bottom: 22px;
    }
    @include bp(desktop-large) {
      margin-bottom: 32px;
    }
    @include bp(desktop-wide) {
      margin-bottom: 40px;
    }

    margin-bottom: 10px;
  }

  ::v-deep .base-wlpblock__container {
    @include bp(tablet) {
      display: grid;

      grid-template-columns: 47.111% auto;
    }
    @include bp(desktop-large) {
      grid-template-columns: 42.111% auto;
    }
  }

  ::v-deep .base-wlpblock__right {
    @include bp(desktop-wide) {
      grid-column: 3;
      margin-top: -30px;
    }
    z-index: -1;

    grid-column: 2;
  }

  ::v-deep .list {
    @include bp(tablet) {
      grid-template-columns: 60% auto;
    }
    @include bp(desktop-large) {
      grid-template-columns: 59.5% auto;
    }
    @include bp(desktop-wide) {
      grid-template-columns: 47% auto;
    }

    display: grid;

    margin-bottom: 16px;

    grid-template-columns: 1fr;

    .list__item {
      @include bp(tablet) {
        margin-bottom: 6px;
      }
      @include bp(desktop-large) {
        margin-bottom: 22px;
      }
      @include bp(desktop-wide) {
        margin-bottom: 29px;
      }

      margin-bottom: 6px;
    }

    .list__icon-wrap {
      @include bp(0 desktop-wide) {
        margin-right: 15px;
      }
    }
  }

  .clientsarea__endtext {
    @include bp(tablet) {
      max-width: 90%;
    }
    @include bp(desktop-large) {
      max-width: 95%;
    }
    @include bp(desktop-large desktop-wide) {
      line-height: 1.25;
    }
    @include bp(desktop-wide) {
      max-width: 78%;
    }

    margin-top: 0;
  }

  .clientsarea__screens {
    @include bp(tablet desktop-large) {
      margin-top: 3.5%;
    }

    display: flex;
  }

  .clientsarea__screen {
    @include bp(desktop-large desktop-wide) {
      max-width: 90%;
      margin: 0 auto -150%;
    }

    display: block;

    margin-bottom: -150%;
    &.clientsarea__screen--1 {
      @include bp(tablet) {
        margin-top: 4%;
        margin-right: -50%;
        margin-left: 3%;
      }
      @include bp(desktop-large) {
        margin-top: 3.5%;
        margin-right: -48%;
        margin-left: 5%;
      }
      @include bp(desktop-wide) {
        margin-top: 6.5%;
        margin-right: -40%;
        margin-left: -5.5%;
      }

      margin-top: 2.4%;
      margin-right: -40%;
      margin-left: 1.5%;
    }
    &.clientsarea__screen--2 {
      @include bp(tablet) {
        margin-top: -6.5%;
        margin-right: -10%;
        margin-left: 7.5%;
      }
      @include bp(desktop-large) {
        margin-top: -2.5%;
      }

      margin-top: -1.5%;
      margin-right: -7%;
      margin-left: 3.5%;
    }
  }

  &:before {
    @include bp(tablet) {
      height: 50%;
    }

    position: absolute;
    z-index: 0;
    bottom: 0;

    width: 100%;
    height: 10%;

    content: '';
    pointer-events: none;

    background-image: linear-gradient(
      to top,
      #ffffff 22%,
      rgba(255, 255, 255, 0)
    );
  }
}
</style>

<template>
  <div class="assets" :data-background-image-set="background_imageset">
    <Container>
      <div class="assets__head">
        <h2
          v-if="header"
          v-html="header"
          v-animate.repeat.fade="'slide-left'"
        ></h2>
        <p v-if="desc" v-html="desc" v-animate.repeat.fade="'slide-right'"></p>
      </div>
      <IconTextList v-if="items_key" :tKey="items_key">
        <div
          v-if="!button_after_list"
          v-animate.repeat.fade="'slide-up'"
          class="assets__button-wrap"
        >
          <div
            v-if="button_header"
            v-html="button_header"
            class="assets__button-header"
          ></div>
          <OpenAccountButton
            data-style-type="fgreen"
            class="assets__button"
          ></OpenAccountButton>
        </div>
      </IconTextList>
      <div
        v-if="button_after_list"
        v-animate.repeat.fade="'slide-up'"
        :class="[
          'assets__button-wrap',
          { 'assets__button-wrap--after-list': button_after_list }
        ]"
      >
        <div
          v-if="button_header"
          v-html="button_header"
          class="assets__button-header"
        ></div>
        <OpenAccountButton
          data-style-type="fgreen"
          class="assets__button"
        ></OpenAccountButton>
      </div>
    </Container>
  </div>
</template>

<script>
import Container from '~/components/general/Container.vue'
import OpenAccountButton from '~/components/general/OpenAccountButton/OpenAccountButton.vue'
import Block800 from '~/components/general/blocks/Block-800.vue'
import IconTextList from '~/components/icon-text/IconTextList.vue'
import bglazy from '~/components/general/Lazy/BackgroundLazy.vue'

export default {
  name: 'Assets',
  components: {
    Container,
    OpenAccountButton,
    IconTextList
  },
  mixins: [bglazy, Block800],
  props: {
    background_imageset: {
      required: false,
      type: String,
      default:
        "url('/static/images/family-office/flag.jpg') 1x, url('/static/images/family-office/flag@2x.jpg') 2x"
    },
    header: {
      required: false,
      type: String,
      default() {
        return this.$t('exante.pages.FamilyOffice.assets.header')
      }
    },
    desc: {
      required: false,
      type: String,
      default() {
        return this.$t('exante.pages.FamilyOffice.assets.desc')
      }
    },
    items_key: {
      required: false,
      type: String,
      default: 'exante.pages.FamilyOffice.assets.items'
    },
    button_header: {
      required: false,
      type: String,
      default() {
        return this.$t('exante.pages.FamilyOffice.assets.open_button_header')
      }
    },
    button_after_list: {
      required: false,
      type: Boolean,
      default: false
    }
  }
}
</script>

<style lang="scss" scoped>
.assets {
  @include bp(0 tablet) {
    ::v-deep .icon-text {
      flex-wrap: wrap;
    }
  }
  @include bp(tablet) {
    min-height: 600px;
    padding-top: 60px;
    padding-bottom: 240px;

    ::v-deep .icon-text {
      margin-bottom: 0;
    }

    ::v-deep .icon-text-list {
      flex-wrap: nowrap;
      align-items: flex-start;
    }
  }
  @include bp(desktop-large) {
    min-height: 700px;

    ::v-deep .icon-text {
      max-width: 350px;
    }
  }
  @include bp(desktop-wide) {
    padding-top: 90px;
    padding-bottom: 198px;

    ::v-deep .icon-text-list {
      display: flex;
    }

    ::v-deep .icon-text {
      width: 33.3%;
      max-width: 270px;
    }

    ::v-deep .icon-text-list .icon-text-list__item {
      padding-right: 0;
    }

    ::v-deep {
      .icon-text + .icon-text {
        margin-left: 150px;
      }
    }
  }
  @include bp(desktop-wide) {
    min-height: 800px;

    ::v-deep .icon-text {
      max-width: 400px;
    }
  }

  position: relative;

  padding-top: 40px;
  padding-bottom: 50px;

  color: $color__white;
  background-position-y: center;

  &:before {
    position: absolute;
    top: 0;
    left: 0;

    width: 100%;
    height: 100%;

    content: '';

    background: rgba($color__text, 0.25);
  }

  ::v-deep .icon-text__title,
  ::v-deep .icon-text .icon-text__icon {
    color: $color__white;
  }

  ::v-deep .icon-text .icon-text__text {
    margin-top: 11px;
  }

  ::v-deep .icon-text .icon-text__icon-wrap {
    @include bp(desktop) {
      margin-bottom: 20px;
    }

    margin-bottom: 18px;

    svg {
      max-height: 42px;
    }
  }

  ::v-deep .icon-text__title {
    @include bp(0 tablet) {
      width: 100%;
    }
    @include bp(desktop-large) {
      font-size: 18px;
      line-height: 25px;
    }
    @include bp(desktop-wide) {
      font-size: 22px;
    }

    font-size: 16px;
    font-weight: 400;
    line-height: 20px;

    margin-bottom: 0;
  }

  &:before {
    position: absolute;
    top: 0;
    left: 0;

    width: 100%;
    height: 100%;

    content: '';

    background: rgba($color__text, 0.25);
  }

  ::v-deep .icon-text__title,
  ::v-deep .icon-text .icon-text__icon {
    color: $color__white;
  }
}

.assets__head {
  @include bp(desktop) {
    display: flex;

    margin-bottom: 30px;

    align-items: flex-start;
  }
  @include bp(desktop-large) {
    margin-bottom: 90px;
  }
  @include bp(desktop-wide) {
    margin-bottom: 50px;
  }

  margin-bottom: 30px;

  h2 {
    @include h1;
    @include header-underline();
    @include bp(desktop) {
      margin-right: 64px;
      margin-bottom: 0;
    }
    @include bp(desktop-wide) {
      margin-bottom: 0;
    }

    margin-bottom: 25px;

    color: inherit;
  }

  h2:after {
    background: currentColor;
  }

  p {
    @include bp(desktop-large) {
      width: 650px;
      margin-left: auto;
    }
    @include bp(desktop-wide) {
      width: 972px;
    }

    margin: 0;
  }
}

.assets {
  .assets__button-wrap {
    @include bp(desktop) {
      margin-top: 56px;
      margin-left: auto;
    }
    @include bp(desktop-wide) {
      margin-left: 180px;
    }

    padding-top: 5px;

    &.assets__button-wrap--after-list {
      @include bp(desktop-wide) {
        margin-left: 0;
      }
    }
  }
  .assets__button-header {
    @include bp(desktop-large) {
      font-size: 18px;
    }
    @include bp(desktop-wide) {
      font-size: 22px;
    }

    font-family: $font-family-second;
    font-size: 16px;
    font-weight: 400;
    line-height: 1.25;

    margin-bottom: 26px;
  }
}
</style>

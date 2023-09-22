<template>
  <Intro
    :header="$t('exante.pages.apis.items.http-api.intro.header')"
    class="intro"
  >
    <IconTextList :tKey="itemsTKey" to-row-icon class="intro__items">
      <div
        v-animate.repeat.fade="'slide-up'"
        :style="{ 'transition-delay': `${0.15 * itemsLen}s` }"
        class="intro__add-case case"
      >
        <div class="case__wrap">
          <div class="case__icon" role="presentation"></div>
          <div
            v-html="$t('exante.pages.apis.items.http-api.intro.addCaseText')"
            class="case__text"
          ></div>
        </div>
      </div>
    </IconTextList>
  </Intro>
</template>

<script>
import Intro from '../Intro.vue'
import IconTextList from '~/components/icon-text/IconTextList.vue'

export default {
  name: 'IntroTTPAPI',
  components: {
    Intro,
    IconTextList
  },
  data() {
    return {
      itemsTKey: 'exante.pages.apis.items.http-api.examples'
    }
  },
  computed: {
    itemsLen() {
      return this.$te(this.itemsTKey) ? this.$t(this.itemsTKey).length : 0
    }
  }
}
</script>

<style lang="scss" scoped>
@mixin round-icon {
  display: block;

  box-sizing: border-box;
  width: 10px;
  height: 10px;

  border: solid 2px #007f39;
  border-radius: 100%;
}
.intro {
  .intro__items {
    @include bp(tablet) {
      margin: 0 -70px 0 -20px;
    }

    margin: 0 -20px;
  }

  ::v-deep .icon-text-list .icon-text-list__item {
    @include bp(tablet) {
      padding-right: 0;
    }
    @include bp(desktop-wide) {
      padding-right: 0;
    }

    padding-right: 0;
  }

  .case,
  ::v-deep .icon-text {
    @include bp(tablet) {
      max-width: calc((100% - 100px) / 2);
      margin-right: 50px;
      padding-right: 0;
    }
    @include bp(desktop-large) {
      max-width: calc((100% - 200px) / 4);
    }
    @include bp(desktop-wide) {
      padding-right: 0;
    }

    width: 100%;
    margin-bottom: 50px;
    padding-right: 0;
  }

  .case,
  ::v-deep .icon-text .icon-text__wrap-link {
    @include bp(tablet) {
      transform: translate(-20px, -20px);

      box-shadow: 0 10px 25px 0 #a6adaf1a;
    }

    transition-timing-function: ease-in-out;
    transition-duration: 0.2s;
    transition-property: transform, box-shadow;

    will-change: transform, box-shadow;
  }

  ::v-deep .icon-text .icon-text__wrap-link {
    &:hover,
    &:focus {
      @include bp(tablet) {
        transform: translate(0);

        box-shadow: none;
      }

      text-decoration: none;

      &::after {
        @include bp(tablet) {
          width: 0;
          height: 0;

          transform: translate(0);

          box-shadow: none;
        }
      }
    }
  }

  .case .case__wrap,
  ::v-deep .icon-text .icon-text__wrap-link,
  ::v-deep .icon-text .icon-text__content {
    width: 100%;
    height: 100%;

    background-color: #ffffff;
  }

  ::v-deep .icon-text {
    .icon-text__wrap-link,
    .icon-text__content {
      display: flex;
      flex-direction: column;
    }
    .icon-text__wrap {
      width: auto;
      padding: 35px 40px;

      color: #fff;
      background-color: $color__green;

      flex-grow: 0;
    }

    .icon-text__icon {
      color: #bfdfcd;
    }

    .icon-text__icon-wrap {
      max-width: 50px;
      max-height: 50px;
      margin-right: 30px;
    }

    .icon-text__text {
      @include bp(desktop-wide) {
        margin-top: 0;
      }

      margin-top: 0;
      padding: 30px 40px 35px;

      color: $color__black--light;
      background-color: #ffffff;

      flex-grow: 1;
    }
  }

  .case {
    font-family: $font-family-second;
    font-size: 22px;
    font-weight: normal;

    color: $color__black--light;

    .case__icon {
      @include round-icon;

      position: relative;

      margin-bottom: 50px;

      &::before,
      &::after {
        @include round-icon;

        position: absolute;
        top: -2px;

        content: '';
        transform: translateX(calc(-15px - 100%));
      }
      &::after {
        transform: translateX(calc(15px + 50%));
      }
    }

    .case__wrap {
      display: flex;
      flex-direction: column;

      padding: 35px 40px;

      justify-content: center;
      align-items: center;
    }
  }
}
</style>

<template>
  <div class="text-oac">
    <Container class="text-oac__wrap">
      <div
        v-if="$slots.default"
        v-animate.repeat.fade="'slide-left'"
        class="text-oac__text"
      >
        <slot></slot>
      </div>
      <div
        v-else-if="mainText !== ''"
        v-animate.repeat.fade="'slide-left'"
        class="text-oac__text"
        v-html="mainText"
      ></div>

      <slot name="before_button"></slot>

      <!-- <div class="text-oac__button-wrap"> -->
      <slot name="button">
        <!-- <OpenAccountButton
          v-if="openAccountText !== ''"
          v-html="openAccountText"
          class="text-oac__button"
          data-style-type="white"
        ></OpenAccountButton>
        <OpenAccountButton
          v-else-if="isStartNow"
          is-wlp
          class="text-oac__button"
          data-style-type="white"
        ></OpenAccountButton>
          v-else
        -->
        <div
          v-animate.repeat.fade="'slide-left'"
          :style="{ 'transition-delay': '0.25s' }"
          class="text-oac__button-wrap"
        >
          <OpenAccountButton class="text-oac__button" data-style-type="white">
            <template v-if="openAccountText">
              <span v-html="openAccountText"></span>
            </template>
          </OpenAccountButton>
        </div>
      </slot>
      <!-- </div> -->

      <slot name="after_button"></slot>
    </Container>
  </div>
</template>

<script>
import OpenAccountButton from '~/components/general/OpenAccountButton/OpenAccountButton.vue'
import Container from '~/components/general/Container.vue'

export default {
  name: 'TextOac',
  components: {
    Container,
    OpenAccountButton
  },
  props: {
    mainText: {
      type: String,
      default: ''
    },
    openAccountText: {
      type: String,
      default: ''
    },
    isWlp: {
      type: Boolean,
      default: false
    }
  }
}
</script>

<style lang="scss" scoped>
.text-oac {
  @include bp(tablet) {
    padding-top: 30px;
    padding-bottom: 25px;
  }
  @include bp(desktop-wide) {
    padding-top: 80px;
    padding-bottom: 75px;
  }
  @include var(color, dwhite);
  @include var(background-color, primary);

  position: relative;

  padding-top: 50px;
  padding-bottom: 50px;

  @media print {
    display: none;
  }

  .text-oac__wrap {
    @include bp(tablet) {
      display: flex;

      align-items: center;
    }
    @include bp(desktop-wide) {
      justify-content: space-between;
      justify-content: flex-start;
    }
  }

  .text-oac__text {
    @include bp(tablet) {
      font-size: 24px;
      line-height: 1;

      width: auto;
      margin-right: 60px;
      margin-bottom: 0;
    }
    @include bp(desktop-large) {
      font-size: 28px;

      margin-right: 80px;
    }
    @include bp(desktop-wide) {
      font-size: 48px;

      margin-right: 54px;
    }

    font-family: $font-family-second;
    font-size: 24px;
    line-height: 1.33;

    width: 100%;
    margin-bottom: 25px;

    color: inherit;
  }

  .text-oac__button-wrap {
    flex-shrink: 0;
    //   // @include bp(tablet) {
    //   //   display: flex;
    //   //   width: auto;
    //   //   text-align: left;
    //   //   align-items: center;
    //   // }
    //   width: 100%;
    //   margin-bottom: 35px;

    //   // text-align: center;
  }

  // ::v-deep
  .text-oac__button {
    @include bp(tablet) {
      min-width: 180px;
      margin-right: 30px;
      margin-bottom: 0;
    }
    @include bp(desktop-large) {
      min-width: 220px;
      margin-right: 150px;
    }
    @include bp(desktop-wide) {
      font-size: 20px;

      min-width: 200px;
      margin-right: 100px;
    }

    margin-bottom: 35px;
    white-space: nowrap;

    ::v-deep .site-button__content {
      @include bp(tablet) {
        padding-right: 25px;
        padding-left: 25px;
      }
    }
  }
}
</style>

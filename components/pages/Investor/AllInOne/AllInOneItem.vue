<template>
  <div class="allinone-item">
    <svg-icon :name="icon" class="allinone-item__icon"></svg-icon>
    <h3
      v-if="$te(`${itemTKey}.title`)"
      v-html="$t(`${itemTKey}.title`)"
      class="allinone-item__header"
    ></h3>
    <p
      v-if="$te(`${itemTKey}.text`)"
      v-html="$t(`${itemTKey}.text`)"
      class="allinone-item__text"
    ></p>
    <div class="allinone-item__button-wrap">
      <DemoAccountButton
        v-if="!loggedin"
        class="allinone-item__button"
        data-style-type="fgreen"
      ></DemoAccountButton>
    </div>
  </div>
</template>

<script>
import DemoAccountButton from '~/components/general/DemoAccountButton/DemoAccountButton.vue'

export default {
  name: 'AllInOneItem',
  components: {
    DemoAccountButton
  },
  props: {
    itemTKey: {
      type: String,
      default: ''
    }
  },
  computed: {
    icon() {
      const splittedKey = this.itemTKey.split('.')
      return splittedKey[splittedKey.length - 1]
    },
    loggedin() {
      return this.$store.state.loggedin
    }
  }
}
</script>

<style lang="scss" scoped>
.allinone-item {
  @include bp(tablet) {
    min-width: 305px;
    max-width: 305px;
    padding: 35px 35px 35px;
  }
  @include bp(desktop-large) {
    opacity: 0;
    padding: 30px 40px 35px 35px;
  }
  @include bp(desktop-wide) {
    min-width: 350px;
    max-width: 350px;
    padding: 35px 40px 45px;
  }

  width: 100%;
  height: auto;
  padding: 35px 25px 35px;

  transition: all 2.5s ease;

  background-color: #ffffff;
  box-shadow: 0 10px 25px 0 rgba(166, 173, 175, 0.1);

  .allinone-item__icon {
    @include bp(tablet) {
      max-width: 60px;
      max-height: 50px;
      margin-bottom: 25px;
    }
    @include bp(desktop-large) {
      margin-bottom: 20px;
    }

    max-width: 50px;
    max-height: 40px;
    margin-bottom: 15px;

    color: $color__green;
  }

  .allinone-item__header {
    @include bp(desktop-wide) {
      font-size: 24px;
    }

    font-family: $font-family-second;
    font-size: 22px;
    font-weight: 400;
    line-height: 1.25;

    margin-top: 0;
    margin-bottom: 15px;

    ::v-deep br {
      @include bp(0 tablet) {
        display: none;
      }
    }
  }

  .allinone-item__text {
    @include bp(desktop-wide) {
      font-size: 18px;
    }

    font-size: 16px;
    line-height: 1.39;

    margin: 0;
  }

  .allinone-item__button-wrap {
    @include bp(tablet) {
      display: block;

      max-height: 0;

      transition: all 0.3s ease;
    }

    display: none;
    overflow: hidden;

    width: 100%;
  }

  .allinone-item__button {
    width: 100%;
    // min-height: 32px;
    // max-height: 32px;
    margin-top: 35px;
    // padding-top: 10px;
    // padding-bottom: 10px;
  }

  &:hover,
  &:focus-within {
    .allinone-item__button-wrap {
      @include bp(tablet) {
        max-height: 100vh;
      }
    }

    // &.swiper-slide-active,
    // &.swiper-slide-next,
    // &.swiper-slide-next + .swiper-slide {
    //   opacity: 0;
    // }
  }

  &.swiper-slide-active,
  &.swiper-slide-next,
  &.swiper-slide-next ~ .swiper-slide {
    @include bp(desktop-large) {
      opacity: 1;
    }
  }

  // &.swiper-slide ~ .swiper-slide-active {
  //   opacity: 0;
  // }
}
</style>

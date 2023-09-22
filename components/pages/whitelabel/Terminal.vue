<template>
  <section class="terminal">
    <Container class="terminal__container">
      <h2
        v-html="$t('exante.pages.whitelabel.terminal.header')"
        v-animate.repeat.fade="'slide-left'"
        class="terminal__header whitelabel__header"
      ></h2>
      <p
        v-html="$t('exante.pages.whitelabel.terminal.text')"
        v-animate.repeat.fade="'slide-left'"
        class="terminal__text"
      ></p>
      <div
        v-if="$te('exante.pages.whitelabel.terminal.items')"
        class="terminal__items"
      >
        <div
          v-for="(item, index) in $t('exante.pages.whitelabel.terminal.items')"
          :key="index"
          class="terminal__item"
        >
          <div
            v-if="item.image"
            v-animate.repeat.fade="'slide-up'"
            class="terminal__item-image-wrap"
          >
            <picturelazy
              :source="item.image"
              :alt="item.header"
              class="terminal__item-image"
            ></picturelazy>
          </div>
          <h4
            v-html="item.header"
            v-animate.repeat.fade="'slide-up'"
            class="terminal__item-header"
          ></h4>
          <div
            v-html="item.text"
            v-animate.repeat.fade="'slide-up'"
            class="terminal__item-text"
          ></div>
        </div>
      </div>
    </Container>
  </section>
</template>

<script>
import Container from '~/components/general/Container.vue'
import Block800 from '~/components/general/blocks/Block-800.vue'
import picturelazy from '~/components/general/Lazy/PictureLazy.vue'

export default {
  name: 'Terminal',
  components: { Container, picturelazy },
  mixins: [Block800]
}
</script>

<style lang="scss" scoped>
.terminal {
  @include bp(tablet) {
    padding-top: 20px;
    padding-bottom: 55px;
  }
  @include bp(desktop-large) {
    padding-top: 15px;
  }
  @include bp(desktop-large desktop-wide) {
    min-height: 650px;
  }
  @include bp(desktop-wide) {
    padding-top: 38px;
    padding-bottom: 65px;
  }

  overflow: hidden;
  // padding-top: 90px;

  padding-top: 72px;
  padding-bottom: 30px;

  background-color: #fbfbfb;

  .terminal__header.whitelabel__header {
    @include bp(tablet) {
      margin-top: 48px;
    }
    @include bp(tablet desktop-large) {
      padding-bottom: 14px;
    }
    @include bp(desktop-large desktop-wide) {
      margin-bottom: 35px;
      padding-bottom: 16px;
    }
    @include bp(desktop-large) {
      margin-top: 50px;
      margin-bottom: 45px;
    }

    margin-top: 0;
    &:after {
      right: auto;
    }
  }

  .terminal__text {
    @include bp(tablet) {
      max-width: 91.1%;
      margin-bottom: 30px;
    }
    @include bp(desktop-large) {
      font-size: 18px;
      line-height: 1.67;

      max-width: 100%;
      margin-bottom: 26px;
    }
    @include bp(desktop-wide) {
      font-size: 22px;
      line-height: 1.36;

      max-width: 88%;
      margin-bottom: 35px;
    }

    font-family: $font-family-second;
    font-size: 16px;
    font-weight: normal;
    line-height: 1.56;

    margin-bottom: 35px;
  }

  .terminal__items {
    @include bp(desktop) {
      // margin-right: -25px;
    }
    @include bp(desktop-large) {
      margin-right: 0;
      flex-wrap: nowrap;
    }
    @include bp(desktop-wide) {
      margin-right: -50px;
    }

    display: flex;

    margin-right: -50px;

    flex-wrap: wrap;
  }

  .terminal__item {
    @include bp(tablet) {
      margin-right: 25px;
    }
    @include bp(desktop-large) {
      flex: 1 1 250px;

      margin-right: 50px;
      margin-bottom: 0;
    }

    flex: 1 1 350px;

    margin-right: 50px;
    margin-bottom: 30px;
  }

  .terminal__item-image-wrap {
    @include bp(tablet) {
      max-width: 100%;
    }
    @include bp(desktop-wide) {
      margin-bottom: 20px;
    }

    max-width: 84%;
    margin-bottom: 15px;
  }

  .terminal__item-image-wrap,
  .terminal__item-image,
  .terminal__item {
    display: flex;
    flex-direction: column;
  }
  .terminal__item-image-wrap,
  .terminal__item-image,
  .terminal__item-image ::v-deep picture,
  .terminal__item-image ::v-deep img {
    display: block;
    width: auto;
    max-width: 263px;
    height: 150px;
    max-height: 150px;

    flex-shrink: 0;
    flex-grow: 1;
  }

  .terminal__item-header,
  .terminal__item-text {
    @include bp(0 tablet) {
      font-size: 16px;
      line-height: 1.25;
    }

    font-family: $font-family-base;
  }
  .terminal__item-header {
    @include bp(0 tablet) {
      margin-bottom: 5px;
    }
    @include bp(tablet) {
      margin-bottom: 10px;
    }

    font-weight: normal;
  }
  .terminal__item-text {
    @include bp(tablet desktop-large) {
      margin-right: 18px;
    }
  }
}
</style>

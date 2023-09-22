<template>
  <section class="start">
    <Container>
      <h1
        v-animate.repeat.fade="'slide-left'"
        class="start__header"
        v-html="header"
      ></h1>
      <div class="start__content">
        <div v-animate.repeat.fade="'slide-right'" class="start__img">
          <picturelazy
            :source="[
              {
                srcset:
                  '/static/images/screens-black.webp 1x, /static/images/screens-black@2x.webp 2x'
              },
              {
                srcset:
                  '/static/images/screens-black.png 1x, /static/images/screens-black@2x.png 2x'
              }
            ]"
            alt="screens"
          ></picturelazy>
        </div>
        <div class="start__info">
          <h3 v-animate.repeat.fade="'slide-left'" v-html="subtitle"></h3>
          <StartList :items="steps" class="start__list"></StartList>
          <p v-if="desc" v-animate.repeat.fade="'slide-left'" v-html="desc"></p>
          <div v-animate.repeat.fade="'slide-left'">
            <OpenAccountButton data-style-type="fgreen" class="start__button">
              {{ $t('exante.globals.open_account.getStarted') }}
            </OpenAccountButton>
          </div>
        </div>

        <TextButLink
          v-if="!itemsTKey"
          :link="link"
          class="start__learn-more"
          data-style-type="white"
          data-arrow
          button-class="start__learn-more-button"
        >
          {{ learnMore }}
        </TextButLink>
      </div>
      <div v-if="itemsTKey" class="start__features">
        <h3
          v-if="itemsTitle"
          v-animate.repeat.fade="'slide-left'"
          class="start__features-title"
          v-html="itemsTitle"
        ></h3>
        <IconTextList :t-key="itemsTKey" class="start__items"></IconTextList>
        <TextButLink
          v-if="link"
          :link="link"
          class="start__learn-more"
          data-style-type="white"
          data-arrow
          button-class="start__learn-more-button start__learn-more-button--features"
        >
          {{ learnMore }}
        </TextButLink>
      </div>
    </Container>
  </section>
</template>

<script>
import StartList from './StartList.vue'
import Container from '~/components/general/Container.vue'
import OpenAccountButton from '~/components/general/OpenAccountButton/OpenAccountButton.vue'
import IconTextList from '~/components/icon-text/IconTextList.vue'
import TextButLink from '~/components/text-but-link/TextButLink.vue'
import picturelazy from '~/components/general/Lazy/PictureLazy.vue'

export default {
  name: 'Start',
  components: {
    Container,
    OpenAccountButton,
    StartList,
    TextButLink,
    IconTextList,
    picturelazy
  },
  props: {
    header: {
      type: String,
      default: null
    },
    subtitle: {
      type: String,
      default: null
    },
    desc: {
      type: String,
      default: null
    },
    steps: {
      type: Array,
      default: null
    },
    itemsTitle: {
      type: String,
      default: null
    },
    itemsTKey: {
      type: String,
      default: ''
    },
    link: {
      type: String,
      default: null
    },
    learnMore: {
      type: String,
      default: null
    }
  }
}
</script>

<style lang="scss" scoped>
.start {
  @include bp(tablet) {
    // padding-top: 74px;
    padding-bottom: 75px;

    &:before {
      top: 0;
      left: 134px;

      border-width: 26px 26px 0 26px;
    }

    .start__header {
      margin-top: 0;
      // margin-bottom: 0;
    }
  }
  @include bp(desktop) {
    // padding-top: 90px;
    padding-bottom: 90px;

    &:before {
      left: 160px;

      border-width: 32px 32px 0 32px;
    }
  }
  @include bp(desktop-wide) {
    // padding-top: 120px;
    padding-bottom: 100px;

    &:before {
      left: 235px;

      border-width: 50px 50px 0 50px;
    }
  }

  position: relative;

  overflow: hidden;
  // padding-top: 55px;

  padding-bottom: 55px;

  color: #fff;
  background: $color__black--lighter;

  .start__header {
    position: relative;
    z-index: 1;

    margin-top: 0;

    color: #fff;
  }

  .start__features-title {
    color: #fff;
  }

  &:before {
    position: absolute;
    z-index: 1;
    top: -56px;
    left: 70px;

    width: 0;
    height: 0;

    content: '';

    border-width: 15px 15px 0 15px;
    border-style: solid;
    border-color: #fff transparent transparent transparent;
  }

  .traders__header {
    position: relative;
    z-index: 1;

    margin-top: 0;

    color: #fff;
  }

  &:before {
    position: absolute;
    z-index: 1;
    top: -56px;
    left: 70px;

    width: 0;
    height: 0;

    content: '';

    border-width: 15px 15px 0 15px;
    border-style: solid;
    border-color: #fff transparent transparent transparent;
  }

  .start__button {
    &:hover,
    &:focus {
      color: #fff;
    }
  }
}

.start__content {
  @include bp(desktop-large) {
    max-width: 540px;
  }
  @include bp(desktop-wide) {
    max-width: 675px;
  }

  // ::v-deep img {
  //   @include bp(desktop-large) {
  //     position: absolute;
  //     top: 0;
  //     right: -60px;

  //     max-width: 850px;
  //     margin-bottom: 0;
  //   }
  //   @include bp(desktop-wide) {
  //     right: 0;
  //   }

  //   margin-bottom: 10px;
  // }

  h3 {
    @include bp(tablet) {
      font-size: 24px;
      line-height: 35px;

      margin-bottom: 20px;
    }
    @include bp(tablet-wide) {
      font-size: 32px;

      margin-bottom: 38px;
    }
    @include bp(desktop) {
      font-size: 28px;

      margin-bottom: 30px;
    }
    @include bp(desktop-wide) {
      font-size: 32px;
      line-height: 40px;

      margin-bottom: 38px;
    }

    font-family: $font-family-second;
    font-size: 18px;
    font-weight: 300;
    line-height: 25px;

    margin-bottom: 15px;

    color: inherit;
  }
}

.start__img {
  @include bp(desktop-large) {
    position: absolute;
    top: 0;
    right: -60px;

    max-width: 850px;
    margin-bottom: 0;
  }
  @include bp(desktop-wide) {
    right: 0;
  }

  width: 100%;
  margin-bottom: 10px;
}

.start__list {
  margin-bottom: 5px;
}

.start__info {
  @include bp(tablet-wide) {
    position: relative;
    z-index: 1;

    margin-bottom: 35px;
  }
  @include bp(desktop-wide) {
    margin-bottom: 78px;
  }

  margin-bottom: 45px;

  h3 {
    margin-top: 0;
  }

  p {
    @include bp(desktop-large) {
      font-size: 22px;
      line-height: 30px;

      margin-bottom: 25px;
    }
    @include bp(desktop-wide) {
      margin-bottom: 45px;
    }

    font-size: 16px;
    line-height: 24px;

    margin-bottom: 20px;
  }
}

.start__learn-more {
  position: relative;
  z-index: 1;

  ::v-deep .start__learn-more-button {
    &:hover,
    &:focus {
      color: $color__black--lighter;
    }
  }
}
</style>

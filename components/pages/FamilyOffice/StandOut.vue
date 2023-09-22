<template>
  <div
    class="standout"
    data-background-image-set="url('/static/images/family-office/standout-bg.jpg') 1x, url('/static/images/family-office/standout-bg@2x.jpg') 2x"
  >
    <Container>
      <h1
        v-html="$t('exante.pages.FamilyOffice.standout.header')"
        v-animate.repeat.fade="'slide-left'"
        class="standout__header"
      ></h1>
      <IconTextList :tKey="'exante.pages.FamilyOffice.standout.items'" />
      <div class="standout__oac">
        <p
          v-html="$t('exante.pages.FamilyOffice.standout.oactext')"
          v-animate.repeat.fade="'slide-left'"
        ></p>
        <div v-animate.repeat.fade="'slide-left'" style="transition-delay:0.4s">
          <OpenAccountButton
            data-style-type="fgreen"
            class="assets__button"
          ></OpenAccountButton>
        </div>
      </div>
    </Container>
  </div>
</template>

<script>
import Container from '~/components/general/Container.vue'
import OpenAccountButton from '~/components/general/OpenAccountButton/OpenAccountButton.vue'
import Block800 from '~/components/general/blocks/Block-800.vue'
import bglazy from '~/components/general/Lazy/BackgroundLazy.vue'
import IconTextList from '~/components/icon-text/IconTextList.vue'

export default {
  name: 'StandOut',
  components: {
    Container,
    OpenAccountButton,
    IconTextList
  },
  mixins: [bglazy, Block800],
  props: {
    standout: {
      type: Object,
      default: null
    }
  }
}
</script>

<style lang="scss" scoped>
.standout {
  @include bp(tablet) {
    min-height: 600px;
    padding-top: 55px;
    padding-bottom: 65px;

    background-size: 120%;
  }
  @include bp(desktop-large) {
    min-height: 700px;
    padding-top: 67px;
    padding-bottom: 101px;

    ::v-deep .icon-text-list {
      max-width: 800px;
    }
  }
  @include bp(desktop-wide) {
    min-height: 800px;
    padding-top: 90px;
    padding-bottom: 101px;

    background-size: 110% !important;
  }

  padding-top: 44px;
  padding-bottom: 50px;

  background-position-y: center;

  ::v-deep .icon-text .icon-text__wrap {
    flex-direction: row;

    align-items: center;
  }

  ::v-deep .icon-text-list .icon-text-list__item {
    @include bp(tablet) {
      margin-bottom: 30px;
    }
    @include bp(desktop-wide) {
      margin-bottom: 40px;
    }

    display: flex;
    flex-direction: row;

    margin-bottom: 25px;
    padding-right: 0;

    flex-wrap: wrap;
    align-items: center;
  }

  ::v-deep .icon-text .icon-text__icon-wrap {
    line-height: 0;

    display: inline-block;

    margin-right: 0;
    margin-bottom: 0;

    flex-grow: 0;
  }

  ::v-deep .icon-text__icon {
    svg {
      @include bp(desktop-large) {
        max-height: 50px;
      }

      max-height: 42px;
    }
  }

  ::v-deep .icon-text .icon-text__title {
    @include bp(desktop) {
      font-size: 22px;
    }
    @include bp(desktop-large) {
      font-size: 18px;
    }
    @include bp(desktop-wide) {
      font-size: 22px;

      margin-left: 25px;
    }

    font-size: 16px;
    font-weight: 400;
    line-height: 20px;

    margin-bottom: 0;
    margin-left: 18px;
  }

  ::v-deep .icon-text .icon-text__text {
    @include bp(tablet) {
      width: 451px;
    }
    @include bp(desktop-wide) {
      width: 800px;
      margin-top: 30px;
    }

    margin-top: 13px;

    color: $color__black--light;
  }

  &.BackgroundLazy[data-loaded='true'] {
    color: $color__black--light;
  }
}

.standout__header {
  @include header-underline();
  @include bp(tablet) {
    margin-bottom: 56px;
  }
  @include bp(desktop-large) {
    margin-bottom: 24px;
    padding-bottom: 25px;
  }
  @include bp(desktop-wide) {
    margin-bottom: 50px;
  }

  margin-bottom: 26px;
}

.standout__oac {
  @include bp(tablet) {
    display: flex;

    align-items: center;
  }
  @include bp(desktop-wide) {
    margin-top: 20px;
  }
  p {
    @include bp(tablet) {
      margin: 0;
      margin-right: 25px;
    }
    @include bp(desktop-large) {
      margin-right: 96px;
    }
    @include bp(desktop-wide) {
      margin-right: 50px;
    }

    font-family: $font-family-second;
    font-weight: 400;

    margin-top: 0;
    margin-bottom: 20px;
  }
}
</style>

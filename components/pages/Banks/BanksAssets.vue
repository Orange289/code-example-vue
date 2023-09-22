<template>
  <div class="banks-assets">
    <Container>
      <div class="banks-assets__content">
        <h2
          v-html="$t('exante.pages.banks-institutionals.assets.header')"
          v-animate.repeat.fade="'slide-left'"
          class="banks-assets__header"
        ></h2>
        <p
          v-if="$te('exante.pages.banks-institutionals.assets.desc')"
          v-html="$t('exante.pages.banks-institutionals.assets.desc')"
          class="banks-assets__desc"
        ></p>
        <IconTextList
          :tKey="'exante.pages.banks-institutionals.assets.items'"
        />
        <div class="banks-assets__oac">
          <p
            v-html="$t('exante.pages.banks-institutionals.assets.oac')"
            v-animate.repeat.fade="'slide-left'"
          ></p>
          <div
            v-animate.repeat.fade="'slide-left'"
            :style="{ 'transition-delay': '0.6s' }"
          >
            <OpenAccountButton
              data-style-type="fgreen"
              class="banks-assets__button"
            ></OpenAccountButton>
          </div>
        </div>
      </div>
      <div class="banks-assets__image">
        <picturelazy
          :source="[
            {
              srcset:
                '/static/images/banks-institutionals/banks-assets.webp 1x, /static/images/banks-institutionals/banks-assets@2x.webp 2x'
            },
            {
              srcset:
                '/static/images/banks-institutionals/banks-assets.png 1x, /static/images/banks-institutionals/banks-assets@2x.png 2x'
            }
          ]"
          v-animate.repeat.fade="'slide-right'"
          alt="banks assets"
          role="presentation"
        ></picturelazy>
        <ul class="banks-assets__icons">
          <li
            v-for="(icon, index) in icons"
            :key="index"
            :class="`banks-assets__icon banks-assets__icon--${icon}`"
          >
            <svg-icon
              :name="`fileformats/${icon}`"
              :style="{ 'transition-delay': `${0.15 * index}s` }"
              v-animate.repeat.fade="'slide-up'"
            />
          </li>
        </ul>
      </div>
    </Container>
  </div>
</template>

<script>
import Container from '~/components/general/Container.vue'
import OpenAccountButton from '~/components/general/OpenAccountButton/OpenAccountButton.vue'
import Block800 from '~/components/general/blocks/Block-800.vue'
import IconTextList from '~/components/icon-text/IconTextList.vue'
import picturelazy from '~/components/general/Lazy/PictureLazy.vue'

export default {
  name: 'BanksAssets',
  components: {
    Container,
    OpenAccountButton,
    IconTextList,
    picturelazy
  },
  mixins: [Block800],
  data() {
    return {
      icons: ['pdf', 'xls', 'csv']
    }
  }
}
</script>

<style lang="scss" scoped>
.banks-assets {
  @include bp(tablet) {
    padding-top: 59px;
    padding-bottom: 91px;
  }
  @include bp(desktop-large) {
    padding-top: 67px;
    padding-bottom: 121px;
  }
  @include bp(desktop-wide) {
    padding-top: 100px;
    padding-bottom: 118px;
  }

  padding-top: 40px;
  padding-bottom: 96px;

  ::v-deep .icon-text-list .icon-text-list__item {
    @include bp(desktop) {
      width: calc(50% - 50px);
      padding-right: 0;
    }

    flex-direction: row;

    margin-bottom: 30px;

    flex-wrap: wrap;

    &:first-child {
      @include bp(desktop) {
        width: 100%;
      }
    }

    &:last-child {
      @include bp(desktop) {
        margin-left: 50px;
      }

      margin-bottom: 20px;
      padding-right: 0;
    }
  }

  ::v-deep .icon-text .icon-text__wrap {
    flex-direction: row;

    flex-grow: 0;
  }

  ::v-deep .icon-text .icon-text__icon-wrap {
    // @include bp(desktop-large) {
    //   margin-right: 0;
    // }

    margin-right: 15px;
  }

  ::v-deep .icon-text .icon-text__title {
    display: inline-flex;

    align-items: center;
  }

  ::v-deep .icon-text .icon-text__text {
    margin-top: 10px;
  }

  .container {
    @include bp(desktop) {
      display: flex;

      justify-content: space-between;
    }
  }

  .icon-text-list {
    @include bp(desktop) {
      margin-bottom: 48px;

      align-items: flex-start;
    }
    @include bp(desktop-large) {
      margin-bottom: 50px;
    }
  }
}

.banks-assets__header {
  @include h1;
  @include header-underline();
  @include bp(desktop-wide) {
    font-size: 56px;
  }
}

.banks-assets__desc {
  @include bp(desktop) {
    margin-bottom: 70px;
  }
  @include bp(desktop-large) {
    margin-bottom: 51px;
  }
  @include bp(desktop-wide) {
    margin-bottom: 60px;
  }

  margin-bottom: 30px;
}

.banks-assets__content {
  @include bp(desktop) {
    max-width: 604px;
    margin-bottom: 0;
  }
  @include bp(desktop-large) {
    max-width: 716px;
  }
  @include bp(desktop-wide) {
    max-width: 875px;
  }

  margin-bottom: 35px;
}

.banks-assets__oac {
  @include bp(desktop) {
    display: flex;
  }

  p {
    @include bp(desktop) {
      max-width: 339px;
      margin: 0;
      margin-right: 60px;
    }
    @include bp(desktop-large) {
      margin-right: 20px;
    }
    @include bp(desktop-wide) {
      margin-right: 60px;
    }

    font-family: $font-family-second;
    font-weight: 400;
  }
}

.banks-assets__image {
  @include bp(tablet) {
    max-width: 308px;
    margin-bottom: -20px;
  }
  @include bp(desktop-large) {
    max-width: 430px;
  }
  @include bp(desktop-wide) {
    position: absolute;
    right: 0;
    bottom: -182px;

    max-width: 670px;
  }

  font-size: 0;

  position: relative;

  margin-top: -10px;
}

.banks-assets__icons {
  @include bp(desktop) {
    bottom: 27px;
  }
  @include bp(desktop-large) {
    bottom: 46px;
  }
  @include bp(desktop-wide) {
    right: 365px;
    bottom: 120px;
  }

  position: absolute;
  bottom: -35px;

  display: flex;

  margin: 0;
  padding: 0;
}

.banks-assets__icon {
  @include bp(desktop-wide) {
    width: 70px;
    height: 90px;
  }

  width: 60px;
  height: 78px;

  list-style: none;

  &--xls {
    @include bp(desktop-wide) {
      margin-top: 10px;
      margin-right: 25px;
    }

    margin-right: 34px;
  }

  &--pdf {
    @include bp(desktop-wide) {
      margin-top: 20px;
      margin-right: 25px;
    }

    margin-right: 34px;
  }

  svg {
    width: 100%;
    height: 100%;
  }
}
</style>

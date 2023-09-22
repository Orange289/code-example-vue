<template>
  <div class="intro">
    <UnderHeader class="intro__wrap">
      <div class="intro__content">
        <Breadcrumbs class="intro__breadcrumbs breadcrumbs--ipo" green />
        <h1
          v-animate.repeat.fade="'slide-left'"
          class="intro__header"
          v-html="$t('exante.pages.ipo.intro.header')"
        ></h1>
        <h2
          v-animate.repeat.fade="'slide-left'"
          v-html="$t('exante.pages.ipo.intro.text')"
        ></h2>
        <div class="intro__btns">
          <div
            v-animate.repeat.fade="'slide-left'"
            :style="{ 'transition-delay': '0.25s' }"
            class="text-oac__button-wrap"
          >
            <OpenAccountButton
              class="text-oac__button text-oac__button--open"
              data-style-type="fgreen"
            >
            </OpenAccountButton>
          </div>
        </div>
      </div>
      <div class="intro__image">
        <ImageLazy
          v-animate.repeat.fade="'slide-right'"
          lazy-src="/static/images/ipo/ipos.svg"
          alt=""
          role="presentation"
        />
        <div class="intro__btns intro__btns--mobile">
          <div class="text-oac__button-wrap">
            <OpenAccountButton
              class="text-oac__button text-oac__button--open"
              data-style-type="fgreen"
            >
            </OpenAccountButton>
          </div>
        </div>
      </div>
      <!-- <div v-animate.repeat.fade="'slide-right'" class="intro__image">
      <img src="/static/images/ipo/ipos.svg" alt="" />
    </div> -->
    </UnderHeader>
  </div>
</template>

<script>
import Breadcrumbs from '~/components/general/Breadcrumbs/Breadcrumbs.vue'
import OpenAccountButton from '~/components/general/OpenAccountButton/OpenAccountButton.vue'
import ImageLazy from '~/components/general/Lazy/ImageLazy.vue'
import UnderHeader from '~/components/general/UnderHeader/UnderHeader.vue'

export default {
  name: 'Intro',
  components: {
    UnderHeader,
    Breadcrumbs,
    OpenAccountButton,
    ImageLazy
  },
  created() {
    this.$route.meta.currentPageName = this.$t('exante.pages.ipo.pageName')
  }
}
</script>
<style lang="scss" scoped>
.intro {
  @include bp(tablet) {
    padding: 80px 0;
  }

  padding-bottom: 5px;

  .intro__wrap {
    @include bp(tablet) {
      display: flex;

      justify-content: space-between;
    }
  }

  .intro__breadcrumbs {
    margin-bottom: 32px;

    ::v-deep .breadcrumbs__routes {
      @include bp(tablet) {
        margin-top: 0;
      }
    }
  }

  .text-oac__button--open {
    @include bp(desktop-wide) {
      margin-right: 50px;
    }

    margin-bottom: 20px;
  }

  .intro__btns {
    @include bp(tablet) {
      display: block;
    }

    display: none;
    &.intro__btns--mobile {
      @include bp(tablet) {
        display: none;
      }

      display: block;
    }
  }
  .intro__header {
    @include h1();
    @include header-underline();
  }
}
</style>

<template>
  <Parallax
    class="intro"
    :parallax-images="parallaxImages"
    :extra-offset="-120"
  >
    <UnderHeader>
      <Container class="intro__container">
        <!-- <breadcrumbs :routeName="intro.header"></breadcrumbs> -->
        <tabs v-if="!notabs" :items="tabs"></tabs>
        <h1
          v-if="header || texts.header"
          class="intro__header"
          v-html="header || texts.header"
        ></h1>
        <div v-if="text || texts.text" class="intro__desc">
          <p v-html="text || texts.text"></p>
        </div>
        <OpenAccountButton data-style-type="fgreen" class="intro__button">
          <template v-if="buttonText"
            ><span v-html="buttonText"></span
          ></template>
        </OpenAccountButton>
      </Container>
    </UnderHeader>
  </Parallax>
</template>

<script>
import Container from '~/components/general/Container.vue'
import OpenAccountButton from '~/components/general/OpenAccountButton/OpenAccountButton.vue'
import Parallax from '~/components/animations/Parallax.vue'
import tabs from '~/components/general/Tabs/Tabs.vue'
import UnderHeader from '~/components/general/UnderHeader/UnderHeader.vue'
// import bglazy from '~/components/general/Lazy/BackgroundLazy.vue'

export default {
  name: 'Intro',
  components: {
    UnderHeader,
    Container,
    OpenAccountButton,
    Parallax,
    tabs
  },
  // mixins: [bglazy],
  props: {
    texts: {
      type: Object,
      default: null
    },
    header: {
      type: String,
      default: null
    },
    buttonText: {
      type: String,
      default: null
    },
    text: {
      type: String,
      default: null
    },
    parallaxImages: {
      type: Array,
      default: null
    },
    notabs: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    tabs() {
      const tabs = []

      for (const [path, value] of Object.entries(
        this.$t('exante.pages.institutionals.items')
      )) {
        const nameUk = value.name_uk ? value.name_uk : false
        tabs.push({ path, name: value.name, name_uk: nameUk })
      }
      return tabs
    }
  }
}
</script>

<style lang="scss" scoped>
.intro {
  @include bp(tablet) {
    padding-top: 20px;
    padding-bottom: 20px;
  }

  display: flex;

  min-height: 100vh;
  padding-bottom: 60px;

  align-items: center;

  ::v-deep picture {
    @include bp(0 desktop-large) {
      transform: none !important;
    }
  }

  .intro__header {
    @include header-underline();
    @include bp(tablet) {
      margin-top: 30px;
    }
    @include bp(desktop) {
      margin-bottom: 36px;
    }
    @include bp(desktop-large) {
      margin-top: 40px;
      margin-bottom: 40px;
    }

    margin-top: 0;
    margin-bottom: 20px;

    transition: color 0.3s ease-in-out;

    color: inherit;
  }

  // ::v-deep .breadcrumbs {
  //   color: inherit;
  // }

  .intro__desc {
    @include bp(tablet) {
      font-size: 16px;
      line-height: 20px;

      width: 50%;
      margin-bottom: 30px;
    }
    @include bp(desktop-large) {
      font-size: 18px;
      line-height: 25px;

      margin-bottom: 35px;
    }
    @include bp(desktop-wide) {
      font-size: 22px;
      line-height: 30px;

      margin-bottom: 55px;
    }

    font-size: 18px;
    font-weight: 300;
    line-height: 26px;

    transition: color 0.3s ease-in-out;

    color: inherit;
  }

  .intro__button {
    @include bp(mobile-med tablet) {
      width: auto;
    }
    @include bp(0 tablet) {
      font-size: 19px;
    }
    @include bp(tablet) {
      font-size: 24px;

      min-height: 50px;
    }
    &:hover,
    &:focus {
      color: $color__white;
    }
  }

  // &[data-loaded='true'] {
  //   color: #fff;

  //   // ::v-deep .breadcrumbs {
  //   //   color: #fff;
  //   // }
  // }
}
</style>

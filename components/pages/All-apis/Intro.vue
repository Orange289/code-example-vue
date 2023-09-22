<template>
  <div class="intro">
    <UnderHeader>
      <Container class="intro__container">
        <Breadcrumbs
          :items="[{ name: this.$t('exante.pages.apis.pagename') }]"
          green
          class="intro__breadcrumbs"
        />
        <div class="intro__wrap">
          <h1
            v-animate.repeat.fade="'slide-up'"
            class="intro__header"
            v-html="header"
          ></h1>
          <slot></slot>
        </div>
      </Container>
    </UnderHeader>
  </div>
</template>

<script>
import Container from '~/components/general/Container.vue'
import Breadcrumbs from '~/components/general/Breadcrumbs/Breadcrumbs'
import UnderHeader from '~/components/general/UnderHeader/UnderHeader.vue'

export default {
  name: 'IntroAPIs',
  components: {
    UnderHeader,
    Container,
    Breadcrumbs
  },
  props: {
    header: {
      type: String,
      default: null
    }
  }
}
</script>

<style lang="scss" scoped>
.intro {
  @include bp(tablet) {
    padding-bottom: 70px;
  }

  background-color: #f2f8f2;

  .intro__header {
    @include h1;
    @include header-underline;

    margin: 52px 0 50px;
  }

  ::v-deep .case,
  ::v-deep .icon-text .icon-text__wrap-link,
  ::v-deep .features__item {
    position: relative;
    z-index: 0;

    &:after {
      @include bp(tablet) {
        transform: translate(20px, 20px);
      }

      position: absolute;
      z-index: -1;
      top: 0;
      left: 0;

      width: 100%;
      height: 100%;

      content: '';
      transition-timing-function: ease-in-out;
      transition-duration: 0.2s;
      transition-property: width, height, box-shadow;
      transform: translate(10px, 10px);

      background-color: #e4f0e5;
      box-shadow: 0 10px 25px 0 #a6adaf1a;

      will-change: width, height, box-shadow;
    }
  }
}
</style>

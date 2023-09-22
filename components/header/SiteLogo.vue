<template>
  <a :href="logo.homelink" class="site-logo">
    <imagelazy
      :lazySrc="logo.src"
      :alt="logo.alt"
      :class="['site-logo__img', 'site-logo__img--' + logo.alt]"
    />
    <imagelazy
      :lazySrc="logo.src_white"
      :alt="logo.alt"
      :class="[
        'site-logo__img',
        'site-logo__img--white',
        'site-logo__img--' + logo.alt
      ]"
    />
  </a>
</template>

<script>
import imagelazy from '~/components/general/Lazy/ImageLazy.vue'

export default {
  name: 'SiteLogo',
  components: {
    imagelazy
  },
  props: {
    logo: Object
  }
}
</script>

<style lang="scss">
.site-logo {
  .site-logo__img {
    &.site-logo__img--white {
      display: none;
    }

    &.site-logo__img--ext,
    &.site-logo__img--xhk {
      @include bp(tablet) {
        max-width: 110px;
        max-height: 40px;
      }
    }

    &.site-logo__img--lcm {
      @include bp(tablet) {
        max-width: 40px;
        max-height: 50px;
      }
    }
  }

  .navigation & {
    @include bp(0 tablet) {
      position: absolute;
      z-index: 1;
      left: -100%;

      display: inline-block;
      visibility: visible;

      ._below-header & {
        position: relative;
        left: auto;
      }
    }

    .site-logo__img {
      @include bp(mobile tablet) {
        width: 250px;
      }

      width: 125px;
    }
  }

  .navigation.navigation--open & {
    @include bp(0 tablet) {
      position: relative;
      left: auto;
    }
    @include bp(0 mobile) {
      padding-left: $navigation-padding-base;
    }
    @include bp(mobile tablet) {
      padding-left: $navigation-padding-base * 2;
    }

    .site-logo__img {
      @include bp(0 tablet) {
        display: inline-block;
      }
    }

    .site-logo__img--white {
      @include bp(0 tablet) {
        display: none;
      }
    }
  }

  .page.page--home .navigation:not(.navigation--open) & .site-logo__img {
    @include bp(0 tablet) {
      display: none;

      &.site-logo__img--white {
        display: inline-block;
      }
    }
  }
}
</style>

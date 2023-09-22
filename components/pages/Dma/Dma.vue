<template>
  <InstitutionalLayout
    :header="$t('exante.pages.dma.intro.header')"
    :text="$t('exante.pages.dma.intro.text')"
    :parallaxImages="[
      {
        srcset:
          '/static/images/dma/dma-intro.jpg 1x, /static/images/dma/dma-intro@2x.jpg 2x'
      }
    ]"
    class="layout-dma"
    is-dma
  >
    <div class="dma">
      <Info class="dma__info" />
      <Start
        :header="$t('exante.pages.dma.start.header')"
        :subtitle="$t('exante.pages.dma.start.subtitle')"
        :desc="$t('exante.pages.dma.start.desc')"
        :steps="$t('exante.pages.institutionals.dma.steps')"
        :itemsTitle="$t('exante.pages.dma.start.itemsTitle')"
        :itemsTKey="'exante.pages.dma.start.items'"
        class="dma__start"
      />
    </div>
    <template #textoac>
      <HeaderTextDemoOac></HeaderTextDemoOac>
    </template>
  </InstitutionalLayout>
</template>

<script>
import Info from './info.vue'
import HeaderTextDemoOac from './HeaderTextDemoOac.vue'
import InstitutionalLayout from '~/components/layouts/Institutional.vue'
import Start from '~/components/institutionals/Start/Start.vue'

export default {
  name: 'Dma',
  components: {
    InstitutionalLayout,
    Info,
    Start,
    HeaderTextDemoOac
  }
}
</script>

<style lang="scss" scoped>
.layout-dma {
  ::v-deep .tabs {
    display: none;
  }

  ::v-deep .intro__header {
    margin-top: 0;
  }
}

.dma {
  ::v-deep .intro__desc span {
    @include bp(desktop) {
      font-size: 24px;
    }
    @include bp(desktop-large) {
      font-size: 32px;
    }

    font-size: 28px;

    display: block;
  }

  ::v-deep .start__content {
    @include bp(desktop-large) {
      margin-bottom: 80px;
    }
    @include bp(desktop-wide) {
      margin-bottom: 88px;
    }

    margin-bottom: 55px;
  }

  .dma__start {
    @include bp(desktop) {
      padding-top: 72px;
    }
    @include bp(desktop-large) {
      padding-top: 80px;
    }
    @include bp(desktop-wide) {
      padding-top: 120px;
      padding-bottom: 75px;
    }

    padding-top: 60px;
    padding-bottom: 10px;

    &:before {
      @include bp(desktop) {
        left: 135px;

        border-width: 26px 26px 0 26px;
      }
      @include bp(desktop-large) {
        left: 150px;

        border-width: 32px 32px 0 32px;
      }
      @include bp(desktop-wide) {
        display: none;
      }

      top: 0;
    }

    ::v-deep .start__features-title {
      @include bp(desktop) {
        font-size: 42px;
        line-height: 1.42;
      }
      @include bp(desktop-large) {
        font-size: 48px;
        line-height: 1.25;

        margin-bottom: 47px;
      }
      @include bp(desktop-wide) {
        font-size: 56px;
        line-height: 60px;

        margin-bottom: 34px;
      }

      font-family: $font-family-second;
      font-size: 32px;
      font-weight: 300;
      line-height: 1.25;

      margin-bottom: 51px;
    }

    ::v-deep .icon-text {
      @include bp(desktop) {
        width: 50%;
      }
      @include bp(desktop-wide) {
        width: 25%;
      }

      flex-wrap: wrap;

      .icon-text__wrap {
        flex-grow: 0;
      }
    }

    ::v-deep .icon-text-list {
      @include bp(desktop-wide) {
        flex-wrap: nowrap;
      }
    }

    ::v-deep .icon-text__icon-wrap {
      @include bp(desktop-large desktop-wide) {
        max-width: 60px;
        max-height: 60px;
      }

      max-width: 50px;
      max-height: 50px;
      margin-bottom: 30px;

      align-items: flex-start;

      svg {
        @include bp(desktop-large desktop-wide) {
          width: 60px;
          max-width: 60px;
          height: 60px;
          max-height: 60px;
        }

        width: 50px;
        max-width: 50px;
        height: 50px;
        max-height: 50px;
      }
    }

    ::v-deep .icon-text__title,
    ::v-deep .icon-text__text {
      width: 100%;
    }

    ::v-deep .icon-text__title {
      @include bp(desktop) {
        font-size: 28px;
        line-height: 40px;
      }
      @include bp(desktop-wide) {
        font-size: 32px;
      }

      color: #fff;
    }

    ::v-deep .icon-text__text {
      @include bp(desktop) {
        font-size: 22px;
      }
    }
  }
}
</style>

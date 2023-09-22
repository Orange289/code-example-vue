<template>
  <InstitutionalLayout
    :header="$t('exante.pages.proprietary-traders.intro.header')"
    :text="$t('exante.pages.proprietary-traders.intro.text')"
    :parallaxImages="[
      {
        srcset:
          '/static/images/traders/traders.jpg 1x, /static/images/traders/traders@2x.jpg 2x'
      }
    ]"
  >
    <div class="traders">
      <Benefits class="traders__benefits">
        <template #additionalContent>
          <Flags />
        </template>
      </Benefits>
      <DMA />
      <!-- <features :items="texts.features.items">
        <template #after_list>
          <TextButLink
            :link="texts.features.link"
            :open-account="texts.features.openAccount"
          >
            {{ texts.features.moreText }}
          </TextButLink>
        </template>
      </features> -->
      <Bonds />
      <HttpApi class="traders__http-api" />
    </div>
  </InstitutionalLayout>
</template>

<script>
// {
//   srcset:
//     '/static/images/traders/traders.webp 1x, /static/images/traders/traders@2x.webp 2x'
// },
import Benefits from './benefits.vue'
import InstitutionalLayout from '~/components/layouts/Institutional.vue'
import Flags from '~/components/institutionals/traders/flags.vue'
import DMA from '~/components/institutionals/dma/DMA.vue'
// import Features from '~/components/institutionals/Features.vue'
// import TextButLink from '~/components/text-but-link/TextButLink.vue'
import Bonds from '~/components/institutionals/bonds.vue'
import HttpApi from '~/components/institutionals/HTTP_API/HTTP_API.vue'

export default {
  name: 'Traders',
  components: {
    InstitutionalLayout,
    Benefits,
    Flags,
    DMA,
    // Features,
    // TextButLink,
    Bonds,
    HttpApi
  }
}
</script>

<style lang="scss" scoped>
.traders {
  @include bp(desktop) {
    ::v-deep .text-but-link .text-but-link__text {
      font-size: 24px;
    }

    ::v-deep .benefits .features .icon-text-list .icon-text-list__item {
      width: 50%;
    }

    ::v-deep & > .features .icon-text-list {
      justify-content: space-between;
    }
    ::v-deep & > .features .icon-text-list .icon-text-list__item {
      width: calc((100% - 100px) / 3);
      padding-right: 0;
    }
  }
  @include bp(desktop-large) {
    ::v-deep .bonds .bonds__items {
      margin-top: 0;
    }
  }
  @include bp(desktop-wide) {
    ::v-deep .benefits .features .icon-text-list .icon-text-list__item {
      max-width: 400px;
    }

    ::v-deep
      .benefits
      .features
      .icon-text-list
      .icon-text-list__item:nth-child(3n) {
      margin-right: 0;
    }
  }
  .features {
    color: #fff;
    background-color: $color__black--lighter;

    ::v-deep .icon-text__title {
      color: #fff;
    }
  }

  .benefits ::v-deep .features {
    @include bp(desktop) {
      .container {
        flex-wrap: nowrap;
      }
    }
    .container {
      display: flex;

      flex-wrap: wrap;
    }
  }

  .bonds {
    background: $color__gray--light;
  }
}
</style>

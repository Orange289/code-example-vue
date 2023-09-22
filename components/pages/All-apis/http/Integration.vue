<template>
  <Features :items-t-key="itemsTKey" green class="integration">
    <template #before_list>
      <h2
        v-animate.repeat.fade="'slide-left'"
        class="integration__header"
        v-html="$t('exante.pages.apis.items.http-api.integration.header')"
      ></h2>
    </template>
    <template #list_item>
      <div
        v-animate.repeat.fade="'slide-up'"
        :style="{
          'transition-delay': `${0.15 * ($t(itemsTKey).length + 1)}s`
        }"
        class="integration__links"
      >
        <SiteButton
          v-for="(link, index) in $t(
            'exante.pages.apis.items.http-api.integration.links'
          )"
          :key="index"
          :href="link.url"
          :target="link.target"
          data-style-type="fwhite"
          class="integration__link"
        >
          <span v-html="link.text"></span>
        </SiteButton>
      </div>
    </template>
  </Features>
</template>

<script>
import Features from '~/components/general/Features/Features.vue'
import SiteButton from '~/components/general/SiteButton/SiteButton.vue'

export default {
  name: 'Integration',
  components: {
    Features,
    SiteButton
  },
  data() {
    return {
      itemsTKey: 'exante.pages.apis.items.http-api.integration.items'
    }
  }
}
</script>

<style lang="scss" scoped>
.integration {
  padding: 120px 0 70px;

  ::v-deep .container {
    display: flex;

    align-items: flex-start;
  }
  .integration__header {
    @include h1;
    @include header-underline(#fff);
    @include bp(tablet) {
      margin-top: 20px;
      margin-right: 135px;
    }

    color: inherit;
  }

  .integration__links {
    @include bp(tablet) {
      width: 19%;
      // max-width: 20%;
      // padding-right: 7%;
    }

    text-align: left;
  }

  .integration__link {
    line-height: 1.15;

    text-align: left;

    ::v-deep .site-button__content {
      padding-top: 20px;
      padding-bottom: 20px;
    }
  }

  ::v-deep .icon-text {
    @include bp(tablet) {
      width: 100%;
      // max-width: calc(100% / 3);
      padding-right: 100px;
    }
    .icon-text__icon {
      color: #7fbe9b;
    }
    .icon-text__icon-wrap {
      @include bp(tablet) {
        margin-bottom: 30px;
      }
    }
  }

  ::v-deep .icon-text-list {
    & > * {
      @include bp(tablet) {
        max-width: 38%;
        &:nth-child(3n + 2) {
          max-width: 34%;
        }
        &:nth-child(3n) {
          max-width: 28%;
          padding-right: 20px;
        }
      }
    }
  }
}
</style>

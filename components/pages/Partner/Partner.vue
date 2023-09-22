<template>
  <InstitutionalLayout
    :header="$t('exante.pages.partner.intro.header')"
    :text="$t('exante.pages.partner.intro.text')"
    :parallax-images="[
      {
        srcset:
          '/static/images/partner/partner-intro.jpg 1x, /static/images/partner/partner-intro@2x.jpg 2x'
      }
    ]"
    :button-text="$t('exante.globals.open_account.referral')"
    :notabs="true"
    class="partnerIntro"
  >
    <div class="partner">
      <Howitworks id="how" />
      <Earn id="rebates" />
      <Trading id="about" />
      <Instruments />
      <Features />
      <Facts />
      <!-- <Awards /> -->
    </div>
    <template #textoac><VVoid></VVoid></template>
    <template #customer_care><VVoid></VVoid></template>
    <template #footer_wrap>
      <Created
        :open-account-text="$t('exante.globals.open_account.referral')"
        :no-privacy="true"
      ></Created>
      <!-- <FooterSiteShort :copyrights="$t('partners.copyrights')" /> -->
    </template>
  </InstitutionalLayout>
</template>

<script>
import Howitworks from './Howitworks.vue'
import Earn from './Earn.vue'
import Trading from './Trading.vue'
import Instruments from './Instruments.vue'
import Features from './Features.vue'
import Facts from './Facts.vue'
// import Awards from './Awards.vue'
import InstitutionalLayout from '~/components/layouts/Institutional.vue'
import Created from '~/components/exante/created/Created.vue'
import VVoid from '~/utils/VVoid'

export default {
  name: 'Partner',
  components: {
    InstitutionalLayout,
    Howitworks,
    Earn,
    Trading,
    Instruments,
    Features,
    Facts,
    // Awards,
    Created,
    VVoid
  }
}
</script>

<style lang="scss" scoped>
.partnerIntro {
  ::v-deep .intro__header {
    @include bp(tablet) {
      max-width: 482px;
    }
    @include bp(desktop-large) {
      max-width: 550px;
    }
    @include bp(desktop-wide) {
      max-width: 642px;
    }
  }

  ::v-deep .intro__desc {
    @include bp(tablet) {
      max-width: 304px;
    }
    @include bp(desktop-large) {
      max-width: 342px;
    }
    @include bp(desktop-wide) {
      max-width: 416px;
    }
  }
}
.partner {
  ::v-deep .partner-button {
    @include bp(tablet) {
      width: auto;
      min-width: 216px;
    }
    @include bp(desktop-prewide) {
      min-width: 270px;
    }

    width: 100%;
  }

  ::v-deep .text-oac__button {
    @include bp(tablet) {
      white-space: nowrap;
    }
  }
}
</style>

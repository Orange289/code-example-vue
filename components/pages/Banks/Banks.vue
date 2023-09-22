<template>
  <InstitutionalLayout
    :header="$t('exante.pages.banks-institutionals.intro.header')"
    :text="$t('exante.pages.banks-institutionals.intro.text')"
    :parallax-images="[
      {
        srcset:
          '/static/images/banks-institutionals/banks-new.jpg 1x, /static/images/banks-institutionals/banks-new@2x.jpg 2x'
      }
    ]"
  >
    <div class="banks">
      <!-- <Logos :items="texts.logos"></Logos> -->
      <Assets />
      <Compliance />
      <Markets />
      <Manager />
      <!-- <WhiteLabel /> -->
      <Bonds dark></Bonds>
    </div>
    <template #customer_care><VVoid></VVoid></template>
    <!-- <template #before_textoac></template> -->
  </InstitutionalLayout>
</template>

<script>
// {
//   srcset:
//     '/static/images/banks-institutionals/banks-new.webp 1x, /static/images/banks-institutionals/banks-new@2x.webp 2x'
// },
import Assets from './BanksAssets.vue'
import Markets from './Markets.vue'
// import WhiteLabel from './WhiteLabel.vue'
import InstitutionalLayout from '~/components/layouts/Institutional.vue'
// import Logos from './Logos.vue'
import Compliance from '~/components/institutionals/Compliance/Compliance.vue'
import Manager from '~/components/institutionals/Manager.vue'
import Bonds from '~/components/institutionals/bonds.vue'
import VVoid from '~/utils/VVoid'

export default {
  name: 'Banks',
  components: {
    InstitutionalLayout,
    // Logos,
    Assets,
    Compliance,
    Markets,
    Manager,
    // WhiteLabel,
    Bonds,
    VVoid
  },
  mounted() {
    this.$store.dispatch('set_openAccountTypeCorporate')
  }
}
</script>

<style lang="scss" scoped>
.banks {
  ::v-deep .intro {
    @include bp(tablet) {
      padding-bottom: 90px;
    }
    @include bp(desktop-large) {
      padding-bottom: 80px;
    }
    @include bp(desktop-wide) {
      padding-bottom: 198px;
    }

    padding-bottom: 85px;
  }
}
</style>

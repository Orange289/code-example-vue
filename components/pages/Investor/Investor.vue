<template>
  <InstitutionalLayout
    :header="
      $route.path.includes('/uk/')
        ? $t('exante.pages.investor.intro.header_uk')
        : $t('exante.pages.investor.intro.header')
    "
    :text="$t('exante.pages.investor.intro.text')"
    :parallaxImages="[
      {
        srcset: '/static/images/investor/investor.jpg'
      }
    ]"
  >
    <div class="investor">
      <Benefits class="investor__benefits" />
      <AllInOne />
      <DMA />
      <Bonds />
      <Compliance />
    </div>
  </InstitutionalLayout>
</template>

<script>
import Benefits from './benefits.vue'
import AllInOne from './AllInOne/AllInOne.vue'
import InstitutionalLayout from '~/components/layouts/Institutional.vue'
import Compliance from '~/components/institutionals/Compliance/Compliance.vue'
import DMA from '~/components/institutionals/dma/DMA.vue'
import Bonds from '~/components/institutionals/bonds.vue'

// {
//   srcset: '/static/images/investor/investor.webp'
// },

export default {
  name: 'Investor',
  components: {
    InstitutionalLayout,
    Compliance,
    Benefits,
    DMA,
    Bonds,
    AllInOne
  }
}
</script>

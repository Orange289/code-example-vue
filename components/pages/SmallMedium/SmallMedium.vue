<template>
  <InstitutionalLayout
    :header="$t('exante.pages.small-and-medium-businesses.intro.header')"
    :text="$t('exante.pages.small-and-medium-businesses.intro.text')"
    :parallaxImages="[
      {
        srcset:
          '/static/images/small-medium/intro.jpg 1x, /static/images/small-medium/intro@2x.jpg 2x'
      }
    ]"
  >
    <div class="smallmedium">
      <DMA />
      <Bonds />
      <HttpApi class="smallmedium__http-api" />
      <FixApi class="smallmedium__fix-api" />
    </div>
  </InstitutionalLayout>
</template>

<script>
// {
//   srcset:
//     '/static/images/small-medium/intro.webp 1x, /static/images/small-medium/intro@2x.webp 2x'
// },
import FixApi from './FixApi.vue'
import InstitutionalLayout from '~/components/layouts/Institutional.vue'
import DMA from '~/components/institutionals/dma/DMA.vue'
import Bonds from '~/components/institutionals/bonds.vue'
import HttpApi from '~/components/institutionals/HTTP_API/HTTP_API.vue'

export default {
  name: 'SmallMedium',
  components: {
    InstitutionalLayout,
    DMA,
    Bonds,
    FixApi,
    HttpApi
  }
}
</script>

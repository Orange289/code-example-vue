<template>
  <div class="assets_wrap">
    <AssetsBase
      v-if="$route.path.includes('/uk/')"
      background_imageset="url('/static/images/compliance-bg.jpg') 1x, url('/static/images/compliance-bg@2x.jpg') 2x"
      :header="$t('exante.pages.FamilyOffice.assets_uk.header')"
      :desc="''"
      :items_key="'exante.pages.FamilyOffice.assets_uk.items'"
      :button_after_list="true"
    >
    </AssetsBase>
    <AssetsBase v-else></AssetsBase>
  </div>
</template>

<script>
import AssetsBase from './Assets_base.vue'

export default {
  name: 'Assets',
  components: {
    AssetsBase
  }
}
</script>

<template>
  <div class="compliance_wrap">
    <Assets v-if="$route.path.includes('/uk/')"></Assets>
    <ComplianceBase v-else></ComplianceBase>
  </div>
</template>

<script>
import ComplianceBase from './Compliance_base.vue'
import Assets from '~/components/institutionals/Assets/Assets.vue'

export default {
  name: 'Compliance',
  components: {
    ComplianceBase,
    Assets
  }
}
</script>

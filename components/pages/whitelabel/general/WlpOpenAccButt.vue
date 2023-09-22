<template>
  <OpenAccountButton :data-style-type="dataStyleType" class="WlpOpenAccButt">
    {{ $t('exante.globals.open_account.getStarted') }}
  </OpenAccountButton>
</template>

<script>
import OpenAccountButton from '~/components/general/OpenAccountButton/OpenAccountButton.vue'

export default {
  name: 'WlpOpenAccButt',
  components: { OpenAccountButton },
  props: {
    dataStyleType: {
      type: String,
      default: ''
    }
  }
}
</script>

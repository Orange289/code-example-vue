<template>
  <SiteButton
    v-bind="$attrs"
    data-micromodal-trigger="modal-open-acc"
    data-introduction="demo"
    class="DemoAccountButton"
    button-class="js-open-account-hash js-getdemo ga-getdemo"
  >
    <slot>
      <span v-html="$t('exante.globals.open_account.tryDemo')"></span>
    </slot>
  </SiteButton>
</template>

<script>
import SiteButton from '~/components/general/SiteButton/SiteButton.vue'

export default {
  name: 'DemoAccountButton',
  components: {
    SiteButton
  }
}
</script>

<style lang="scss" scoped>
.DemoAccountButton {
  @include bp(0 tablet) {
    width: 100%;
    max-width: 100%;
  }
}
</style>

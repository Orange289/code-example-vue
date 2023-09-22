<template>
  <SiteButton
    v-bind="{ ...$props, ...$attrs }"
    :href="href"
    :data-micromodal-trigger="loggedin ? false : trigger"
    class="OpenAccountButton"
  >
    <template v-if="loggedin">
      {{ $t('exante.globals.open_account.account') }}
    </template>
    <template v-else>
      <slot>{{ text }}</slot>
    </template>
  </SiteButton>
</template>

<script>
import SiteButton from '~/components/general/SiteButton/SiteButton.vue'

export default {
  name: 'OpenAccountButton',
  components: {
    SiteButton
  },
  props: {
    dataStyleType: {
      type: String,
      default: ''
    }
  },
  computed: {
    loggedin() {
      return this.$store.state.loggedin
    },
    trigger() {
      if (this.$store.state.openAccountType === 'corporate') {
        return 'modal-open-acc-corp'
      }
      return 'modal-open-acc'
    },
    text() {
      if (this.$attrs.arrow !== undefined) {
        return null
      } else if (this.loggedin) {
        return this.$t('exante.globals.open_account.account')
      } else {
        // return this.loggedin ? this.opentexts.account : this.opentexts.open
        return this.$t('exante.globals.open_account.open')
      }
    },
    href() {
      if (this.$attrs.href) {
        return this.$attrs.href
      } else if (this.loggedin) {
        return '/clientsarea/account/'
      } else {
        return false
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.OpenAccountButton {
  @include bp(tablet) {
    width: auto;
    min-width: 216px;
  }
  @include bp(desktop-prewide) {
    min-width: 270px;
  }

  width: 100%;
}
</style>

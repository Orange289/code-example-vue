<template>
  <textoac
    :main-text="$t('exante.globals.created.text')"
    :open-account-text="openAccountText"
    class="created"
  >
    <template #after_button>
      <template v-if="$route.path.includes('/uk/')">
        <span
          v-if="!noPrivacy && countryId === 'exante'"
          v-animate.repeat.fade="'slide-left'"
          :href="$t('exante.globals.created.privacyLink')"
          :style="{ 'transition-delay': '0.6s' }"
        >
          <svg-icon
            class="created__protects"
            name="institutionals/privacy-protect_default"
            width="100"
            height="85"
          ></svg-icon>
        </span>
      </template>
      <template v-else>
        <a
          v-if="!noPrivacy && countryId === 'exante'"
          v-animate.repeat.fade="'slide-left'"
          :href="$t('exante.globals.created.privacyLink')"
          :style="{ 'transition-delay': '0.6s' }"
        >
          <svg-icon
            class="created__protects"
            name="institutionals/privacy-protect"
            width="100"
            height="85"
          ></svg-icon>
        </a>
      </template>
    </template>
  </textoac>
</template>

<script>
import textoac from '~/components/general/TextOac/TextOac.vue'

export default {
  name: 'Created',
  components: {
    textoac
  },
  props: {
    openAccountText: {
      type: String,
      default: ''
    },
    noPrivacy: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    countryId() {
      return this.$store.$multisite.site.id
    }
  }
}
</script>

<style lang="scss" scoped>
.created {
  .created__protects {
    color: inherit;
  }
}
</style>

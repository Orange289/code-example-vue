<template>
  <div v-if="$slots.default" class="text-but-link">
    <div class="text-but-link__text">
      <div v-if="openAccount && loggedin" v-html="account"></div>
      <slot v-else></slot>
    </div>
    <SiteButton
      v-if="link && !openAccount"
      :class="buttonClass"
      :href="link"
      :data-style-type="white"
      arrow
    ></SiteButton>
    <OpenAccountButton
      :class="buttonClass"
      v-if="openAccount"
      arrow
    ></OpenAccountButton>
  </div>
</template>

<script>
import OpenAccountButton from '~/components/general/OpenAccountButton/OpenAccountButton.vue'
import SiteButton from '~/components/general/SiteButton/SiteButton.vue'

export default {
  name: 'TextButLink',
  components: {
    SiteButton,
    OpenAccountButton
  },
  props: {
    buttonClass: {
      default: null,
      type: String
    },
    link: {
      default: null,
      type: String
    },
    white: {
      default: false,
      type: Boolean
    },
    openAccount: {
      default: false,
      type: Boolean
    }
  },
  computed: {
    loggedin() {
      return this.$store.state.loggedin
    },
    account() {
      return this.$store.state.openAccount.texts.account
    }
  }
}
</script>

<style lang="scss" scoped>
.text-but-link {
  @include bp(tablet) {
    display: inline-flex;

    align-items: center;
  }

  .text-but-link__text {
    @include bp(tablet) {
      font-size: 24px;
      font-weight: 300;

      display: inline-block;

      margin-right: 35px;
      margin-bottom: 0;
      padding-right: 0;

      flex-shrink: 0;
    }
    @include bp(desktop) {
      font-size: 28px;

      margin-right: 70px;
    }
    @include bp(desktop-wide) {
      font-size: 32px;

      margin-right: 70px;
    }

    font-family: $font-family-second;
    font-size: 18px;
    font-weight: 400;
    line-height: 1.39;

    display: block;

    margin-bottom: 20px;
    padding-right: 32px;
  }
}
</style>

<template>
  <div
    v-if="isVisible"
    :class="[
      'icon-text',
      { 'icon-text--row-icon': toRowIcon },
      { 'icon-text--no-text': !$te(`${tKey}.title`) }
    ]"
  >
    <a
      v-if="$te(`${tKey}.link`)"
      :href="$t(`${tKey}.link`)"
      class="icon-text__wrap-link"
    >
      <IconTextContent
        :t-key="tKey"
        :to-row-icon="toRowIcon"
        class="icon-text__content"
      ></IconTextContent>
    </a>
    <template v-else>
      <IconTextContent
        :t-key="tKey"
        :to-row-icon="toRowIcon"
        class="icon-text__content"
      ></IconTextContent>
    </template>
  </div>
</template>

<script>
import IconTextContent from './IconTextContent.vue'

export default {
  name: 'IconText',
  components: {
    IconTextContent
  },
  props: {
    tKey: {
      default: '',
      type: String
    },
    toRowIcon: {
      default: false,
      type: Boolean
    }
  },
  computed: {
    isVisible() {
      if (this.$te(`${this.tKey}`)) {
        if (
          this.$store.$multisite.site.id !== 'exante' &&
          this.tKey ===
            'exante.pages.institutionals.compliance.items.institutionals/world'
        ) {
          return false
        }
        return true
      }
      return false
    }
  }
}
</script>

<style lang="scss" scoped>
.icon-text {
  // @include bp(tablet) {
  //   flex-direction: column;
  // }
  @include bp(desktop-large) {
    font-size: 18px;
    line-height: 1.39;
  }
  @include bp(desktop-wide) {
    font-size: 22px;
    line-height: 1.36;
  }

  font-size: 16px;
  line-height: 1.25;

  display: flex;
  flex-direction: column;

  color: inherit;
}
</style>

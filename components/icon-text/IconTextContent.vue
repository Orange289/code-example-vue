<template>
  <div
    :class="[
      'icon-text-content',
      { 'icon-text-content--row-icon': toRowIcon },
      { 'icon-text-content--no-text': !$te(`${tKey}.text`) }
    ]"
  >
    <div class="icon-text__wrap">
      <IconTextIcon :t-key="tKey" class="icon-text__icon-wrap"></IconTextIcon>
      <div
        v-if="$te(`${tKey}.title`)"
        class="icon-text__title"
        v-html="$t(`${tKey}.title`)"
      ></div>
    </div>
    <p
      v-if="$te(`${tKey}.text`)"
      class="icon-text__text"
      v-html="clearText()"
    ></p>
  </div>
</template>

<script>
import IconTextIcon from './IconTextIcon.vue'

export default {
  name: 'IconTextContent',
  components: {
    IconTextIcon
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
  methods: {
    clearText() {
      if (
        this.$route.path.includes('/uk/') &&
        this.tKey ===
          'exante.pages.banks-institutionals.assets.items.institutionals/layers' &&
        this.$te(`${this.tKey}.text`)
      ) {
        return this.$t(`${this.tKey}.text`).replace(
          ', fiat and crypto currencies',
          ' and fiat'
        )
      } else if (this.$te(`${this.tKey}.text`)) {
        return this.$t(`${this.tKey}.text`)
      }
      return ''
    }
  }
}
</script>

<style lang="scss" scoped>
.icon-text-content {
  display: flex;
  flex-direction: column;

  width: 100%;

  flex-grow: 1;
  .icon-text__wrap {
    display: flex;
    flex-direction: column;

    width: 100%;

    flex-grow: 1;
  }

  .icon-text__icon-wrap {
    @include bp(tablet) {
      display: inline-flex;

      max-width: 60px;
      max-height: 60px;

      flex-grow: 1;
      align-items: center;
    }
    @include bp(desktop-large) {
      max-width: 70px;
      max-height: 70px;
      margin-right: 30px;
    }

    max-width: 50px;
    max-height: 50px;
    margin-right: 13px;
  }

  .icon-text__icon {
    @include bp(desktop-large) {
      max-width: 60px;
    }

    color: $color__green;
  }

  .icon-text__title,
  .icon-text__text {
    ::v-deep br {
      @include bp(0 tablet) {
        display: none;
      }
    }
  }

  .icon-text__title {
    font-family: $font-family-second;
    font-weight: 400;

    margin-top: 0;

    hyphens: auto;
  }

  .icon-text__text {
    @include bp(desktop-wide) {
      margin-top: 25px;
    }

    margin-top: 20px;
    margin-bottom: 0;
  }

  &.icon-text-content--no-text {
    .icon-text__icon-wrap {
      @include bp(desktop-wide) {
        margin-bottom: 25px;
      }

      margin-bottom: 20px;
    }
  }

  &.icon-text-content--row-icon {
    .icon-text__wrap {
      flex-direction: row;

      align-items: center;
    }

    .icon-text__icon-wrap {
      margin-right: 20px;
    }
  }
}
</style>

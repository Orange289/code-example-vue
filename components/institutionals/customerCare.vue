<template>
  <TextAdd :textadd="texts" class="customer-care">
    <template #header>
      <span
        v-html="$t('exante.pages.institutionals.customercare.header')"
      ></span>
    </template>

    <p>
      <big
        ><b
          v-html="$t('exante.pages.institutionals.customercare.subheader')"
        ></b
      ></big>
    </p>
    <p v-html="$t('exante.pages.institutionals.customercare.text')"></p>

    <template #additional>
      <flags24></flags24>
    </template>
  </TextAdd>
</template>

<script>
import Block500 from '~/components/general/blocks/Block-500.vue'
import TextAdd from '~/components/text-add/TextAdd'
import flags24 from '~/components/flags24/Flags24'

export default {
  name: 'CustomerCare',
  components: {
    TextAdd,
    flags24
  },
  mixins: [Block500],
  props: {
    texts: {
      default: null,
      type: Object
    }
  }
}
</script>

<style lang="scss" scoped>
.customer-care {
  ::v-deep .text-add__text-wrap {
    @include bp(tablet) {
      width: 58%;
    }
    @include bp(desktop-wide) {
      width: 63.5%;
    }
  }
  ::v-deep .text-add__header br {
    @include bp(desktop-wide) {
      display: none;
    }
  }
  ::v-deep .text-add__text {
    @include bp(tablet) {
      width: calc(100vw - #{$padding-base-tablet} * 2);
    }
    @include bp(desktop) {
      width: 100%;
    }
    @include bp(desktop-large) {
      padding-right: 8%;
    }
    @include bp(desktop-wide) {
      padding-right: 10%;
    }
    ::v-deep p {
      &:first-child {
        @include bp(tablet desktop-large) {
          margin-bottom: 25px;
        }
        @include bp(desktop-large desktop-wide) {
          margin-bottom: 10px;
        }
      }
    }
  }
  ::v-deep .text-add__add-wrap {
    @include bp(desktop-wide) {
      margin-top: -10px;
      padding-left: 140px;
    }
  }
}
</style>

<template>
  <defaulLayout>
    <template #header_wrap>
      <slot name="header_wrap"></slot>
      <!-- <HeaderSite :texts="texts.header" /> -->
    </template>
    <template #default>
      <Intro
        v-if="!noIntro"
        :texts="textsIntro"
        :header="header"
        :text="text"
        :button-text="buttonText"
        :parallax-images="parallaxImages"
        :notabs="notabs"
      ></Intro>
      <slot></slot>
    </template>
    <template #before_textoac>
      <slot name="customer_care">
        <CustomerCare></CustomerCare>
      </slot>
    </template>
    <template #textoac>
      <slot name="textoac"></slot>
    </template>
    <template #footer_wrap>
      <slot name="footer_wrap"></slot>
      <!-- <FooterSite :texts="texts.footer" /> -->
    </template>
  </defaulLayout>
</template>

<script>
import Intro from '~/components/institutionals/intro.vue'
import CustomerCare from '~/components/institutionals/customerCare.vue'
import defaulLayout from '~/components/layouts/default.vue'

export default {
  name: 'InstitutionalLayout',
  components: {
    defaulLayout,
    Intro,
    CustomerCare
  },
  props: {
    textsIntro: {
      type: Object,
      default: null
    },
    parallaxImages: {
      type: Array,
      default: null
    },
    noIntro: {
      type: Boolean,
      default: false
    },
    header: {
      type: String,
      default: null
    },
    text: {
      type: String,
      default: null
    },
    buttonText: {
      type: String,
      default: null
    },
    notabs: {
      type: Boolean,
      default: false
    }
  }
}
</script>

<template>
  <div class="foot">
    <Container class="foot__container">
      <div v-if="copyrights" class="foot__block">
        <FooterCopyright v-for="(copyright, index) in copyrights" :key="index">
          {{ copyright }}
        </FooterCopyright>
      </div>
    </Container>
  </div>
</template>

<script>
import FooterCopyright from './FooterCopyright'
import Container from '~/components/general/Container.vue'

export default {
  name: 'FooterSite',
  components: {
    Container,
    FooterCopyright
  },
  props: {
    copyrights: {
      type: Array,
      default: () => false
    }
  }
}
</script>

<style lang="scss" scoped>
.foot {
  @include bp(mobile tablet) {
    padding-top: $padding-base * 2;
  }

  position: relative;
  z-index: 10;

  padding-top: $padding-base;
  padding-bottom: $padding-base * 2;

  background-color: $color__white;

  @media print {
    page-break-before: always;
    page-break-inside: avoid;
  }

  .foot__block {
    @include bp(tablet) {
      display: flex;

      & > * {
        &:nth-child(odd) {
          width: 59%;
        }
        &:nth-child(even) {
          width: 40%;
        }
      }
    }
  }
}
</style>

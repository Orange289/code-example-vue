<template>
  <div class="ForDevelopers">
    <Container>
      <h1
        class="ForDevelopers__header"
        v-html="$t('exante.pages.apis.for_developers.header')"
      ></h1>
      <div class="ForDevelopers__text" v-html="text"></div>
    </Container>
  </div>
</template>

<script>
import Container from '~/components/general/Container.vue'

export default {
  name: 'ForDevelopers',
  components: {
    Container
  },
  props: {
    integrateLink: {
      type: String,
      default: '#'
    }
  },
  computed: {
    integrateLinkHtml() {
      return `<a href="${this.$props.integrateLink}">${this.$t(
        'exante.pages.apis.for_developers.integration_guidelines'
      )}</a>`
    },
    text() {
      return this.$t('exante.pages.apis.for_developers.text', {
        integration_guidelines: this.integrateLinkHtml
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.ForDevelopers {
  padding: 90px 0;

  background-color: #f2f8f2;

  .ForDevelopers__header {
    @include h1;
    @include header-underline;
    @include bp(desktop-wide) {
      margin-bottom: 50px;
    }
  }

  .ForDevelopers__text {
    font-family: $font-family-second;
    font-weight: 400;
  }
}
</style>

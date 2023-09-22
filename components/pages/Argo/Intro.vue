<template>
  <section
    class="intro"
    data-background-image-set="url('/static/images/argo/intro-bg.jpg') 1x, url('/static/images/argo/intro-bg@2x.jpg') 2x"
  >
    <UnderHeader class="intro__unferheader-wrap">
      <Container>
        <Breadcrumbs />
        <div class="intro__header">
          ARGO
          <h1 v-html="$t('exante.pages.funds.argo.intro.header')"></h1>
        </div>
      </Container>
    </UnderHeader>
  </section>
</template>

<script>
import bglazy from '~/components/general/Lazy/BackgroundLazy.vue'
import Container from '~/components/general/Container'
import Breadcrumbs from '~/components/general/Breadcrumbs/Breadcrumbs'
import UnderHeader from '~/components/general/UnderHeader/UnderHeader.vue'

export default {
  name: 'Intro',
  components: {
    UnderHeader,
    Container,
    Breadcrumbs
  },
  mixins: [bglazy],
  created() {
    this.$route.meta.currentPageName = 'Funds / ARGO'
  }
}
</script>

<style lang="scss" scoped>
.intro {
  // @include bp(mobile tablet) {
  //   margin-top: 180px;
  // }
  @include bp(tablet) {
    margin-top: 0;
    // padding-top: 90px;

    background-position: 70% 70%;
  }

  height: 100vh;
  // margin-top: 90px;

  background-position: center;

  .intro__unferheader-wrap {
    height: 100%;
  }

  .breadcrumbs {
    width: 100%;
    padding-top: 30px;
  }

  ::v-deep .container {
    display: flex;

    height: 100%;

    flex-wrap: wrap;
    align-items: flex-start;
    justify-content: center;
  }
  .intro__header {
    @include bp(tablet) {
      font-size: 20px;

      width: auto;

      letter-spacing: 1.6px;
    }

    font-size: 16px;
    font-weight: 600;

    width: 100%;

    text-align: center;
    letter-spacing: 1.28px;
    text-transform: uppercase;

    h1 {
      @include argoTitle();
      @include bp(tablet) {
        margin-top: 30px;
      }

      margin-top: 20px;
      margin-bottom: 0;

      color: inherit;
    }
  }
}
</style>

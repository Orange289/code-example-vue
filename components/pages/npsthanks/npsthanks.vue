<template>
  <DefaultLayout>
    <div class="npsthanks">
      <Container class="npsthanks__container">
        <Breadcrumbs
          class="npsthanks__container__breadcrumbs breadcrumbs--npsthanks__container"
          green
        />
        <h1
          v-animate.repeat.fade="'slide-left'"
          class="npsthanks__header"
          v-html="$t('exante.pages.npsthanks.header')"
        ></h1>
        <p
          v-animate.repeat.fade="'slide-left'"
          class="npsthanks__text"
          v-html="$t('exante.pages.npsthanks.text')"
        ></p>
      </Container>
    </div>
  </DefaultLayout>
</template>

<script>
import DefaultLayout from '~/components/layouts/default.vue'
import Container from '~/components/general/Container.vue'
import Breadcrumbs from '~/components/general/Breadcrumbs/Breadcrumbs.vue'
import bglazy from '~/components/general/Lazy/BackgroundLazy.vue'

export default {
  components: {
    DefaultLayout,
    Container,
    Breadcrumbs
  },
  mixins: [bglazy]
  // created() {
  //   this.$route.meta.currentPageName = this.$t('exante.pages.npsthanks.pageName')
  // }
}
</script>

<style lang="scss" scoped>
.npsthanks {
  @include bp(0 mobile) {
    background-position: center;
  }
  @include bp(desktop) {
    min-height: 700px;
  }
  @include bp(desktop-wide) {
    min-height: 800px;
  }

  min-height: 400px;

  background-image: url('/static/images/nps-thank-you/npsthanks-bg@2x.jpg');
  background-size: cover;
}

.npsthanks__header {
  @include h1();
  @include header-underline();
  @include bp(desktop) {
    margin-top: 102px;
    margin-bottom: 30px;
  }

  margin-top: 50px;
}

.npsthanks__text {
  @include bp(desktop) {
    font-size: 22px;
  }

  color: $color__text;
}
</style>

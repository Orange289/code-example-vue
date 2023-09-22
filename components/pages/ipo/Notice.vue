<template>
  <div class="notice">
    <Container class="notice__container">
      <p
        v-animate.repeat.fade="'slide-up'"
        class="notice__text"
        v-html="$t('exante.pages.ipo.notice')"
      ></p>
    </Container>
  </div>
</template>

<script>
import Container from '~/components/general/Container.vue'

export default {
  components: {
    Container
  }
}
</script>

<style lang="scss" scoped>
.notice {
  padding: 50px 0;

  .notice__text {
    @include bp(tablet) {
      font-size: 14px;
    }

    font-size: 12px;

    margin: 0;
  }
}
</style>

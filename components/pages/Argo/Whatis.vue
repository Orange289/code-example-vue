<template>
  <section class="whatis">
    <Container>
      <h3 v-html="$t('exante.pages.funds.argo.whatis.header')"></h3>
      <div class="whatis__desc">
        <p v-html="$t('exante.pages.funds.argo.whatis.desc1')"></p>
        <p v-html="$t('exante.pages.funds.argo.whatis.desc2')"></p>
      </div>
    </Container>
  </section>
</template>

<script>
import Container from '~/components/general/Container'

export default {
  components: {
    Container
  }
}
</script>

<style lang="scss" scoped>
.whatis {
  padding-top: 50px;
  padding-bottom: 50px;

  @include bp(tablet) {
    padding-top: 120px;
    padding-bottom: 160px;
  }

  h3 {
    @include argoSubtitle();
    margin-top: 0;
    margin-bottom: 30px;

    @include bp(tablet) {
      margin-bottom: 60px;
    }
  }

  p {
    color: $color__black-2;
    margin: 0;

    @include bp(tablet) {
      font-size: 30px;
      max-width: 432px;
    }

    @include bp(desktop-large) {
      max-width: 540px;
    }

    @include bp(desktop-wide) {
      max-width: 700px;
    }
  }

  p + p {
    margin-top: 20px;

    @include bp(tablet) {
      margin-top: 0;
    }
  }
}

.whatis__desc {
  @include bp(tablet) {
    display: flex;
    justify-content: space-between;

    p:first-child {
      margin-right: 20px;
    }

    p:last-child {
      margin-left: 20px;
    }
  }
}
</style>

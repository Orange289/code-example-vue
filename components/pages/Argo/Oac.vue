<template>
  <section class="oac">
    <Container>
      <h3 v-html="$t('exante.pages.funds.argo.oac.text')"></h3>
      <ArgoButton
        :data-micromodal-trigger="loggedin ? false : 'modal-open-acc'"
        class="oac__button"
      >
        {{ $t('exante.globals.open_account.open') }}
      </ArgoButton>
    </Container>
  </section>
</template>

<script>
import Container from '~/components/general/Container'
import ArgoButton from '~/components/general/argo/ArgoButton.vue'

export default {
  name: 'Oac',
  components: {
    Container,
    ArgoButton
  },
  computed: {
    loggedin() {
      return this.$store.state.loggedin
    }
  }
}
</script>

<style lang="scss" scoped>
.oac {
  @include bp(tablet) {
    padding-top: 100px;
    padding-bottom: 100px;
  }

  padding-top: 50px;
  padding-bottom: 50px;

  background: $color__green-2;

  h3 {
    @include argoTitle();
    @include bp(tablet) {
      font-size: 40px;
      line-height: 48px;

      margin-bottom: 0;

      letter-spacing: 3.2px;
    }
    @include bp(desktop-wide) {
      margin-right: 346px;
    }

    margin-top: 0;
    margin-bottom: 30px;

    letter-spacing: 2.4px;

    color: $color__white;

    strong {
      font-size: inherit;
      line-height: inherit;
    }
  }

  ::v-deep .container {
    @include bp(tablet) {
      display: flex;

      justify-content: space-between;
      align-items: center;
    }
    @include bp(desktop-wide) {
      justify-content: flex-start;
    }
  }
}

.oac__button {
  @include bp(tablet) {
    width: auto;
  }

  width: 100%;

  ::v-deep .argo-button {
    @include bp(tablet) {
      width: 240px;
    }

    width: 100%;
  }
}
</style>

<template>
  <section class="disclaimer">
    <Container>
      <h3 v-html="$t('exante.pages.funds.argo.disclaimer.mainTitle')"></h3>
      <div>
        <p v-html="$t('exante.pages.funds.argo.disclaimer.intro')"></p>
        <p v-html="$t('exante.pages.funds.argo.disclaimer.intro2')"></p>
        <p v-html="$t('exante.pages.funds.argo.disclaimer.intro3')"></p>
      </div>
      <h4 v-html="$t('exante.pages.funds.argo.disclaimer.investorTitle')"></h4>
      <div>
        <p v-html="$t('exante.pages.funds.argo.disclaimer.investorText')"></p>
      </div>
      <h4
        v-html="$t('exante.pages.funds.argo.disclaimer.complianceTitle')"
      ></h4>
      <div>
        <p v-html="$t('exante.pages.funds.argo.disclaimer.complianceText')"></p>
        <p
          v-html="$t('exante.pages.funds.argo.disclaimer.complianceText2')"
        ></p>
      </div>
      <div class="disclaimer__confirmation">
        <p v-html="$t('exante.pages.funds.argo.disclaimer.confirmation')"></p>
        <div class="disclaimer__links">
          <a
            v-html="$t('exante.pages.funds.argo.disclaimer.yes')"
            href="#"
            class="disclaimer__link disclaimer__link--yes"
          ></a>
          <a
            v-html="$t('exante.pages.funds.argo.disclaimer.no')"
            href="/"
            class="disclaimer__link"
          ></a>
        </div>
      </div>
    </Container>
  </section>
</template>

<script>
import Container from '~/components/general/Container'

export default {
  name: 'Disclaimer',
  components: {
    Container
  },
  props: {
    texts: {
      type: Object,
      default: null
    }
  }
}
</script>

<style lang="scss" scoped>
.disclaimer {
  @include bp(tablet) {
    padding-top: 160px;
    padding-bottom: 160px;
  }

  padding-top: 50px;
  padding-bottom: 30px;

  color: $color__gray-2;
  background: $color__gray-2-light;

  ::v-deep a {
    text-decoration: underline;
    word-break: break-all;

    color: $color__gray-2;
  }

  h3 {
    @include bp(tablet) {
      font-size: 20px;
      line-height: 24px;
    }

    font-size: 14px;
    line-height: 16px;

    margin-top: 0;
    margin-bottom: 22px;
  }

  ::v-deep h4,
  ::v-deep p {
    @include bp(tablet) {
      font-size: 16px;
      line-height: 24px;
    }

    font-size: 12px;
    line-height: 16px;
  }

  h4 {
    font-weight: 600;

    color: $color__gray-2;
  }

  ::v-deep p {
    @include bp(tablet) {
      margin-bottom: 30px;
    }

    margin-top: 0;
    margin-bottom: 20px;
  }
}

.disclaimer__confirmation {
  @include bp(tablet) {
    font-size: 20px;
    line-height: 24px;

    padding-top: 30px;
  }

  font-size: 14px;

  padding-top: 20px;

  color: $color__black-2;
  border-top: 1px solid rgba($color__gray-2, 0.6);

  ::v-deep p {
    @include bp(tablet) {
      font-size: 20px;

      margin-bottom: 10px;
    }
  }

  .disclaimer__link {
    @include bp(tablet) {
      font-size: 20px;
    }

    font-size: 14px;
    font-weight: 600;
    line-height: 17px;

    margin-right: 20px;

    text-decoration: none;
    text-transform: uppercase;

    &--yes {
      color: $color__green-2;
    }
  }
}
</style>

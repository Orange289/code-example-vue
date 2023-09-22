<template>
  <section class="benefits">
    <Container>
      <h2
        v-html="$t('exante.pages.proprietary-traders.benefits.header')"
        v-animate.repeat.fade="'slide-left'"
        class="benefits__header"
      ></h2>
    </Container>
    <Features :itemsTKey="'exante.pages.proprietary-traders.benefits.items'">
      <template #after_list>
        <!-- <TextButLink
          v-if="benefits.moreText"
          :link="benefits.link"
          :open-account="benefits.openAccount"
        >
          {{ benefits.moreText }}
        </TextButLink> -->
        <slot name="additionalContent"></slot>
      </template>
    </Features>
  </section>
</template>

<script>
import Features from '~/components/institutionals/Features.vue'
import Container from '~/components/general/Container.vue'
import Block800 from '~/components/general/blocks/Block-800.vue'
// import TextButLink from '~/components/text-but-link/TextButLink.vue'

export default {
  name: 'Benefits',
  components: {
    Container,
    Features
    // TextButLink
  },
  mixins: [Block800]
}
</script>

<style lang="scss" scoped>
.benefits {
  @include bp(tablet) {
    ::v-deep .features .text-but-link .text-but-link__text {
      margin-bottom: 0;
    }
  }
  @include bp(desktop) {
    padding-top: 80px;
    padding-bottom: 80px;

    ::v-deep .features .icon-text-list .icon-text-list__item {
      width: 33.3%;
    }
  }
  @include bp(desktop-wide) {
    padding-top: 100px;

    ::v-deep .features .icon-text-list .icon-text-list__item {
      width: 25%;
      margin-bottom: 56px;
      padding-right: 5%;
    }

    ::v-deep .icon-text .icon-text__text {
      font-size: 22px;
      line-height: 30px;
    }
  }

  padding-top: 50px;
  padding-bottom: 50px;

  background-color: $color__gray--lightest;

  ::v-deep .icon-text .icon-text__text {
    font-family: $font-family-second;
    font-size: 18px;
    font-weight: 400;
    line-height: 24px;
  }

  .features {
    padding: 0;
  }
}

.benefits__header {
  @include h1;
}
</style>

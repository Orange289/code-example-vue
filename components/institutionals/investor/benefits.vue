<template>
  <section class="benefits">
    <Container>
      <h2 class="benefits__header" v-html="benefits.header"></h2>
      <IconTextList
        :items="benefits.items"
        class="benefits__items"
      ></IconTextList>
    </Container>
  </section>
</template>

<script>
import Container from '~/components/general/Container.vue'
import IconTextList from '~/components/icon-text/IconTextList.vue'

export default {
  name: 'Benefits',
  components: {
    Container,
    IconTextList
  },
  props: {
    benefits: {
      type: Object,
      default: null
    }
  }
}
</script>

<style lang="scss" scoped>
.benefits {
  @include bp(tablet) {
    padding-top: 70px;
    padding-bottom: 70px;

    ::v-deep .icon-text {
      width: 33%;
    }
  }
  @include bp(desktop) {
    padding-top: 80px;
    padding-bottom: 74px;

    ::v-deep .icon-text {
      padding-right: 108px;
    }

    ::v-deep .icon-text .icon-text__text {
      font-size: 24px;
    }

    ::v-deep .icon-text__icon {
      max-width: 60px;
      max-height: 60px;
    }
  }
  @include bp(desktop-wide) {
    padding-top: 100px;
    padding-bottom: 60px;

    ::v-deep .icon-text .icon-text__text {
      font-size: 28px;
    }
  }

  padding-top: 55px;
  padding-bottom: 48px;

  ::v-deep .icon-text {
    margin-bottom: 36px;

    flex-wrap: wrap;

    .icon-text__text {
      font-size: 22px;
      font-weight: 400;
      line-height: 30px;

      width: 100%;
      margin: 0;
    }

    .icon-text__icon {
      max-width: 50px;
      max-height: 50px;
    }

    &:last-child {
      margin-bottom: 0;
    }
  }

  ::v-deep .icon-text__text {
    margin: 0;
  }

  ::v-deep .icon-text .icon-text__icon-wrap {
    margin-bottom: 5px;
  }
}

.benefits__items {
  @include bp(tablet) {
    justify-content: space-between;
  }
}

.benefits__header {
  @include bp(tablet) {
    font-size: 48px;
    line-height: 60px;

    margin-top: 0;
    margin-bottom: 16px;
  }
  @include bp(desktop-wide) {
    font-size: 56px;

    margin-bottom: 34px;
  }

  font-size: 32px;
  line-height: 40px;

  margin-bottom: 30px;
}
</style>

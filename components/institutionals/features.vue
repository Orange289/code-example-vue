<template>
  <section class="features">
    <Container>
      <IconTextList :t-key="itemsTKey" class="features__list"></IconTextList>
      <slot name="after_list"> </slot>
    </Container>
  </section>
</template>

<script>
import Container from '~/components/general/Container.vue'
import IconTextList from '~/components/icon-text/IconTextList.vue'

export default {
  name: 'Features',
  components: {
    Container,
    IconTextList
  },
  props: {
    itemsTKey: {
      type: String,
      default: ''
    }
  }
}
</script>

<style lang="scss" scoped>
.features {
  @include bp(tablet) {
    padding-bottom: 65px;

    ::v-deep .icon-text-list .icon-text-list__item {
      width: 50%;
      padding-right: 29px;
    }

    ::v-deep .text-but-link .text-but-link__text {
      margin-bottom: 0;
    }

    ::v-deep .icon-text__icon-wrap svg {
      height: 43px;
    }
  }
  @include bp(desktop-large) {
    padding-bottom: 80px;

    ::v-deep .icon-text-list .icon-text-list__item {
      padding-right: 115px;
    }

    ::v-deep .icon-text__icon-wrap svg {
      height: 50px;
    }
  }
  @include bp(desktop-wide) {
    padding-bottom: 100px;

    ::v-deep .icon-text-list .icon-text-list__item {
      width: 24%;
      padding-right: 50px;
    }

    ::v-deep .icon-text {
      flex-wrap: nowrap;
    }
  }

  padding-bottom: 50px;
  ::v-deep .text-but-link .text-but-link__text {
    margin-bottom: 36px;
  }

  ::v-deep .icon-text-list .icon-text-list__item {
    margin-bottom: 40px;
  }

  ::v-deep .icon-text {
    flex-wrap: wrap;
  }

  ::v-deep .icon-text .icon-text__icon-wrap {
    width: 100%;
    margin-right: 0;
    margin-bottom: 15px;
  }
  ::v-deep .icon-text .icon-text__text {
    @include bp(desktop-large) {
      font-size: 22px;
      line-height: 30px;
    }
    @include bp(desktop-wide) {
      font-size: 24px;
    }

    font-size: 16px;

    margin: 0;
  }
}

.features__list {
  @include bp(desktop-wide) {
    margin-bottom: 30px;
  }
}
</style>

<template>
  <section :class="['features', { 'features--green': green }]">
    <Container>
      <slot name="before_list"> </slot>
      <slot name="list_items-wrap">
        <IconTextList :t-key="itemsTKey" class="features__list">
          <slot name="list_item"> </slot>
        </IconTextList>
      </slot>
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
    green: {
      type: Boolean,
      default: false
    },
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
    padding: 65px 0;
  }
  @include bp(desktop-large) {
    padding: 80px 0;
  }
  @include bp(desktop-wide) {
    padding: 100px 0;
  }

  padding: 50px 0;

  &.features--green {
    @include bp(tablet) {
      background: #2d9253;
      background: radial-gradient(
        ellipse at center 90%,
        #2d9253 10%,
        #114d26 100%
      );
      background-repeat: no-repeat;
    }

    color: #fff;
    background-color: $color__green;

    @media print {
      color: $color__text;
      background: none;
    }

    ::v-deep .icon-text {
      .icon-text__icon svg {
        color: inherit;
      }
    }
  }
}
</style>

<template>
  <section class="base-wlpblock">
    <Container class="base-wlpblock__container">
      <slot name="header">
        <h2
          v-if="header || (texts && texts.header)"
          v-animate.repeat.fade="'slide-left'"
          v-html="header || texts.header"
          class="base-wlpblock__header whitelabel__header"
        ></h2>
      </slot>

      <slot name="text">
        <div
          v-if="text || (texts && texts.text)"
          v-animate.repeat.fade="'slide-left'"
          class="base-wlpblock__text"
        >
          <p v-html="text || texts.text"></p>
        </div>
      </slot>

      <slot name="list__header">
        <h3
          v-if="
            (list && list.header) || (texts && texts.list && texts.list.header)
          "
          v-animate.repeat.fade="'slide-left'"
          v-html="list.header || texts.list.header"
          class="base-wlpblock__list-header"
        ></h3>
      </slot>

      <slot name="list">
        <List
          v-if="(list && list.items) || (texts && texts.list)"
          :items="list.items || texts.list.items"
          v-animate.repeat.fade="'slide-left'"
        ></List>
      </slot>

      <slot name="end"> </slot>

      <div v-if="$slots.default" class="base-wlpblock__right">
        <slot> </slot>
      </div>
    </Container>
  </section>
</template>

<script>
import Container from '~/components/general/Container.vue'
import Block800 from '~/components/general/blocks/Block-800.vue'
import List from '~/components/pages/whitelabel/general/List.vue'

export default {
  name: 'Core',
  components: { Container, List },
  mixins: [Block800],
  props: {
    texts: {
      type: Object,
      default: null
    },
    header: {
      type: String,
      default: null
    },
    text: {
      type: String,
      default: null
    },
    list: {
      type: Object,
      default() {
        return {}
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.base-wlpblock {
  @include bp(tablet) {
    padding-top: 100px;
    padding-bottom: 85px;
  }

  padding-top: 40px;
  padding-bottom: 30px;

  .base-wlpblock__container {
    @include bp(tablet) {
      display: grid;
      // grid-template-columns: 47.111% auto 46.875%;

      grid-template-columns: 51% auto 49%;
    }
    @include bp(desktop-large) {
      grid-template-columns: 52% auto 48%;
    }
    @include bp(desktop-wide) {
      grid-template-columns: 48% auto 52%;
    }

    display: flex;
    flex-direction: column;

    & > ::v-deep * {
      @include bp(tablet) {
        grid-column: 1;
      }
    }
  }

  .base-wlpblock__text {
    @include bp(tablet) {
      margin-bottom: 30px;
    }
    @include bp(desktop-wide) {
      margin-bottom: 40px;
    }

    margin-bottom: 60px;
  }

  .base-wlpblock__header.whitelabel__header {
    @include bp(tablet) {
      margin-right: 0;
      margin-bottom: 0;
    }
    // margin-right: -20px;

    margin-bottom: 20px;
    &:after {
      right: auto;
    }
  }

  .base-wlpblock__list-header {
    @include bp(tablet desktop-wide) {
      font-size: 16px;
    }
    @include bp(tablet) {
      margin-bottom: 16px;
    }
    @include bp(desktop-large) {
      margin-bottom: 24px;
    }
    @include bp(desktop-wide) {
      margin-bottom: 30px;
    }

    font-family: $font-family-second;

    margin-top: 0;
    margin-bottom: 30px;
  }

  ::v-deep .list {
    margin-bottom: -13.5px;

    .list__item {
      display: flex;

      margin-bottom: 13.5px;
    }
  }

  ::v-deep .list,
  ::v-deep .base-wlpblock__list-header {
    @include bp(desktop-large) {
      font-size: 18px;
      line-height: 1;
    }
    @include bp(desktop-wide) {
      font-size: 22px;
    }
    @include bp(0 tablet) {
      margin-bottom: 15px;
    }

    font-size: 16px;
    font-weight: normal;
    line-height: 1.56;
  }

  .base-wlpblock__right {
    @include bp(tablet) {
      grid-column: 3;
      grid-row: 1 / 13;
    }
  }
}
</style>

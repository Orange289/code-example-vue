<template>
  <section class="text-add">
    <Container class="text-add__wrap">
      <div class="text-add__text-wrap">
        <template v-if="textadd && textadd.header">
          <h2
            v-html="textadd.header"
            v-animate.repeat.fade="'slide-left'"
            class="text-add__header"
          ></h2>
        </template>
        <template v-else>
          <h2 v-animate.repeat.fade="'slide-left'" class="text-add__header">
            <slot name="header"> </slot>
          </h2>
        </template>

        <template v-if="textadd && textadd.text">
          <div
            v-html="textadd.text"
            v-animate.repeat.fade="'slide-left'"
            class="text-add__text"
          ></div>
        </template>
        <template v-else>
          <div v-animate.repeat.fade="'slide-left'" class="text-add__text">
            <slot></slot>
          </div>
        </template>
      </div>

      <template v-if="textadd && textadd.additional">
        <div
          v-html="textadd.additional"
          v-animate.repeat.fade="'slide-left'"
          class="text-add__add-wrap"
        ></div>
      </template>
      <template v-else>
        <div class="text-add__add-wrap">
          <slot v-animate.repeat.fade="'slide-left'" name="additional"></slot>
        </div>
      </template>

      <slot name="after"></slot>
    </Container>
  </section>
</template>

<script>
import Container from '~/components/general/Container.vue'
import Block500 from '~/components/general/blocks/Block-500.vue'

export default {
  name: 'TextAdd',
  components: {
    Container
  },
  mixins: [Block500],
  props: {
    textadd: {
      default() {
        return {
          header: null,
          text: null,
          additional: null
        }
      },
      type: Object
    }
  }
}
</script>

<style lang="scss" scoped>
.text-add {
  @include bp(tablet) {
    padding: 98px 0 70px;
  }
  @include bp(desktop-large) {
    padding: 58px 0 60px;
  }
  @include bp(desktop-wide) {
    padding: 110px 0 80px;
  }

  padding: 50px 0 50px;

  .text-add__wrap {
    @include bp(tablet) {
      display: flex;

      justify-content: space-between;
    }
  }

  .text-add__header {
    @include h1;
    @include header-underline;
    @include bp(0 tablet) {
      margin-bottom: 15px;
    }
    @include bp(tablet desktop-large) {
      margin-bottom: 30px;
    }
    @include bp(desktop-large desktop-wide) {
      margin-bottom: 40px;
    }
    @include bp(tablet) {
      padding-bottom: 19px;
    }
    @include bp(desktop-large) {
      padding-bottom: 15px;
    }
    @include bp(desktop-wide) {
      padding-bottom: 35px;
    }

    color: inherit;
  }

  .text-add__text-wrap {
    @include bp(tablet) {
      width: 50%;
      margin-bottom: 0;
    }

    width: 100%;
    margin-bottom: 20px;
  }

  .text-add__add-wrap {
    @include bp(tablet) {
      width: 50%;
    }

    width: 100%;
  }
}
</style>

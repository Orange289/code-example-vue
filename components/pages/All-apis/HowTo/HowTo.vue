<template>
  <div id="howto" class="howto">
    <Container class="howto__container">
      <div v-animate.repeat.fade="'slide-up'" class="howto__header-wrap">
        <slot name="header">
          <h2 v-if="header" class="howto__header" v-html="header"></h2>
        </slot>
        <!-- <a
          v-if="manualLinkText"
          v-html="manualLinkText"
          href="#"
          class="howto__manual"
        ></a> -->
      </div>
      <div v-if="$scopedSlots.text" class="howto__text">
        <slot name="text"></slot>
      </div>
      <div class="howto__steps collapsible">
        <Step
          v-for="(step, index) in steps"
          :key="index"
          :index="index"
          :step="step"
        ></Step>
      </div>
    </Container>
  </div>
</template>

<script>
import Step from './Step.vue'
import Container from '~/components/general/Container.vue'

export default {
  name: 'HowTo',
  components: {
    Container,
    Step
  },
  props: {
    manualLinkText: {
      type: String,
      default: null
    },
    header: {
      type: String,
      default: null
    },
    steps: {
      type: Array,
      default: null
    }
  }
}
</script>

<style lang="scss" scoped>
.howto {
  @include bp(tablet) {
    scroll-margin-top: 120px;
  }

  margin-top: 50px;
  padding: 0 0 90px;

  scroll-margin-top: 60px;

  .howto__header-wrap {
    @include bp(mobile) {
      display: flex;
      align-items: baseline;
      justify-content: space-between;
    }
  }

  .howto__header {
    @include h1;

    margin-top: 0;
    margin-right: 135px;
    margin-bottom: 0;
  }

  // .howto__manual {
  //   font-family: $font-family-second;
  //   font-size: 22px;
  //   font-weight: 300;
  //   line-height: 1.36;

  //   text-decoration: underline;

  //   &:hover,
  //   &:focus {
  //     text-decoration: none;
  //   }
  // }

  .howto__text {
    margin-bottom: 45px;
  }

  .howto__steps {
    border-top: solid 2px #f2f8f2;
  }
}
</style>

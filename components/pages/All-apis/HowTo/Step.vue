<template>
  <div
    v-animate.fade="'slide-up'"
    :style="{ 'transition-delay': `${0.15 * (index + 1)}s` }"
    class="step"
  >
    <StepWithContent
      v-if="step.content"
      :step="step"
      :index="index"
      :step-name="stepName"
    ></StepWithContent>
    <StepNoContent
      v-else
      :step="step"
      :index="index"
      :step-name="stepName"
    ></StepNoContent>
  </div>
</template>

<script>
import StepWithContent from './StepWithContent.vue'
import StepNoContent from './StepNoContent.vue'

export default {
  name: 'Step',
  components: {
    StepWithContent,
    StepNoContent
  },
  props: {
    stepName: {
      type: String,
      default() {
        return this.$t('exante.pages.apis.step') || 'Step'
      }
    },
    index: {
      type: Number,
      default: null,
      required: true
    },
    step: {
      type: Object,
      default: null,
      required: true
    }
  }
}
</script>

<style lang="scss" scoped>
.step {
  border-bottom: solid 2px $color__green--lightest;

  ::v-deep .step__control {
    font-weight: 300;

    position: relative;

    display: block;

    width: 100%;
    padding: 55px 0 53px;
    text-align: left;
  }

  ::v-deep a.step__control,
  ::v-deep button.step__control {
    cursor: pointer;

    &:hover,
    &:focus {
      outline: none;

      .step__header {
        text-decoration: underline;
      }
    }
  }

  ::v-deep .step__text-wrap,
  ::v-deep .step__content-wrap {
    @include bp(tablet) {
      display: grid;

      width: 100%;

      text-align: left;

      grid-template-columns: 12.5% auto;
    }

    align-items: center;
    padding-right: 20px;
  }

  ::v-deep .step__stepname {
    font-size: 32px;
    font-weight: normal;
    line-height: 1;

    color: $color__black--light;
  }

  ::v-deep .step__header {
    font-family: $font-family-second;
    font-size: 32px;
    line-height: 1;

    margin-bottom: 0;
    padding-bottom: 0;

    color: $color__green;
  }
}
</style>

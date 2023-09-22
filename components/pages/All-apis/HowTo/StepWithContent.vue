<template>
  <div class="step">
    <button
      :aria-controls="`region-${index}`"
      :ref="`control-region-${index}`"
      @click="expanded = !expanded"
      :aria-expanded="expanded.toString()"
      type="button"
      class="step__control"
    >
      <div class="step__text-wrap">
        <span class="step__stepname">
          {{ stepName }}&nbsp;{{ index + 1 }}
        </span>
        <span v-html="step.name" class="step__header"></span>
      </div>
    </button>
    <div
      :id="`region-${index}`"
      :ref="`region-${index}`"
      :aria-hidden="(!expanded).toString()"
      class="step__content-wrap"
    >
      <template v-if="step.content.items">
        <StepItems
          :items="step.content.items"
          class="step__content"
        ></StepItems>
      </template>
      <template v-else-if="step.content.code">
        <StepCode :code="step.content.code" class="step__content"></StepCode>
      </template>
      <template v-else-if="step.github_buttons">
        <StepWithGithubButtons
          :step="step"
          class="step__content"
        ></StepWithGithubButtons>
      </template>
      <template v-else>
        <div v-html="step.content" class="step__content"></div>
      </template>
    </div>
  </div>
</template>

<script>
import StepItems from './StepItems.vue'
import StepCode from './StepCode.vue'
import StepWithGithubButtons from './StepWithGithubButtons.vue'

export default {
  name: 'StepWithContent',
  components: {
    StepItems,
    StepCode,
    StepWithGithubButtons
  },
  props: {
    stepName: {
      type: String,
      default: 'Step'
    },
    index: {
      type: Number,
      default: null
    },
    step: {
      type: Object,
      default: null
    }
  },
  data() {
    return {
      expanded: false
    }
  }
}
</script>

<style lang="scss" scoped>
.step {
  .step__control {
    border: none;
    background: #fff;

    &:after {
      position: absolute;
      top: 50%;
      right: 0;
      bottom: 0;

      display: block;

      width: 10px;
      height: 10px;

      content: '';
      transition: all 0.3s ease-in-out;
      transform: rotateZ(45deg) translate(-50%);

      border-right: solid 2px #007f39;
      border-bottom: solid 2px #007f39;

      will-change: transform;
    }

    &[aria-expanded='true'] {
      .step__header {
        color: $color__black--light;
      }
      &:after {
        transform: rotateZ(225deg) translate(50%, 0);
      }
    }
  }

  .step__content-wrap {
    display: flex;
    overflow: hidden;

    transition-timing-function: ease-in-out;
    transition-duration: 0.5s;
    transition-property: max-height, padding-bottom, opacity, visibility;

    flex-wrap: wrap;

    &[aria-hidden='true'] {
      visibility: hidden;

      max-height: 0;

      opacity: 0;
    }

    &[aria-hidden='false'] {
      max-height: 10000px;
      padding-bottom: 53px;

      opacity: 1;
    }
  }

  .step__content {
    grid-column: 2;
  }
}
</style>

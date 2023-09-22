<template>
  <div class="step">
    <a v-if="step.link" :href="step.link" class="step__control">
      <div class="step__text-wrap">
        <span class="step__stepname">
          {{ stepName }}&nbsp;{{ index + 1 }}
        </span>
        <span v-html="step.name" class="step__header"></span>
      </div>
    </a>
    <div v-else class="step__control">
      <div class="step__text-wrap">
        <span class="step__stepname">
          {{ stepName }}&nbsp;{{ index + 1 }}
        </span>
        <span v-html="step.name" class="step__header"></span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'StepNoContent',
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
  }
}
</script>

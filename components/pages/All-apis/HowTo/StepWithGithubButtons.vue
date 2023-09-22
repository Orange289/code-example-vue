<template>
  <div class="StepWithGithubButtons">
    <div v-html="step.content"></div>
    <div v-if="inListButtons" class="StepWithGithubButtons__list">
      <template v-if="step.github_buttons === buttonsList[0]">
        <SiteButton
          aria-label="Star xntltd/python-http-api on GitHub"
          href="https://github.com/xntltd/python-http-api"
          class="StepWithGithubButton__button"
          target="_blank"
        >
          <!-- <svg-icon
            name="prog-langs/python-logo.svg"
            width="20"
            height="20"
          ></svg-icon> -->
          python-http-api
        </SiteButton>
        <SiteButton
          aria-label="Star xntltd/golang-http-api on GitHub"
          href="https://github.com/xntltd/golang-http-api"
          class="StepWithGithubButton__button"
          target="_blank"
        >
          golang-http-api
        </SiteButton>
      </template>
      <template v-else-if="step.github_buttons === buttonsList[1]">
        <SiteButton
          aria-label="Star xntltd/python-fix-api on GitHub"
          href="https://github.com/xntltd/python-fix-api"
          class="StepWithGithubButton__button"
          target="_blank"
        >
          python-fix-api
        </SiteButton>
        <SiteButton
          aria-label="Star xntltd/golang-fix-api on GitHub"
          href="https://github.com/xntltd/golang-fix-api"
          class="StepWithGithubButton__button"
          target="_blank"
        >
          golang-fix-api
        </SiteButton>
      </template>
    </div>
  </div>
</template>

<script>
import SiteButton from '~/components/general/SiteButton/SiteButton.vue'

export default {
  name: 'StepWithGithubButtons',
  components: { SiteButton },
  props: {
    step: {
      type: Object,
      default: null
    }
  },
  data() {
    return {
      buttonsList: ['http-api', 'fix-api']
    }
  },
  computed: {
    inListButtons() {
      return this.buttonsList.includes(this.step.github_buttons)
    }
  }
}
</script>

<style lang="scss" scoped>
.StepWithGithubButtons {
  .StepWithGithubButtons__list {
    display: flex;

    padding-top: 1rem;

    flex-wrap: wrap;
  }
  .StepWithGithubButton__button {
    margin-right: 20px;
    margin-bottom: 10px;
  }
}
</style>

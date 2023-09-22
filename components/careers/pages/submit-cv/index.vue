<template>
  <DefaultLayout>
    <template #awards><VVoid></VVoid></template>
    <template #callta><VVoid></VVoid></template>
    <div class="submitcv">
      <xGrid>
        <h1 class="underlined">Submit your CV</h1>
        <SubmitCVForm class="submitcv__form"> </SubmitCVForm>
      </xGrid>
    </div>
  </DefaultLayout>
</template>

<script>
import DefaultLayout from '../../layouts/DefaultCareersLayout.vue'
import { xGrid } from '../../general/xGrid'
import SubmitCVForm from '../../careers/SubmitCVForm.vue'
import VVoid from '~/utils/VVoid'

export default {
  name: 'SubmitCVMobilePage',
  components: {
    DefaultLayout,
    xGrid,
    VVoid,
    SubmitCVForm
  }
}
</script>

<style lang="postcss" scoped>
.submitcv {
  position: relative;

  &:before {
    content: '';
    bottom: 0;
    left: 0;
    position: absolute;
    display: block;
    height: calc(100% + 100vh);
    height: calc(100% + var(--vh, 1vh) * 100);
    width: 100%;
    background-color: var(--grayscale-880-color);
    z-index: -1;
  }
}
.submitcv__form {
  padding-bottom: 50px;

  &::v-deep {
    .upload {
      margin-top: 24px;
    }
    .xForm__submit_wrap {
      margin-top: 40px;
    }
  }
}
</style>

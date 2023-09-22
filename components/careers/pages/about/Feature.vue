<template>
  <div class="feature">
    <icon-text class="feature__icon" :icon="icon" :text="text" />
    <p class="feature__desc">{{ desc }}</p>
  </div>
</template>

<script>
import IconText from '../../general/icontext/IconText.vue'

export default {
  name: 'Feature',
  components: {
    IconText
  },
  props: {
    icon: {
      type: String,
      default: ''
    },
    text: {
      type: String,
      default: ''
    },
    desc: {
      type: String
    }
  }
}
</script>

<style lang="postcss" scoped>
.feature {
  @media (--md) {
    margin-bottom: 22px;
  }
  @media (--lg) {
    margin-bottom: 18px;
  }
  @media (--xl) {
    /* max-width: 304px; */
    margin-bottom: 22px;
  }

  /* ::v-deep .icontext__text {
    @media (--xl) {
      max-width: 230px;
    }
  } */

  ::v-deep .icontext__text {
    font-family: var(--font-family-base);
    font-size: 18px;
    line-height: 20px;

    @media (--sm) {
      font-size: 20px;
    }
    @media (--md) {
      line-height: 24px;
    }
    @media (--lg) {
      white-space: pre-line;
    }
    @media (--xl) {
      font-size: 24px;
      line-height: 30px;
    }
  }

  .feature__desc {
    font-size: 14px;
    font-weight: 400;
    line-height: 24px;

    margin-top: 12px;
    margin-bottom: 16px;

    @media (--sm) {
      margin-top: 8px;
      margin-bottom: 25px;
      /* max-width: 264px; */
    }
    @media (--md) {
      font-size: 16px;

      margin-top: 12px;
      margin-bottom: 0;

      /* max-width: 100%; */
    }
    @media (--lg) {
      font-size: 15px;
      /* max-width: 320px; */
      margin-top: 0;
      /* max-width: 50%; */
    }
    @media (--xl) {
      font-size: 18px;
      line-height: 28px;
      /* max-width: 432px; */
    }
  }
}
</style>

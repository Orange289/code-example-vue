<template>
  <div class="icontext">
    <SvgIcon
      :id="`sprite-${icon}`"
      class="icontext__icon"
      :label="icon"
      role="img"
    />
    <span class="icontext__text">{{ text }}</span>
  </div>
</template>

<script>
import SvgIcon from '../../svg-icon/SvgIcon.vue'

export default {
  name: 'IconText',
  components: {
    SvgIcon
  },
  props: {
    icon: {
      type: String,
      default: ''
    },
    text: {
      type: String,
      default: ''
    }
  }
}
</script>

<style lang="postcss">
.icontext {
  display: flex;
  align-items: center;

  @media (--sm) {
    flex-direction: column;
    align-items: flex-start;
  }
}

.icontext__icon {
  color: var(--primary-300-color);
  width: 64px;
  height: 64px;
  margin-right: 16px;

  @media (--sm) {
    width: 40px;
    height: 40px;
    margin-right: 0;
    margin-bottom: 20px;
  }
  @media (--md) {
    width: 32px;
    height: 32px;
  }
  @media (--xl) {
    width: 48px;
    height: 48px;
    margin-bottom: 16px;
  }
}

.icontext__text {
  color: var(--accent-0-color);
  font-family: var(--font-family-secondary);
  font-size: 18px;
  font-weight: 400;

  @media (--sm) {
    font-size: 20px;
  }
  @media (--lg) {
    margin-bottom: 13px;
  }
  @media (--xl) {
    font-size: 24px;
    line-height: 30px;
    margin-bottom: 17px;
  }
}
</style>

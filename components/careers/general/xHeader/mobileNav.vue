<template>
  <div class="mobileNav" :class="[{ 'mobileNav--active': active }]">
    <div class="mobileNav__wrap">
      <xGrid class="mobileNav__container">
        <div class="mobileNav__afternav">
          <slot></slot>
        </div>
      </xGrid>
    </div>
  </div>
</template>

<script>
import { xGrid } from '../xGrid'

export default {
  name: 'MobileNav',
  components: {
    xGrid
  },
  props: {
    active: {
      type: Boolean,
      default: false
    }
  }
}
</script>

<style lang="postcss" scoped>
.mobileNav {
  display: flex;
  position: absolute;
  min-height: 100%;
  left: 0;
  top: 0;
  width: 100vw;
  background-color: var(--grayscale-1000-color, #ffffff);
  overflow-y: auto;

  @media (--md) {
    display: none;
  }
}

.mobileNav--active {
  z-index: 100;
}

.mobileNav__container {
  background-color: var(--grayscale-475-color, #ffffff);
  padding-top: 24px;
  height: 100%;
}

.mobileNav__wrap {
  position: relative;
  min-height: 100%;

  @media (--sm) {
    width: 50%;
    margin-left: auto;
  }
}

.mobileNav .mobileNav__close {
  position: absolute;
  right: 24px;
  top: 28px;
  z-index: 1;
}
</style>

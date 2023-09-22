<template>
  <div class="bordered-item">
    <slot></slot>
  </div>
</template>

<style lang="postcss" scoped>
.bordered-item {
  border: 1px solid var(--grayscale-475-color);
  border-radius: 4px;
  padding: 28px 18px;
  width: 100%;

  @media (--sm) {
    padding: 24px 40px;
  }
  @media (--md) {
    padding: 32px 40px;
  }
  @media (--lg) {
    padding: 40px 48px 36px;
  }
  @media (--xl) {
    padding: 48px 64px 24px;
  }
}
</style>

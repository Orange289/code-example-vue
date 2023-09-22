<template>
  <div class="xRow" v-bind="$attrs" v-on="$listeners"><slot></slot></div>
</template>

<script>
export default {
  name: 'XRow'
}
</script>

<style lang="postcss" scoped>
/* Row */
/* Rows contain and clear the floats of your columns. */
.xRow {
  display: flex;
  flex-wrap: wrap;
  flex: 1 1 auto;
  margin: calc(var(--xgrid__gutter, 16px) / -2);

  @media (--sm) {
    margin: calc(var(--xgrid__gutter-sm, 16px) / -2);
  }

  @media (--md) {
    margin: calc(var(--xgrid__gutter-md, 16px) / -2);
  }

  @media (--lg) {
    margin: calc(var(--xgrid__gutter-lg, 16px) / -2);
  }

  @media (--xl) {
    margin: calc(var(--xgrid__gutter-xl, 16px) / -2);
  }
  & + .xRow {
    margin-top: var(--xgrid__gutter);
  }

  /* Remove the negative margin from default .row, then the horizontal padding */
  /* from all immediate children columns (to prevent runaway style inheritance). */
  &.no-gutters {
    margin: 0;
    & > .col,
    & > [class*='col-'] {
      padding: 0;
    }
  }
}
</style>

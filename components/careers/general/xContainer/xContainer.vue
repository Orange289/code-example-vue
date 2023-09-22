<template>
  <div class="xContainer">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'XContainer'
}
</script>

<style lang="postcss" scoped>
.xContainer {
  --ins-p: var(
    --xcontainer__inside-padding,
    calc(var(--xgrid__gutter, 16px) / 2)
  );
  --xcontainer__padding-sc: var(--xcontainer__padding, 12px);
  --xContainer__padding: calc(var(--xcontainer__padding-sc) + var(--ins-p));

  position: relative;

  width: 100%;
  max-width: 100%;
  margin: 0 auto;
  /* we need only left and right paddings */
  padding-right: var(--xContainer__padding);
  padding-left: var(--xContainer__padding);

  @media (--sm) {
    --ins-p-sm: var(
      --xcontainer__inside-padding-sm,
      calc(var(--xgrid__gutter-sm, 16px) / 2)
    );
    --xcontainer__padding-sc-sm: var(--xcontainer__padding-sm, 64px);
    --xContainer__padding: calc(
      var(--xcontainer__padding-sc-sm) + var(--ins-p-sm)
    );
  }
  @media (--md) {
    --ins-p-md: var(
      --xcontainer__inside-padding-md,
      calc(var(--xgrid__gutter-md, 16px) / 2)
    );
    --xcontainer__padding-sc-md: var(--xcontainer__padding-md, 96px);
    --xContainer__padding: calc(
      var(--xcontainer__padding-sc-md) + var(--ins-p-md)
    );
  }
  @media (--lg) {
    --ins-p-lg: var(
      --xcontainer__inside-padding-lg,
      calc(var(--xgrid__gutter-lg, 16px) / 2)
    );
    --xcontainer__padding-sc-lg: var(--xcontainer__padding-lg, 96px);
    --xContainer__padding: calc(
      var(--xcontainer__padding-sc-lg) + var(--ins-p-lg)
    );
  }
  @media (--xl) {
    --ins-p-xl: var(
      --xcontainer__inside-padding-xl,
      calc(var(--xgrid__gutter-xl, 16px) / 2)
    );
    --xcontainer__padding-sc-xl: var(--xcontainer__padding-xl, 120px);
    --xContainer__padding: calc(
      var(--xcontainer__padding-sc-xl) + var(--ins-p-xl)
    );

    --xcontainer__max-width-xl: var(
      --xcontainer__max-width,
      calc(1536px + var(--xcontainer__padding-sc-xl) * 2)
    );

    max-width: var(--xcontainer__max-width-xl);
  }
}
</style>

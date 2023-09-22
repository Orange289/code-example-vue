<template>
  <div class="xCol" v-bind="$attrs" :style="vars" v-on="$listeners">
    <slot></slot>
  </div>
</template>

<script>
// import { VCol } from 'vuetify/lib'

export default {
  name: 'XCol',
  // components: { VCol },
  // inheritAttrs: false,
  props: {
    cols: {
      type: [Number, String]
    },
    sm: {
      type: [Number, String]
    },
    md: {
      type: [Number, String]
    },
    lg: {
      type: [Number, String]
    },
    xl: {
      type: [Number, String]
    }
  },
  computed: {
    vars() {
      const styles = {}
      Object.keys(this.$props).forEach((key) => {
        if (this.$props[key]) {
          styles[`--cols-item${key !== 'cols' ? `-${key}` : ''}`] = this.$props[
            key
          ]
        }
      })
      return styles
    }
  }
}
</script>

<style lang="postcss" scoped>
.xCol {
  /* Why paddings https://zellwk.com/blog/responsive-grid-system/ */

  /* min cause we don't need more cols then we have in grid */
  --width: calc(
    (100% / var(--cols, 1)) * min(var(--cols), var(--cols-item, 4))
  );
  --width-sm: calc(
    (100% / var(--cols-sm, 1)) * min(var(--cols-sm), var(--cols-item-sm, 16))
  );
  --width-md: calc(
    (100% / var(--cols-md, 1)) * min(var(--cols-md), var(--cols-item-md, 24))
  );
  --width-lg: calc(
    (100% / var(--cols-lg, 1)) * min(var(--cols-lg), var(--cols-item-lg, 24))
  );
  --width-xl: calc(
    (100% / var(--cols-xl, 1)) * min(var(--cols-xl), var(--cols-item-xl, 24))
  );

  /* for nesting width without extra props */
  --item-width: var(--width);
  --item-width-sm: var(--width-sm, var(--item-width));
  --item-width-md: var(--width-md, var(--item-width-sm));
  --item-width-lg: var(--width-lg, var(--item-width-md));
  --item-width-xl: var(--width-xl, var(--item-width-lg));

  width: 100%;
  padding: calc(var(--xgrid__gutter, 16px) / 2);
  flex: 0 0 var(--item-width);
  max-width: var(--item-width);

  @media (--sm) {
    padding: calc(var(--xgrid__gutter-sm, 16px) / 2);

    &[style*='--cols-item-sm'] {
      flex: 0 0 var(--item-width-sm);
      max-width: var(--item-width-sm);
    }
  }

  @media (--md) {
    padding: calc(var(--xgrid__gutter-md, 16px) / 2);

    &[style*='--cols-item-md'] {
      flex: 0 0 var(--item-width-md);
      max-width: var(--item-width-md);
    }
  }

  @media (--lg) {
    padding: calc(var(--xgrid__gutter-lg, 16px) / 2);

    &[style*='--cols-item-lg'] {
      flex: 0 0 var(--item-width-lg);
      max-width: var(--item-width-lg);
    }
  }

  @media (--xl) {
    padding: calc(var(--xgrid__gutter-xl, 16px) / 2);

    &[style*='--cols-item-xl'] {
      flex: 0 0 var(--item-width-xl);
      max-width: var(--item-width-xl);
    }
  }
}
</style>

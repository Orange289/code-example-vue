<template>
  <nav v-if="dataItems" class="nav" :style="styles">
    <ul class="nav__list">
      <li
        v-for="(item, index) in dataItems"
        :key="index"
        :class="['nav__item', { 'nav__item--active': item.active }]"
      >
        <!-- <span v-if="item.active || !item.href">{{ item.label }}</span> -->
        <!-- v-else -->
        <NuxtLink
          class="nav__link"
          :to="item.href"
          @click.native="onClick(index)"
        >
          {{ item.label }}
        </NuxtLink>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  name: 'XNav',
  props: {
    items: {
      type: Array,
      required: true
    }
  },
  data() {
    return {
      dataItems: this.items,
      activeNode: false,
      styles: {}
    }
  },
  watch: {
    dataItems() {
      this.changeActiveNode()
    }
  },
  mounted() {
    this.changeActiveNode()
    window.addEventListener('resize', this.onResize)
  },
  beforeDestroy() {
    window.removeEventListener('resize', this.onResize)
  },
  methods: {
    calcStyles() {
      if (process.browser && this.activeNode) {
        this.styles = {
          '--active-top': `${this.activeNode.offsetTop || 0}px`,
          '--active-left': `${this.activeNode.offsetLeft || 0}px`,
          '--active-width': `${this.activeNode.offsetWidth || 0}px`,
          '--active-height': `${this.activeNode.offsetHeight || 0}px`
        }
      }
    },
    onResize() {
      this.calcStyles()
    },
    changeActiveNode() {
      if (process.browser) {
        this.$nextTick(() => {
          if (this.$el) {
            this.activeNode =
              this.$el.querySelector('.nuxt-link-exact-active') ||
              this.$el.querySelector('.nav__item')
            this.calcStyles()
          }
        })
      }
    },
    onClick(index) {
      this.dataItems.forEach((item) => {
        this.$set(item, 'active', false)
      })
      // this.dataItems[index].active = true;
      this.$set(this.dataItems[index], 'active', true)
      this.changeActiveNode()
    }
  }
}
</script>

<style lang="postcss" scoped>
.nav {
  --letter-spacing: 0.25em;
  color: var(--accent-0-color);
  font-size: var(--font-size-base);
  line-height: var(--font-size-base);
  font-family: var(--font-family-base);
  letter-spacing: var(--letter-spacing);
  text-transform: uppercase;

  @media (--md) {
    font-size: 12px;
    height: 72px;
  }
  @media (--lg) {
    font-size: 14px;
  }
  @media (--xl) {
    height: calc(80px + var(--font-size-base));
    font-size: var(--font-size-base);
  }
}

.nav__list {
  --line-width: 2px;
  position: relative;

  margin: 0;
  padding: 0;

  list-style: none;
  &::before {
    --ins-p: var(
      --xcontainer__inside-padding,
      calc(var(--xgrid__gutter, 16px) / 2)
    );
    --xcontainer__padding-sc: var(--xcontainer__padding, 12px);
    --left: calc(var(--xcontainer__padding-sc) + var(--ins-p));
    position: relative;

    /* this is here for nice move */
    position: absolute;
    top: var(--active-top);
    left: calc(0px - var(--left, 20px));

    width: var(--line-width);
    height: var(--active-height, 0);

    background-color: var(--primary-300-color);
    content: '';

    transition: left 0.3s ease-in-out, top 0.3s ease-in-out,
      width 0.3s ease-in-out, height 0.3s ease-in-out;

    @media (--sm) {
      --ins-p-sm: var(
        --xcontainer__inside-padding-sm,
        calc(var(--xgrid__gutter-sm, 16px) / 2)
      );
      --xcontainer__padding-sc-sm: var(--xcontainer__padding-sm, 64px);
      --left: calc(var(--xcontainer__padding-sc-sm) + var(--ins-p-sm));
    }
    @media (--md) {
      top: auto;
      bottom: 0;
      left: var(--active-left, 0);

      width: calc(var(--active-width, 0) - var(--letter-spacing));
      height: var(--line-width);
    }
  }
  @media (--md) {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 100%;
  }
}

.nav__item {
  width: 100%;
  margin-right: calc(0px - var(--letter-spacing));
  /* for remove right extra white space */
  margin-bottom: 24px;
  padding: 4px 0;

  @media (--md) {
    width: auto;
    margin-bottom: 0;
  }
}

.nav__item.nav__item--active {
}

.nav__link {
  color: var(--primary-500-color);
  text-decoration: none;
  font-weight: 500;

  transition: color 0.3s ease-in-out;

  &:hover,
  &:focus {
    color: var(--accent-0-color);

    outline: none;
  }
}

.nav__link.nuxt-link-exact-active {
  color: var(--accent-0-color);
}
</style>

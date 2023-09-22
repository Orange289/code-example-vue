<template>
  <div v-if="items" class="tabs">
    <div class="tabs__items">
      <nuxt-link
        v-for="route in items"
        :key="route.path"
        :class="`tabs__item tabs__item--${route.path}`"
        :to="
          $route.path.includes('/uk/')
            ? `/uk/${route.path}/`
            : localePath(`/${route.path}`)
        "
        :tag="$route.path.includes(localePath(`/${route.path}`)) ? 'div' : 'a'"
        exact
        v-html="
          $route.path.includes('/uk/') && route.name_uk
            ? route.name_uk
            : route.name
        "
      >
      </nuxt-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Tabs',
  props: {
    items: {
      type: Array,
      default: null
    }
  },
  methods: {
    isActive(path) {
      return process.browser && this.$route.name.includes(path)
    }
  }
}
</script>

<style lang="scss" scoped>
.tabs {
  @include bp(0 tablet) {
    display: none;
  }
}

.tabs__items {
  display: flex;
  overflow-x: auto;
}

.tabs__item {
  font-size: 14px;
  font-weight: 400;
  line-height: 15px;
  // margin-bottom: 20px;

  letter-spacing: 0.7px;
  text-transform: uppercase;

  color: #d8eada;

  a {
    color: inherit;
  }

  & + & {
    margin-left: 40px;
  }
}

.nuxt-link-exact-active {
  @include header-underline();
  @include bp(desktop-wide) {
    padding-bottom: 9px;
  }

  margin-bottom: 0 !important;
  padding-bottom: 9px;

  cursor: default;

  opacity: 0.7;
}

.nuxt-link-exact-active:hover {
  text-decoration: none;
}

.nuxt-link-exact-active:after {
  width: 20px;
}
</style>

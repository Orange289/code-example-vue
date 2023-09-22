<template>
  <div :class="['breadcrumbs', { 'breadcrumbs--green': green }]">
    <ul class="breadcrumbs__routes">
      <li class="breadcrumbs__route breadcrumbs__route--home">
        <a href="/" v-html="$t('exante.globals.routes.homepage')"></a>
      </li>

      <li
        v-for="(route, index) in items"
        :key="route.name"
        class="breadcrumbs__route"
      >
        <a :href="'../'.repeat(items.length - index)" v-html="route.name"></a>
      </li>
      <li
        v-if="$route.meta && $route.meta.currentPageName"
        class="breadcrumbs__route breadcrumbs__route--active"
      >
        <span v-html="$route.meta.currentPageName"></span>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'Breadcrumbs',
  props: {
    green: {
      type: Boolean,
      default: false
    },
    items: {
      type: Array,
      default: null
    }
  }
  // computed: {
  //   crumbs() {
  //     const crumbs = []
  //     let routes = this.$route.path.split('/')
  //     routes = routes.slice(1, -1)

  //     // remove lang prefix
  //     if (this.$i18n.locale !== this.$i18n.defaultLocale) {
  //       routes.shift()
  //     }

  //     routes.forEach((route) => {
  //       const findedRoute = this.$router.options.routes.find((item) => {
  //         return (
  //           item.path === this.$route.path.split(route)[0] &&
  //           !item.name.includes('index')
  //         )
  //       })

  //       if (findedRoute) {
  //         crumbs.push(findedRoute)
  //       }
  //     })

  //     return crumbs
  //   }
  // }
}
</script>

<style lang="scss">
.breadcrumbs {
  display: flex;

  color: $color__white;

  a {
    color: inherit;
  }

  ul {
    font-size: $font-size-base - 2px;
  }

  .breadcrumbs__routes {
    display: flex;

    height: 100%;
    margin-bottom: 0;
    padding-left: 0;

    list-style: none;

    align-items: center;
  }

  .breadcrumbs__route {
    &:after {
      margin: 0 5px;

      content: '/';

      color: inherit;
    }
  }

  .breadcrumbs__route.breadcrumbs__route--active,
  .breadcrumbs__route .nuxt-link-exact-active {
    cursor: default;

    &:hover {
      text-decoration: none;
    }

    &:after {
      display: none;
    }
  }

  &.breadcrumbs--green {
    color: $color__green;

    .breadcrumbs__route {
      &:after {
        color: #4e5d60;
      }
    }
  }
}
</style>

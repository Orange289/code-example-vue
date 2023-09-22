<template>
  <Container>
    <ul v-if="this.$root.context.isDev" class="versions">
      <li><a href="/_icons/">icons</a></li>
    </ul>
    <div>
      <div class="tabs">
        <div v-for="locale in routes" :key="locale.code" class="tab">
          <input
            :id="`lang-${locale.code}`"
            :checked="locale.code === $i18n.defaultLocale"
            class="tab__input"
            type="radio"
            name="tabgroup"
          />
          <label :for="`lang-${locale.code}`">{{ locale.code }}</label>
          <div class="content">
            <ul
              v-if="!$multisite.site.id || $root.context.isDev"
              class="versions routes-list"
            >
              <li>
                <a :href="`//api.localhost:3000/${localeUrlPrefix(locale)}`">
                  API {{ locale.code }}
                </a>
              </li>
              <li>
                <a
                  :href="`//partner.localhost:3000/${localeUrlPrefix(locale)}`"
                >
                  PARTNER {{ locale.code }}
                </a>
              </li>
              <li>
                <a :href="`//mt.localhost:3000/${localeUrlPrefix(locale)}`">
                  MALTA {{ locale.code }}
                </a>
              </li>
              <!-- <li><a href="//careers.localhost:3000">CAREERS</a></li> -->
              <li><a href="//localhost:3000/uk/">UK</a></li>
            </ul>
            <DevRoutes :routes="locale.routes" class="routes-list"></DevRoutes>
          </div>
        </div>
      </div>

      <!-- <div v-for="locale in routes" :key="locale.code">
        <h2>{{ locale.code }}</h2>
        <ul>
          <li v-for="route in locale.routes" :key="route.path">
            <nuxt-link :to="route.path" v-text="route.name"> </nuxt-link>

            <ul v-if="route.children">
              <li v-for="subRoute in route.children" :key="subRoute.path">
                <nuxt-link :to="subRoute.path" v-text="subRoute.name">
                </nuxt-link>
              </li>
            </ul>
          </li>
        </ul>
      </div> -->
    </div>
  </Container>
</template>

<script>
import DevRoutes from '~/components/dev/DevRoutes.vue'
import Container from '~/components/general/Container.vue'

export default {
  name: 'IndexPage',
  components: {
    Container,
    DevRoutes
  },
  data() {
    return {
      router: this.$router
    }
  },
  computed: {
    routes() {
      const items = []
      this.$i18n.locales.forEach((locale) => {
        items.push({ ...locale, routes: this._findRoutes(locale.code) })
      })
      return items
    }
  },
  methods: {
    localeUrlPrefix(locale) {
      return locale.code === this.$i18n.defaultLocale ? '' : `${locale.code}/`
    },
    _findChildrenRoutes(route) {
      const subRoutes = this.$router.options.routes.filter((subRoute) => {
        return (
          subRoute.path.indexOf(route.path) === 0 &&
          subRoute.path !== route.path
        )
      })

      subRoutes.forEach((route) => {
        route = { ...route, children: this._findChildrenRoutes(route) }
      })

      return subRoutes
    },
    _findRoutes(localeСode) {
      const items = []
      if (!localeСode) return items
      this.$router.options.routes.forEach((route) => {
        if (
          route.name.endsWith(`___${localeСode}`) &&
          route.path !== this.$route.path &&
          route.name !== this.$route.name &&
          // route.name.indexOf('index') !== 0 &&
          !route.name.startsWith(`${this.$multisite.site.id}___`) &&
          !(
            (route.path.match(new RegExp('/', 'g')) || []).length >
            (localeСode === this.$i18n.defaultLocale ? 3 : 4)
          )
        ) {
          items.push({ ...route, children: this._findChildrenRoutes(route) })
        }
      })
      return items
    }
  }
}
</script>

<style lang="scss" scoped>
/* http://youmightnotneedjs.com/#tabs */

.tabs {
  position: relative;
  // set height to be even for all tab groups

  min-height: 200px;
  margin-top: 20px;
  .tab {
    float: left;
  }

  .tab label {
    font-size: 30px;
    // set label height
    // top: 1em;
    line-height: 1;

    display: inline-block;

    min-width: 50px;
    padding: 10px;

    border: 1px solid green;
    border-bottom: none;
  }

  // Visually hide radio buttons
  .tab [type='radio'] {
    position: absolute;

    overflow: hidden;
    clip: rect(0, 0, 0, 0);

    width: 0;
    height: 0;

    &:focus + label {
      outline: 1px dotted black;
    }
  }
  .tab__input {
    &:checked ~ label {
      z-index: 2;

      color: #fff;
      background-color: green;

      & ~ .content {
        z-index: 1;

        opacity: 1;
      }
    }
  }
}

.content {
  position: absolute;
  top: 50px;
  right: 0;
  bottom: 0;
  left: 0;

  opacity: 0;
}

.routes-list {
  margin-top: 0;
  padding: 50px;

  border: 1px solid green;
}
</style>

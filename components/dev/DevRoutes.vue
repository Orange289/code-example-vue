<template>
  <ul v-if="routes">
    <li v-for="route in routes" :key="route.path">
      <nuxt-link :to="route.path" v-text="route.name" />
      <DevRoutes v-if="route.children" :routes="route.children"> </DevRoutes>
    </li>
  </ul>
</template>

<script>
export default {
  name: 'DevRoutes',
  props: {
    routes: {
      default: null,
      type: Array
    }
  }
}
</script>

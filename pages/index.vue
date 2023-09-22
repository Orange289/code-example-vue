<template>
  <div>
    <ul v-if="!$multisite.site.id || this.$root.context.isDev" class="versions">
      <li><a href="//localhost:3000">EXANTE</a></li>
      <li><a href="//api.localhost:3000">API</a></li>
      <li><a href="//partner.localhost:3000">PARTNER</a></li>
      <li><a href="//mt.localhost:3000">MALTA</a></li>
      <!-- <li><a href="//careers.localhost:3000">CAREERS</a></li> -->
      <li><a href="//localhost:3000/uk/">UK</a></li>
    </ul>
    <hr />
    <ul v-if="this.$root.context.isDev" class="versions">
      <li><a href="/_icons/">icons</a></li>
    </ul>
    <component :is="currentPage" />
  </div>
</template>

<script>
export default {
  name: 'DevRoot',
  computed: {
    currentPage() {
      return () => import(`./${this.$multisite.site.id}/index.vue`)
    }
  }
}
</script>

<style scoped>
.versions {
  position: fixed;
  z-index: 100000;
  top: 0;
  left: 0;

  height: 100vh;
  padding-right: 20px;

  transform: translateX(-100%);

  background-color: #ffffff;
}
.versions::after {
  position: absolute;
  top: 10px;
  right: -40px;

  width: 40px;
  height: 40px;

  content: '';

  background: darkmagenta;
}
.versions:hover {
  transform: translateX(0);
}
</style>

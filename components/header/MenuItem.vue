<template>
  <li class="site-menu__item">
    <a :href="item.link">{{ item.name }}</a>
  </li>
</template>

<script>
export default {
  name: 'MenuItem',
  props: {
    item: Object
  }
}
</script>

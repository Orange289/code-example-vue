<template>
  <ul class="list">
    <li v-for="item in items" :key="item" class="list__item">
      <span class="list__icon-wrap">
        <svg-icon :name="icon" class="list__icon"> </svg-icon>
      </span>
      <span v-html="item" class="list__text"></span>
    </li>
  </ul>
</template>

<script>
export default {
  name: 'List',
  props: {
    items: {
      type: Array,
      default: null
    },
    icon: {
      type: String,
      default: 'whitelabel/radiocheck-icon'
    }
  }
}
</script>

<style lang="scss" scoped>
.list {
  margin-top: 0;
  margin-bottom: 0;
  padding-left: 0;

  .list__item {
    display: inline-flex;
  }

  .list__icon-wrap {
    margin-right: 25px;
  }

  .list__icon {
    width: 15px;
    height: 10px;

    color: #46a26f;
  }
}
</style>

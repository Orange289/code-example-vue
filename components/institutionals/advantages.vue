<template>
  <div class="advantages">
    <h2 v-html="item.head" class="advantages__header"></h2>
    <IconTextList :items="item.items" class="advantages__items"></IconTextList>
  </div>
</template>

<script>
import IconTextList from '~/components/icon-text/IconTextList.vue'

export default {
  name: 'Advantages',
  components: {
    IconTextList
  },
  props: {
    item: {
      default: null,
      type: Object
    }
  }
}
</script>

<style lang="scss" scoped>
.advantages {
  ::v-deep .icon-text-list .icon-text-list__item {
    flex-wrap: wrap;
    padding: 30px 50px;
    background: #fff;
    box-shadow: 0 10px 25px 0 rgba(166, 173, 175, 0.1);
  }

  ::v-deep .icon-text__title {
    font-weight: 400;
    width: 100%;
  }

  ::v-deep .icon-text .icon-text__icon {
    margin-bottom: 10px;
  }

  ::v-deep .icon-text .icon-text__text {
    margin-top: 0;
  }

  @include bp(tablet) {
    ::v-deep .icon-text-list .icon-text-list__item {
      width: 30%;
    }
  }

  @include bp(desktop-wide) {
    ::v-deep .icon-text-list .icon-text-list__item {
      width: 500px;
    }
  }
}

.advantages__header {
  @include h1();

  @include bp(desktop-wide) {
    margin-bottom: 34px;
  }
}

.advantages__items {
  @include bp(tablet) {
    display: flex;
    flex-wrap: nowrap;
    justify-content: space-between;
    align-items: flex-start;
  }
}
</style>

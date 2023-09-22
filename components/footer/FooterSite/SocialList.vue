<template>
  <div v-if="socials" class="social-links">
    <socialitem
      v-for="(item, index) in socials"
      :key="item.class + index"
      :item="item"
      class="social-links__item"
    ></socialitem>
  </div>
</template>

<script>
import socialitem from './SocialItem'

export default {
  name: 'SocialList',
  components: {
    socialitem
  },
  props: {
    socials: {
      default: null,
      type: Array
    }
  }
}
</script>

<style lang="scss" scoped>
.social-links {
  @include bp(tablet) {
    max-width: 440px;
  }

  display: flex;

  width: 100%;

  flex-shrink: 0;
  justify-content: space-between;

  .social-links__item {
    @include bp(desktop) {
      margin-right: 10%;
    }
  }

  @media print {
    display: none;
  }
}
</style>

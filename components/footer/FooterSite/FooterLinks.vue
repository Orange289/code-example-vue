<template>
  <footerMenu :links="links" class="footer-menu--additional" />
</template>

<script>
import footerMenu from './FooterMenu'

export default {
  name: 'FooterLinks',
  components: {
    footerMenu
  },
  props: {
    links: {
      type: Array,
      default: null
    }
  }
}
</script>

<style lang="scss">
.footer-menu.footer-menu--additional {
  position: relative;

  margin-bottom: 30px;
  padding-bottom: 30px;

  &:after {
    @include bp(0 tablet) {
      width: 100vw;
    }

    position: absolute;
    bottom: 0;
    left: 50%;

    width: 100%;
    height: 1px;

    content: '';
    transform: translateX(-50%);

    background-color: #d2d6d7;
  }

  ul {
    @include bp(0 tablet) {
      flex-direction: column;

      align-items: flex-start;
    }
    @include bp(tablet) {
      font-size: 16px;

      display: flex;

      flex-wrap: wrap;
    }
    @include bp(desktop-large) {
      font-size: 18px;
    }
    @include bp(desktop-wide) {
      font-size: 22px;
    }

    font-weight: 400;
  }

  li {
    @include bp(tablet) {
      width: 100%;
      max-width: 50%;
      padding-right: 100px;

      &:nth-child(even) {
        padding-right: 45px;
      }
    }

    margin-right: 0;
    margin-bottom: 10px;
    margin-left: 0;

    text-align: left;
  }
}
</style>

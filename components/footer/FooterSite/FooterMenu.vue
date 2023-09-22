<template>
  <div class="footer-menu">
    <template v-if="links">
      <ul>
        <template v-for="(item, index) in links">
          <li v-if="item.href && item.name" :key="item.name + index">
            <a :href="item.href">{{ item.name }}</a>
          </li>
        </template>
        <!-- <li>
              <TogglerMobileFull />
          </li>-->
        <slot></slot>
      </ul>
    </template>
    <template v-else-if="prodLinks">
      <ul>
        {{
          prodLinks
        }}
      </ul>
    </template>
  </div>
</template>

<script>
export default {
  name: 'FooterMenu',
  props: {
    links: {
      default: null,
      type: Array
    },
    prodLinks: {
      default: null,
      type: String
    }
  }
}
</script>

<style lang="scss">
.footer-menu {
  @include bp(tablet) {
    margin-bottom: 30px;
  }

  width: 100%;

  ul {
    @include bp(0 tablet) {
      display: flex;

      flex-wrap: wrap;
      justify-content: space-around;
    }
    @include bp(tablet) {
      font-size: 14px;
    }
    @include bp(desktop-large) {
      font-size: 16px;
    }
    @include bp(desktop-wide) {
      font-size: 18px;
    }

    font-size: 18px;
    font-weight: 300;

    margin: 0;
    padding: 0;
  }

  li {
    @include bp(0 tablet) {
      font-weight: 400;

      margin-right: 10px;
      margin-left: 10px;

      text-align: center;
    }
    @include bp(tablet) {
      margin-bottom: 10px;
    }
    @include bp(desktop) {
      margin-right: 30px;
    }

    line-height: 1;

    display: inline-block;

    margin-right: 20px;
    margin-bottom: 30px;

    vertical-align: middle;

    &:last-child {
      margin-right: 0;
    }
  }

  a,
  button {
    // @include bp(0 mobile) {
    //   font-size: $font-size-base-tablet;
    // }
    font-size: inherit;

    text-decoration: underline;
    word-wrap: break-word;

    &:hover,
    &:focus {
      text-decoration: none;

      color: $color__green;
      outline: none;
    }
  }

  @media print {
    display: none;
  }
}
</style>

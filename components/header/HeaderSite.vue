<template>
  <header
    v-scroll="onScroll"
    :class="['site-head', 'js-topbar', { '_below-header': scroll_top > 50 }]"
  >
    <!-- {'site-head--white': isWhite} -->
    <Topbar :texts="textsData" class="site-head__topbar"></Topbar>
    <Navigation :texts="textsData"></Navigation>
  </header>
</template>

<script>
import Navigation from '../navigation/Navigation.vue'
import Topbar from './Topbar.vue'

export default {
  name: 'SiteHeader',
  components: {
    Topbar,
    Navigation
  },
  props: {
    texts: {
      type: Object,
      default: null
    }
  },
  data() {
    return {
      scroll_top: 0,
      textsData: this.texts
      // regoffsetTop: 10,
      // breakpoint: window.matchMedia("(max-width:960px)")
    }
  },
  computed: {
    // isWhite: function() {
    //   if(!this.breakpoint.matches) {
    //     return this.window_scroll_y <= this.regoffsetTop
    //   } else {
    //     return false;
    //   }
    // },
    // reg: function() {
    //   return document.querySelector('.reg')
    // },
  },
  beforeMount() {
    // if (!this.$root.context.isDev && window && window.header) {
    // eslint-disable-next-line nuxt/no-globals-in-created
    this.onScroll()
    if (process.browser && window && window.locales) {
      // eslint-disable-next-line nuxt/no-globals-in-created
      // const tmp = this.textsData
      // tmp.langs.items = window.locales
      // this.textsData = tmp

      this.textsData.langs.items = window.locales
    }
  },
  methods: {
    onScroll(e, position) {
      // if (process.browser && window && window && window.scrollY) {
      this.scroll_top = window.scrollY
      // }
    }
  }
}
</script>

<style lang="scss">
$head__z-index: 22 !default;

$head__background-color: $color__white !default;

.site-head {
  @include bp(tablet) {
    &._below-header {
      transform: translateY(-40px);
    }

    &:hover,
    &:focus,
    &:active {
      &._below-header {
        transform: translateY(0);
      }
    }
  }

  position: fixed;
  z-index: $head__z-index;
  top: 0;

  width: 100%;

  transition: all 0.1s ease;

  background-color: $head__background-color;

  .site-head__container {
    @include bp(desktop-large) {
      -ms-grid-columns: minmax(max-content, 20%) minmax(0, max-content)
        minmax(max-content, 52%) minmax(0, 3%) minmax(min-content, max-content);
      grid-template-columns:
        minmax(max-content, 20%) minmax(auto, 13.4%) minmax(max-content, 52%)
        minmax(auto, 3%) minmax(min-content, max-content);
    }
    @include bp(desktop-wide) {
      -ms-grid-columns: minmax(max-content, 25%) minmax(0, max-content)
        minmax(max-content, 36.5%) minmax(0, 15%)
        minmax(min-content, max-content);
      grid-template-columns:
        minmax(max-content, 25%) minmax(auto, 13.4%) minmax(max-content, 36.5%)
        minmax(auto, 15%) minmax(min-content, max-content);
    }

    display: grid;

    min-width: 0; // fix for shrink topbar__links

    white-space: nowrap;
    // -ms-grid-columns: minmax(max-content, 25%) minmax(0, max-content) minmax(max-content, 40%) minmax(0, 18%) minmax(min-content, max-content);
    // grid-template-columns: minmax(max-content, 25%) minmax(auto, 6.7%) minmax(max-content, 40%) minmax(auto, 18%) minmax(min-content, max-content);
    // 190px - logo + margin width

    -ms-grid-columns: minmax(190px, 20%) minmax(min-content, max-content)
      minmax(max-content, 40%) minmax(0, 18%) minmax(min-content, max-content);
    grid-template-columns:
      minmax(190px, 20%) minmax(min-content, 6.7%) minmax(max-content, 40%)
      minmax(auto, 18%) minmax(min-content, max-content);
    grid-template-rows: minmax(40px, max-content) minmax(80px, max-content);

    & > * {
      align-self: center;
    }

    @media print {
      display: flex;

      padding-top: 20px;
      padding-bottom: 20px;

      background-color: $color__white;
    }
  }

  .site-head__container.site-head__container--loggedin {
    @include bp(desktop-large) {
      -ms-grid-columns: minmax(max-content, 20%) minmax(0, max-content)
        minmax(max-content, 52%) minmax(0, 3%) minmax(0, max-content);
      grid-template-columns:
        minmax(max-content, 20%) minmax(auto, 13.4%) minmax(max-content, 52%)
        minmax(auto, 3%) minmax(min-content, max-content);
    }
    @include bp(desktop-wide) {
      -ms-grid-columns: minmax(max-content, 25%) minmax(0, max-content)
        minmax(max-content, 36.5%) minmax(0, 15%) minmax(0, max-content);
      grid-template-columns:
        minmax(max-content, 25%) minmax(auto, 13.4%) minmax(max-content, 36.5%)
        minmax(auto, 15%) minmax(min-content, max-content);
    }
    // -ms-grid-columns: minmax(max-content, 25%) minmax(0, max-content) minmax(max-content, 40%) minmax(0, 18%) minmax(0, max-content);
    // grid-template-columns: minmax(max-content, 25%) minmax(auto, 6.7%) minmax(max-content, 40%) minmax(auto, 18%) minmax(min-content, max-content);
    // 190px - logo + margin width

    -ms-grid-columns: minmax(190px, 20%) minmax(min-content, max-content)
      minmax(max-content, 40%) minmax(0, 18%) minmax(min-content, max-content);
    grid-template-columns:
      minmax(190px, 20%) minmax(min-content, 6.7%) minmax(max-content, 40%)
      minmax(auto, 18%) minmax(min-content, max-content);
    grid-template-rows: minmax(40px, max-content) minmax(80px, max-content);

    .topbar__slogan {
      @include bp(tablet) {
        @include lang(de es it pt nl pl) {
          display: none;
        }
      }
      @include bp(desktop) {
        @include lang(ru) {
          display: none;
        }
      }
      @include bp(desktop-large) {
        @include lang(ru de es it pt nl pl) {
          display: block;
        }
      }
    }

    .topbar__nav {
      @include bp(tablet) {
        @include lang(de es it pt nl pl) {
          grid-column: 1 / 4;
        }
      }
      @include bp(desktop) {
        @include lang(ru) {
          grid-column: 1 / 4;
        }
      }
      @include bp(desktop-large) {
        @include lang(ru de es it pt nl pl) {
          grid-column: 3 / 4;
        }
      }
      @include bp(desktop-wide) {
        @include lang(ru de es it pt nl pl) {
          grid-column: 2 / 4;
        }

        @include lang(nl pl) {
          grid-column: 2 / 4;
        }
      }
    }

    .topbar__menu {
      @include bp(tablet) {
        margin-right: 0;

        @include lang(ru de) {
          grid-column: 2 / 6;
        }

        grid-column: 3 / 6;
      }
      @include bp(desktop) {
        @include lang(pl) {
          grid-column: 1 / 6;
        }
        @include lang(ru de) {
          grid-column: 3 / 6;
        }
      }
      @include bp(desktop-wide) {
        @include lang(ru de) {
          grid-column: 2 / 6;
        }

        grid-column: 2 / 6;
      }
      @include bp(desktop-large) {
        @include lang(pl) {
          grid-column: 2 / 6;
        }
      }
    }

    .topbar__button-wrap {
      @include bp(tablet) {
        display: none;
      }
    }

    .site-menu__item {
      @include bp(tablet desktop-large) {
        font-size: 16px;

        @include lang(ru de) {
          font-size: 16px;
        }
      }
    }
  }

  @media print {
    position: relative !important;

    transform: none !important;
  }

  &.site-head--white {
    @include bp(0 tablet) {
      .navigation__logo-img {
        display: none;
      }

      .navigation__logo-img--white {
        display: inline-block;
      }
    }
  }

  &._below-header + .navigation .navigation__logo {
    @include bp(0 tablet) {
      position: relative;
      left: auto;
    }
  }
}

.site-language-selector {
  .site-language-selector__current {
    & > * {
      @include bp(tablet) {
        display: flex;

        align-items: center;
      }
    }
  }
}

.ca-links {
  @include bp(0 tablet) {
    font-weight: inherit;
  }

  font-weight: 600;

  position: relative;

  display: flex;

  align-items: center;
  justify-content: flex-end;

  & .topbar__username,
  & .ca-links__username {
    overflow: hidden;

    max-width: calc(100% - 30px);
    margin-right: 15px;

    text-overflow: ellipsis;
  }

  & .topbar__username + span,
  & .ca-links__supervisor-mode {
    @include bp(tablet) {
      left: 0;
    }

    font-size: 10px;

    position: absolute;
    bottom: -10px;
    left: 15px;

    color: $color__gray;
  }

  & .topbar__login[href*='login'],
  & .ca-links__login {
    @include link;
    // @include link__icon('https://exante.eu/static/i/dest/website/components/head/icon-door@3x.png') {
    //   @include bp(0 tablet) {
    //     left: 18px;
    //   }
    //   top: 2px;
    //   width: 10px;
    //   height: 12px;
    // }
    // @include bp(0 tablet) {
    //   padding-left: 35px;
    // }

    font-size: inherit;

    display: inline-block;
    // padding-left: 15px;

    vertical-align: middle;
  }

  & .topbar__login[href*='logout'],
  & .ca-links__logout {
    // @include bp(0 tablet) {
    //   padding-left: 35px;
    // }
    // @include link__icon('https://exante.eu/static/i/dest/website/components/head/exit@2x.png') {
    //   top: 2px;
    //   width: 15px;
    //   height: 12px;
    // }
    font-size: inherit;

    display: inline-block;
    // padding-left: 15px;

    vertical-align: middle;
  }
}
</style>

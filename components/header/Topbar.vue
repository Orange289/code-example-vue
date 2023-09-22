<template>
  <div class="topbar">
    <!-- <div class="site-head__container {% if request.COOKIES.loggedin %} site-head__container--loggedin{% endif %}"> -->
    <Container
      :class="[
        'site-head__container',
        'topbar__container',
        { 'site-head__container--loggedin': $store.state.loggedin }
      ]"
    >
      <div class="topbar__slogan" v-html="texts.slogan"></div>

      <div class="topbar__nav">
        <div class="topbar__contacts-wrap">
          <a
            v-if="texts.help.href"
            :href="texts.help.href"
            class="topbar__help"
            v-html="texts.help.text"
          >
          </a>
          <a
            :href="texts.contacts.href"
            class="topbar__contacts"
            v-html="texts.contacts.text"
          >
          </a>

          <div class="topbar__phone">
            <span v-html="texts.phone"></span>&nbsp;
            <a
              :href="'tel:' + texts.tel"
              class="topbar__phone-number"
              v-html="texts.tel_view"
            ></a>
            <span v-html="texts.call"></span>
          </div>
        </div>
      </div>
      <div class="topbar__actions">
        <div class="topbar__lang site-menu">
          <div
            v-if="texts.langs.items && texts.langs.items.length > 0"
            class="site-menu__item site-menu__item--parent site-menu__item--lang site-language-selector js-language-selector"
            tabindex="0"
          >
            <div
              class="site-language-selector__current js-language-selector__current"
            >
              <span>
                {{ texts.langs.current.name }}
              </span>
            </div>
            <ul
              class="site-language-selector__list site-menu__items site-menu__items--submenu"
            >
              <li
                v-for="(item, index) in texts.langs.items"
                :key="index"
                class="site-menu__item"
              >
                <a
                  :href="'/clientsarea/set_language/' + item.code + '/'"
                  :data-language="item.code"
                  class="site-language-selector__item js-set-language"
                >
                  {{ item.name }}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <template v-if="texts.login">
          <div
            class="ca-links topbar__links js-header-container"
            v-html="removeEscapejsFilter(texts.login)"
          ></div>
        </template>
        <template v-else>
          <div class="ca-links topbar__links js-header-container">
            <!-- <a class="ca-links__login js-signin-trigger"
                  href="/clientsarea/accounts/login/"
                  data-template="generic"
            data-hash="signin" v-html=texts.login>Log in</a>-->
            <a
              class="ca-links__login js-signin-trigger"
              href="/clientsarea/accounts/login/"
              >Log in</a
            >
          </div>
        </template>
      </div>

      <div class="topbar__logo">
        <SiteLogo :logo="texts.logo"></SiteLogo>
      </div>
      <MenuList :items="texts.menu ? texts.menu : []" class="topbar__menu">
        <template v-if="texts.main_menu" v-slot:items>
          <ul v-html="removeEscapejsFilter(texts.main_menu)"></ul>
        </template>
      </MenuList>

      <!-- v-scroll-to="'.reg'" -->
      <div v-show="!$store.state.loggedin" class="topbar__button-wrap">
        <sitebutton
          class="navigation__open-account-button topbar__button-sign site-button--full-green js-open-account-hash js-notshow-on-loggedin"
          v-html="texts.open"
        ></sitebutton>
      </div>
    </Container>
  </div>
</template>

<script>
import MenuList from './MenuList.vue'
import SiteLogo from './SiteLogo.vue'
import Container from '~/components/general/Container.vue'

export default {
  name: 'Topbar',
  components: {
    Container,
    MenuList,
    SiteLogo
  },
  props: {
    texts: Object
  }
}
</script>

<style lang="scss">
$topbar__height: 40px !default;

$topbar__font-size: $font-size-base-mobile-xs !default;

$topbar__color: $color__gray !default;

%topbar {
  visibility: visible;
  overflow: visible;

  transition: all 0.1s ease;
}

.topbar {
  @extend %topbar;
  @include bp(0 tablet) {
    display: none;
  }

  font-size: $topbar__font-size;

  color: $topbar__color;
  background: linear-gradient(
    to bottom,
    $color__white,
    $color__white 40px,
    #f7f7f7 40px,
    #f7f7f7 41px,
    $color__white 41px
  );
  box-shadow: 0 5px 10px 0 rgba(166, 173, 175, 0.1);

  @media print {
    display: block !important;
  }

  .topbar__help {
    @include bp(tablet) {
      margin-right: 10px;
    }
    @include bp(desktop) {
      margin-right: 20px;

      @include lang(ru de es it pt) {
        margin-right: 10px;
      }
    }
    @include bp(desktop-prewide) {
      margin-right: 20px;

      @include lang(ru de es it pt) {
        margin-right: 20px;
      }
    }

    @media print {
      display: none !important;
    }
  }

  .topbar__contacts {
    @media print {
      display: none !important;
    }
  }

  .topbar__container {
    height: 100%;

    align-items: center;
  }

  .topbar__slogan {
    @include bp(tablet) {
      display: block;

      margin-right: 10px;

      @include lang(ru) {
        display: none;
      }

      grid-column: 1 / 3;
    }
    @include bp(desktop) {
      @include lang(ru) {
        display: block;
      }
    }
    @include bp(desktop-wide) {
      grid-column: 1 / 2;
    }

    display: none;

    white-space: nowrap;
  }

  .topbar__logo {
    // @include bp(tablet) {
    //   @include lang(ru de) {
    //     display: none;
    //   }
    // }
    // @include bp(desktop) {
    //   @include lang(ru de) {
    //     display: block;
    //   }
    // }
    // @include bp(desktop-large) {
    //   @include lang(de) {
    //     display: block;
    //   }
    // }
    // margin-right: 10px;
    grid-row: 2;

    img {
      @include bp(tablet) {
        max-height: 35px;
      }
      @include bp(desktop) {
        max-height: none;
      }
    }

    @media print {
      order: -1 !important;

      & a:after {
        display: none !important;
      }
    }
  }

  .topbar__nav {
    @include bp(tablet) {
      margin-right: 10px;

      @include lang(ru) {
        text-align: left;

        grid-column: 1 / 4;
      }

      grid-column: 3 / 5;
    }
    @include bp(desktop) {
      @include lang(ru) {
        text-align: initial;

        grid-column: 3 / 5;
      }
    }
    @include bp(desktop-wide) {
      @include lang(ru) {
        grid-column: 2 / 4;
      }

      grid-column: 2 / 4;
    }

    // text-align: right;

    @media print {
      flex-grow: 1;
    }
  }

  .topbar__contacts-wrap {
    @include bp(desktop) {
      // @include lang(ru de) {
      //   & > * + * {
      //     margin-left: $topbar__height / 2;
      //   }
      // }

      & > * {
        display: inline-flex;

        height: 100%;

        align-items: center;
      }
    }
    // @include bp(desktop-wide) {
    //   @include lang(ru de) {
    //     & > * + * {
    //       margin-left: $topbar__height;
    //     }
    //   }
    // }

    display: inline-flex;

    white-space: nowrap;

    align-items: center;
  }

  .topbar__phone {
    @include bp(tablet) {
      margin-left: 10px;
    }
    @include bp(desktop) {
      margin-left: 70px;

      @include lang(ru de es it pt) {
        margin-left: 10px;
      }
    }
    @include bp(desktop-prewide) {
      margin-left: 55px;

      @include lang(ru de es it pt) {
        margin-left: 55px;
      }
    }
  }

  .topbar__phone-number {
    font-weight: 600;

    margin-right: 6px;

    color: inherit;

    &:hover,
    &:focus {
      text-decoration: underline;

      outline: none;
    }

    @media print {
      &:after {
        display: none !important;
      }
    }
  }

  .topbar__actions {
    @include bp(tablet) {
      display: inline-flex;

      max-width: 300px;
      height: 100%;

      align-items: center;
      grid-column: 5;
      justify-content: flex-end;
    }
    @include bp(desktop-large) {
      @include lang(ru de) {
        justify-content: flex-end;
      }

      justify-content: space-between;
    }
    @include bp(desktop-prewide) {
      @include lang(ru de) {
        justify-content: space-between;
      }
    }
  }

  .topbar__links {
    @include bp(tablet) {
      font-weight: 600;

      margin-left: 20px;

      text-align: right;

      grid-column: 5;
    }

    position: relative;

    min-width: 0; // fix for shrink topbar__links

    @media print {
      display: none !important;
    }
  }

  .topbar__menu {
    @include bp(tablet) {
      margin-right: 10px;
      // @include lang(ru de) {
      //   grid-column: 1 / 6;
      // }

      @include lang(ru de it es pt nl) {
        grid-column: 2/ 5;
      }

      grid-column: 2 / 5;
      grid-row: 2;
    }
    // @include lang(ru de) {
    //   grid-column: 2 / 6;
    // }
    // }
    // @include bp(tablet-wide) {
    //   grid-column: 2 / 4;
    // }
    @include bp(desktop-large) {
      margin-right: 30px;

      // grid-column: 2 / 5;
      // @include lang(ru de) {
      //   margin-right: 0;
      //   grid-column: 2 / 6;
      // }
    }
    @include bp(desktop-prewide) {
      @include lang(ru de it es pt nl) {
        grid-column: 2/ 4;
      }
      // @include lang(ru de) {
      //   margin-right: 30px;
      //   grid-column: 2 / 5;
      // }

      grid-column: 2 / 4;
    }

    .v-cyprus & {
      @include bp(tablet desktop-prewide) {
        grid-column: 2/ 5;
      }
    }

    // @include bp(desktop-wide) {
    //   @include lang(ru de) {
    //     grid-column: 2 / 4;
    //   }
    // }
  }

  .topbar__button-wrap {
    @include bp(tablet) {
      display: block;

      grid-column: 5;
    }
    // @include bp(tablet-wide) {
    //   display: block;
    //   grid-column: 4 / 6;
    // }
    // @include bp(desktop-large) {
    //   display: block;
    //   // @include lang(ru de) {
    //   //   display: none;
    //   // }
    //   grid-column: 5;
    // }
    // @include bp(desktop-prewide) {
    //   @include lang(ru de) {
    //     display: block;
    //   }
    // }

    display: none;

    text-align: right;

    grid-row: 2;

    .site-button {
      @include bp(mobile tablet) {
        font-size: 38px;

        padding: 24px 58px;
      }
      @include bp(tablet) {
        font-size: 14px;

        min-width: 100%;
        min-height: 35px;
        padding: 10px 15px;
      }
      @include bp(tablet-wide) {
        width: auto;
      }
      @include bp(desktop) {
        font-size: $font-size-base-mobile-xs;

        width: auto;
        min-height: 40px;
        padding-right: 26px;
        // padding: 10px 26px !important;
        padding-left: 26px;
      }
      @include bp(desktop-large) {
        font-size: $font-size-base-mobile-xs;

        min-height: 40px;
      }
      @include bp(desktop-prewide) {
        min-width: 180px;
      }
      @include bp(desktop-wide) {
        min-width: 200px;
      }

      font-size: $font-size-base-mobile-xs;
      line-height: 1;

      width: 100%;
      min-height: 40px;
      // margin-left: 10px;
      padding: 12px 29px;

      white-space: nowrap;
    }
  }

  .topbar__notification {
    font-size: 15px;
    font-weight: 600;

    float: left;

    max-width: 380px;
    margin-top: -2px;

    text-align: left;

    &:before {
      // @extend .fo-icon;
      // @extend .icon-bell-alt;
      font-size: 15px;
      line-height: 28px;

      width: 28px;
      height: 28px;
      margin: -2px 5px 0 0;

      text-align: center;

      color: $color__white;
      border-radius: 50%;
      background: $color__green;
    }

    &:hover {
      text-decoration: none !important;
    }
  }

  .topbar__lang {
    @include bp(tablet) {
      height: 100%;
    }

    @media print {
      display: none;
    }
  }
}
</style>

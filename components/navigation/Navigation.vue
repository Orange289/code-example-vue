<template>
  <div :class="['navigation', { 'navigation--open': is_open }]">
    <button
      @click="toggleOpen"
      class="navigation__toggle"
      type="button"
      tabindex="1"
    ></button>
    <button
      @click="toggleOpen"
      class="navigation__icon navigation__icon--arrow"
      type="button"
    ></button>
    <div class="navigation__list">
      <SiteLogo :logo="texts.logo"></SiteLogo>
      <div
        :class="[
          'navigation__wrap',
          { 'navigation__wrap--change-lang': change_lang }
        ]"
      >
        <div class="navigation__menu-wrap">
          <MenuList
            :items="
              texts.menu && texts.menu_mobile
                ? texts.menu.concat(texts.menu_mobile)
                : []
            "
          >
            <template v-slot:items v-if="texts.main_menu_mobile">
              <ul v-html="removeEscapejsFilter(texts.main_menu_mobile)"></ul>
            </template>

            <template v-slot:nav>
              <ul class="navigation__menu-additional">
                <li
                  key="menu_navigations-help"
                  v-if="texts.help.href"
                  class="site-menu__item site-menu__item--help"
                >
                  <a :href="texts.help.href" v-html="texts.help.text"></a>
                </li>

                <li key="menu_navigations-phone" class="site-menu__item">
                  <a :href="'tel:' + texts.tel" v-html="texts.tel_view"></a>
                  <br />
                  <span v-html="texts.call" class="site-menu__subtext"></span>
                  <br />
                  <br />
                </li>

                <li
                  key="menu_navigations-langs"
                  class="site-menu__item site-menu__item--parent site-menu__item--lang site-language-selector navigation__login"
                >
                  <button
                    v-if="texts.langs.items && texts.langs.items.length > 0"
                    @click="toggleLangChange"
                    class="js-language-selector-mobile link"
                    type="button"
                  >
                    {{ texts.langs.current.name }}
                  </button>
                  <template v-if="texts.login">
                    <div
                      v-html="removeEscapejsFilter(texts.login)"
                      class="ca-links js-header-container"
                    ></div>
                  </template>
                  <template v-else>
                    <div class="ca-links js-header-container">
                      <!-- <a
                      class="ca-links__login js-signin-trigger"
                      href="/clientsarea/accounts/login/"
                      data-template="generic"
                      data-hash="true"
                      v-html="texts.login"
                      >Log in</a
                    > -->
                      <a class="" href="/clientsarea/accounts/login/">Log in</a>
                    </div>
                  </template>
                </li>
              </ul>

              <sitebutton
                @click.native="toggleOpen"
                v-html="texts.open"
                class="navigation__open-account-button site-button--full-green js-open-account-hash js-dontshow-on-loggedin js-notshow-on-loggedin"
              ></sitebutton>

              <!-- <TogglerMobileFull class="site-menu__subtext site-menu__subtext--fullver" :is_mobile="true"/> -->
            </template>
          </MenuList>

          <div class="site-menu navigation__submenu site-language-selector">
            <ul
              v-if="texts.langs.items && texts.langs.items.length > 0"
              class="site-language-selector__list site-menu__items"
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

            <sitebutton
              @click.native="toggleLangChange"
              v-html="texts.back"
              class="navigation__back"
            ></sitebutton>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import MenuList from '../header/MenuList'
import SiteLogo from '../header/SiteLogo.vue'
// import TogglerMobileFull from '../TogglerMobileFull.vue'

export default {
  name: 'Navigation',
  components: {
    MenuList,
    SiteLogo
    // TogglerMobileFull,
  },
  props: {
    texts: Object
  },
  data() {
    return {
      is_open: false,
      change_lang: false
    }
  },
  methods: {
    toggleOpen() {
      this.is_open = !this.is_open
    },
    toggleLangChange() {
      this.change_lang = !this.change_lang
    }
  }
}
</script>

<style lang="scss" scoped>
$menu__toggler-width: 80px;

$navigation-padding-base: 4%;

$head__z-index: 22 !default;

@mixin grayGapMobileLine {
  @include bp(0 mobile) {
    padding-left: 15px;
  }
  @include bp(mobile tablet) {
    padding-left: 25px;

    &:after {
      width: 4px;
      // top: calc(100% - 60px);
      height: 50px;
    }
  }

  position: relative;

  display: inline-block;

  vertical-align: middle;

  &:after {
    @include bp(tablet) {
      display: none;
    }

    position: absolute;
    top: 50%;
    left: 0;

    display: inline-block;

    width: 2px;
    height: 30px;

    content: '';
    transform: translateY(-50%);

    background-color: $color__gray--light;
  }
}

.navigation-open {
  overflow: hidden;
}

.navigation {
  @include bp(tablet) {
    display: none;
  }

  @media print {
    display: none !important;
  }

  // .navigation__logo {
  //   flex-shrink: 0;

  //   &:hover,
  //   &:focus {
  //     opacity: 1;
  //     outline: none;
  //   }

  //   @media print {
  //     display: none !important;
  //   }
  // }

  // .navigation__logo-img--ext {
  //   @include bp(tablet) {
  //     max-width: 110px;
  //     max-height: 40px;
  //   }
  // }

  // .navigation__logo-img--white {
  //   display: none;
  // }

  .navigation__wrap {
    display: flex;
    overflow: hidden;

    width: 100%;

    &.navigation__wrap--change-lang {
      .navigation__menu-wrap {
        transform: translateX(-100%);
      }
    }
  }

  .navigation__menu-wrap {
    display: flex;

    width: 100%;

    transition: transform 0.3s ease-in-out;

    will-change: transform;

    & > * {
      width: 100%;

      flex-shrink: 0;
    }
  }

  .navigation__back {
    margin-top: 15px;
  }

  .navigation__toggle {
    // @include bp(mobile) {
    //   top: 80px;
    //   left: -60px;
    //   width: 40px;
    //   &:before {
    //     top: -57.5px;
    //     left: -20px;
    //     height: 60px;
    //     border-top: 45px solid $transparent;
    //     border-right: $menu__toggler-width solid $color__white;
    //     border-bottom: 45px solid $transparent;
    //   }
    //   &:after {
    //     height: 34px;
    //   }
    // }
    font-size: 0;

    position: absolute;
    top: 36px;
    left: -30px;

    overflow: visible;

    width: 20px;
    padding: 0;

    transition: top 0.5s ease;

    border: 0;
    background: none;

    &:before {
      position: absolute;
      z-index: -1;
      top: -29.5px;
      left: -10px;

      width: 0;
      height: 30px;

      content: '';
      transition: all ease 0.5s;

      border-top: 22.5px solid $transparent;
      border-right: $menu__toggler-width / 2 solid $color__white;
      border-bottom: 22.5px solid $transparent;
    }

    &:after {
      // green burger icon
      // 2px - green line - heigh from 17px - 11.76%
      // 3px - transparent line - height from 17px - 17.64%
      // 2px - 3px - 2px - 3px - 2px - 3px - 2px
      $line-height: 11.76%;
      $transparent-height: 17.64%;

      z-index: 1;

      display: inline-block;

      width: 100%;
      height: 17px;
      margin: auto;

      content: '';

      background: linear-gradient(
        to bottom,
        $color__green,
        $color__green $line-height,
        $transparent $line-height,
        $transparent $line-height + $transparent-height,
        $color__green $line-height + $transparent-height,
        $color__green $line-height * 2 + $transparent-height,
        $transparent $line-height * 2 + $transparent-height,
        $transparent $line-height * 2 + $transparent-height * 2,
        $color__green $line-height * 2 + $transparent-height * 2,
        $color__green $line-height * 3 + $transparent-height * 2,
        $transparent $line-height * 3 + $transparent-height * 2,
        $transparent $line-height * 3 + $transparent-height * 3,
        $color__green $line-height * 3 + $transparent-height * 3,
        $color__green 100%
      );
      background-repeat: no-repeat;
      background-size: cover;
    }

    &:focus,
    &:hover {
      outline: none;

      .navigation__icon {
        opacity: 0.1;
      }
    }
  }

  .navigation__icon {
    position: relative;
    z-index: 1;

    display: inline-block;
  }

  .navigation__icon--arrow {
    // @include bp(mobile) {
    //   top: 85px;
    //   right: 30px;
    //   width: 21px;
    //   height: 36px;
    // }
    position: absolute;
    top: 34.5px; // 30px (top) + 4.5 (18(height) / 2 / 2)
    right: 15px;
    bottom: 0;

    width: 10px;
    height: 18px;

    &:before {
      @include iconAngelBracketRight;

      opacity: 0.2;
    }

    &:hover,
    &:focus {
      outline: none;

      &:before {
        opacity: 1;
      }
    }
  }
}

@include bp(0 tablet) {
  .navigation {
    font-family: $font-family-second;
    font-size: 20px;

    position: fixed;
    z-index: 21;
    top: 0;
    right: 0;

    width: calc(100% - #{$menu__toggler-width} / 2);
    height: 100%;

    transition: transform 0.3s;
    transform: translateX(100%);
    text-transform: none;

    background-color: $color__white;

    .navigation__list {
      display: flex;
      visibility: hidden;
      flex-direction: column;

      height: 100%;
      padding-top: 30px;

      align-items: flex-start;
    }

    // .navigation__logo {
    //   position: absolute;
    //   z-index: 1;
    //   left: -100%;

    //   display: inline-block;
    //   visibility: visible;

    //   ._below-header & {
    //     position: relative;
    //     left: auto;
    //   }
    // }

    .navigation__login {
      @include bp(0 tablet) {
        [href*='login'] {
          @include grayGapMobileLine;
        }
      }

      .ca-links {
        @include bp(0 mobile) {
          margin-left: 11px;
        }
        @include bp(mobile tablet) {
          margin-left: 17px;
        }
      }
    }

    &.navigation--open {
      // position: relative;
      z-index: $head__z-index;

      height: 100%;
      margin-left: auto;
      padding-right: 0;
      padding-left: 0;

      transform: translateX(0);

      &::before {
        position: absolute;
        top: 0;
        right: 100%;
        bottom: 0;

        width: 100%;

        content: '';

        background-color: rgba($color__gray--light, 0.9);
      }

      // .navigation__logo {
      //   position: relative;
      //   left: auto;

      //   padding-left: $navigation-padding-base;
      // }

      // .navigation__logo-img {
      //   display: inline-block;

      //   width: 125px;
      // }

      // .navigation__logo-img--white {
      //   display: none;
      // }

      .navigation__toggle {
        &::before {
          z-index: 0;
          top: -130px;

          height: 135px;
        }

        &:after {
          opacity: 0.1;
        }
      }

      .navigation__list {
        visibility: visible;
      }

      .site-menu__item--parent {
        & > a {
          position: relative;

          &:after {
            @include iconAngelBracketRight;

            top: calc(50% - 4px);
            right: -20px;
            left: auto;

            transition: transform 0.5s ease;
            transform: translate(-50%, -50%) rotate(90deg);

            opacity: 0.2;
          }

          &:hover,
          &:focus {
            &:after {
              opacity: 1;
            }
          }
        }
      }

      // use for submenu
      // .menu__item--active {
      //   & > a:after {
      //     transform: translate(-50%, -50%) rotate(-180deg);
      //   }
      // }
    }
  }
}
</style>

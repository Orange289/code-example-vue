<template>
  <nav class="site-menu">
    <slot name="items">
      <ul class="site-menu__items">
        <item
          v-for="(item, index) in items"
          :key="`site-menu__item-${index}`"
          :item="item"
        ></item>

        <slot></slot>
      </ul>
    </slot>

    <slot name="nav"></slot>
  </nav>
</template>

<script>
import item from './MenuItem.vue'

export default {
  name: 'MenuList',
  components: {
    item
  },
  props: {
    items: Array
  }
}
</script>

<style lang="scss">
@mixin grayGapMobileLine {
  position: relative;

  display: inline-block;

  padding-right: 15px;

  &:after {
    @include bp(tablet) {
      display: none;
    }

    position: absolute;
    top: 50%;
    right: 0;

    width: 2px;
    height: 30px;

    content: '';
    transform: translateY(-50%);

    background-color: $color__gray--light;
  }

  & + * {
    padding-left: 10px;
  }
}

//
//    Horzontal menu with dropdown.
//
.site-menu {
  $letter-spacing-tablet: photoshop-letterspacing-to-pixels(300, 12);
  $letter-spacing-desktop: photoshop-letterspacing-to-pixels(300, 16);
  @include bp(0 tablet) {
    display: inline-flex;
    overflow-y: auto;
    flex-direction: column;

    margin-top: 25px;
    padding-right: $navigation-padding-base;
    padding-bottom: 20px;
    padding-left: $navigation-padding-base;

    align-items: flex-start;
  }
  @include bp(tablet) {
    height: 100%;

    text-transform: uppercase;

    // & > .site-menu__items > .site-menu__item:nth-of-type(6) {
    //   margin-right: 0;
    //   padding-right: 0;
    // }
  }

  @media print {
    display: none;
  }

  ul,
  .site-menu__items {
    @include bp(0 tablet) {
      max-width: 100%;
    }
    @include bp(tablet) {
      display: flex;

      height: 100%;

      white-space: nowrap;

      justify-content: space-between;
    }
    @include bp(tablet-wide) {
      margin: 0 15px;
    }
    @include bp(desktop) {
      @include lang(de) {
        margin: 0;
      }
    }
    @include bp(desktop-prewide) {
      margin: 0;
    }

    font-size: inherit;
    line-height: inherit;

    margin: 0;
    padding: 0;

    list-style: none;

    &.site-menu__items--submenu {
      @include bp(tablet) {
        position: absolute;
        top: 100%;
        left: 0;

        height: auto;

        text-transform: uppercase;

        background: $color__white;
        box-shadow: 0 5px 10px 0 rgba(166, 173, 175, 0.1);
      }
      @include bp(tablet-wide) {
        margin: 0;
      }

      font-family: $font-family-second;
      font-weight: 300;

      display: flex;
      overflow: hidden;
      flex-direction: column;

      width: 0;
      max-height: 0;
      padding-left: 0;

      transition-timing-function: ease;
      transition-duration: 0.5s;
      transition-property: height, padding-top, padding-bottom;

      align-items: flex-start;

      .site-menu__item {
        @include bp(tablet) {
          display: flex;
          flex-direction: column;

          margin: 0;

          letter-spacing: normal;

          flex-shrink: 0;
          // & > a {
          //   display: flex;
          //   flex-shrink: 0;
          // }

          &--active > a,
          &.active > a,
          &--active > button,
          &.active > button,
          &:hover > a,
          &:hover > button,
          & > a:focus,
          & > button:focus {
            &::after {
              display: none;
            }
          }

          // &--active>a,
          // &.active>a,
          // &--active>button,
          // &.active>button,
          & > a:focus,
          & > a:hover,
          & > button:hover,
          & > button:focus {
            &:hover,
            &:focus {
              text-decoration: underline;
            }

            &::after {
              display: none;
            }
          }
        }
        @include bp(desktop) {
          padding: 9px 20px;
        }

        margin: 10px 0;

        color: $color__green;

        button {
          font-family: inherit;
          font-weight: inherit;

          text-transform: capitalize;

          color: inherit;
        }

        &.site-menu__item--parent & {
          @include bp(tablet) {
            position: relative;

            padding-bottom: 0;
          }
        }

        &.site-menu__item--parent:hover {
          @include bp(tablet) {
            padding-bottom: 0;
          }
        }
      }
    }
  }

  .site-menu__item {
    // @include bp(0 mobile) {
    //   &:nth-of-type(6) {
    //     margin-bottom: calc(20px + 1em);
    //   }
    // }
    // @include bp(mobile tablet) {
    //   &:nth-of-type(6) {
    //     margin-bottom: calc(25px + 1em);
    //   }
    // }
    @include bp(mobile) {
      margin-bottom: 25px;
    }
    @include bp(tablet) {
      font-weight: 400;

      position: relative;

      display: inline-flex;

      margin-bottom: 0;
      margin-left: 20px;

      transition: background-color ease 0.5s;
      vertical-align: middle;
      white-space: nowrap;
      letter-spacing: $letter-spacing-tablet;

      background-color: $transparent;

      align-items: center;

      &:first-child {
        margin-left: 0;
      }

      & > * {
        margin-right: -$letter-spacing-tablet; // for remove right extra white space
      }

      &--active > a,
      &.active > a,
      &--active > button,
      &.active > button,
      & > a:hover,
      & > button:hover,
      & > a:focus,
      & > button:focus {
        position: initial;

        text-decoration: none;

        color: $color__text;

        &::after {
          position: absolute;
          // top: 23px;
          bottom: 0;
          left: 0;

          display: block;

          width: 100%;
          height: 2px;

          content: '';

          background-color: $color__green;
        }
      }
    }
    @include bp(desktop) {
      font-size: 16px;

      letter-spacing: $letter-spacing-desktop;

      & > * {
        margin-right: -$letter-spacing-desktop; // for remove right extra white space
      }

      // &--active > a,
      // &.active > a,
      // &--active > button,
      // &.active > button,
      // & > a:hover,
      // & > button:hover,
      // & > a:focus,
      // & > button:focus {
      //   &::after {
      //     top: 26px;
      //     left: -1px;
      //   }
      // }
    }
    // @include bp(tablet tablet-wide) {
    //   @include lang(de) {
    //     margin-left: 10px;
    //   }
    // }
    // @include bp(tablet-wide desktop) {
    //   @include lang(ru de it es pt) {
    //     font-size: 12px;
    //   }
    // }
    @include bp(desktop-prewide desktop-wide) {
      @include lang(ru de) {
        letter-spacing: 3px;
      }
    }
    @include bp(desktop desktop-wide) {
      @include lang(ru) {
        margin-left: 10px;
      }
    }

    font-weight: 300;

    display: block;

    margin-bottom: 20px;

    letter-spacing: normal;

    color: $color__green;

    button {
      font-family: inherit;
      font-size: inherit;
      font-weight: inherit;

      padding: 0;

      letter-spacing: inherit;
      text-transform: inherit;

      color: inherit;
      border: 0 none;
    }

    &--active,
    &.active {
      & > a,
      & > button {
        cursor: default;

        color: $color__text;
      }
    }
  }

  .site-menu__item--lang,
  .site-menu__item--user {
    @include bp(0 mobile) {
      font-size: 16px;
    }
    @include bp(mobile tablet) {
      font-size: 24px;

      margin-bottom: 40px;
    }
    @include bp(tablet) {
      font-size: 16px;

      display: none;
    }
    // @include bp(tablet-wide desktop) {
    //   @include lang(ru de it es pt) {
    //     font-size: 16px;
    //   }
    // }
    @include bp(desktop-prewide desktop-wide) {
      @include lang(ru de) {
        letter-spacing: normal;
      }
    }

    display: inline-flex;

    margin-top: 25px;
    margin-bottom: 20px;

    text-transform: capitalize;
  }

  .site-menu__item--lang {
    @include bp(0 tablet) {
      max-width: 100%;
      padding: 0;

      .site-menu__items--submenu {
        display: block;
      }

      &.site-menu__item--active {
        .site-menu__items--submenu {
          display: flex;
        }
      }
    }
    // @include bp(mobile tablet) {
    //   padding: 0 20px 0 0;
    // }
    @include bp(tablet) {
      font-weight: 300;

      display: inline-flex;

      height: 100%;
      margin-top: 0;
      margin-bottom: 0;
      padding: 0 10px 0 0;

      letter-spacing: normal;

      color: $color__text;

      align-items: center;

      & > * {
        margin-right: 0;
      }

      button {
        &:hover,
        &:focus {
          color: $color__text;
        }
      }

      &::after {
        @include iconAngelBracket($color__text, 4px, 1px);
        @include bp(mobile tablet) {
          top: calc(50% - 4px);
        }

        top: calc(50% - 2px);
        right: 0;

        transition: transform 0.5s ease;
        transform: rotate(135deg);

        will-change: transform;
      }

      &:focus,
      &:hover,
      &.active,
      &.site-menu__item--active {
        &::after {
          transform: rotate(-45deg);
        }

        & > .site-menu__items {
          z-index: 1;

          width: auto;
          max-height: 100vh;
          padding: 10px 0;

          background-color: $color__white;
        }
      }

      .site-menu__item {
        font-weight: inherit;

        margin-right: 0;
        padding: 12px 20px 10px;

        letter-spacing: inherit;
        text-transform: capitalize;
      }
    }

    margin-right: 0;

    button {
      font-family: $font-family-second;
      font-size: inherit;

      background: none;
    }

    &.site-language-selector .flags {
      @include bp(0 mobile) {
        margin-right: 3px;
      }
      @include bp(mobile tablet) {
        margin-right: 13px;
      }
    }

    .site-menu__items--submenu {
      @include bp(tablet) {
        left: -10px;
      }
      @include bp(desktop) {
        left: -20px;
      }

      text-transform: capitalize;
    }

    // .site-language-selector__current .flag {
    //   vertical-align: top;
    // }
  }

  .site-menu__item--parent {
    @include bp(0 tablet) {
      &.site-menu__item--active {
        .site-menu__item--parent .site-menu__item--parent {
          padding-bottom: 0;
        }

        & > .site-menu__items {
          width: auto;
          max-height: 100vh;
        }
      }
    }
    @include bp(tablet) {
      .site-menu__item {
        @include bp(tablet) {
          font-size: inherit;
        }
        // @include bp(desktop-prewide desktop-wide) {
        //   @include lang(ru de) {
        //     font-size: 16px;
        //   }
        // }

        height: auto;
        padding: 9px 10px;

        & > * {
          margin-right: 0;
        }
      }

      &:focus > .site-menu__items,
      &:hover > .site-menu__items,
      & a:focus + .site-menu__items,
      & button:focus + .site-menu__items,
      &.active,
      &.site-menu__item--active > .site-menu__items {
        z-index: 1;

        width: auto;
        max-height: 100vh;
        padding: 10px 0;

        background-color: $color__white;
      }
    }
    @include bp(desktop) {
      .site-menu__item {
        padding: 9px 20px;
      }
    }

    &:focus {
      outline: none;
    }
  }

  .site-menu__become-client {
    font-size: $font-size-base-mobile-xs;
    line-height: 1;

    width: 100%;
    min-height: 40px;
    padding: 12px 29px;

    white-space: nowrap;
  }

  .site-menu__subtext {
    // @include bp(mobile) {
    //   font-size: 24px;
    // }
    font-size: 16px;

    color: $color__text;

    &.site-menu__subtext--fullver {
      // @include bp(mobile) {
      //   margin-top: 50px;
      // }
      margin-top: 25px;

      color: $color__green;
    }
  }
}
</style>

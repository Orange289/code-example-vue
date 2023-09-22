<template>
  <div
    :class="[
      'site-button',
      {
        'site-button--white-text': dataStyleType === 'greenwt'
      },
      {
        'site-button--full-green': dataStyleType === 'fgreen'
      },
      {
        'site-button--full-green-white-text': dataStyleType === 'fgreenwt'
      },
      {
        'site-button--white': dataStyleType === 'white'
      },
      {
        'site-button--full-white': dataStyleType === 'fwhite'
      },
      {
        'site-button--full-white site-button--shadow':
          dataStyleType === 'sfwhite'
      },
      { 'site-button--only-arrow': dataOnlyArrow },
      { 'site-button--with-arrow': dataWithArrow }
    ]"
  >
    <a
      v-if="$attrs.href"
      v-bind="$attrs"
      :class="['site-button__content', buttonClass]"
    >
      <slot v-if="!dataOnlyArrow"></slot>
      <svg-icon
        v-if="dataOnlyArrow || dataWithArrow"
        name="institutionals/arrow"
        class="site-button__arrow"
        width="100"
        height="10"
      ></svg-icon>
    </a>
    <button
      v-else
      v-bind="$attrs"
      :type="resultType"
      :class="['site-button__content', buttonClass]"
    >
      <slot v-if="!dataOnlyArrow"></slot>
      <svg-icon
        v-if="dataOnlyArrow || dataWithArrow"
        name="institutionals/arrow"
        class="site-button__arrow"
        width="100"
        height="10"
      ></svg-icon>
    </button>
  </div>
</template>

<script>
export const dataStyleTypes = [
  'greenwt',
  'fgreen',
  'white',
  'fwhite',
  'sfwhite',
  'fgreenwt',
  ''
]
export default {
  name: 'SiteButton',
  inheritAttrs: false,
  props: {
    dataOnlyArrow: {
      type: Boolean,
      default: false
    },
    dataWithArrow: {
      type: Boolean,
      default: false
    },
    dataStyleType: {
      type: String,
      default: '',
      validator(value) {
        return dataStyleTypes.includes(value)
      }
    },
    buttonClass: {
      type: String,
      default: ''
    }
  },
  computed: {
    resultType() {
      if (!this.$attrs.type || this.$attrs.type !== 'submit') {
        return 'button'
      } else {
        return 'submit'
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.site-button {
  display: inline-block;

  padding: 0;

  text-align: center;

  border: none;
  background: no-repeat;

  .site-button__content {
    @include cutted-border(
      $color__green,
      $color__white,
      $color__green,
      $transparent
    );
    @include bp(desktop-prewide) {
      font-size: 24px;

      min-height: 50px;
      padding: 13px 34px;
    }

    font-family: $font-family-second;
    font-size: 18px;
    font-weight: 500;
    line-height: 1;

    display: inline-block;

    box-sizing: border-box;
    width: 100%;
    min-height: 40px;
    padding: 11px 30px;

    text-align: inherit;
    vertical-align: middle;
    text-decoration: none;

    color: $color__green;
    border: 0 none;
    background-color: $transparent; // rewright default background for buttons
  }
  &:hover::after {
    cursor: pointer;
  }

  &[disabled] {
    .site-button__content {
      cursor: not-allowed;

      opacity: 0.65;
    }
  }

  &.site-button--white-text {
    .site-button__content {
      color: $color__white;
    }
  }

  &.site-button--white {
    .site-button__content {
      @include cutted-border($color__white, $color__green, $color__white);

      color: $color__white;
    }
  }

  &.site-button--full-white {
    .site-button__content {
      @include cutted-border(
        $color__white,
        $color__white,
        $color__white,
        $transparent
      );

      color: $color__green;
    }
  }

  &.site-button--full-green {
    .site-button__content {
      @include cutted-border(
        $color__green,
        $color__green,
        $color__green,
        $transparent
      );

      color: $color__white;
    }
  }
  &.site-button--full-green-white-text {
    .site-button__content {
      @include cutted-border(
        $color__green,
        $color__white,
        $color__green,
        $transparent
      );

      color: $color__white;
    }
  }

  &.site-button--full-green-white-text,
  &.site-button--full-white:not(.site-button--shadow),
  &.site-button--full-green {
    .site-button__content {
      &:before {
        right: auto;
        left: 0;

        width: 100%;
      }

      &:hover,
      &:focus,
      &:active,
      &.active,
      &--active {
        &:before {
          right: 0;
          left: auto;

          width: 0;
        }
      }
      &:disabled,
      &[disabled],
      &.loading {
        &:hover,
        &:focus,
        &:active {
          &:before {
            right: auto;
            left: 0;

            width: 100%;
          }
        }
      }
    }
  }

  .site-button__arrow {
    display: inline-block;
  }

  &.site-button--only-arrow {
    .site-button__content {
      @include bp(desktop-large) {
        min-width: 200px;
        max-width: 200px;
        min-height: 50px;
      }

      width: 100%;
      min-width: 160px;
      max-width: 160px;
      max-height: 40px;

      flex-shrink: 0;
    }
  }

  &.site-button--shadow {
    transition: filter 0.3s ease-in-out;

    filter: drop-shadow(0px 5px 10px rgba(166, 173, 175, 0.2));
    will-change: filter;

    &:hover,
    &:focus {
      filter: none;
    }
  }

  &.site-button--full-white.site-button--shadow {
    .site-button__content {
      @include cutted-border(
        // $color__green--lightest,
          $color__white,
        $color__white,
        $color__green,
        $color__white
      );
    }
  }
}
</style>

<template>
  <div :class="`nuxt_page ${className}`">
    <slot name="header_wrap">
      <!-- <HeaderSite :texts="texts.header" /> -->
    </slot>
    <slot name="nuxt_page_start"></slot>
    <main>
      <slot></slot>
    </main>
    <slot name="before_textoac"> </slot>
    <slot name="textoac">
      <Created></Created>
    </slot>
    <slot name="nuxt_page_end"></slot>
    <slot name="footer_wrap">
      <!-- <FooterSite :texts="texts.footer" /> -->
    </slot>
  </div>
</template>

<script>
// import HeaderSite from '~/components/header/HeaderSite.vue'
// import FooterSite from '~/components/footer/FooterSite.vue'
import Created from '~/components/exante/created/Created.vue'

export default {
  name: 'DafaultlLayout',
  props: {
    className: {
      type: String,
      default: ''
    }
  },
  components: {
    // HeaderSite,
    // FooterSite,
    Created
  },
  created() {
    this.$store.dispatch('CHECK_LOGGEDIN')
  },
  head() {
    return {
      htmlAttrs: {
        lang: this.$i18n.locale
      }
    }
  }
}
</script>

<style lang="scss">
@import './assets/scss/EXANTE/base/fonts';
// globals
// partly inherit from normilize.css

html {
  /**
  * 1. Correct the line height in all browsers.
  * 2. Prevent adjustments of font size after orientation changes in iOS.
  */
  // @include bp(desktop-wide) {
  //   font-size: $font-size-base-wide;
  // }
  @include bp(desktop-prewide) {
    font-size: 18px;
    line-height: 1.39;
  }
  @include bp(desktop-wide) {
    font-size: 22px;
    line-height: 1.36;
  }

  font-family: $font-family-base;
  font-size: 16px;
  font-weight: 300;
  line-height: 1.25; /* 1 */

  color: $color__black--light;

  font-variant-numeric: lining-nums; // for numbers in uppers case
  -webkit-text-size-adjust: 100%; /* 2 */
  font-display: swap;
}

body {
  overflow-x: initial;
  position: relative;

  height: 100%;
  margin: 0;

  color: $color__black--light;

  * {
    box-sizing: border-box;
    font-variant-ligatures: none;
  }
}

main {
  display: block;
}

hr {
  overflow: visible; /* 2 */
  /**
  * 1. Add the correct box sizing in Firefox.
  * 2. Show the overflow in Edge and IE.
  */

  box-sizing: content-box; /* 1 */
  height: 0; /* 1 */
}

b,
strong {
  font-weight: normal; // in our font-family normal is like bold
}

img {
  /**
  * prevent overflow by img
  */
  max-width: 100%;
  /**
  * Remove the border on images inside links in IE 10.
  */

  border-style: none;
}

button,
input,
optgroup,
select,
textarea {
  /**
  * 1. Change the font styles in all browsers.
  * 2. Remove the margin in Firefox and Safari.
  */
  font-family: inherit; /* 1 */
  font-size: 100%; /* 1 */
  line-height: 1.15; /* 1 */

  margin: 0; /* 2 */
}

button,
input {
  /**
 * Show the overflow in IE.
 * Show the overflow in Edge.
 */
  overflow: visible;
}

button,
select {
  /**
 * Remove the inheritance of text transform in Edge, Firefox, and IE.
 * Remove the inheritance of text transform in Firefox.
 */
  text-transform: none;
}

button,
[type='button'],
[type='reset'],
[type='submit'] {
  /**
 * Correct the inability to style clickable types in iOS and Safari.
 */
  -webkit-appearance: button;
}

button::-moz-focus-inner,
[type='button']::-moz-focus-inner,
[type='reset']::-moz-focus-inner,
[type='submit']::-moz-focus-inner {
  padding: 0;
  /**
 * Remove the inner border and padding in Firefox.
 */

  border-style: none;
}

button:-moz-focusring,
[type='button']:-moz-focusring,
[type='reset']:-moz-focusring,
[type='submit']:-moz-focusring {
  /**
 * Restore the focus styles unset by the previous rule.
 */
  outline: 1px dotted ButtonText;
}

textarea {
  /**
 * Remove the default vertical scrollbar in IE 10+.
 */
  overflow: auto;
}

[type='number']::-webkit-inner-spin-button,
[type='number']::-webkit-outer-spin-button {
  /**
 * Correct the cursor style of increment and decrement buttons in Chrome.
 */
  height: auto;
}

[type='search'] {
  outline-offset: -2px; /* 2 */
  /**
 * 1. Correct the odd appearance in Chrome and Safari.
 * 2. Correct the outline style in Safari.
 */

  -webkit-appearance: textfield; /* 1 */
}

[type='search']::-webkit-search-decoration {
  /**
 * Remove the inner padding in Chrome and Safari on macOS.
 */
  -webkit-appearance: none;
}

::-webkit-file-upload-button {
  font: inherit; /* 2 */
  /**
 * 1. Correct the inability to style clickable types in iOS and Safari.
 * 2. Change font properties to `inherit` in Safari.
 */

  -webkit-appearance: button; /* 1 */
}

details {
  /*
 * Add the correct display in Edge, IE 10+, and Firefox.
 */
  display: block;
}

summary {
  /*
 * Add the correct display in all browsers.
 */
  display: list-item;
}

template {
  /**
 * Add the correct display in IE 10+.
 */
  display: none;
}

[hidden] {
  /**
 * Add the correct display in IE 10.
 */
  display: none;
}

/* Change Autocomplete styles in Chrome*/
@-webkit-keyframes autofill {
  to {
    color: $color__text;
    background: transparent; // remove yellow back
  }
}

input:-webkit-autofill,
input:-webkit-autofill:hover,
input:-webkit-autofill:focus {
  -webkit-animation-name: autofill;

  -webkit-animation-fill-mode: both;
}

a {
  text-decoration: none;

  color: $color__green;

  &:hover,
  &:focus {
    text-decoration: underline;
  }
}

b,
strong {
  font-weight: normal;
}

body.page {
  padding-top: 0;
}

h4,
h5,
h6 {
  @include header;
}

h1 {
  @include h1;
}

h2 {
  @include h2;
}

p {
  font-size: inherit;
  line-height: inherit;
}

p + p {
  margin-top: initial;
}

big {
  @include bp(desktop-large) {
    font-size: 28px;
    line-height: 1.43;
  }

  font-family: $font-family-second;
  font-size: 24px;
  line-height: 1.25;
}

.animate {
  transition-delay: 0.25s;
  transition-timing-function: ease-in-out;
  transition-duration: 0.5s;

  will-change: transform, opacity;

  &.fade {
    opacity: 0;
  }

  &.animate-active {
    &.fade {
      opacity: 1;
    }
  }
}

.slide-right {
  @include bp(tablet) {
    transform: translateX(100%);
  }
}

.slide-left {
  @include bp(tablet) {
    transform: translateX(-100%);
  }
}

.slide-up {
  @include bp(tablet) {
    transform: translateY(100%);
  }
}
.slide-down {
  @include bp(tablet) {
    transform: translateY(-100%);
  }
}

.slide-up.animate-active,
.slide-down.animate-active {
  @include bp(tablet) {
    transform: translateY(0);
  }
}

.slide-right.animate-active,
.slide-left.animate-active {
  @include bp(tablet) {
    transform: translateX(0);
  }
}

:root,
[data-theme='default'] {
  // each item in color map
  @each $key, $value in $colors {
    --colors-#{$key}: #{$value};
  }
}

// .page #__nuxt {
//   @include bp(tablet) {
//     margin-top: -120px; // for header
//   }
// }

.nuxt_page {
  overflow: hidden;

  &.page {
    padding-top: 0; //for normal top padding on site for menu
  }
}

.subscription-layout {
  overflow: visible;
}

// Micromodal and login
@include bp(0 $width--tablet) {
  .page {
    &.vex-open,
    &.micromodal-open {
      .foot,
      .nuxt_page,
      .site-head {
        display: none;
      }
    }
  }
}
</style>

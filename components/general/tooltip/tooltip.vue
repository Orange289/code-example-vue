<template>
  <button
    ref="tooltip"
    @click="show_tooltip = !show_tooltip"
    class="tooltip"
    type="button"
    aria-label="Tooltip"
  >
    <span class="tooltip__icon"></span>

    <span v-html="text" v-if="show_tooltip" class="tooltip__content"></span>
  </button>
</template>

<script>
export default {
  name: 'Tooltip',
  props: {
    text: {
      type: String,
      required: true
    }
  },
  data() {
    return {
      show_tooltip: false
    }
  },
  mounted() {
    document.addEventListener('click', this.handleGlobalClick, {
      passive: true,
      capture: true
    })
  },
  beforeDestroy() {
    document.removeEventListener('click', this.handleGlobalClick)
  },
  methods: {
    handleGlobalClick(e) {
      if (this.show_tooltip && e.target !== this.$refs.tooltip) {
        this.show_tooltip = false
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.tooltip {
  position: relative;
  z-index: initial;

  padding: 0;

  border: 0 none;
  background: none;

  .tooltip__icon {
    &:before {
      font-size: 14px;
      font-weight: 500;

      display: inline-flex;

      box-sizing: border-box;
      width: 20px;
      height: 20px;

      content: 'i';
      transition: all 0.3s ease;

      color: #d2d6d7;
      border: 2px solid #d2d6d7;
      border-radius: 50%;
      background-repeat: no-repeat;

      align-items: center;
      justify-content: center;
    }
  }

  .tooltip__content {
    position: absolute;
    z-index: 1;
    top: calc(100% + 15px);
    // @include bp(0 tablet) {
    // position: relative;
    // left: 0;
    // margin-top: 15px;
    //   &:not([hidden]) {
    //   max-width: 300px;
    //   margin: 15px 0 0;
    //   }
    // }
    left: calc(50% - 35px);

    display: inline-block;
    overflow: hidden;
    clip: rect(0 0 0 0);

    width: 1px;
    height: 0;
    margin: -1px;
    margin-top: 0;
    padding: 0;

    transition-timing-function: ease;
    transition-duration: 0.3s;
    transition-property: opacity, height, padding-top, padding-bottom;
    text-align: left;

    opacity: 0;
    color: #8c8c8c;
    background-color: #fff;
    box-shadow: 0 2px 10px 0 rgba(0, 0, 0, 0.1);

    &:after {
      position: absolute;
      top: -15px;
      left: 50%;

      width: 0;
      height: 0;

      content: '';
      transform: rotate(135deg) translateX(10px);

      border-width: 8px;
      border-style: solid;
      border-color: transparent transparent #fff #fff;
      box-shadow: -3px 3px 15px -5px rgba(0, 0, 0, 0.2);
    }

    // &[hidden] {
    //   display: block; // for some animation
    //   visibility: hidden;
    // }

    &:not([hidden]) {
      @include bp(tablet) {
        max-width: 400px;
      }

      z-index: 100;
      left: 50%;

      display: inline-block;
      overflow: visible;
      clip: initial;

      width: max-content;
      max-width: 250px;
      height: auto;
      margin: 0;
      padding: 25px 15px 25px 25px;

      transform: translateX(-50%);

      opacity: 1;
    }
  }

  &:hover,
  &:focus {
    outline: none;

    .tooltip__icon {
      &::before {
        color: #fff;
        background-color: #d2d6d7;
      }
    }
  }
}
</style>

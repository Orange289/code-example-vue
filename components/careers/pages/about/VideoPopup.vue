<template>
  <div :class="['vpopup', { 'vpopup--open': videoOpen }]">
    <div class="vpopup__iframe">
      <client-only>
        <slot name="iframe"></slot>
      </client-only>
      <button class="vpopup__close" type="button" @click="closeVideo"></button>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'VideoPopup',
  computed: {
    ...mapState('careers', ['videoOpen'])
  },
  methods: {
    closeVideo() {
      this.$emit('close')
    }
  }
}
</script>

<style lang="postcss" scoped>
.vpopup {
  position: fixed;
  width: 100vw;
  height: 100vh;
  top: 0;
  left: 0;
  background: rgba(242, 242, 242, 0.9);
  visibility: hidden;
  z-index: -1;
  transform: scale(0);
  transition: transform 0.7s;
  display: flex;
  align-items: center;
  justify-content: center;

  &--open {
    visibility: visible;
    z-index: 11000;
    transform: scale(1);
  }
}

.vpopup__iframe {
  width: 100%;
  height: 100%;
  max-width: 800px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;

  ::v-deep iframe {
    width: 100vw;
    height: 100vh;
  }

  .vpopup--open & ::v-deep iframe {
    @media (--md) {
      width: 740px;
      height: 631px;
    }
    @media (--lg) {
      width: 800px;
    }
  }
}

.vpopup__close {
  width: 57px;
  height: 57px;
  position: absolute;
  z-index: 100;
  top: 20px;
  right: 20px;
  display: block;
  margin-top: 0;
  padding: 0;
  transition: background 0.3s ease-in-out;
  border: 0 none;
  background: rgba(255, 255, 255, 0);
  cursor: pointer;

  &:before,
  &:after {
    position: absolute;
    top: 27.5px;
    left: 0px;
    display: block;
    width: 57px;
    height: 2px;
    content: '';
    background: var(--primary-500-color);
  }

  &:before {
    transform: rotate(45deg);
  }
  &:after {
    transform: rotate(-45deg);
  }

  @media (--md) {
    top: 40px;
    right: -80px;
  }
  @media (--xl) {
    top: 20%;
  }
}
</style>

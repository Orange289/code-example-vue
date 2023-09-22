<template>
  <button type="button" class="menu-button" aria-label="open menu">
    <svg
      :width="active ? 20 : 18"
      height="18"
      :viewBox="active ? '0 0 20 18' : '0 0 18 18'"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      :class="['menu-button__icon', { 'menu-button__icon--close': active }]"
    >
      <path class="menu-button__top-line" d="M1 1 L19 1" />
      <path class="menu-bottom__bottom-line" d="M1 17 L19 17" />
      <path class="menu-button__middle-line" d="M1 9H19" />
    </svg>
  </button>
</template>

<script>
export default {
  name: 'MenuButton',
  props: {
    active: {
      type: Boolean,
      default: false
    }
  }
}
</script>

<style lang="postcss" scoped>
.menu-button {
  position: relative;
  color: var(--primary-500-color);
  display: inline-flex;
  background: none;
  padding: 0;
  margin: 0;
  border: 0;
}

.menu-button__icon {
  path {
    stroke: currentColor;
    stroke-width: 1.5;
    stroke-linecap: round;
    transition: 0.3s ease-in-out;
  }
  &.menu-button__icon--close {
    .menu-button__top-line {
      d: path('M1 1 L17 17');
    }
    .menu-bottom__bottom-line {
      d: path('M1 17 L17 1');
    }
    .menu-button__middle-line {
      opacity: 0;
    }
  }
}
</style>

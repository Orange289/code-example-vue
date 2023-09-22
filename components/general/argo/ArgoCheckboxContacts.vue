<template>
  <label :class="['checkbox', { 'checkbox--error': vField.$invalid }]">
    <span class="checkbox__text"><slot name="value"></slot></span>
    <input
      v-bind="$attrs"
      :value="true"
      v-model.trim="vField.$model"
      @change="vField.$touch()"
      type="checkbox"
      required
      checked
    />
    <span class="checkbox__checkmark"></span>
  </label>
</template>

<script>
export default {
  name: 'ArgoCheckbox',
  inheritAttrs: false,
  props: {
    vField: {
      type: Object,
      default() {
        return {}
      },
      required: true
    }
  }
}
</script>

<style lang="scss" scoped>
.checkbox {
  @include bp(tablet) {
    font-size: 20px;
  }

  position: relative;

  display: block;

  padding-left: 26px;
  // cursor: pointer;

  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;

  color: $color__white;

  .checkbox__checkmark {
    position: absolute;
    top: 3px;
    left: 0;

    width: 16px;
    height: 16px;

    border: 1px solid $color__white;

    &:after {
      position: absolute;
      top: 0px;
      left: 4px;

      display: none;

      width: 4px;
      height: 10px;

      content: '';
      transform: rotate(45deg);

      border: solid $color__green-2;
      border-width: 0 2px 2px 0;
    }
  }
  input {
    position: absolute;
    z-index: -1;
    top: 3px;
    left: 0;

    width: 16px;
    height: 16px;

    cursor: pointer;

    opacity: 0;
    opacity: 0;

    &:checked {
      & ~ .checkbox__checkmark {
        background-color: $color__white;

        &:after {
          display: block;
        }
      }
    }
  }

  .checkbox__error {
    font-size: 20px;

    display: none;

    color: red;
  }

  &.checkbox--error {
    .checkbox__error {
      display: block;

      margin-top: 5px;
    }
  }
}
</style>

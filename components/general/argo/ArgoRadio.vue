<template>
  <label class="a-radio">
    <input v-bind="$attrs" :value="field.value" type="radio" />
    <span class="a-radio__checkmark"></span>
    <slot name="value"><span v-html="field.label"></span></slot>
  </label>
</template>

<script>
export default {
  name: 'Radio',
  inheritAttrs: false,
  props: {
    field: {
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
.a-radio {
  @include bp(tablet) {
    font-size: 20px;
  }

  position: relative;

  display: block;

  margin-right: 20px;
  padding-left: 26px;

  cursor: pointer;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}

.a-radio input {
  position: absolute;
  z-index: -1;
  top: 2px;
  left: 0;

  width: 16px;
  height: 16px;

  cursor: pointer;

  opacity: 0;
}

.a-radio__checkmark {
  position: absolute;
  top: 2px;
  left: 0;

  width: 16px;
  height: 16px;

  transition: background-color 0.3s;

  border: 1px solid $color__white;
  border-radius: 50%;
}

.a-radio__checkmark:after {
  position: absolute;

  display: none;

  content: '';
}

.a-radio input ~ * {
  opacity: 0.6;
}

.a-radio input:checked ~ * {
  opacity: 1;
}

.a-radio input:checked ~ .a-radio__checkmark:after {
  display: block;
}

.a-radio .a-radio__checkmark:after {
  top: 3px;
  left: 3px;

  width: 8px;
  height: 8px;

  border-radius: 50%;
  background: $color__white;
}
</style>

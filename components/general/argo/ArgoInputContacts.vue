<template>
  <div
    v-if="field"
    :class="['argo-input', { 'argo-input--error': vField.$error }]"
  >
    <label
      v-if="field.label"
      :for="`field-${field.name}`"
      class="argo-input__label"
    >
      {{ field.label }}
    </label>
    <input
      v-bind="$attrs"
      :id="`field-${field.name}`"
      :maxlength="field.maxlength"
      :required="field.required"
      :name="field.name"
      :type="field.type || 'text'"
      :placeholder="field.placeholder"
      v-model.trim="field.value"
      class="argo-input__input"
    />
    <div
      v-if="vField.$error && !vField.value.required"
      class="argo-input__error"
    >
      Field is required
    </div>
  </div>
</template>

<script>
export default {
  name: 'ArgoInput',
  inheritAttrs: false,
  props: {
    field: {
      type: Object,
      default() {
        return {}
      },
      required: true
    },
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
.argo-input {
  @include bp(tablet) {
    padding-bottom: 40px;
  }

  padding-bottom: 30px;

  .argo-input__input {
    @include bp(tablet) {
      font-size: 30px;

      // margin-bottom: 40px;
    }

    font-size: 20px;

    display: block;

    width: 100%;
    // margin-bottom: 30px;
    padding-top: 10px;
    padding-bottom: 10px;

    color: $color__white;
    border: none;
    border-bottom: 1px solid rgba($color__green-2-dark, 0.25);
    background: transparent;

    &:focus {
      border-bottom: 1px solid $color__green-2-dark;
      outline: none;
    }
  }

  .argo-input__label {
    @include bp(tablet) {
      font-size: 20px;
    }

    font-weight: 600;

    color: $color__green-2-dark;
  }

  .argo-input__error {
    font-size: 20px;

    display: none;

    color: red;
  }

  &.argo-input--error {
    .argo-input__label {
      color: red;
    }
    .argo-input__input {
      border-bottom: 1px solid rgba(red, 0.25);
    }
    .argo-input__error {
      display: block;

      margin-top: 5px;
    }
  }
}
</style>

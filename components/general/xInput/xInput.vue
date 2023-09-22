<template>
  <div :class="['input', { 'input--error': error }, { 'input--icon': iconID }]">
    <label class="input__label" :for="id">
      <input
        :id="id"
        :ref="id"
        v-model.trim="inputValue"
        :class="[
          classes,
          { changed: changed },
          { success: changed && validate && !error }
        ]"
        :type="type"
        :name="name"
        :disabled="disabled"
        @input="onInputClick"
        @keyup="onKeyUp"
        @focus="onFocus"
        @blur="onBlur"
      />
      <span class="input__floating-label">{{ placeholder }}</span>
      <div v-if="defaultMessage && !validate && !error" class="input__message">
        {{ defaultMessage }}
      </div>
      <div
        v-if="changed && validate && successMessage"
        class="input__message input__message--success"
      >
        {{ successMessage }}
      </div>
      <div
        v-if="error && errorMessage"
        class="input__message input__message--error"
      >
        {{ errorMessage }}
      </div>
    </label>
  </div>
</template>

<script>
export default {
  name: 'XInput',
  props: {
    type: {
      type: String,
      validator(value) {
        return [
          'text',
          'password',
          'email',
          'number',
          'search',
          'tel',
          'url'
        ].includes(value)
      },
      default: 'text'
    },
    placeholder: {
      type: String,
      required: true
    },
    name: {
      type: String
    },
    id: {
      type: String,
      required: true
    },
    value: {
      type: [String, Number],
      default: ''
    },
    classes: {
      type: String,
      default: ''
    },
    validate: {
      type: Boolean,
      default: false
    },
    error: {
      type: Boolean,
      default: false
    },
    defaultMessage: {
      type: String,
      default: ''
    },
    errorMessage: {
      type: String,
      default: ''
    },
    successMessage: {
      type: String,
      default: ''
    },
    disabled: {
      type: Boolean,
      default: false
    },
    iconID: {
      type: String
    }
  },
  data() {
    return {
      changed: false,
      inputValue: this.value
    }
  },
  watch: {
    value() {
      this.checkChanged()
    }
  },
  mounted() {
    this.checkChanged()
  },
  methods: {
    checkChanged() {
      if (this.value !== '') {
        this.changed = true
      }
    },
    onInputClick($event) {
      // this.v.$touch()
      this.$emit('input', $event.target.value)
      if ($event.target.value) {
        this.changed = true
      } else {
        this.changed = false
      }
    },
    onKeyUp($event) {
      if (this.disabled) {
        return
      }

      if ($event.keyCode === 13) {
        this.$emit('keyup', $event)
      }
    },
    onFocus() {
      if (this.disabled) {
        return
      }

      this.$emit('focus')
    },
    onBlur() {
      if (this.disabled) {
        return
      }

      this.$emit('blur')
    }
  }
}
</script>

<style lang="scss" scoped>
.input {
  /* margin-bottom: 24px; */

  color: rgba($color__black--light, 0.5);
}

.input input {
  font-family: $font-family-second;
  color: currentColor;
  font-size: 20px;
  font-weight: 300;
  padding: 6px 2px;
  border: none;
  border-bottom: 2px solid rgba(0, 127, 57, 0.25);
  background-color: transparent;
  transition: background-color 0.3s;
  width: 100%;

  &::placeholder {
    color: var(--form-placeholder-color);
  }

  &:hover:not(:disabled),
  &:focus {
    background-color: var(--form--hover-color);
  }

  &:focus {
    outline: none;
  }

  &:disabled {
    opacity: 0.4;
    cursor: default;
  }

  &:disabled ~ span {
    color: rgba(129, 140, 153, 0.4);
    cursor: default;
  }
}

.input__label {
  position: relative;
  display: block;
}

.input__floating-label {
  font-family: var(--font-family-base);
  color: var(--form-placeholder-color);
  position: absolute;

  font-size: 20px;
  left: 0;
  top: 10px;
  cursor: text;
  transition: 0.2s ease all;
}

input:focus,
input.changed {
  padding-top: 20px;
  padding-bottom: 4px;
}

input:hover ~ .input__floating-label {
  color: var(--accent-100-color);
}

input:focus ~ .input__floating-label,
input.changed ~ .input__floating-label {
  color: var(--accent-100-color);
  font-size: 11px;
  top: 4px;
  left: 0;
}

.input--error .input__label input {
  border-color: $color-red;
}

.input--error .input__floating-label {
  color: $color-red;
}

.input .success {
  border-color: var(--form-success-color);
}

.input .success ~ .input__floating-label {
  color: var(--form-success-color);
}

/*
.input input:focus {
  outline: none;
} */

.input input:-webkit-autofill,
.input input:-webkit-autofill:hover,
.input input:-webkit-autofill:focus {
  color: currentColor !important;
  transition: background-color 5000s ease-in-out 0s !important;
  -webkit-text-fill-color: currentColor !important;
}

.input__message {
  font-family: var(--font-family-base);
  color: var(--form-placeholder-color);
  font-size: 11px;
  line-height: 16px;
  display: block;
}

.input__message--error {
  color: $color-red;
}

.input__icon {
  position: absolute;
  left: 12px;
  top: 14px;
  width: 24px;
  height: 24px;
  color: var(--accent-100-color);
}

input.changed ~ .input__icon,
input:hover ~ .input__icon {
  color: var(--form-text-color);
}

.input--icon input {
  padding-left: 44px;
}

.input--icon .input__floating-label {
  left: 44px;
}

.input--icon input:focus ~ .input__floating-label,
.input--icon input.changed ~ .input__floating-label {
  left: 44px;
}

input:disabled ~ .input__icon {
  color: rgba(129, 140, 153, 0.4);
}
</style>

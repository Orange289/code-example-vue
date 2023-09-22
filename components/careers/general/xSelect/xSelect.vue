<template>
  <div
    v-if="list !== null && list.length > 0"
    :class="[
      'select',
      { 'select--chosen': chosen || initialValue },
      { 'select--open': visible },
      {
        'select--success':
          (chosen && validate && !error) || (initialValue && validate && !error)
      },
      { 'select--error': error },
      { 'select--disable': disable },
      { 'select--icon': iconID },
      { 'select--withoutLabel': withoutLabel }
    ]"
    :data-value="chosenValue"
  >
    <div ref="selector" class="selector" @click="toggle">
      <span class="select__floating-label">{{ placeholder }}</span>
      <SvgIcon v-if="iconID" :id="iconID" class="select__icon" role="img" />
      <div class="label" :data-value="chosenValue || initialValue">
        <span v-if="chosen">{{ chosenValue }}</span>
        <span v-else-if="initialValue">{{ initialValue }}</span>
      </div>
      <div class="arrow" :class="{ expanded: visible }"></div>
      <ul
        v-if="visible"
        v-closable="{ exclude: ['selector'], handler: 'onClose' }"
        class="select__list"
      >
        <li
          v-for="(item, index) in list"
          :key="index"
          :data-value="item"
          :class="[
            'select__item',
            { current: item === chosenValue },
            {
              'select__item--disabled': activeList
                ? !activeList.includes(item)
                : false
            }
          ]"
          @click="onSelect($event, item)"
        >
          {{ item }}
        </li>
      </ul>
    </div>
    <div v-if="defaultMessage && !validate && !error" class="select__message">
      {{ defaultMessage }}
    </div>
    <div
      v-if="validate && successMessage && !error"
      class="select__message select__message--success"
    >
      {{ successMessage }}
    </div>
    <div
      v-if="error && errorMessage"
      class="select__message select__message--error"
    >
      {{ errorMessage }}
    </div>
    <input type="hidden" :name="name" :value="chosenValue" />
  </div>
</template>

<script>
import Vue from 'vue'
import SvgIcon from '../../svg-icon/SvgIcon.vue'

let handleOutsideClick

Vue.directive('closable', {
  bind(el, binding, vnode) {
    handleOutsideClick = (e) => {
      e.stopPropagation()
      const { handler, exclude } = binding.value

      let clickedOnExcludedEl = false
      exclude.forEach((refName) => {
        if (!clickedOnExcludedEl) {
          const excludedEl = vnode.context.$refs[refName]
          clickedOnExcludedEl = excludedEl.contains(e.target)
        }
      })
      if (!el.contains(e.target) && !clickedOnExcludedEl) {
        vnode.context[handler]()
      }
    }
    document.addEventListener('click', handleOutsideClick)
    document.addEventListener('touchstart', handleOutsideClick)
  },
  unbind() {
    document.removeEventListener('click', handleOutsideClick)
    document.removeEventListener('touchstart', handleOutsideClick)
  }
})

export default {
  components: {
    SvgIcon
  },
  props: {
    placeholder: {
      type: String,
      default: '',
      required: true
    },
    initialValue: {
      type: String,
      default: null
    },
    list: {
      type: Array,
      default: null
    },
    activeList: {
      type: Array,
      default: null
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
    disable: {
      type: Boolean,
      default: false
    },
    iconID: {
      type: String
    },
    withoutLabel: {
      type: Boolean,
      default: false
    },
    name: {
      type: String,
      required: true
    }
  },
  data() {
    return {
      visible: false,
      chosen: false,
      chosenValue: null
    }
  },
  methods: {
    toggle() {
      if (!this.disable) {
        this.visible = !this.visible
      }
    },
    onClose() {
      this.visible = false
    },
    onSelect(e, val) {
      if (this.activeList && !this.activeList.includes(val)) {
        return false
      }
      this.chosen = true
      this.chosenValue = val
      this.$emit('select', e, val)
    }
  }
}
</script>

<style lang="postcss" scoped>
.select {
  width: 100%;
  position: relative;

  &--locations {
    &::v-deep {
      .label,
      .select__item {
        &[data-value='Global'],
        &[data-value='Europe'],
        &[data-value='Asia'] {
          text-transform: uppercase;
        }
      }
    }
  }
}

.select .selector {
  font-family: var(--font-family-base);
  color: var(--form-placeholder-color);
  font-size: 15px;
  line-height: 1.6;
  border-radius: 4px;
  border: 1px solid var(--form-border-color);
  background-color: #fff;
  transition: background-color 0.3s;
  cursor: pointer;
  width: 100%;
  position: relative;

  &:hover,
  &:focus {
    background-color: var(--form--hover-color);
  }
}

.select .label {
  display: block;
  font-weight: 500;
  padding: 20px 12px 4px;
  /* height: 26px; */
  min-height: 48px;
}

.select__floating-label {
  transition: 0.2s ease all;
  position: absolute;
  top: 12px;
  left: 12px;
}

.select__message {
  font-family: var(--font-family-base);
  color: var(--form-placeholder-color);
  font-size: 11px;
  line-height: 16px;
  display: block;
}

.select .arrow {
  position: absolute;
  right: 16px;
  top: 40%;
  width: 6px;
  height: 6px;
  border-left: 1.5px solid var(--form-placeholder-color);
  border-bottom: 1.5px solid var(--form-placeholder-color);
  transform: rotate(-45deg);
  /* transition-duration: 0.1s;
  transition-timing-function: cubic-bezier(0.59, 1.39, 0.37, 1.01); */
}

.select .expanded {
  transform: rotate(135deg);
  top: 48%;
}

.select .select__list {
  list-style-type: none;
  padding: 0 0 12px;
  margin: 0;
  font-size: 15px;
  position: absolute;
  left: -1px;
  z-index: 2;
  background: #fff;
  border: 1px solid var(--form-border-color);
  border-top: 0;
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;
  width: 100%;
  box-sizing: initial;
  max-height: 200px;
  overflow-y: auto;
}

.select .select__item {
  padding: 4px 12px;
  color: var(--form-text-color);

  &:hover {
    background-color: var(--grayscale-880-color);
  }
}

.select .select__item.select__item--disabled {
  opacity: 0.5;
  cursor: default;

  &:hover {
    background-color: initial;
  }
}

.select .current {
  font-weight: 700;
  color: #2e3c34;
}

.select .hidden {
  visibility: hidden;
}

.select .visible {
  visibility: visible;
}

.select__icon {
  position: absolute;
  left: 12px;
  top: 14px;
  width: 24px;
  height: 24px;
  color: var(--accent-100-color);
}

.select--chosen .selector {
  color: var(--form-text-color);
}

.select--open {
  z-index: 2;
}

.select--open .selector {
  border-bottom-left-radius: 0;
  border-bottom-right-radius: 0;
}

.select--open .selector:hover:not(:disabled),
.select--open .selector:focus {
  background-color: #fff;
}

.select--open .select__floating-label {
  color: var(--form-text-color);
}

.select--chosen .select__floating-label {
  color: var(--accent-100-color);
  position: absolute;
  font-size: 11px;
  top: 4px;
}

.select--success .selector {
  border-color: var(--form-success-color);
}

.select--success .select__floating-label {
  color: var(--form-success-color);
}

.select--success .select__list {
  border-color: var(--form-success-color);
}

.select--error .selector {
  border-color: var(--form-error-color);
}

.select--error .select__floating-label {
  color: var(--form-error-color);
}

.select--error .select__message {
  color: var(--form-error-color);
}

.select--error .select__list {
  border-color: var(--form-error-color);
}

.select--disable .selector {
  color: rgba(129, 140, 153, 0.4);
  cursor: default;

  &:hover {
    background-color: #fff;
  }
}

.select--disable .arrow {
  border-color: rgba(129, 140, 153, 0.4);
}

.select--disable .select__icon {
  color: rgba(129, 140, 153, 0.4);
}

.select--icon .selector {
  padding-left: 44px;
}

.select--icon .select__floating-label {
  left: 44px;
}

.select--icon .label {
  padding-left: 0;
}

.select--chosen .select__icon {
  color: var(--form-text-color);
}

.select .selector:hover .select__icon {
  color: var(--form-text-color);
}

.select--disable .selector:hover .select__icon {
  color: rgba(129, 140, 153, 0.4);
}

.select--withoutLabel {
  .select__floating-label {
    @media (--sm) {
      display: none;
    }
  }
  .label {
    @media (--sm) {
      padding: 12px;
    }
  }
}
</style>

<template>
  <div>
    <ul :class="['pagination', { disabled: disabled }]">
      <li ref="navPrev">
        <button
          :class="['pagination-navigation', { disabled: isValueFirst }]"
          v-on="isValueFirst ? {} : { click: goPrevious }"
        >
          <slot name="prev-icon">$prev</slot>
        </button>
      </li>

      <li v-for="(item, index) in items" :key="'paging_' + index">
        <span v-if="isNaN(Number(item))" class="pagination-more">{{
          item
        }}</span>

        <button
          v-else
          type="button"
          :class="['pagination-item', { active: item === value }]"
          @click="$emit('input', item)"
        >
          {{ item }}
        </button>
      </li>

      <li ref="navNext">
        <button
          type="button"
          :class="['pagination-navigation', { disabled: isValueLast }]"
          v-on="isValueLast ? {} : { click: goNext }"
        >
          <slot name="next-icon">$next</slot>
        </button>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: {
    value: {
      type: Number,
      required: true
    },
    length: {
      type: Number,
      default: 0,
      validator: (val) => val % 1 === 0
    },
    // when number of page buttons exceeds the parent container,
    // it will truncate the buttons automatically
    totalVisible: Number,
    disabled: Boolean,
    page: {
      type: Number,
      default: 1
    }
  },
  computed: {
    isValueLast() {
      return this.value >= this.length
    },

    isValueFirst() {
      return this.value <= 1
    },

    items() {
      const maxLength = this.totalVisible

      if (this.length <= maxLength || maxLength < 1) {
        return this.getRange(1, this.length)
      }

      const even = maxLength % 2 === 0 ? 1 : 0
      const left = Math.floor(maxLength / 2)
      const right = this.length - left + 1 + even

      if (this.value > left && this.value < right) {
        const start = this.value - left + 2
        const end = this.value + left - 2 - even

        return [1, '...', ...this.getRange(start, end), '...', this.length]
      } else if (this.value === left) {
        const end = this.value + left - 1 - even

        return [...this.getRange(1, end), '...', this.length]
      } else if (this.value === right) {
        const start = this.value - left + 1

        return [1, '...', ...this.getRange(start, this.length)]
      } else {
        return [
          ...this.getRange(1, left),
          '...',
          ...this.getRange(right, this.length)
        ]
      }
    }
  },
  methods: {
    goNext(e) {
      e.preventDefault()
      this.$emit('input', this.value + 1)
      this.$emit('next')
    },
    goPrevious(e) {
      e.preventDefault()
      this.$emit('input', this.value - 1)
      this.$emit('previous')
    },
    getRange(from, to) {
      const range = []

      from = from > 0 ? from : 1

      for (let i = from; i <= to; i++) {
        range.push(i)
      }

      return range
    }
  }
}
</script>

<style lang="postcss" scoped>
.pagination-item,
.pagination-navigation,
.pagination-more {
  margin: 0.3rem;
  font-size: 15px;
  color: var(--accent-150-color);
}

.pagination-item,
.pagination-navigation {
  background-color: transparent;
}

.pagination-item {
  padding: 8px;
  transition: all 0.2s;
  border: 1.5px solid transparent;

  &.active {
    color: var(--accent-0-color);
    font-weight: 600;
    border: 1.5px solid var(--accent-0-color);
    border-radius: 4px;
  }

  &:hover {
    color: var(--accent-100-color);
    border: 1.5px solid var(--accent-100-color);
    border-radius: 4px;
  }
}

.pagination-navigation {
  display: inline-flex;
  justify-content: center;
  align-items: center;
  text-decoration: none;

  &.disabled {
    opacity: 0.6;
    cursor: default;
  }

  &:hover:not(.disabled),
  &:focus:not(.disabled) {
    background-color: darken(white, 3%);
  }

  &:active:not(.disabled) {
    background-color: darken(white, 7%);
  }
}

.pagination-more {
  display: inline-flex;
  align-items: flex-end;
  justify-content: center;
}

.pagination {
  display: inline-flex;
  /* align-items: center; */
  /* justify-content: center; */
  max-width: 100%;
  width: 100%;
  margin: 0;
  padding-left: 0;
  list-style-type: none;
  padding: 20px 0;

  > li {
    align-items: center;
    display: flex;
  }

  button {
    outline: none;
    cursor: pointer;
  }

  button:not(.pagination-item) {
    border: 0;
  }

  &.disabled {
    pointer-events: none;
    opacity: 0.6;
  }
}

.container {
  margin: 0 auto;
  padding: 0 1rem;
  padding-bottom: 50px;
}

.controls {
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 40px 0;

  input {
    width: 60px;
    margin-left: 0.3rem;
    margin-right: 1.5rem;
  }
}

.stage-container {
  padding: 10px 0;
  background-color: white;
  border-radius: 6px;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1),
    0 2px 4px -1px rgba(0, 0, 0, 0.06);
}
</style>

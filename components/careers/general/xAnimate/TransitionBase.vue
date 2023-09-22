<template>
  <component
    :is="type"
    :tag="tag"
    :enter-active-class="enterCl"
    :leave-active-class="leaveCl"
    :move-class="moveCl"
    v-bind="$attrs"
    v-on="hooks"
  >
    <slot></slot>
  </component>
</template>

<script>
export default {
  props: {
    duration: {
      type: Number,
      default: 500
    },
    delay: {
      type: [Number, Object],
      default: 0
    },
    group: {
      type: Boolean,
      default: false
    },
    tag: {
      type: String,
      default: 'div'
    },
    /**
     *  Transform origin property https://tympanus.net/codrops/css_reference/transform-origin/.
     *  Can be specified with styles as well but it's shorter with this prop
     */
    origin: {
      type: String,
      default: ''
    },
    styles: {
      type: Object,
      default: () => {
        return {
          animationFillMode: 'both',
          animationTimingFunction: 'ease-in-out'
        }
      }
    }
  },
  data() {
    return {
      enterCl: '',
      leaveCl: '',
      moveCl: ''
    }
  },
  computed: {
    type() {
      return this.group ? 'transition-group' : 'transition'
    },
    hooks() {
      return {
        ...this.$listeners,
        beforeEnter: this.beforeEnter,
        afterEnter: this.cleanUpStyles,
        beforeLeave: this.beforeLeave,
        afterLeave: this.cleanUpStyles
      }
    }
  },
  methods: {
    beforeEnter(el) {
      const enterDuration = this.duration.enter
        ? this.duration.enter
        : this.duration
      el.style.animationDuration = `${enterDuration}ms`

      const enterDelay = this.delay.enter ? this.delay.enter : this.delay
      el.style.animationDelay = `${enterDelay}ms`

      this.setStyles(el)
    },
    beforeLeave(el) {
      const leaveDuration = this.duration.leave
        ? this.duration.leave
        : this.duration
      el.style.animationDuration = `${leaveDuration}ms`

      const leaveDelay = this.delay.leave ? this.delay.leave : this.delay
      el.style.animationDelay = `${leaveDelay}ms`

      this.setStyles(el)
    },
    setStyles(el) {
      Object.keys(this.styles).forEach((key) => {
        const styleValue = this.styles[key]
        if (styleValue) {
          el.style[key] = styleValue
        }
      })
    },
    cleanUpStyles(el) {
      Object.keys(this.styles).forEach((key) => {
        const styleValue = this.styles[key]
        if (styleValue) {
          el.style[key] = ''
        }
      })
      el.style.animationDuration = ''
      el.style.animationDelay = ''
    },
    setTransformOrigin(el) {
      if (this.origin) {
        el.style.transformOrigin = this.origin
      }
      return this
    }
  }
}
</script>

<script>
import SvgIcon from '../../svg-icon/SvgIcon.vue'

export const styleTypes = ['primary', 'secondary']
export default {
  name: 'XButton',

  components: {
    SvgIcon
  },

  props: {
    tag: {
      type: String,
      default: 'button'
    },
    type: {
      type: String,
      default: 'button'
    },
    label: {
      type: String,
      required: true
    },
    disabled: {
      type: Boolean,
      default: false
    },
    loading: {
      type: Boolean,
      default: false
    },
    iconID: {
      type: String
    },
    iconOnly: {
      type: Boolean,
      default: false
    },
    styleType: {
      type: String,
      default: 'primary',
      validator(value) {
        return styleTypes.includes(value)
      }
    }
  },
  computed: {
    classes() {
      return {
        xButton: true,
        [`xButton--${this.styleType}`]: this.styleType,
        'xButton--icon-only': this.iconOnly,
        'xButton--with-icon': this.iconID,
        'is-loading': this.loading
      }
    },
    isDisabled() {
      return this.disabled || this.loading
    },
    iconAttrs() {
      const attrs = {
        class: 'xButton__icon',
        props: {
          id: this.iconID
        }
      }
      if (this.iconOnly) {
        attrs.role = 'img'
        attrs.props.label = this.label
        attrs.props.iconWidth = 24
        attrs.props.iconHeight = 24
      } else {
        attrs['aria-hidden'] = true
      }

      return attrs
    }
  },
  methods: {
    onClick() {
      if (this.isDisabled && !this.$attrs.href) {
        return
      }
      this.$emit('click')
    }
  },
  render(createElement) {
    /*
		<template>
		<a v-if="$attrs.href" class="site-button">
			<span class="xButton__content"></span>
		</a>
		<button v-else :type="resultType" class="site-button">
			<span class="xButton__content"></span>
		</button>
		</template>
	*/

    const attrs = {}
    if (!this.$attrs.href) {
      attrs.type = this.type
      attrs.disabled = this.isDisabled
    } else {
      attrs.href = this.$attrs.href
      attrs.target = this.$attrs.target
      attrs.rel = this.$attrs.rel
    }
    return createElement(
      this.$attrs.href ? 'a' : this.tag,
      {
        attrs,
        class: this.classes,
        on: {
          click: this.onClick
        }
      },
      [
        this.iconID ? createElement(SvgIcon, this.iconAttrs) : false,
        createElement('span', { class: 'xButton__content' }, this.label)
      ]
    )
  }
}
</script>

<style lang="postcss" scoped>
.xButton {
  position: relative;

  display: inline-flex;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
  width: 100%;
  min-height: 48px;
  padding: 0 29px;
  overflow: hidden;

  font-weight: 600;
  font-size: var(--font-size-base);
  font-family: var(--font-family-base);
  /* line-height: 32px; */
  text-align: center;
  text-decoration: none;

  background: none;
  border: 0 none;
  border-radius: 4px;
  cursor: pointer;

  transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out,
    box-shadow 0.15s ease-in-out;
  &::before,
  &::after {
    box-sizing: border-box;
  }
  &::before {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: 0;

    display: block;

    transition: background-image 0.15s ease-in-out, box-shadow 0.15s ease-in-out;

    clip-path: var(--cutted-angle);

    content: '';
  }
  &:focus {
    outline: none;
    &::before {
      box-shadow: none;
    }
  }
  &:disabled {
    cursor: default;

    opacity: 0.4;
  }
  @media (--md) {
    width: auto;
  }
}

.xButton.is-loading {
  cursor: default;

  opacity: 0.4;
}

.xButton__content {
  z-index: 1;
}

.xButton--primary {
  color: var(--grayscale-1000-color);

  background-color: var(--primary-550-color);
  box-shadow: 0 10px 20px rgba(var(--primary-550--rgb), 0.2),
    0 2px 6px rgba(var(--primary-550--rgb), 0.12), 0 0 1px rgba(0, 0, 0, 0.04);
  &::before {
    background-image: linear-gradient(
        305deg,
        rgba(var(--primary-200-color--rgb), 0.24) 4%,
        var(--transparent) 16%
      ),
      linear-gradient(
        180deg,
        var(--primary-425-color) 0%,
        var(--primary-525-color) 100%
      );
    box-shadow: inset 0 -4.8px 9.6px rgba(var(--primary-200-color--rgb), 0.24),
      inset 0 4.8px 9.6px rgba(var(--accent-700-color--rgb), 0.41);
  }
  &:hover {
    background-color: var(--primary-450-color);
    &::before {
      background-image: linear-gradient(
          305deg,
          rgba(var(--primary-200-color--rgb), 0.4) 4%,
          var(--transparent) 16%
        ),
        linear-gradient(
          180deg,
          var(--primary-250-color) 0%,
          var(--primary-525-color) 100%
        );
      box-shadow: inset 0 -4.8px 9.6px rgba(var(--primary-200-color--rgb), 0.4),
        inset 0 4.8px 9.6px rgba(var(--accent-700-color--rgb), 0.6);
    }
  }
  &:focus {
    color: var(--accent-900-color);

    background-color: var(--primary-900-color);
    &::before {
      background-image: linear-gradient(
        180deg,
        var(--primary-525-color) 0%,
        var(--primary-525-color) 100%
      );
    }
  }
}

.xButton--secondary {
  color: var(--accent-100-color);

  background-color: var(--grayscale-500-color);
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.04), 0 2px 6px rgba(0, 0, 0, 0.04),
    0 0 1px rgba(0, 0, 0, 0.04);
  &::before {
    background-image: linear-gradient(
        305deg,
        rgba(255, 255, 255, 0.5) 4%,
        var(--transparent) 16%
      ),
      linear-gradient(
        180deg,
        var(--grayscale-900-color) 0%,
        var(--grayscale-800-color) 100%
      );
    box-shadow: inset 0 -4px 8px rgba(255, 255, 255, 0.5),
      inset 0 4px 8px rgba(255, 255, 255, 0.41);
  }
  &:hover {
    background-color: var(--grayscale-380-color);
    &::before {
      background-image: linear-gradient(
          305deg,
          rgba(255, 255, 255, 0.6) 4%,
          var(--transparent) 16%
        ),
        linear-gradient(
          180deg,
          var(--grayscale-800-color) 0%,
          var(--grayscale-480-color) 100%
        );
      box-shadow: inset 0 -4px 12px rgba(255, 255, 255, 0.6),
        inset 0 4px 16px rgba(255, 255, 255, 0.6);
    }
  }
  &:focus {
    color: var(--accent-150-color);

    background-color: var(--grayscale-340-color);
    &::before {
      background-image: linear-gradient(
        180deg,
        var(--grayscale-470-color) 0%,
        var(--grayscale-470-color) 100%
      );
    }
  }
}

.xButton--with-icon {
  white-space: nowrap;
}

.xButton--with-icon .xButton__icon {
  z-index: 0;

  margin-right: 12px;
  flex-shrink: 0;
}

/* .xButton--with-icon .xButton__content {
	display: none;

	@media (--wide) {
		display: block;
	}
} */

.xButton--icon-only {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 12px;
}

.xButton--icon-only .xButton__content {
  display: none;
}

.xButton--icon-only .xButton__icon {
  margin-right: 0;
}
</style>

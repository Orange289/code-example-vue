<template>
  <!-- to avoid screen shaking on windows -->
  <!-- <transition name="modal-fade"> -->
  <div
    v-if="isModalVisible"
    ref="modal"
    v-bind="$attrs"
    class="modal-backdrop"
    role="dialog"
    aria-labelledby="modalTitle"
    aria-modal="true"
    @click="close"
  >
    <xGrid>
      <xRow class="modal-row">
        <xCol cols="24" sm="16" md="14" lg="12">
          <div class="modal" @click.stop>
            <header id="modalTitle" class="modal__header">
              <slot name="header">
                <h1 v-if="header" class="modal__title underlined">
                  {{ header }}
                </h1>
              </slot>
              <button
                class="modal__close"
                type="button"
                aria-label="Close modal"
                @click="close"
              >
                <SvgIcon id="close" label="close" role="img" />
              </button>
            </header>

            <section class="modal__body">
              <slot :close="close"></slot>
            </section>
          </div>
        </xCol>
      </xRow>
    </xGrid>
  </div>
  <!-- </transition> -->
</template>

<script>
import { xGrid, xRow, xCol } from '../xGrid'
import SvgIcon from '../../svg-icon/SvgIcon.vue'

export default {
  name: 'Modal',
  modalController: null,
  components: {
    SvgIcon,
    xGrid,
    xRow,
    xCol
  },
  props: {
    header: {
      type: String,
      default: ''
    }
  },
  data() {
    return {
      isModalVisible: false,
      focusableElementsSelector:
        'a[href], area[href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), button:not([disabled]), [tabindex="0"]',
      focusableElements: []
    }
  },
  mounted() {
    document.addEventListener('keydown', this.handleKeydown)
  },
  beforeUnmount() {
    document.removeEventListener('keydown', this.handleKeydown)
  },
  methods: {
    close() {
      this.$emit('close')
      this.$options.modalController.resolve(true)
      this.isModalVisible = false
      this.$nextTick(() => {
        if (document.querySelector('.popup-open')) {
          document.body.classList.remove('popup-open')
        }
      })
    },
    show() {
      // for control modal from out with 'ok' and 'fail'
      // not in data cause they are not reactive
      let resolve
      let reject
      // eslint-disable-next-line promise/param-names
      const modalPromise = new Promise((ok, fail) => {
        resolve = ok
        reject = fail
      })

      this.$options.modalController = { resolve, reject }
      this.isModalVisible = true
      this.onShow()

      return modalPromise
    },
    onShow() {
      this.$nextTick(() => {
        this.focusableElements = this.getFocusableElements()
        if (!this.focusableElements.length) return
        const firstFocusableElement = this.focusableElements[0]
        if (firstFocusableElement) {
          firstFocusableElement.focus()
          firstFocusableElement.blur()
        }
      })
    },
    handleKeydown(e) {
      if (!this.isModalVisible) return e
      if (e.key === 'Escape') {
        this.close()
      } else if (e.key === 'Tab') {
        this.focusHandler(e)
      }
    },
    getFocusableElements() {
      if (!process.browser) return []
      const { modal } = this.$refs
      const elements = modal.querySelectorAll(this.focusableElementsSelector)
      // return only visible elements (e.g. display !== none)
      return Array.from(elements).filter(
        (element) => element.offsetParent !== null
      )
    },
    focusHandler(e) {
      const { activeElement } = document
      if (!this.focusableElements.length) return
      const firstFocusableElement = this.focusableElements[0]
      const lastFocusedElement = this.focusableElements[
        this.focusableElements.length - 1
      ]
      let element
      if (activeElement === firstFocusableElement && e.shiftKey) {
        element = lastFocusedElement
      } else if (activeElement === lastFocusedElement && !e.shiftKey) {
        element = firstFocusableElement
      }
      if (element) {
        e.preventDefault()
        element.focus()
      }
    }
  }
}
</script>

<style lang="postcss" scoped>
.modal-row {
  justify-content: center;
}
.modal-backdrop {
  background-color: var(--grayscale-475-color);
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 100;
  isolation: isolate;
}
.modal {
  background-color: var(--grayscale-1000-color);
  position: relative;
  overflow-x: auto;
  display: flex;
  flex-direction: column;
  padding: 50px 40px 65px;

  @media (--md) {
    padding: 50px 40px 65px;
  }

  @media (--lg) {
    padding: 50px 50px 65px;
  }

  @media (--xl) {
    padding: 50px 65px 65px;
  }
}
.modal__title {
  margin-top: 0;
}
.modal__close {
  color: var(--grayscale-475-color);
  position: absolute;
  right: 20px;
  top: 20px;
  padding: 0;
  margin: 0;
  border: none;
  background: none;

  &:hover {
    cursor: pointer;
  }
}

.modal-fade-enter-active,
.modal-fade-leave-active {
  transition-property: opacity;
  transition-delay: 0.15s;
  transition-timing-function: ease-in-out;
  transition-duration: 0.5s;
}

.modal-fade-enter,
.modal-fade-leave-to {
  opacity: 0;
}
</style>

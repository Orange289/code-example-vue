<template>
  <div
    :class="['upload', { 'upload--mini': mini, 'upload--error': errorMessage }]"
  >
    <input
      :id="`upload-${name}`"
      ref="input"
      type="file"
      :name="name"
      tabindex="-1"
      @change="onFileChange"
    />
    <xButton
      tabindex="0"
      tag="label"
      :for="`upload-${name}`"
      class="upload__button"
      style-type="secondary"
      :label="label"
      icon-i-d="sprite-paperclip"
      :icon-only="mini"
    >
    </xButton>
    <!-- <label class="upload__button xButton xButton--secondary xButton--with-icon">
      <SvgIcon
        id="sprite-paperclip"
        class="upload__icon upload__icon--paperclip xButton__icon"
        role="img"
      />
      <span v-if="!mini" class="xButton__content">
        {{ label }}
      </span>
    </label> -->
    <div v-if="fileName" class="upload__filename-wrap">
      <div class="upload__filename">{{ fileName }}</div>
      <div class="upload__close" @click="onCancel">
        <SvgIcon
          id="sprite-close"
          class="upload__icon upload__icon--cancel"
          role="img"
        />
      </div>
    </div>
    <div v-if="errorMessage" class="upload__error">
      {{ errorMessage }}
    </div>
    <div v-if="!fileName" class="upload__drag">
      or
      <span>
        <SvgIcon
          id="sprite-download"
          class="upload__icon upload__icon--drag"
          role="img"
        />
        Drag-n-drop
      </span>
    </div>
    <div class="upload__info-mobile">{{ infoMessage }}</div>
    <div v-if="infoMessage" ref="uploadInfo" class="upload__info">
      <button
        type="button"
        class="upload__icon-container"
        @click="showInfo = !showInfo"
      >
        <SvgIcon
          id="sprite-info"
          class="upload__icon upload__icon--info"
          role="img"
        />
      </button>
      <div
        v-if="showInfo"
        v-closable="{ exclude: ['uploadInfo'], handler: 'onInfoClose' }"
        class="upload__info-message"
      >
        {{ infoMessage }}
      </div>
    </div>
  </div>
</template>

<script>
import Vue from 'vue'
import xButton from '../xButton/xButton.vue'
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
  name: 'XUpload',
  components: {
    SvgIcon,
    xButton
  },
  props: {
    label: {
      type: String,
      default: ''
    },
    name: {
      type: String,
      required: true
    },
    mini: {
      type: Boolean,
      default: false
    },
    errorMessage: {
      type: String,
      default: null
    },
    infoMessage: {
      type: String,
      default: null
    }
  },
  data() {
    return {
      fileName: '',
      showInfo: false
    }
  },
  methods: {
    onFileChange(e) {
      const input = e.srcElement

      if (input.files.length) {
        this.fileName = input.files[0].name
      }

      this.$emit('input', this.fileName)
    },
    onCancel() {
      this.fileName = ''
      this.$refs.input.value = ''
      this.$emit('input', this.fileName)
      // this.$refs.input.type = 'file'
    },
    onInfoClose() {
      this.showInfo = false
    }
  }
}
</script>

<style lang="postcss" scoped>
.upload {
  position: relative;

  display: flex;
  align-items: center;
  flex-direction: column;

  transition: background-color 0.2s;

  @media (--md) {
    padding: 8px;
    border: 1px dashed var(--grayscale-850-color);
    border-radius: 4px;
    background-color: #ffffff;

    &:hover {
      background-color: var(--grayscale-950-color);
    }
  }

  @media (--md) {
    flex-direction: row;
  }
}

.upload input {
  position: absolute;
  top: 0;
  left: 0;

  width: 100%;
  height: 100%;

  opacity: 0;
}

.upload ::v-deep .xButton .xButton__icon {
  display: none;
  @media (--md) {
    display: block;
  }
}

.upload ::v-deep .xButton {
  .xButton__icon {
    @media (--md) {
      margin-right: 0;
    }
    @media (--lg) {
      margin-right: 6px;
    }
  }
  .xButton__content {
    @media (--md) {
      display: none;
    }
    @media (--xl) {
      display: block;
    }
  }
}

.upload .upload__button {
  flex-shrink: 0;
  @media (--md) {
    font-size: 12px;
    padding: 0 12.5px 0;
    min-height: 32px;
    margin-right: 24px;
  }
}

.upload__button svg {
  color: var(--accent-100-color);
}

.upload__drag {
  display: none;

  color: var(--accent-150-color);
  font-size: 11px;
  font-family: var(--font-family-base);

  @media (--md) {
    white-space: nowrap;
    flex-shrink: 0;
    display: flex;
    align-items: center;
  }
}

.upload__drag span {
  display: flex;
  align-items: center;
  margin-left: 26px;

  color: var(--accent-100-color);
  font-size: 12px;
}

.upload__drag span svg {
  margin-right: 10px;
}

.upload__filename-wrap {
  display: flex;

  color: var(--accent-100-color);
  font-size: 14px;
  padding-top: 10px;
  overflow: hidden;

  @media (--md) {
    font-size: 12px;
    padding-top: 0;
    padding-right: 10px;
  }
}

.upload__filename {
  display: inline-flex;
  flex-shrink: 1;
  flex-grow: 0;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
}

.upload__close {
  flex-shrink: 0;
}

/*.upload__icon.upload__icon--paperclip*/
.upload ::v-deep .xButton__icon {
  margin-right: 6px;
}

.upload__icon--cancel {
  position: relative;
  z-index: 2;
  width: 10px;
  height: 10px;

  margin-left: 8px;

  cursor: pointer;
  @media (--md) {
    width: 8px;
    height: 8px;
  }
}

.upload__info-mobile {
  color: var(--form-placeholder-color);
  flex-shrink: 0;

  @media (--md) {
    display: none;
  }
}

.upload__info {
  flex-shrink: 0;
  position: relative;
  display: none;

  margin-left: auto;

  color: var(--form-placeholder-color);

  cursor: pointer;

  @media (--md) {
    display: inline-flex; /* for vertical aligmennt */
  }
}

.upload__info-message {
  position: absolute;
  top: calc(100% + 10px);
  right: -10px;

  width: 203px;
  padding: 8px;

  font-size: 11px;
  line-height: 16px;
  text-align: center;

  background-color: #ffffff;
  border-radius: 4px;
  box-shadow: 0 24px 32px rgba(0, 0, 0, 0.04), 0 16px 24px rgba(0, 0, 0, 0.04),
    0 4px 8px rgba(0, 0, 0, 0.04), 0 0 1px rgba(0, 0, 0, 0.04);
  &::before {
    content: '';

    position: absolute;
    top: -8px;
    right: 12px;

    width: 0;
    height: 0;

    border-width: 0 4px 8px 4px;
    border-style: solid;
    border-color: transparent transparent #ffffff transparent;
  }
}

.upload__icon-container {
  line-height: 0;
  padding: 0;
  margin: 0;
  border: none;
  background: none;
}

.upload__icon-container {
  &:focus,
  &:focus {
    background-color: var(--grayscale-950-color);
  }
}

.upload ::v-deep .upload--error {
  background-color: var(--grayscale-950-color);
  border-color: var(--form--error-lightest-color);
}

.upload__error {
  /* color: var(--form-error-lighter-color); */
  color: var(--form-error-color);
  font-size: 12px;
  padding-right: 10px;
  line-height: 1;
}

.upload--error .upload__info svg {
  color: var(--primary-500-color);
}

.upload--mini .upload__button {
  margin-right: 16px;
  padding: 0 8px 0;
}

/* .upload--mini .upload__icon.upload__icon--paperclip { */
.upload--mini ::v-deep .xButton__icon {
  margin-right: 0;
}

.upload--mini .upload__drag span {
  margin-left: 18px;
}
</style>

<template>
  <form class="xForm" action="" method="POST" enctype="multipart/form-data">
    <slot name="xForm__fields">
      <xGrid class="xForm__fields">
        <xRow class="xForm__fields-wrap">
          <div v-if="success" class="xForm__success">
            {{ successText }}
          </div>

          <template v-else>
            <template v-for="field in validFields">
              <xCol
                v-if="!field.inEnd"
                :key="field.name"
                class="xForm__field-wrap"
                v-bind="field.cols"
                :class="field.class"
              >
                <component
                  :is="field['data-type']"
                  v-bind="fieldWithoutExtraParams(field)"
                  :error="$v.formData[field.name].$error"
                  :error-message="getErrorMessage(field.name)"
                  @input="onInput(field.name, $event)"
                  v-on="field.actions"
                ></component>
              </xCol>
            </template>

            <slot name="after_fields"></slot>

            <template v-for="field in validFields">
              <xCol
                v-if="field.inEnd"
                :key="field.name"
                class="xForm__field-wrap"
                v-bind="field.cols"
                :class="field.class"
              >
                <component
                  :is="field['data-type']"
                  v-bind="fieldWithoutExtraParams(field)"
                  :error="$v.formData[field.name].$error"
                  :error-message="getErrorMessage(field.name)"
                  @input="onInput(field.name, $event)"
                  v-on="field.actions"
                ></component>
              </xCol>
            </template>

            <slot name="submit_wrap">
              <xCol v-bind="submitCols" class="xForm__submit_wrap">
                <xButton
                  type="submit"
                  :label="buttonText"
                  :disabled="isSubmitDisabled"
                  :style-type="styleType === 'light' ? 'secondary' : 'primary'"
                  @click.native="onSubmitWrap"
                ></xButton>
              </xCol>
            </slot>

            <div v-if="globalErrorData" class="xForm__globalError">
              {{ globalErrorData }}
            </div>
          </template>
        </xRow>
      </xGrid>
    </slot>
  </form>
</template>

<script>
import { validationMixin } from 'vuelidate'
import { required, email } from 'vuelidate/lib/validators'
import xButton from '../xButton/xButton'
import xInput from '../xInput/xInput'
import xSelect from '../xSelect/xSelect'
import xUpload from '../xUpload/xUpload'
import { xGrid, xRow, xCol } from '../xGrid'

export default {
  name: 'XForm',
  components: {
    xButton,
    xInput,
    xSelect,
    xUpload,
    xGrid,
    xRow,
    xCol
  },
  mixins: [validationMixin],
  props: {
    styleType: {
      type: String,
      default: () => 'dark'
    },
    buttonText: {
      type: String,
      default: () => 'Submit'
    },
    fields: {
      type: Array,
      default: () => []
    },
    onSubmit: {
      type: Function,
      default: () => {
        return () => {}
      }
    },
    requiredErrorText: {
      type: String,
      default: () => 'Please fill out this field'
    },
    requiredFileErrorText: {
      type: String,
      default: () => `Please select a\u00A0file`
    },
    requiredValidEmailText: {
      type: String,
      default: () => 'Please enter valid email'
    },
    invalidFileTypeText: {
      type: String,
      default: () => 'Invalid file type'
    },
    successText: {
      type: String,
      default: () =>
        `Thank you for applying.\n\nOur team is\u00A0currently reviewing all applications and planning to\u00A0schedule interviews shortly.\n\nIf you are among qualified candidates, you will receive an\u00A0email from one of\u00A0our Talent Aquisition Managers to\u00A0schedule an\u00A0interview.\n\nThank you, again, for your interest and time.`
    },
    novalide: {
      type: Boolean,
      default: false
    },
    submitDisabled: {
      type: Boolean,
      default: false
    },
    success: {
      type: Boolean,
      default: false
    },
    globalError: {
      type: String,
      default: () => ''
    },
    submitCols: {
      type: Object,
      default: () => {}
    }
  },
  data() {
    return {
      formData: {},
      submitDisabledData: false,
      globalErrorData: this.globalError
    }
  },
  computed: {
    isSubmitDisabled() {
      return this.submitDisabled && this.submitDisabledData
    },
    validFields() {
      return this.fields.filter((field) => {
        return this.validateField(field)
      })
    },
    validationsFields() {
      const validator = { formData: {} }
      this.validFields.forEach((field) => {
        validator.formData[`${field.name}`] = {}

        if (field.type === 'email') {
          validator.formData[`${field.name}`] = {
            email,
            ...validator.formData[`${field.name}`]
          }
        }

        if (field.required) {
          validator.formData[`${field.name}`] = {
            required,
            ...validator.formData[`${field.name}`]
          }
        }

        if (field.valideFileType) {
          validator.formData[`${field.name}`] = {
            valideFileType: field.valideFileType,
            ...validator.formData[`${field.name}`]
          }
        }
      })

      return validator
    }
  },
  watch: {
    globalError(newVal) {
      this.globalErrorData = newVal
    }
  },
  validations() {
    return this.validationsFields
  },
  methods: {
    getErrorMessage(fieldName) {
      if (this.$v.formData[fieldName].$error) {
        if (
          'email' in this.$v.formData[fieldName] &&
          this.$v.formData[fieldName].$invalid
        ) {
          return this.requiredValidEmailText
        }
        if (
          this.$v.formData[fieldName].$model &&
          this.$v.formData[fieldName].$model.length > 0 &&
          'valideFileType' in this.$v.formData[fieldName] &&
          !this.$v.formData[fieldName].valideFileType &&
          this.$v.formData[fieldName].$invalid
        ) {
          return this.invalidFileTypeText
        }
        if (
          'valideFileType' in this.$v.formData[fieldName] &&
          !this.$v.formData[fieldName].$model &&
          this.validationsFields.formData[fieldName].required
        ) {
          return this.requiredFileErrorText
        }
        if (this.validationsFields.formData[fieldName].required) {
          return this.requiredErrorText
        }
      } else {
        return ''
      }
    },
    validateField(field) {
      return ['xInput', 'xSelect', 'xUpload'].includes(field['data-type'])
    },
    fieldWithoutExtraParams(field) {
      const fieldCopy = { ...field }
      if (fieldCopy.cols) {
        delete fieldCopy.cols
      }
      if (fieldCopy.valideFileType) {
        delete fieldCopy.valideFileType
      }
      if (fieldCopy.inEnd) {
        delete fieldCopy.inEnd
      }
      return fieldCopy
    },
    onSubmitWrap(e) {
      this.submitDisabledData = true
      this.globalErrorData = ''

      if (!this.novalide) {
        this.$v.$touch()

        if (this.$v.$invalid) {
          this.submitDisabledData = false
          e.preventDefault()
          e.stopPropagation()
          return false
        } else {
          this.submitDisabledData = true
        }
      }

      if (this.onSubmit) {
        return this.onSubmit(e, arguments)
      }
    },
    onInput(fieldName, val) {
      this.$v.formData[fieldName].$reset()
      this.$set(this.formData, fieldName, val)
      this.$v.formData[fieldName].$touch()

      this.$store.commit('careers/setSubmitData', this.formData)
    }
  }
}
</script>

<style lang="postcss" scoped>
.xForm__field {
  margin-bottom: 24px;
}

.xForm__submit_wrap {
  width: 100%;
  margin-top: 6px;

  @media (--sm) {
    margin-top: 0px;
    flex-grow: 0;
    width: auto;
  }
  @media (--md) {
    flex-grow: 1;
    margin-top: 0px;
  }
}

.xForm__success,
.xForm__globalError {
  width: 100%;
  text-align: center;
  z-index: 1;
  font-size: 20px;

  @media (--sm) {
    order: 1;
  }
}

.xForm__success {
  text-align: left;
  color: var(--accent-0-color);
  white-space: pre-line;
}

.xForm__globalError {
  color: var(--form-error-color);
}

.xForm__field-wrap {
  flex-basis: auto;
}
</style>

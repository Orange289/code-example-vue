<template>
  <xForm
    ref="submitcv__form"
    class="submitcv__form"
    action="/workable/"
    :fields="SubmitCVFields"
    :success="success"
    :global-error="isDefaultGlobalError"
    :submit-disabled="submitDisabled"
    :on-submit="onSubmit"
    :submit-cols="submitCols"
  >
    <template #after_fields>
      <xCol cols="4" md="24" class="xForm__field-wrap">
        <FunctionSelector
          :placeholder="`Select a\u00A0Function`"
          :list="departments.slice(1, departments.length)"
        ></FunctionSelector>
      </xCol>
    </template>
  </xForm>
</template>

<script>
import { mapGetters, mapState } from 'vuex'
import { xCol } from '~/components/careers/general/xGrid'
import xForm from '~/components/careers/general/xForm/xForm.vue'
import FunctionSelector from '~/components/careers/careers/FunctionSelector.vue'

export default {
  name: 'SubmitCVForm',
  components: {
    xCol,
    xForm,
    FunctionSelector
  },
  data() {
    return {
      SubmitCVFields: [
        {
          'data-type': 'xInput',
          placeholder: 'First Name & Last Name',
          name: 'name',
          id: 'name',
          validate: true,
          required: true,
          value: this.$store.state.careers.submitData.name
        },
        {
          'data-type': 'xInput',
          placeholder: 'E-mail',
          name: 'email',
          id: 'email',
          validate: true,
          type: 'email',
          required: true,
          cols: {
            md: 12
          },
          value: this.$store.state.careers.submitData.email
        },
        {
          'data-type': 'xInput',
          placeholder: 'Phone',
          name: 'phone',
          id: 'phone',
          validate: true,
          required: true,
          cols: {
            md: 12
          },
          value: this.$store.state.careers.submitData.phone
        },
        {
          inEnd: true,
          'data-type': 'xUpload',
          placeholder: 'Submit your CV',
          name: 'file',
          id: 'cv',
          label: 'Submit your CV',
          infoMessage: 'Allowed file types: pdf, doc, docx, odt, rtf',
          required: true,
          valideFileType: (value) => {
            if (!value) return false
            return ['pdf', 'doc', 'docx', 'odt', 'rtf'].includes(
              value.split('.')[1]
            )
          },
          cols: {
            md: 17,
            lg: 17
          }
        }
      ],
      nameValue: '',
      success: false,
      globalErrorDefaultText:
        'There are some issues with CV\u00A0submission.\nPlease try again later or\u00A0contact\u00A0us in\u00A0other channels.',
      globalErrorText: '',
      globalError: false,
      submitDisabled: false,
      fileProblemText: 'There are some problems with upload file.',
      fileTooLargeText:
        'The file is too large, please upload the file under 5MB.',
      submitCols: {
        md: 7,
        xl: 7
      }
    }
  },
  computed: {
    ...mapGetters('careers', ['department', 'location', 'departments']),
    ...mapState('careers', ['allFunctionsDefault', 'allLocationsDefault']),
    isDefaultGlobalError() {
      if (this.globalError) {
        if (this.globalErrorText) {
          return this.globalErrorText
        } else {
          return this.globalErrorDefaultText
        }
      }

      return ''
    }
  },
  methods: {
    getCookie(name) {
      let cookieValue = ''
      if (document.cookie && document.cookie !== '') {
        const cookies = document.cookie.split(';')
        for (let i = 0; i < cookies.length; i++) {
          const cookie = cookies[i].trim()
          // Does this cookie string begin with the name we want?
          if (cookie.substring(0, name.length + 1) === name + '=') {
            cookieValue = decodeURIComponent(cookie.substring(name.length + 1))
            break
          }
        }
      }
      return cookieValue
    },
    // next code can be used for workable api
    // getFileData(value) {
    //   return new Promise((resolve, reject) => {
    //     if (!value) {
    //       reject(new Error('File is needed'))
    //     }
    //     const reader = new FileReader()
    //     reader.onload = function() {
    //       const fileData = {}
    //       fileData.name = value.name
    //       fileData.data = reader.result.split(',')[1]
    //       resolve(fileData)
    //     }
    //     reader.onerror = function() {
    //       reject(console.error(this.fileProblemText))
    //     }
    //     reader.readAsDataURL(value)
    //   })
    // },
    // next code can be used for workable api
    // async makedata(form) {]
    // const bodyFormData = new FormData(form)
    // const data = {}
    // // bodyFormData.forEach(async (value, key) => {
    // for (const field of bodyFormData.entries()) {
    //   if (field[0] === 'file' && field[1]) {
    //     await this.getFileData(field[1]).then((res) => {
    //       data[field[0]] = res
    //     })
    //   } else {
    //     data[field[0]] = field[1]
    //   }
    // }
    // return data
    // },
    onSubmit(e) {
      e.preventDefault()
      const form = this.$refs.submitcv__form.$el
      const csrftoken = this.getCookie('csrftoken')
      this.submitDisabled = true
      const formData = new FormData(form)

      this.globalError = false
      this.globalErrorText = ''

      if (this.department !== this.allFunctionsDefault) {
        formData.append('function_name', this.department)
      }

      if (this.location !== this.allLocationsDefault) {
        formData.append('location_name', this.location)
      }

      // this.makedata(form).then((data) => {}) // can be used for workable api
      fetch('/submit_cv/', {
        method: 'POST',
        headers: {
          'X-CSRFToken': csrftoken
          // 'Content-Type': 'application/json' // can be used for workable api
        },
        credentials: 'same-origin',
        body: formData
      })
        .then((response) => {
          // console.error({ response })
          if (response.status === 413) {
            this.globalError = true
            this.globalErrorText = this.fileTooLargeText
            return false
          } else if (response.status === 500) {
            this.globalError = true
            return false
          } else if (response.status === 201 && response.ok === true) {
            this.success = true
          } else {
            this.globalError = true
          }

          const res = response.json()

          if (res.error) {
            this.globalError = res.error
            console.error({ res })
          }
        })
        .catch((error) => {
          this.globalError = true
          console.error({ error })
        })
        .finally(() => {
          this.submitDisabled = false
        })

      return false
    }
  }
}
</script>

<style lang="postcss" scoped>
.submitcv__form ::v-deep {
  .xForm__submit_wrap {
    @media (--sm) {
      text-align: right;
    }
  }
}
</style>

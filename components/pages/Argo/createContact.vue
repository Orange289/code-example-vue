<script>
import { validationMixin } from 'vuelidate'
import { requiredIf } from 'vuelidate/lib/validators'

export default {
  mixins: [validationMixin],
  data() {
    return {
      dataFields: [
        {
          label: this.$t(
            'exante.pages.funds.argo.signup.form.fields.first_name.label'
          ),
          name: 'first_name',
          maxlength: 255,
          required: true,
          value: ''
        },
        {
          label: this.$t(
            'exante.pages.funds.argo.signup.form.fields.last_name.label'
          ),
          name: 'last_name',
          maxlength: 255,
          required: true,
          value: ''
        },
        {
          label: this.$t(
            'exante.pages.funds.argo.signup.form.fields.phone.label'
          ),
          name: 'phone',
          maxlength: 20,
          required: true,
          value: ''
        },
        {
          label: this.$t(
            'exante.pages.funds.argo.signup.form.fields.email.label'
          ),
          name: 'email',
          type: 'email',
          maxlength: 255,
          required: true,
          value: ''
        },
        {
          label: this.$t(
            'exante.pages.funds.argo.signup.form.fields.comment.label'
          ),
          name: 'comment',
          placeholder: '',
          value: ''
        }
      ],
      action: '/clientsarea/contact_us_form/',
      response: null,
      isPending: false,
      isError: false,
      isSuccess: false,
      permission: true,
      qualified_investor: null,
      formErrorTextDefaultText: this.$t(
        'exante.pages.funds.argo.signup.form.formErrorTextDefaultText'
      ),
      formErrorText: this.$t(
        'exante.pages.funds.argo.signup.form.formErrorText'
      )
    }
  },
  methods: {
    getCookie(name) {
      const matches = document.cookie.match(
        new RegExp(
          '(?:^|; )' +
            name.replace(/([.$?*|{}()[\]\\/+^])/g, '\\$1') +
            '=([^;]*)'
        )
      )
      return matches ? decodeURIComponent(matches[1]) : undefined
    },
    getData() {
      const data = new FormData()
      let commentText = ''

      if (this.qualified_investor !== null) {
        commentText = `Qualified Investor: ${
          this.$v.qualified_investor.$model ? 'Yes' : 'No'
        }`
      }

      this.dataFields.forEach((field) => {
        if (field.value) {
          if (field.name !== 'comment') {
            data.append(field.name, field.value)
          } else {
            if (this.qualified_investor !== null) {
              commentText += `
`
            }
            commentText += `AUM, USD: ${field.value}
`
            commentText += `From Link: ${document.location.href}`
          }
        }
      })

      if (commentText !== '') {
        data.append('comment', commentText)
      }

      if (this.getCookie('csrftoken')) {
        data.append('csrfmiddlewaretoken', this.getCookie('csrftoken'))
      }
      return data
    },

    request(url) {
      const _self = this
      const action = url || _self.action

      if (_self.getCookie('csrftoken')) {
        _self.$axios.setHeader('X-CSRFToken', _self.getCookie('csrftoken'))
      }
      this.$axios.setBaseURL('/')

      return _self.$axios.$request({
        method: 'post',
        url: action,
        data: _self.getData(),
        credentials: true,
        headers: {
          common: {
            'Content-Type': 'application/x-www-form-urlencoded'
          }
        }
      })
    },

    submitError(formErrorText) {
      if (!this.$v.$invalid) {
        formErrorText
          ? (this.formErrorText = formErrorText)
          : (this.formErrorText = this.formErrorTextDefaultText)
        this.isError = true
        this.isPending = false
      }

      return false
    },

    submit(e) {
      this.$emit('submit', e)
      const _self = this

      this.$v.$touch()

      if (this.$v.$invalid) {
        return _self.submitError()
      } else {
        // do your submit logic here
        this.isPending = true

        const req = this.request()
        req
          .then((response) => {
            this.response = response
            this.isPending = false
            this.isError = false
            this.isSuccess = true
          })
          .catch((error) => {
            this.response = error

            if (error.status === 403) {
              return _self.submitError(
                'Too much requests. Please, wait for a few minutes and try again.'
              )
            } else {
              return _self.submitError()
            }
          })
      }
    }
  },

  validations: {
    dataFields: {
      $each: {
        value: {
          required: requiredIf(function() {
            return this.required === true
          })
        }
      }
    },
    permission: {
      checked(val) {
        return val
      }
    },
    qualified_investor: {}
  }
}
</script>

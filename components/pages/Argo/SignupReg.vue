<template>
  <section class="argo-signup">
    <div
      class="become-client__stage--after argo-signup__top"
      style="display: none"
    >
      <Container>
        <div class="argo-signup__head argo-signup__head--success">
          <h3 v-html="$t('exante.pages.funds.argo.signup.success')"></h3>
          <span class="argo-signup__success-ico"></span>
        </div>
      </Container>
    </div>
    <div class="become-client__stage--before">
      <div class="argo-signup__top">
        <Container>
          <div class="argo-signup__head">
            <h3 v-html="$t('exante.pages.funds.argo.signup.header')"></h3>
          </div>
        </Container>
      </div>
      <form
        id="argo-reg"
        class="argo-signup__form js-become-client-main"
        action="javascript:void(0);"
        method="POST"
      >
        <input name="current_locale" type="hidden" value="en" />
        <Container>
          <div class="argo-signup__fields fields">
            <ArgoInput
              :class="`argo-signup__field argo-signup__field--${item.name}`"
              v-for="(item, index) in fields"
              :key="index"
              :field="item"
            />
            <div class="argo-signup__field argo-signup__field--radio">
              <span
                v-html="$t('exante.pages.funds.argo.signup.form.radio.header')"
                class="argo-signup__label"
              ></span>
              <div class="argo-signup__radios">
                <ArgoRadio
                  v-for="(item, index) in $t(
                    'exante.pages.funds.argo.signup.form.radio.items'
                  )"
                  :key="index"
                  :field="item"
                  name="qualified"
                >
                </ArgoRadio>
              </div>
            </div>
          </div>
          <div class="argo-signup__bottom">
            <ArgoCheckbox class="argo-signup__checkbox" name="permission">
              <template slot="value"
                ><span
                  v-html="$t('exante.pages.funds.argo.signup.form.checkbox')"
                ></span
              ></template>
            </ArgoCheckbox>
            <ArgoButton class="argo-signup__btn" type="submit">
              {{ $t('exante.pages.funds.argo.signup.form.send') }}
            </ArgoButton>
          </div>
        </Container>
      </form>
    </div>
  </section>
</template>

<script>
import Container from '~/components/general/Container'
import ArgoInput from '~/components/general/argo/ArgoInput.vue'
import ArgoCheckbox from '~/components/general/argo/ArgoCheckbox.vue'
import ArgoRadio from '~/components/general/argo/ArgoRadio.vue'
import ArgoButton from '~/components/general/argo/ArgoButton.vue'

export default {
  components: {
    Container,
    ArgoInput,
    ArgoCheckbox,
    ArgoRadio,
    ArgoButton
  },
  data() {
    return {
      fields: [
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
      ]
    }
  },
  mounted() {
    const _self = this
    if (typeof $ !== 'undefined') {
      // eslint-disable-next-line no-undef
      $(document).ajaxSend(function(event, jqxhr, settings) {
        const qualified = _self.$el.querySelector('[name="qualified"]:checked')

        if (qualified !== null) {
          const qualifiedString = encodeURIComponent(
            `qualified - ${
              qualified.value === 'true' ? 'Yes' : 'No'
            }. AUM, USD - `
          )

          if (
            settings.data &&
            typeof settings.data === 'string' &&
            settings.data.indexOf('comment=') > 0
          ) {
            const insertPosition =
              settings.data.indexOf('comment=') + 'comment='.length

            settings.data = [
              settings.data.slice(0, insertPosition),
              qualifiedString,
              settings.data.slice(insertPosition)
            ].join('')
          } else {
            settings.data += '&comment=' + qualifiedString
          }
        }
      })
    }
  }
}
</script>

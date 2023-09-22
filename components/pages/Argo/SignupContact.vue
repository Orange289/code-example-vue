<template>
  <section :class="['argo-signup', { 'argo-signup--success': isSuccess }]">
    <div class="argo-signup__top">
      <!-- @click="isVisible = !isVisible" -->
      <Container>
        <transition name="appear">
          <div
            v-if="isSuccess"
            class="argo-signup__head argo-signup__head--success"
          >
            <h3 v-html="$t('exante.pages.funds.argo.signup.success')"></h3>
            <span class="argo-signup__success-ico"></span>
          </div>
          <div v-else class="argo-signup__head">
            <h3 v-html="$t('exante.pages.funds.argo.signup.header')"></h3>
            <!-- <svg-icon name="funds/arrow" class="argo-button__arrow"></svg-icon> -->
          </div>
        </transition>
      </Container>
    </div>
    <transition name="appear">
      <form
        v-if="!isSuccess"
        @submit.prevent="submit"
        class="argo-signup__form"
        action="/clientsarea/contact_us_form/"
        method="POST"
      >
        <Container>
          <div class="argo-signup__fields">
            <argo-input
              :class="
                `argo-signup__field argo-signup__field--${dataFields[index].name}`
              "
              v-for="(item, index) in $v.dataFields.$each.$iter"
              :key="index"
              :field="dataFields[index]"
              :vField="item"
            />
            <div class="argo-signup__field argo-signup__field--radio">
              <span
                v-html="$t('exante.pages.funds.argo.signup.form.radio.header')"
                class="argo-signup__label"
              ></span>
              <div class="argo-signup__radios">
                <argo-radio
                  v-for="(item, index) in $t(
                    'exante.pages.funds.argo.signup.form.radio.items'
                  )"
                  :key="index"
                  :field="item"
                  :vField="$v.qualified_investor"
                  name="qualified_investor"
                >
                </argo-radio>
              </div>
            </div>
          </div>
          <div class="argo-signup__bottom">
            <argo-checkbox
              :vField="$v.permission"
              class="argo-signup__checkbox"
              name="permission"
            >
              <template slot="value">
                <span
                  v-html="$t('exante.pages.funds.argo.signup.form.checkbox')"
                ></span>
              </template>
            </argo-checkbox>
            <ArgoButton
              :disabled="isPending"
              class="argo-signup__btn"
              type="submit"
            >
              {{ $t('exante.pages.funds.argo.signup.form.send') }}
            </ArgoButton>
          </div>
          <div
            v-if="isError && !$v.$invalid"
            v-html="formErrorText"
            class="argo-signup__error"
          ></div>
        </Container>
      </form>
    </transition>
  </section>
</template>

<script>
import createContact from './createContact'
import Container from '~/components/general/Container'
import ArgoInput from '~/components/general/argo/ArgoInputContacts.vue'
import ArgoCheckbox from '~/components/general/argo/ArgoCheckboxContacts.vue'
import ArgoRadio from '~/components/general/argo/ArgoRadioContacts.vue'
import ArgoButton from '~/components/general/argo/ArgoButton.vue'

export default {
  components: {
    Container,
    ArgoInput,
    ArgoCheckbox,
    ArgoRadio,
    ArgoButton
  },
  mixins: [createContact],
  data() {
    return {
      // isVisible: true,
      // isSuccess: false
    }
  }
}
</script>

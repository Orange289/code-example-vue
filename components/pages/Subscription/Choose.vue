<template>
  <section class="choose" id="choose">
    <Container>
      <h2>Choose your insights</h2>
      <ul class="choose__items">
        <li
          class="choose__item"
          :class="[
            {
              'choose__item--macro':
                macroShow && item.submitFunc === 'submitMacro'
            },
            {
              'choose__item--pulse':
                pulseShow && item.submitFunc === 'submitPulse'
            }
          ]"
          v-for="(item, index) in items"
          :key="index"
        >
          <div class="choose__top">
            <h3>{{ item.title }}</h3>
          </div>
          <div class="choose__content">
            <p v-html="item.desc"></p>
            <ul class="choose__points">
              <li
                v-for="(el, elIndex) in item.points"
                class="choose__point"
                :key="elIndex"
              >
                <img
                  src="/static/images/subscription/tick-icon.svg"
                  alt="tick icon"
                />
                <strong v-html="el"></strong>
              </li>
            </ul>
            <SiteButton
              v-if="!item.mobileExpanded"
              dataStyleType="fgreen"
              class="choose__btn choose__btn--mobile"
              type="button"
              @click.native="items[index].mobileExpanded = true"
              >Join us</SiteButton
            >
            <div
              class="choose__form"
              v-show="item.mobileExpanded"
              :class="[
                {
                  'choose__form--macro':
                    macroShow && item.submitFunc === 'submitMacro'
                },
                {
                  'choose__form--pulse':
                    pulseShow && item.submitFunc === 'submitPulse'
                }
              ]"
            >
              <form
                :id="
                  item.submitFunc === 'submitMacro' ? 'formMacro' : 'formPulse'
                "
                v-if="
                  item.submitFunc === 'submitMacro'
                    ? !formSentMacro
                    : !formSentPulse
                "
                action=""
                method="POST"
                @submit.prevent="
                  item.submitFunc === 'submitMacro'
                    ? submitMacro()
                    : submitPulse()
                "
              >
                <div v-if="item.submitFunc === 'submitMacro'">
                  <div
                    :class="[
                      'input',
                      {
                        'input--error': $v.nameMacro.$error
                      },
                      {
                        'input--changed': changedNameMacro
                      }
                    ]"
                  >
                    <label class="input__label">
                      <input
                        ref="nameMacro"
                        class="form__input"
                        type="text"
                        @input="onInputClick"
                        v-model.trim="$v.nameMacro.$model"
                        :class="[
                          {
                            changed: changedNameMacro
                          }
                        ]"
                        id="nameMacro"
                      />
                      <span class="input__floating-label">Enter your name</span>
                      <div
                        v-if="!$v.nameMacro.required"
                        class="input__message input__message--error"
                      >
                        {{ requiredErrorNameMessageMacro }}
                      </div>
                    </label>
                  </div>

                  <div
                    :class="[
                      'input',
                      {
                        'input--error': $v.emailMacro.$error
                      },
                      {
                        'input--changed': changedEmailMacro
                      }
                    ]"
                  >
                    <label class="input__label">
                      <input
                        ref="emailMacro"
                        class="form__input"
                        type="text"
                        @input="onInputClick"
                        v-model.trim="$v.emailMacro.$model"
                        :class="[
                          {
                            changed: changedEmailMacro
                          }
                        ]"
                        id="emailMacro"
                      />
                      <span class="input__floating-label"
                        >Enter your email</span
                      >
                      <div
                        v-if="!$v.emailMacro.required"
                        class="input__message input__message--error"
                      >
                        {{ requiredErrorEmailMessageMacro }}
                      </div>
                      <div
                        v-if="!$v.emailMacro.email"
                        class="input__message input__message--error"
                      >
                        {{ emailErrorMessageMacro }}
                      </div>
                    </label>
                  </div>
                  <div
                    class="choose__checkbox"
                    :class="{
                      'choose__checkbox--error': !signupCheckboxMacroTest
                    }"
                  >
                    <label for="signupCheckboxMacro">
                      <div class="choose__checkboxborder">
                        <input
                          type="checkbox"
                          id="signupCheckboxMacro"
                          v-model="signupCheckboxMacro"
                          :checked="signupCheckboxMacro"
                        />
                        <span></span>

                        <div class="choose__checkbox-content"></div>
                      </div>
                      <p>
                        By signing up, you consent to receive regular updates,
                        news, promotions, and relevant information from EXANTE.
                        We may collect and process your personal information,
                        including your name and email address, solely for the
                        purpose of sending you the newsletter. Rest assured, we
                        prioritise your privacy and handle your personal data in
                        accordance with our privacy policy. You have the right
                        to manage your subscription preferences and update your
                        information at any time, with unsubscribe options
                        available in every email. We will send newsletters to
                        your email address at a frequency that you can expect,
                        but you can opt out at any time. If you have any
                        questions or concerns, please reach out to us at
                        <a href="mailto:support@exante.eu">support@exante.eu</a
                        >. We appreciate your subscription and look forward to
                        keeping you informed!
                      </p>
                    </label>
                  </div>
                </div>
                <div v-else>
                  <div
                    :class="[
                      'input',
                      {
                        'input--error': $v.namePulse.$error
                      },
                      {
                        'input--changed': changedNamePulse
                      }
                    ]"
                  >
                    <label class="input__label">
                      <input
                        ref="namePulse"
                        class="form__input"
                        type="text"
                        @input="onInputClick"
                        v-model.trim="$v.namePulse.$model"
                        :class="[
                          {
                            changed: changedNamePulse
                          }
                        ]"
                        id="namePulse"
                      />
                      <span class="input__floating-label">Enter your name</span>
                      <div
                        v-if="!$v.namePulse.required"
                        class="input__message input__message--error"
                      >
                        {{ requiredErrorNameMessagePulse }}
                      </div>
                    </label>
                  </div>

                  <div
                    :class="[
                      'input',
                      {
                        'input--error': $v.emailPulse.$error
                      },
                      {
                        'input--changed': changedEmailPulse
                      }
                    ]"
                  >
                    <label class="input__label">
                      <input
                        ref="emailPulse"
                        class="form__input"
                        type="text"
                        @input="onInputClick"
                        v-model.trim="$v.emailPulse.$model"
                        :class="[
                          {
                            changed: changedEmailPulse
                          }
                        ]"
                        id="emailPulse"
                      />
                      <span class="input__floating-label"
                        >Enter your email</span
                      >
                      <div
                        v-if="!$v.emailPulse.required"
                        class="input__message input__message--error"
                      >
                        {{ requiredErrorEmailMessagePulse }}
                      </div>
                      <div
                        v-if="!$v.emailPulse.email"
                        class="input__message input__message--error"
                      >
                        {{ emailErrorMessagePulse }}
                      </div>
                    </label>
                  </div>

                  <div
                    class="choose__checkbox"
                    :class="{
                      'choose__checkbox--error': !signupCheckboxPulseTest
                    }"
                  >
                    <label for="signupCheckboxPulse">
                      <div class="choose__checkboxborder">
                        <input
                          type="checkbox"
                          id="signupCheckboxPulse"
                          v-model="signupCheckboxPulse"
                          :checked="signupCheckboxPulse"
                        />
                        <span></span>

                        <div class="choose__checkbox-content"></div>
                      </div>
                      <p>
                        By signing up, you consent to receive regular updates,
                        news, promotions, and relevant information from EXANTE.
                        We may collect and process your personal information,
                        including your name and email address, solely for the
                        purpose of sending you the newsletter. Rest assured, we
                        prioritise your privacy and handle your personal data in
                        accordance with our privacy policy. You have the right
                        to manage your subscription preferences and update your
                        information at any time, with unsubscribe options
                        available in every email. We will send newsletters to
                        your email address at a frequency that you can expect,
                        but you can opt out at any time. If you have any
                        questions or concerns, please reach out to us at
                        <a href="mailto:support@exante.eu">support@exante.eu</a
                        >. We appreciate your subscription and look forward to
                        keeping you informed!
                      </p>
                    </label>
                  </div>
                </div>

                <div class="choose__error" v-if="errorMessage">
                  {{ errorMessage }}
                </div>

                <SiteButton
                  dataStyleType="fgreen"
                  class="choose__btn"
                  type="submit"
                  >Join us</SiteButton
                >
              </form>
              <div
                v-else-if="item.submitFunc === 'submitMacro' && formSentMacro"
                class="choose__sent"
              >
                Your data was sent successfully!
              </div>
              <div
                v-else-if="item.submitFunc === 'submitPulse' && formSentPulse"
                class="choose__sent"
              >
                Your data was sent successfully!
              </div>
            </div>
          </div>
        </li>
      </ul>
    </Container>
  </section>
</template>

<script>
// <div class="choose__form" v-show="item.mobileExpanded">

// v-if="
//   item.submitFunc === 'submitMacro'
//     ? !formSentMacro
//     : !formSentPulse
// "
import { validationMixin } from 'vuelidate'
import { required, email } from 'vuelidate/lib/validators'
// import xInput from '~/components/general/xInput/xInput.vue'
import Container from '~/components/general/Container.vue'
import SiteButton from '~/components/general/SiteButton/SiteButton.vue'
// import { mergeUrl } from '~/utils/merge'

export default {
  name: 'Choose',
  components: {
    Container,
    // xInput,
    SiteButton
  },
  mixins: [validationMixin],
  data() {
    return {
      items: [
        {
          title: 'The Macro View',
          desc:
            'See the bigger picture to make the best decisions<br>for your portfolio.',
          points: [
            'EXANTE Research <span>(for corporate clients)</span>',
            'Monthly review',
            'Quarterly overview'
          ],
          submitFunc: 'submitMacro',
          mobileExpanded: false
        },
        {
          title: 'Finger on the pulse',
          desc:
            'Get daily and weekly market updates to keep you abreast of the latest in market news.',
          points: [
            'EXANTE Research <span>(for corporate clients)</span>',
            'Daily updates',
            'Weekly wrap-ups',
            'Monthly review',
            'Quarterly overview'
          ],
          submitFunc: 'submitPulse',
          mobileExpanded: false
        }
      ],
      nameMacro: '',
      emailMacro: '',
      namePulse: '',
      emailPulse: '',
      signupCheckboxMacro: false,
      signupCheckboxMacroTest: true,
      signupCheckboxPulse: false,
      signupCheckboxPulseTest: true,
      requiredErrorNameMessageMacro: 'Name is required',
      requiredErrorNameMessagePulse: 'Name is required',
      emailErrorMessageMacro: 'Email field should be valid',
      emailErrorMessagePulse: 'Email field should be valid',
      requiredErrorEmailMessageMacro: 'Email is required',
      requiredErrorEmailMessagePulse: 'Email is required',
      changedNameMacro: false,
      changedNamePulse: false,
      changedEmailMacro: false,
      changedEmailPulse: false,
      errorMessage: '',
      formSentMacro: false,
      formSentPulse: false,
      macroShow: false,
      pulseShow: false
    }
  },
  watch: {
    nameMacro() {
      this.checkChangedName()
    },
    namePulse() {
      this.checkChangedName()
    },
    emailMacro() {
      this.checkChangedEmail()
    },
    emailPulse() {
      this.checkChangedEmail()
    }
  },
  validations: {
    nameMacro: {
      required
    },
    emailMacro: {
      required,
      email
    },
    namePulse: {
      required
    },
    emailPulse: {
      required,
      email
    }
  },
  mounted() {
    this.$nextTick(() => {
      document.addEventListener('click', this.checkOutsideClick)
    })
  },
  methods: {
    getErrorMessage() {
      if (this.$v.emailMacro.$error) {
        if (this.$v.emailMacro.$invalid) {
          return this.emailErrorMessageMacro
        } else {
          return this.requiredErrorEmailMessageMacro
        }
      } else if (this.$v.emailPulse.$error) {
        if (this.$v.emailPulse.$invalid) {
          return this.emailErrorMessagePulse
        } else {
          return this.requiredErrorEmailMessagePulse
        }
      }
    },
    checkChangedName() {
      if (this.$refs.nameMacro[0]._value !== '') {
        this.changedNameMacro = true
      } else if (this.$refs.namePulse[0]._value !== '') {
        this.changedNamePulse = true
      }
    },
    checkChangedEmail() {
      if (this.$refs.emailMacro[0]._value !== '') {
        this.changedEmailMacro = true
      }
      // else if (this.$refs.emailPulse[0]._value !== '') {
      //   this.changedEmailPulse = true
      // }
    },
    onInputClick($event) {
      this.$emit('input', $event.target.value)

      if ($event.target.value) {
        if ($event.target.id === 'nameMacro') {
          this.changedNameMacro = true
          this.macroShow = true
        } else if ($event.target.id === 'namePulse') {
          this.changedNamePulse = true
          this.pulseShow = true
        } else if ($event.target.id === 'emailMacro') {
          this.changedEmailMacro = true
          this.macroShow = true
        } else if ($event.target.id === 'emailPulse') {
          this.changedEmailPulse = true
          this.pulseShow = true
        }
      } else if (!$event.target.value) {
        if ($event.target.id === 'nameMacro') {
          this.changedNameMacro = false
          this.macroShow = false
        } else if ($event.target.id === 'namePulse') {
          this.changedNamePulse = false
          this.pulseShow = false
        } else if ($event.target.id === 'emailMacro') {
          this.changedEmailMacro = false
          this.macroShow = false
        } else if ($event.target.id === 'emailPulse') {
          this.changedEmailPulse = false
          this.pulseShow = false
        }
      }
    },
    onKeyUp($event) {
      if ($event.keyCode === 13) {
        this.$emit('keyup', $event)
      }
    },
    onFocus() {
      if (this.disabled) {
        return
      }

      this.$emit('focus')
    },
    onBlur() {
      this.$emit('blur')
    },
    formUrl() {
      // if (process.env.NODE_ENV !== 'production') {
      return 'https://mareg-stage.exante.eu/api/v1/user/attach_to_event/'
      // } else {
      //   return 'https://mareg.exante.eu/api/v1/user/attach_to_event/'
      // }
    },
    submitMacro() {
      this.$v.nameMacro.$touch()
      this.$v.emailMacro.$touch()

      if (!this.signupCheckboxMacro) {
        this.signupCheckboxMacroTest = false
      } else {
        this.signupCheckboxMacroTest = true
      }

      if (!this.$v.nameMacro.$invalid && !!this.$v.emailMacro.$invalid) {
        const _self = this

        this.$nextTick(() => {
          const form = document.querySelector('#formMacro')
          const formData = new FormData(form)

          if (
            !_self.$v.nameMacro.$invalid &&
            !_self.$v.emailMacro.$invalid &&
            _self.signupCheckboxMacro
          ) {
            formData.append('first_name', _self.nameMacro)
            formData.append('email', _self.emailMacro)
          }

          const currentUrl = new URL(window.location.href)

          formData.set('event_url', currentUrl.href)

          _self.$axios
            .$request({
              method: 'post',
              url: _self.formUrl(),
              data: formData
            })
            .then(({ data }) => {
              console.log(data)
              _self.formSentMacro = true
            })
            .catch((error) => {
              console.log(error)
              if (error.response.data.email) {
                _self.errorMessage =
                  error.response.data.email[0] || 'Something went wrong..'
              } else {
                _self.errorMessage = error.response.data.detail
              }
            })
        })
      }
    },
    submitPulse() {
      this.$v.namePulse.$touch()
      this.$v.emailPulse.$touch()

      if (!this.signupCheckboxPulse) {
        this.signupCheckboxPulseTest = false
      } else {
        this.signupCheckboxPulseTest = true
      }

      if (!this.$v.nameMacro.$invalid && !!this.$v.emailMacro.$invalid) {
        const _self = this

        this.$nextTick(() => {
          const form = document.querySelector('#formMacro')
          const formData = new FormData(form)

          if (
            !_self.$v.namePulse.$invalid &&
            !_self.$v.emailPulse.$invalid &&
            _self.signupCheckboxPulse
          ) {
            formData.append('first_name', _self.namePulse)
            formData.append('email', _self.emailPulse)
          }

          _self.$axios
            .$request({
              method: 'post',
              url: _self.formUrl(),
              data: formData,
              headers: {
                common: {
                  'Referrer-Policy': 'no-referrer-when-downgrade'
                }
              }
            })
            .then(({ data }) => {
              console.log(data)
              _self.formSentPulse = true
            })
            .catch((error) => {
              console.log(error)
              if (error.response.data.email) {
                _self.errorMessage =
                  error.response.data.email[0] || 'Something went wrong..'
              } else {
                _self.errorMessage = error.response.data.detail
              }
            })
        })
      }
    },
    checkOutsideClick(event) {
      if (
        document.querySelector('.choose__item--macro') &&
        !document
          .querySelector('.choose__item--macro')
          .contains(event.target) &&
        this.macroShow
      ) {
        this.macroShow = false
      } else if (
        document.querySelector('.choose__item--pulse') &&
        !document
          .querySelector('.choose__item--pulse')
          .contains(event.target) &&
        this.pulseShow
      ) {
        this.pulseShow = false
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.choose {
  background: $color__gray--lightest;
  padding: 60px 0 70px;
  position: relative;
  z-index: 10;

  @include bp(desktop-large) {
    padding: 100px 0 120px;
    height: 790px;
  }

  ul {
    list-style: none;
    padding: 0;
    margin: 0;
  }

  h2 {
    font-family: $font-family-second;
    font-weight: 300;
    font-size: 32px;
    line-height: 35px;
    margin-top: 0;
    margin-bottom: 25px;

    @include bp(desktop-large) {
      font-size: 58px;
      margin-bottom: 50px;
    }
  }
}

.choose__item {
  border: 1px solid $color__green-2-lighter;
  margin-bottom: 25px;
  position: relative;
  box-shadow: 8px 9px 26px 0px rgba(0, 0, 0, 0);
  background: transparent;
  transition: background-color 0.3s, opacity 0.3;

  h3 {
    font-family: $font-family-second;
    font-weight: 400;
    font-size: 25px;
    margin-top: 0;

    @include header_underline();
    padding-bottom: 25px;
    margin-bottom: 25px;
    transition: color 0.3s;

    @include bp(desktop-large) {
      font-size: 36px;
      padding-bottom: 35px;
      margin-bottom: 30px;
    }
  }

  p {
    font-size: 18px;
    line-height: 25px;
    margin-top: 0;
    margin-bottom: 25px;

    @include bp(desktop-large) {
      font-size: 22px;
      line-height: 30px;
    }
  }

  &:nth-child(2) {
    @include bp(desktop-large) {
      .choose__points {
        display: flex;
        flex-wrap: wrap;
      }

      .choose__point {
        width: 50%;
      }

      .choose__point:nth-child(1) {
        width: 100%;
      }
    }
  }

  @include bp(desktop-large) {
    width: 50%;
    max-width: 570px;

    &:hover,
    &--macro,
    &--pulse {
      background: #ffffff;
      padding-bottom: 390px;
      border: none;
      box-shadow: 8px 9px 26px 0px rgba(0, 0, 0, 0.05);

      .choose__top {
        background: $color__green-2-light;
      }

      h3 {
        color: #ffffff;
      }

      h3:after {
        display: none;
      }
    }
  }

  @include bp(desktop-wide) {
    max-width: 750px;

    &:hover {
      padding-bottom: 300px;
    }
  }
}

.choose__content {
  padding: 0 25px 40px;

  @include bp(desktop-large) {
    padding: 0 50px 70px;
  }
}

.choose__top {
  padding: 30px 25px 0;
  background: transparent;
  transition: background 0.3s;

  @include bp(desktop-large) {
    padding: 40px 50px 0px;
  }
}

.choose__items {
  @include bp(desktop-large) {
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
  }
}

ul.choose__points {
  li {
    display: flex;
    align-items: center;
  }

  li + li {
    margin-top: 25px;
  }

  img {
    width: 25px;
    height: 25px;
    margin-right: 20px;

    @include bp(desktop-large) {
      width: 30px;
      height: 30px;
    }
  }

  strong {
    font-family: $font-family-second;
    font-weight: 400;
    font-size: 22px;
    line-height: 25px;

    @include bp(desktop-large) {
      font-size: 20px;
    }

    @include bp(desktop-wide) {
      font-size: 24px;
      line-height: 1.25;
    }
  }

  ::v-deep span {
    font-weight: 300;
    font-size: 16px;
    line-height: 22px;
  }
}

.choose__btn {
  width: 100%;

  ::v-deep button {
    height: 50px;
  }

  @include bp(desktop-large) {
    width: 154px;
  }

  &--mobile {
    margin-top: 30px;
    @include bp(desktop-large) {
      display: none;
    }
  }
}

.choose__input {
  margin-bottom: 20px;
}

.choose__checkbox {
  display: flex;
  margin-top: 30px;
  margin-bottom: 32px;

  label {
    display: flex;
  }

  label p {
    font-size: 11px;
    line-height: 14px;
    flex: 1;
  }
}

.choose__checkboxborder {
  position: relative;

  input {
    display: none;
  }

  input:checked ~ span {
    display: block;
    position: absolute;
    top: 5px;
    left: 5px;

    width: 10px;
    height: 10px;
    background: $color__green;
  }

  .choose__checkbox-content {
    width: 20px;
    height: 20px;
    border: 2px solid rgba($color__green, 0.25);
    margin-right: 20px;
  }

  input:checked ~ .choose__checkbox-content {
    border-color: #000000;
  }
}

.choose__checkbox--error input ~ .choose__checkbox-content {
  border-color: $color-red;
}

.choose__form {
  margin-top: 30px;

  @include bp(desktop-large) {
    display: none !important;
    margin-top: 0;

    &--macro {
      display: block !important;
    }

    &--pulse {
      display: block !important;
    }

    .choose__item:hover &,
    .choose__item--macro &,
    .choose__item--pulse & {
      position: absolute;
      left: 50px;
      width: calc(100% - 100px);
      display: block !important;
      margin-top: 30px;
    }
  }
}

// Input
.input {
  /* margin-bottom: 24px; */

  color: rgba($color__black--light, 0.5);

  & + & {
    margin-top: 30px;
  }
}

.input input {
  font-family: $font-family-second;
  color: #000000;
  font-size: 20px;
  font-weight: 300;
  padding: 6px 2px;
  border: none;
  border-bottom: 2px solid rgba(0, 127, 57, 0.25);
  border-radius: 0;
  background-color: transparent;
  transition: background-color 0.3s;
  width: 100%;

  &::placeholder {
    color: var(--form-placeholder-color);
  }

  &:hover:not(:disabled),
  &:focus {
    background-color: var(--form--hover-color);
  }

  &:focus {
    outline: none;
  }

  &:disabled {
    opacity: 0.4;
    cursor: default;
  }

  &:disabled ~ span {
    color: rgba(129, 140, 153, 0.4);
    cursor: default;
  }
}

.input__label {
  position: relative;
  display: block;
}

.input__floating-label {
  font-family: var(--font-family-base);
  color: var(--form-placeholder-color);
  position: absolute;

  font-size: 20px;
  line-height: 1;
  left: 0;
  top: 10px;
  cursor: text;
  transition: 0.2s ease all;
}

input:focus,
input.changed {
  padding-top: 20px;
  padding-bottom: 4px;
  border-color: #000000;
}

input:hover ~ .input__floating-label {
  color: var(--accent-100-color);
}

input:focus ~ .input__floating-label,
input.changed ~ .input__floating-label {
  color: var(--accent-100-color);
  font-size: 11px;
  font-weight: 400;
  top: 4px;
  left: 0;
}

.input--error .input__label input {
  border-color: $color-red;
}

.input--error .input__floating-label {
  color: $color-red;
}

.input .success {
  border-color: var(--form-success-color);
}

.input .success ~ .input__floating-label {
  color: var(--form-success-color);
}

/*
.input input:focus {
  outline: none;
} */

.input input:-webkit-autofill,
.input input:-webkit-autofill:hover,
.input input:-webkit-autofill:focus {
  color: currentColor !important;
  transition: background-color 5000s ease-in-out 0s !important;
  -webkit-text-fill-color: currentColor !important;
}

.input__message {
  font-family: var(--font-family-base);
  color: var(--form-placeholder-color);
  font-size: 11px;
  line-height: 16px;
  display: block;
}

.input__message--error {
  display: none;
  color: $color-red;

  .input--error & {
    display: block;
  }
}

.input__icon {
  position: absolute;
  left: 12px;
  top: 14px;
  width: 24px;
  height: 24px;
  color: var(--accent-100-color);
}

input.changed ~ .input__icon,
input:hover ~ .input__icon {
  color: var(--form-text-color);
}

.input--icon input {
  padding-left: 44px;
}

.input--icon .input__floating-label {
  left: 44px;
}

.input--icon input:focus ~ .input__floating-label,
.input--icon input.changed ~ .input__floating-label {
  left: 44px;
}

input:disabled ~ .input__icon {
  color: rgba(129, 140, 153, 0.4);
}

.choose__sent {
  font-size: 24px;
}
</style>

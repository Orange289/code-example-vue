<template>
  <section class="contact">
    <div class="contact__content">
      <Container>
        <h3 v-html="texts.header"></h3>
        <form @submit.prevent="submit">
          <div class="contact__fields">
            <argo-input
              :class="`contact__field contact__field--${item.id}`"
              v-for="(item, index) in texts.form.fields"
              :key="index"
              :label="item.label"
            />
          </div>
          <div class="contact__bottom">
            <argo-checkbox class="contact__checkbox">
              <template slot="value"
                ><span v-html="texts.form.checkbox"></span
              ></template>
            </argo-checkbox>
            <ArgoButton class="contact__btn" type="submit">Send</ArgoButton>
          </div>
        </form>
      </Container>
    </div>
    <Signup :texts="signupText" />
  </section>
</template>

<script>
// contact: {
//   header: '{% blocktrans %}Contact us{% endblocktrans %}',
//   form: {
//     fields: [
//       {
//         label: '{% blocktrans %}Name{% endblocktrans %}',
//         id: 'full_name',
//         required: true,
//         maxlength: 255
//       },
//       {
//         label: '{% blocktrans %}Phone number{% endblocktrans %}',
//         id: 'phone',
//         maxlength: 20
//       },
//       {
//         label: '{% blocktrans %}Email{% endblocktrans %}',
//         id: 'email',
//         type: 'email',
//         required: true,
//         maxlength: 255
//       },
//       {
//         label: '{% blocktrans %}Message{% endblocktrans %}',
//         id: 'comment',
//         required: true
//       }
//     ],
//     checkbox:
//       '{% blocktrans %}I allow processing my personal data{% endblocktrans %}'
//   }
// },
import Signup from './Signup'
import Container from '~/components/general/Container'
import ArgoInput from '~/components/general/argo/ArgoInput.vue'
import ArgoCheckbox from '~/components/general/argo/ArgoCheckbox.vue'
import ArgoButton from '~/components/general/argo/ArgoButton.vue'

export default {
  components: {
    Container,
    ArgoInput,
    ArgoCheckbox,
    ArgoButton,
    Signup
  },
  props: {
    texts: {
      type: Object,
      default: null
    },
    signupText: {
      type: Object,
      default: null
    }
  },
  methods: {
    submit() {}
  }
}
</script>

<style lang="scss" scoped>
.contact {
  @include bp(desktop-large) {
    margin-bottom: 390px;
  }

  position: relative;
}

.contact__content {
  @include bp(tablet) {
    padding-top: 160px;
    padding-bottom: 160px;
  }
  @include bp(desktop) {
    padding-bottom: 290px;
  }

  position: relative;
  z-index: 3;

  padding-top: 50px;
  padding-bottom: 50px;

  background: $color__green-2;

  h3 {
    @include argoTitle();
    @include bp(tablet) {
      margin-bottom: 80px;
    }

    margin-top: 0;
    margin-bottom: 40px;

    text-align: center;
    letter-spacing: 2.4px;

    color: $color__white;
  }
}

.contact__checkbox {
  @include bp(tablet) {
    margin-bottom: 0;
  }

  margin-bottom: 40px;
}

.contact__btn {
  @include bp(tablet) {
    width: auto;
  }

  width: 100%;

  ::v-deep .argo-button {
    @include bp(tablet) {
      width: 240px;
    }

    width: 100%;
  }
}

.contact__fields {
  @include bp(tablet) {
    display: flex;

    flex-wrap: wrap;
    justify-content: space-between;
  }
}

.contact__field {
  &--name,
  &--phone,
  &--email {
    @include bp(tablet) {
      width: calc(33.3% - 48px);
      margin-right: 48px;
    }
  }

  &--email {
    @include bp(tablet) {
      margin-right: 0;
    }
  }

  &--message {
    @include bp(tablet) {
      width: 100%;
    }
  }
}

.contact__bottom {
  @include bp(tablet) {
    display: flex;

    margin-top: 20px;

    align-items: center;
    justify-content: space-between;
  }
}
</style>

<template>
  <div id="contacts_us" class="reg become-client">
    <div
      class="become-client__form"
      data-signup-destination="#contacts_us"
      data-editable="['first_name', 'last_name', 'email', 'phone', 'comment']"
    >
      <div class="become-client__unauthorized" style="display: none">
        <SignupReg />
      </div>
      <div class="become-client__authorized" style="display: none">
        <SignupContact />
      </div>
    </div>
  </div>
</template>

<script>
import SignupReg from './SignupReg.vue'
import SignupContact from './SignupContact.vue'

export default {
  components: {
    SignupReg,
    SignupContact
  }
}
</script>

<style lang="scss">
.argo-signup {
  @include bp(desktop-large) {
    // position: absolute;
    // top: calc(100% - 130px);
    // right: 0;
    // left: 0;
    width: calc(100% - 120px);
    margin-right: auto;
    margin-left: auto;
  }

  color: $color__white;

  .argo-signup__top {
    @include bp(tablet) {
      padding: 110px 0;
    }

    position: relative;
    z-index: 3;

    padding: 50px 0;
    // cursor: pointer;

    background: $color__black-2;

    h3 {
      @include bp(tablet) {
        font-family: $font-family-second;
        font-size: 40px;
        font-weight: 300;

        margin-right: 249px;
      }
      @include bp(desktop-large) {
        margin-right: 489px;
      }

      font-family: $font-family-second;
      font-size: 20px;
      font-weight: 400;

      margin: 0;

      color: #fff;
    }

    svg {
      @include argoArrow(24px, 16px, 20px);
      @include bp(tablet) {
        width: 45px;
        height: 30px;
      }

      position: static;
    }
  }

  .argo-signup__head {
    @include argoArrowLink();
    @include bp(tablet) {
      justify-content: flex-start;
    }

    display: flex;

    justify-content: space-between;
    align-items: center;

    &--success h3 {
      @include bp(desktop-large) {
        margin-right: 300px;
      }
      @include bp(desktop-wide) {
        margin-right: 489px;
      }

      font-size: inherit;
      font-weight: inherit;
      line-height: inherit;
    }
  }

  .argo-signup__form {
    @include bp(tablet) {
      padding: 20px 0 110px;
    }
    @include bp(desktop-large) {
      padding: 10px 0 110px;
    }

    position: relative;
    z-index: 2;

    padding: 20px 0 50px;

    background: $color__black-2;

    .argo-input {
      input {
        border-color: rgba($color__white, 0.2);
      }

      input:focus {
        border-color: rgba($color__white, 0.5);
      }

      label {
        color: rgba($color__white, 0.5);
      }
    }
  }

  // .appear-enter-active {
  //   animation: appear 0.3s;
  // }

  // .appear-leave-active {
  //   animation: appear 0.3s reverse;
  // }

  // @keyframes appear {
  //   0% {
  //     transform: translateY(-100%);
  //   }
  //   100% {
  //     transform: translateY(0);
  //   }
  // }

  .argo-signup__radios {
    display: flex;
  }

  .argo-signup__label {
    @include bp(desktop-large) {
      margin-bottom: 28px;
    }

    font-weight: 600;

    display: block;

    margin-bottom: 10px;

    color: rgba($color__white, 0.5);
  }

  .argo-signup__fields {
    @include bp(tablet) {
      margin-right: -48px;
    }
    @include bp(desktop-large) {
      display: flex;

      flex-wrap: wrap;
      justify-content: flex-start;
    }
  }

  .argo-signup__field {
    @include bp(tablet) {
      width: calc(33.3% - 48px);
      margin-right: 48px;
    }

    &--radio {
      margin-bottom: 30px;
    }

    // &--name,
    // &--phone,
    // &--email,
    // &--lastname,
    // &--amount {
    //   @include bp(tablet) {
    //     width: calc(33.3% - 48px);
    //     margin-right: 48px;
    //   }
    // }

    // &--email {
    //   @include bp(tablet) {
    //     margin-right: 0;
    //   }
    // }
  }

  .argo-signup__bottom {
    @include bp(tablet) {
      display: flex;

      margin-top: 20px;

      align-items: center;
      justify-content: space-between;
    }
    @include bp(desktop-large) {
      margin-top: 40px;
    }
  }

  .argo-signup__checkbox {
    @include bp(tablet) {
      margin-bottom: 0;
    }

    margin-bottom: 40px;
  }

  .argo-signup__btn {
    @include bp(tablet) {
      width: auto;
    }

    width: 100%;

    .argo-button {
      @include bp(tablet) {
        width: 240px;
      }

      width: 100%;
    }
  }

  .argo-signup__success-ico {
    display: block;

    width: 40px;
    height: 14px;

    transform: rotate(-45deg);

    border-bottom: 3px solid $color__white;
    border-left: 3px solid $color__white;
  }

  .argo-signup__error {
    color: red;
  }
}

body.page .intl-number-input .flag-dropdown {
  height: 100%;
  display: flex;
  align-items: center;
}
body.page .intl-number-input .flag-dropdown .selected-flag .down-arrow {
  border-top: 4px solid white;
}
</style>

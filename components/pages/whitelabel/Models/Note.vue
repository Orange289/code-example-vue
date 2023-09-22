<template>
  <Note
    :header="header"
    :text="text"
    icon="whitelabel/premium"
    class="NotePremium"
  ></Note>
</template>

<script>
import Note from '~/components/pages/whitelabel/general/Note.vue'

export default {
  name: 'NotePremium',
  components: { Note },
  props: {
    header: {
      type: String,
      default: null
    },
    text: {
      type: String,
      default: null
    }
  }
}
</script>

<style lang="scss" scoped>
.NotePremium {
  @include bp(tablet) {
    margin-right: 0;
    margin-left: 0;
    padding: 30px 30px 21px 50px;

    justify-content: flex-start;
  }
  @include bp(desktop-large) {
    padding: 30px 30px 25px 80px;

    border-left-width: 4px;
  }
  @include bp(desktop-wide) {
    padding: 35px 35px 35px 145px;
  }

  margin-right: -30px;
  margin-left: -30px;
  padding: 27px 28px 25px;

  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.1);

  ::v-deep .note__icon {
    @include bp(tablet) {
      display: flex;

      flex-shrink: 0;
    }
    @include bp(desktop-large) {
      margin-right: 26px;
    }
    @include bp(desktop-wide) {
      margin-right: 15px;
    }

    display: none;
  }
  ::v-deep .note__icon-svg {
    @include bp(desktop-large) {
      width: 60px;
      height: 57px;
    }
    @include bp(desktop-wide) {
      width: 70px;
      height: 67px;
    }

    width: 44px;
    max-width: none;
    height: 42px;
    max-height: none;
  }
  ::v-deep .note__text-header {
    @include bp(tablet) {
      font-size: 24px;

      margin-bottom: 5px;
    }
    @include bp(desktop-wide) {
      font-size: 32px;
    }

    font-size: 18px;

    margin: 0 0 10px 0;
  }
  ::v-deep .note__text {
    @include bp(desktop-large) {
      font-size: 18px;

      padding-top: 10px;
    }
    @include bp(desktop-wide) {
      font-size: 32px;

      padding-top: 0;
    }

    font-family: $font-family-second;
    font-size: 16px;

    color: $color__black--light;
    p {
      font-family: $font-family-base;

      margin: 0;
    }
  }
}

// .note {
//   @include bp(tablet) {
//     margin-right: 0;
//     margin-left: 0;
//     padding: 30px 30px 30px 50px;
//   }
//   @include bp(desktop-large) {
//     padding: 30px 30px 30px 80px;

//     border-left-width: 4px;
//   }
//   @include bp(desktop-wide) {
//     padding: 35px 35px 35px 145px;
//   }

//   display: flex;

//   margin-right: -30px;
//   margin-left: -30px;
//   padding: 25px 28px;

//   border-left: 2px solid $color__green;
//   background-color: $color__white;
//   box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.1);

//   align-items: center;

//   .note__icon {
//     @include bp(tablet) {
//       display: flex;
//       // width: 44px;

//       margin-right: 20px;

//       flex-shrink: 0;
//     }
//     @include bp(desktop-large) {
//       // width: 60px;
//       margin-right: 30px;
//     }
//     // @include bp(desktop-wide) {
//     //   width: 30px;
//     // }

//     display: none;

//     color: $color__green;

//     // & > * {
//     //   width: 100%;
//     //   height: 100%;
//     // }
//   }

//   .note__icon-svg {
//     width: 70px;
//     height: 67px;
//   }

//   .note__text {
//     @include bp(desktop-large) {
//       font-size: 18px;
//     }
//     @include bp(desktop-wide) {
//       font-size: 32px;
//     }

//     font-family: $font-family-second;
//     font-size: 16px;

//     color: $color__black--light;
//     p {
//       font-family: $font-family-base;
//       line-height: 1;

//       margin: 0;
//     }
//   }
//   .note__text-header {
//     @include bp(tablet) {
//       font-size: 24px;

//       margin-bottom: 5px;
//     }
//     @include bp(desktop-wide) {
//       font-size: 32px;
//     }

//     font-family: $font-family-second;
//     font-weight: 300;
//     line-height: 1;

//     margin: 0 0 10px 0;
//   }
// }
</style>

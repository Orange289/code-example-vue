<template>
  <div
    v-if="tKey && ($te(`${tKey}.icon`) || iconKey)"
    :class="
      `icon-text-icon
      icon-text-icon--${iconName}`
    "
    role="presentation"
  >
    <svg-icon :name="icon" class="icon-text__icon"></svg-icon>
  </div>
</template>

<script>
export default {
  name: 'IconTextIcon',
  props: {
    tKey: {
      default: '',
      type: String
    }
  },
  computed: {
    iconKey() {
      const splittedTKey = this.tKey.split('.')
      return splittedTKey[splittedTKey.length - 1]
    },
    icon() {
      return this.$te(`${this.tKey}.icon`, this.$i18n.defaultLocale)
        ? this.$t(`${this.tKey}.icon`, this.$i18n.defaultLocale)
        : this.iconKey
    },
    iconName() {
      return this.icon.split('/')[1]
    }
  }
}
</script>

<style lang="scss" scoped>
// TODO: remake this
.icon-text-icon {
  .icon-text__icon {
    @include bp(desktop-large) {
      max-width: 60px;
    }

    color: $color__green;
  }
  &.icon-text-icon--topstar svg {
    width: 48px;
    height: 48px;
  }

  &.icon-text-icon--tech svg {
    @include bp(desktop) {
      width: 60px;
      height: 45px;
    }

    width: 50px;
    height: 38px;
  }

  &.icon-text-icon--manager svg {
    width: 45px;
    height: 50px;
  }

  &.icon-text-icon--key svg {
    width: 48px;
    height: 48px;
  }

  &.icon-text-icon--algorythm svg {
    width: 65px;
    height: 50px;
  }

  &.icon-text-icon--transfer svg {
    width: 50px;
    height: 52px;
  }

  &.icon-text-icon--finance svg {
    @include bp(desktop-wide) {
      width: 65px;
      height: 45px;
    }

    width: 54px;
    height: 37px;
  }

  &.icon-text-icon--asset svg {
    @include bp(tablet) {
      width: 58px;
      height: 42px;
    }
    @include bp(desktop-large) {
      width: 70px;
      height: 50px;
    }

    width: 48px;
    height: 35px;
  }

  &.icon-text-icon--support svg {
    width: 60px;
    height: 40px;
  }

  &.icon-text-icon--case svg {
    width: 50px;
    height: 39px;
  }

  &.icon-text-icon--subaccounts svg {
    width: 40px;
    height: 40px;
  }

  &.icon-text-icon--allocate svg {
    width: 60px;
    height: 40px;
  }

  &.icon-text-icon--fees svg {
    @include bp(desktop-large) {
      width: 55px;
      height: 50px;
    }

    width: 45px;
    height: 41px;
  }

  &.icon-text-icon--face-2-face svg {
    width: 55px;
    height: 55px;
  }

  &.icon-text-icon--integrate,
  &.icon-text-icon--autonomous,
  &.icon-text-icon--cust {
    svg {
      max-width: 50px;
      max-height: 50px;
    }
  }

  &.icon-text-icon--orders svg {
    @include bp(desktop-large) {
      width: 52px;
      height: 50px;
    }

    width: 42px;
    height: 40px;
  }

  &.icon-text-icon--display svg {
    @include bp(desktop-large) {
      width: 50px;
      height: 45px;
    }

    width: 40px;
    height: 36px;
  }

  &.icon-text-icon--candles svg {
    @include bp(desktop-large) {
      width: 50px;
      height: 73px;
    }

    width: 40px;
    height: 58px;
  }

  &.icon-text-icon--refferal svg {
    width: 40px;
    height: 40px;
  }

  &.icon-text-icon--excel svg {
    width: 47px;
    height: 61px;
  }

  &.icon-text-icon--knight svg {
    width: 46px;
    height: 59px;
  }

  &.icon-text-icon--layers svg {
    width: 60px;
    height: 50px;
  }

  &.icon-text-icon--cross-margin svg {
    width: 55px;
    height: 49px;
  }

  &.icon-text-icon--trade svg {
    width: 50px;
    height: 40px;
  }

  &.icon-text-icon--24h svg {
    width: 41px;
    height: 43px;
  }

  &.icon-text-icon--world svg {
    width: 45px;
    height: 45px;
  }

  &.icon-text-icon--chart-bar svg {
    width: 40px;
    height: 32px;
  }

  &.icon-text-icon--search svg {
    width: 40px;
    height: 40px;
  }

  &.icon-text-icon--covid svg {
    width: 40px;
    height: 40px;
  }

  &.icon-text-icon--money svg {
    width: 48px;
    height: 34px;
  }

  &.icon-text-icon--arrow-circle svg {
    width: 40px;
    height: 40px;
  }

  &.icon-text-icon--marketo svg {
    width: 34px;
    height: 40px;
  }
}
</style>

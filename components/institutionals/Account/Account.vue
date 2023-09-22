<template>
  <section class="account">
    <Container class="account__container">
      <div class="account__wrap">
        <h2
          v-animate.repeat.fade="'slide-left'"
          class="account__header"
          v-html="header"
        ></h2>
        <div v-animate.repeat.fade="'slide-left'" class="account__desc">
          <p
            v-if="$te('exante.pages.institutionals.account.desc')"
            v-html="$t('exante.pages.institutionals.account.desc')"
          ></p>
        </div>
        <IconTextList
          :t-key="itemsTKey"
          :to-row-icon="toRowIcon"
          class="account__icons"
        />
      </div>
      <div class="account__counts">
        <AccountNumber
          v-for="(item, index) in dafaultNumbers"
          :key="index"
          :item="item"
          :index="index"
        ></AccountNumber>
        <div v-animate.repeat.fade="'slide-right'" class="account__btn-wrap">
          <OpenAccountButton
            class="account__open"
            data-style-type="fgreen"
          ></OpenAccountButton>
        </div>
      </div>
    </Container>
  </section>
</template>

<script>
import AccountNumber from './AccountNumber.vue'
import OpenAccountButton from '~/components/general/OpenAccountButton/OpenAccountButton.vue'
import Container from '~/components/general/Container.vue'
import Block800 from '~/components/general/blocks/Block-800.vue'
import IconTextList from '~/components/icon-text/IconTextList.vue'

export default {
  name: 'Account',
  components: {
    Container,
    OpenAccountButton,
    IconTextList,
    AccountNumber
  },
  mixins: [Block800],
  props: {
    itemsTKey: {
      type: String,
      default: ''
    },
    header: {
      type: String,
      default: null
    },
    toRowIcon: {
      default: false,
      type: Boolean
    }
  },
  data() {
    return {
      dafaultNumbers: [
        {
          format: 'numberCompactShort',
          number: 'instruments',
          desc: this.$t('exante.pages.institutionals.account.numbers.0.desc')
        },
        {
          number: 'markets',
          desc: this.$t('exante.pages.institutionals.account.numbers.1.desc')
        },
        {
          end_text: '/7',
          start_text: '24',
          desc: this.$t('exante.pages.institutionals.account.numbers.2.desc')
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
.account {
  @include bp(tablet) {
    min-height: 600px;
    padding: 60px 0 27px;
  }
  @include bp(desktop-large) {
    min-height: 700px;
    padding: 60px 0 42px;
  }
  @include bp(desktop-wide) {
    min-height: 800px;
    padding: 100px 0 70px;
  }

  padding: 40px 0 50px;

  .account__container {
    display: flex;

    flex-wrap: wrap;
    align-items: flex-start;
  }

  .account__wrap {
    @include bp(tablet) {
      max-width: 66.7%;
    }
    @include bp(desktop-wide) {
      max-width: 67.5%;
    }
  }

  .account__counts {
    @include bp(tablet) {
      width: 100%;
      max-width: 32.5%;
      margin-top: 90px;
    }
    @include bp(desktop-large) {
      margin-top: 120px;
    }
    @include bp(desktop-wide) {
      margin-top: 15px;
    }
  }

  .account__header {
    @include h1;
    @include header-underline;
    @include bp(0 tablet) {
      margin-bottom: 20px;
    }
    @include bp(tablet) {
      margin-bottom: 30px;
    }
    @include bp(desktop-large) {
      margin-bottom: 50px;
    }
  }

  .account__desc {
    @include bp(tablet) {
      max-width: 550px;
      margin-bottom: 25px;
    }
    @include bp(desktop-large) {
      margin-bottom: 45px;
    }
    @include bp(desktop-wide) {
      max-width: 854px;
      margin-bottom: 45px;
    }

    margin-bottom: 25px;
  }

  .account__btn-wrap {
    @include bp(0 tablet) {
      margin-top: 25px;
    }

    transition-delay: 1s;
  }

  ::v-deep .icon-text {
    @include bp(tablet) {
      width: 50%;
    }
    @include bp(desktop-wide) {
      display: flex;
      flex-direction: row;

      max-width: 385px;
      max-width: 50%;
      padding-right: 130px;

      flex-wrap: wrap;
      align-items: center;
    }

    .icon-text__icon-wrap {
      @include bp(0 desktop-wide) {
        max-height: 40px;
        // margin-bottom: 20px;
      }
      @include bp(desktop-wide) {
        display: inline-block;

        margin-right: 20px;

        flex-grow: 0;
      }
      max-height: 40px;

      &.icon-text__icon-wrap--layers {
        .icon-text__icon {
          height: 40px;
        }
      }
    }

    .icon-text__title {
      @include bp(0 tablet) {
        font-size: 16px;
        line-height: 20px;

        width: 100%;
      }
      @include bp(desktop-wide) {
        display: inline-block;

        max-width: calc(100% - 140px);
      }
    }

    .icon-text__text {
      // @include bp(0 desktop-wide) {
      //   display: none;
      // }
      @include bp(desktop-wide) {
        margin-top: 20px;
      }
    }

    &:nth-child(2) {
      @include bp(desktop-wide) {
        max-width: 525px;
      }
    }

    // &:nth-child(4) {
    //   @include bp(desktop-wide) {
    //     // max-width: 475px;
    //     max-width: 540px;
    //   }
    // }

    &:last-child {
      @include bp(tablet) {
        width: 75%;
      }
      @include bp(desktop-wide) {
        max-width: 75%;
      }
    }
  }

  ::v-deep .icon-text-list .icon-text-list__item {
    @include bp(0 tablet) {
      margin-bottom: 30px;

      flex-wrap: wrap;
    }
    @include bp(tablet desktop-large) {
      padding-right: 110px;
    }
  }
}
</style>

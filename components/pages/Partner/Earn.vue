<template>
  <section class="earn">
    <Container>
      <h2
        v-animate.fade="'slide-up'"
        class="earn__title"
        v-html="$t('exante.pages.partner.earn.header')"
      ></h2>
      <h3
        v-animate.fade="'slide-up'"
        class="earn__subtitle"
        v-html="$t('exante.pages.partner.earn.subHeader')"
      ></h3>
      <ul v-animate.fade="'slide-up'" class="earn__items">
        <li v-for="(item, index) in items" :key="index" class="earn__item">
          <div class="earn__item-title">
            <span v-html="$t('exante.pages.partner.earn.deposit')"></span>
            <b>
              €{{ $n(item.range.from, '') }}
              <template v-if="item.range.to">
                –
                {{ $n(item.range.to, '') }}
              </template>
              <template v-if="item.more">
                and more
              </template>
            </b>
          </div>
          <div class="earn__item-bottom">
            <b class="earn__item-amount">
              {{ $n(item.amount, 'currencyNoCents') }}
            </b>
            <OpenAccountButton
              class="earn__button"
              :data-style-type="item.amount !== 300 ? 'white' : ''"
            >
              <span v-html="$t('exante.globals.open_account.referral')"></span>
            </OpenAccountButton>
          </div>
          <div class="earn__item-button">
            <OpenAccountButton
              class="earn__button"
              :data-style-type="item.amount !== 300 ? 'white' : ''"
            >
              <span v-html="$t('exante.globals.open_account.referral')"></span>
            </OpenAccountButton>
          </div>
        </li>
      </ul>
      <p
        v-animate.fade="'slide-up'"
        class="earn__desc"
        v-html="$t('exante.pages.partner.earn.desc')"
      ></p>
    </Container>
  </section>
</template>

<script>
import OpenAccountButton from '~/components/general/OpenAccountButton/OpenAccountButton.vue'
import Container from '~/components/general/Container.vue'

export default {
  name: 'Earn',
  components: {
    Container,
    OpenAccountButton
  },
  data() {
    return {
      items: [
        {
          range: {
            from: 10000,
            to: 49999
          },
          amount: 300
        },
        {
          range: {
            from: 50000,
            to: 99999
          },
          amount: 500
        },
        {
          range: {
            from: 100000,
            to: 999999
          },
          amount: 1000
        },
        {
          range: {
            from: 1000000,
            to: 9999999
          },
          amount: 3500
        },
        {
          range: {
            from: 10000000
          },
          amount: 10000,
          more: true
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
.earn {
  @include bp(desktop) {
    padding: 70px 0 90px;
  }
  @include bp(desktop-large) {
    padding: 70px 0 68px;
  }
  @include bp(desktop-wide) {
    padding: 90px 0 60px;
  }

  padding: 50px 0;

  background: $color__gray-2-lightest;

  ::v-deep .earn__button {
    @include bp(desktop-large) {
      width: 210px;
      min-width: 210px;
    }
    @include bp(desktop-wide) {
      width: 240px;
    }

    width: 190px;
    min-width: 190px;
    margin-right: auto;
    margin-left: auto;

    button {
      @include bp(desktop-large) {
        font-size: 22px;

        padding: 15px 9px;
      }

      padding: 10px 26px;

      cursor: pointer;
    }
  }
}

.earn__title {
  @include h1();
  @include header-underline();

  text-align: center;

  ::v-deep span {
    font-family: $font-family-base;
  }

  &:after {
    right: 0;

    margin: auto;
  }
}

.earn__subtitle {
  @include bp(desktop) {
    margin-bottom: 33px;
  }
  @include bp(desktop-large) {
    font-size: 18px;
  }
  @include bp(desktop-wide) {
    font-size: 22px;
  }

  font-family: $font-family-second;
  font-size: 16px;
  font-weight: 400;

  margin-bottom: 24px;

  text-align: center;
}

.earn__items {
  @include bp(desktop) {
    margin-bottom: 10px;
  }
  @include bp(desktop-large) {
    flex-direction: row;

    margin-right: -50px;
    margin-left: -50px;

    align-items: flex-start;
    flex-wrap: nowrap;
  }

  display: flex;

  margin-right: -25px;
  margin-bottom: 20px;
  margin-left: -25px;
  padding-left: 0;

  list-style: none;

  align-items: center;
  flex-wrap: wrap;
  justify-content: center;
}

.earn__item {
  @include bp(desktop) {
    width: 300px;
    margin-right: 50px;
    margin-bottom: 40px;
  }
  @include bp(desktop-large) {
    overflow: hidden;

    width: 250px;
    min-height: 277px;
    margin-right: 15px;
  }
  @include bp(desktop-wide) {
    width: 320px;
    min-height: 320px;
    margin-right: 25px;
  }

  display: flex;
  flex-direction: column;

  width: 100%;
  margin-bottom: 10px;

  cursor: default;

  &:hover {
    .earn__item-button {
      @include bp(desktop-large) {
        visibility: visible;

        opacity: 1;
      }
    }
  }
}

.earn__item-bottom {
  @include bp(desktop-large) {
    padding: 10px 20px 15px;
  }
  @include bp(desktop-wide) {
    padding: 20px 40px 16px;
  }

  width: 100%;
  padding: 20px 45px 35px;

  text-align: center;

  color: #fff;

  .earn__button {
    @include bp(desktop-large) {
      display: none;
    }
  }
}

.earn__item:nth-child(1) {
  .earn__item-bottom {
    background: #fff;
  }
  .earn__item-amount {
    color: $color__green;
  }
}

.earn__item:nth-child(2) {
  .earn__item-bottom {
    background: #bfdfcd;
  }
}

.earn__item:nth-child(3) {
  @include bp(0 desktop-large) {
    margin-right: 0;
  }
  .earn__item-bottom {
    background: #7fbe9b;
  }
}

.earn__item:nth-child(4) {
  .earn__item-bottom {
    @include bp(desktop-large) {
      padding-right: 20px;
      padding-left: 20px;
    }

    padding-right: 38px;
    padding-left: 38px;

    background: $color__green--light;
  }

  .earn__item-title {
    @include bp(desktop-large) {
      padding-right: 10px;
      padding-left: 10px;
    }

    padding-right: 38px;
    padding-left: 38px;
  }
}

.earn__item:nth-child(5) {
  margin-right: 0;
  .earn__item-bottom {
    background: $color__green;
  }
}

.earn__item-title {
  @include bp(desktop-large) {
    padding: 30px 20px 15px;
  }
  @include bp(desktop-wide) {
    padding: 40px 40px 22px;
  }

  width: 100%;
  padding: 30px 45px 10px;

  text-align: center;

  background: #fff;

  b {
    font-size: 22px;

    display: block;
  }

  span {
    @include bp(desktop-large) {
      font-size: 18px;
    }

    display: block;

    margin-bottom: 7px;
  }
}

.earn__item-amount {
  @include bp(desktop-large) {
    font-size: 48px;

    margin-bottom: 0;
  }
  @include bp(desktop-wide) {
    font-size: 56px;
  }

  font-size: 42px;
  line-height: 1.14;

  display: block;

  margin-bottom: 16px;

  text-align: center;

  color: #fff;
}

.earn__desc {
  @include bp(desktop) {
    font-size: 16px;
  }
  @include bp(desktop-wide) {
    font-size: 18px;
  }

  font-size: 14px;

  max-width: 1314px;
  margin: 0 auto;

  text-align: center;
}

.earn__item-button {
  @include bp(desktop-large) {
    display: block;
    visibility: hidden;

    opacity: 0;
  }
  @include bp(desktop-wide) {
    padding: 10px 40px 38px;
  }

  display: none;

  width: 100%;
  padding: 10px 20px 28px;

  transition: all 0.2s;

  background: #fff;

  .earn__item:nth-child(2) & {
    background: #bfdfcd;
  }
  .earn__item:nth-child(3) & {
    background: #7fbe9b;
  }
  .earn__item:nth-child(4) & {
    background: $color__green--light;
  }
  .earn__item:nth-child(5) & {
    background: $color__green;
  }
}
</style>

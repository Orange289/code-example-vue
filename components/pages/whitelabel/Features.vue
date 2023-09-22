<template>
  <section class="features">
    <Container class="features__container">
      <h2
        v-html="$t('exante.pages.whitelabel.features.header')"
        v-animate.repeat.fade="'slide-up'"
        class="features__title whitelabel__header"
      ></h2>
      <div class="features__items">
        <div
          v-for="(item, icon, index) in $t(itemsTKey)"
          :key="icon + index"
          v-animate.repeat.fade="'slide-up'"
          :class="[
            'features__item',
            'feature',
            { 'feature--list': $te(`${itemsTKey}.${icon}.list`) }
          ]"
        >
          <div
            v-if="icon"
            :class="['feature__icon', `feature__icon--${icon.split('/')[1]}`]"
            role="presentation"
          >
            <svg-icon :name="icon"></svg-icon>
          </div>
          <div class="feature__text">
            <p v-html="$t(`${itemsTKey}.${icon}.text`)"></p>
            <ul v-if="$te(`${itemsTKey}.${icon}.list`)">
              <li
                v-for="(listItem, key) in $t(`${itemsTKey}.${icon}.list`)"
                :key="key"
                v-html="$t(`${itemsTKey}.${icon}.list.${key}`)"
              ></li>
            </ul>
          </div>
        </div>
        <div
          v-animate.repeat.fade="'slide-up'"
          class="features__item feature feature--button"
        >
          <WlpOpenAccButt data-style-type="fwhite"></WlpOpenAccButt>
        </div>
      </div>
    </Container>
  </section>
</template>

<script>
import WlpOpenAccButt from '~/components/pages/whitelabel/general/WlpOpenAccButt.vue'
import Container from '~/components/general/Container.vue'
import Block800 from '~/components/general/blocks/Block-800.vue'

export default {
  name: 'WhiteLabelFeatures',
  components: { Container, WlpOpenAccButt },
  mixins: [Block800],
  data() {
    return {
      itemsTKey: 'exante.pages.whitelabel.features.items'
    }
  }
}
</script>

<style lang="scss" scoped>
.features {
  @include bp(tablet) {
    padding-top: 70px;
    padding-bottom: 60px;

    background: #2d9253;
    background: radial-gradient(
      ellipse at center 90%,
      #2d9253 10%,
      #114d26 100%
    );
    background-repeat: no-repeat;
  }
  @include bp(desktop-large) {
    padding-bottom: 0;
  }
  @include bp(desktop-large desktop-wide) {
    min-height: 650px;
  }
  @include bp(desktop-wide) {
    padding-top: 130px;
    padding-bottom: 40px;
  }

  position: relative;

  overflow: hidden;

  padding-top: 46px;
  padding-bottom: 47px;

  color: #fff;
  background-color: $color__green;

  @media print {
    color: $color__text;
    background: none;
  }

  .features__title.whitelabel__header {
    @include bp(tablet) {
      // padding-bottom: 16px;
      margin-bottom: 45px;

      grid-column: 1 / 5;
      grid-row: 1;
    }
    // @include bp(desktop) {
    //   margin-bottom: 50px;
    //   padding-bottom: 16px;
    // }
    // @include bp(desktop-large) {
    //   padding-bottom: 22px;
    // }
    @include bp(desktop-wide) {
      margin-bottom: 55px;
      // padding-bottom: 24px;
    }
    // font-family: $font-family-second;
    // font-size: 34px;
    // font-weight: 300;
    // line-height: 1.18;

    width: 100%;
    margin-top: 0;
    margin-bottom: 30px;

    color: inherit;

    &:after {
      background-color: currentColor;
    }
  }

  .features__items {
    @include bp(tablet) {
      display: grid;
      // grid-auto-flow: column;

      grid-template-columns: 26% 26% 26% 1fr;
      grid-template-rows: auto;
    }
    @include bp(desktop-large) {
      grid-template-columns: 1fr 1fr 1fr 1fr;
    }

    display: flex;

    align-items: flex-start;
    flex-wrap: wrap;
  }

  .features__item {
    @include bp(0 tablet) {
      display: flex;
    }

    &:last-child {
      @include bp(tablet) {
        grid-column: 4;
        grid-row: 2 / 4;
      }
      @include bp(desktop-large) {
        padding-right: 25px;
      }
    }
  }

  .feature {
    @include bp(tablet) {
      // max-width: 100%;
      margin-right: 0;
      margin-bottom: 50px;
      padding-right: 45px;
    }
    @include bp(desktop-large) {
      // max-width: calc(33.33% - 50px);
      margin-bottom: 70px;
      padding-right: 75px;
    }
    @include bp(desktop-wide) {
      // max-width: calc(25% - 50px);
      margin-bottom: 90px;
      padding-right: 110px;
    }

    width: 100%;
    margin-bottom: 20px;

    color: inherit;

    .feature__icon {
      @include bp(tablet) {
        max-width: 40px;
        max-height: 45px;
        margin-right: 0;
        margin-bottom: 20px;
      }
      @include bp(desktop-large) {
        min-width: 50px;
        max-width: 60px;
        max-height: 50px;
        // height: auto;
        margin-bottom: 15px;
      }
      @include bp(desktop-wide) {
        margin-bottom: 22px;
      }

      display: flex;
      flex-direction: column;

      max-width: 48px;
      max-height: 50px;
      margin-right: 30px;
      margin-bottom: 0;

      justify-content: flex-start;

      &.feature__icon--candles {
        @include bp(desktop-large) {
          min-height: 73px;
        }
        @include bp(desktop-wide) {
          max-width: 50px;
          margin-top: -20px;
        }
      }
    }

    .feature__text {
      p {
        @include bp(0 tablet) {
          margin-top: 8px;
        }
        @include bp(tablet desktop-large) {
          line-height: 1.17;

          margin-top: 5px;
        }
        @include bp(desktop-large) {
          font-size: 18px;

          margin-top: 10px;
        }
        @include bp(desktop-wide) {
          font-size: 22px;

          margin-top: 14px;
        }

        font-size: 16px;
        line-height: 1.25;

        margin-top: 0;
        margin-bottom: 0;

        color: #f7f7f7;
      }

      ul {
        @include bp(tablet desktop-large) {
          margin-top: 23px;
        }
        @include bp(tablet) {
          padding-left: 40px;
        }

        padding-left: 30px;

        list-style: none;

        li {
          position: relative;

          margin-bottom: 10px;

          &:before {
            @include bp(tablet) {
              left: -40px;
            }

            position: absolute;
            top: 9px;
            left: -30px;

            display: block;

            width: 20px;
            height: 2px;

            content: '';

            background-color: #fff;
          }
        }
      }
    }

    &.feature--list {
      @include bp(tablet) {
        margin-bottom: 35px;
      }
      @include bp(tablet desktop-large) {
        padding-right: 10px;
      }

      grid-row: 1/3;
      grid-column: 4;
      order: 2;
    }

    &.feature--button {
      @include bp(0 tablet) {
        margin-bottom: 0;
      }
      @include bp(tablet) {
        padding-top: 75px;
      }

      order: 10;
    }
  }
}
</style>

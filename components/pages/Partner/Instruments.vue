<template>
  <section class="instruments">
    <Container class="instruments__container">
      <h2
        v-animate.fade="'slide-left'"
        class="instruments__title"
        v-html="$t('exante.pages.partner.instruments.header')"
      ></h2>
      <picturelazy
        v-animate.fade="'slide-right'"
        :source="[
          {
            srcset:
              '/static/images/traders/devices.webp 1x, /static/images/traders/devices@2x.webp 2x'
          },
          {
            srcset:
              '/static/images/traders/devices.png 1x, /static/images/traders/devices@2x.png 2x'
          }
        ]"
        class="instruments__image"
      ></picturelazy>
      <ul class="instruments__items">
        <li
          v-for="(item, index) in $t(
            'exante.pages.partner.instruments.markets'
          )"
          :key="index"
          v-animate.fade="'slide-up'"
          class="instruments__item"
          :style="{ 'transition-delay': `${0.1 * index}s` }"
        >
          <div class="instruments__item-wrap">
            <!-- <a :href="`/markets/${index}/`" class="instruments__item-wrap"> -->
            <img :src="`/static/images/partner/${index}.svg`" :alt="item" />
            <span v-html="item"></span>
            <!-- </a> -->
          </div>
        </li>
      </ul>
      <OpenAccountButton
        v-animate.fade="'slide-left'"
        data-style-type="fgreen"
        class="instruments__btn"
      >
        <span v-html="$t('exante.globals.open_account.referral')"></span>
      </OpenAccountButton>
    </Container>
  </section>
</template>

<script>
import Container from '~/components/general/Container.vue'
import picturelazy from '~/components/general/Lazy/PictureLazy.vue'
import OpenAccountButton from '~/components/general/OpenAccountButton/OpenAccountButton.vue'

export default {
  name: 'Instruments',
  components: {
    Container,
    picturelazy,
    OpenAccountButton
  }
}
</script>

<style lang="scss" scoped>
.instruments {
  @include bp(tablet) {
    padding: 70px 0 52px;
  }
  @include bp(desktop-large) {
    padding: 100px 0;
  }
  @include bp(desktop-wide) {
    padding: 50px 0 30px;
  }

  overflow: hidden;

  padding: 40px 0;

  .instruments__container {
    @include bp(tablet) {
      display: grid;

      grid-template-columns: 59.5% auto;
    }
  }

  ::v-deep .instruments__btn {
    @include bp(tablet) {
      max-width: 250px;

      grid-column: 1;
    }
    @include bp(desktop-large) {
      max-width: 300px;
    }
  }
}

.instruments__title {
  @include h1();
  @include header-underline();
  @include bp(tablet) {
    grid-column: 1;
  }
  @include bp(desktop-large) {
    margin-bottom: 35px;
  }
  @include bp(desktop-wide) {
    margin-top: 50px;
  }
}

.instruments__items {
  @include bp(tablet) {
    display: grid;

    margin-bottom: 20px;

    grid-column: 1;
    grid-template-columns: 50% 50%;
  }

  margin-bottom: 44px;
  padding-left: 0;

  list-style: none;
}

.instruments__item {
  margin-bottom: 22px;

  span {
    @include bp(desktop-wide) {
      font-size: 24px;

      margin-left: 30px;
    }

    font-size: 22px;
    font-weight: 400;

    margin-left: 20px;
  }

  img {
    width: 50px;
    height: 60px;
  }
}

.instruments__item-wrap {
  display: flex;

  align-items: center;
}

.instruments__image {
  @include bp(tablet) {
    max-width: calc(100% + 80px);
    margin-left: -80px;

    grid-column: 2;
    grid-row: 1/4;
  }
  @include bp(desktop-large) {
    max-width: calc(100% + 150px);
    margin-left: -150px;
  }
  @include bp(desktop-wide) {
    max-width: calc(100% + 200px);
    margin-left: -200px;

    grid-row: 1/5;
  }
}
</style>

<template>
  <section class="facts">
    <Container>
      <h2
        v-animate.fade="'slide-left'"
        class="facts__title"
        v-html="$t('exante.pages.partner.facts.header')"
      ></h2>
      <ul class="facts__items">
        <li
          v-for="(item, index) in facts"
          :key="item"
          v-animate.fade="'slide-up'"
          class="facts__item"
          :style="{ 'transition-delay': `${0.15 * index}s` }"
        >
          <span v-html="$ggen(item)"></span>
          <b v-html="$t(`exante.globals.numbers.${item}.desc`)"></b>
        </li>
      </ul>
      <OpenAccountButton v-animate.fade="'slide-left'" class="earn__button">
        <span v-html="$t('exante.globals.open_account.referral')"></span>
      </OpenAccountButton>
    </Container>
  </section>
</template>

<script>
import Container from '~/components/general/Container.vue'
import OpenAccountButton from '~/components/general/OpenAccountButton/OpenAccountButton.vue'

export default {
  components: {
    Container,
    OpenAccountButton
  },
  props: {
    texts: {
      type: Object,
      default: null
    }
  },
  data() {
    return {
      facts: ['instruments', 'markets', 'charter_capital', 'years', 'employees']
    }
  }
}
</script>

<style lang="scss" scoped>
.facts {
  @include bp(tablet) {
    padding: 60px 0;
  }
  @include bp(desktop-large) {
    padding: 80px 0 62px;
  }
  @include bp(desktop-wide) {
    padding: 110px 0 120px;
  }

  padding: 70px 0;
}

.facts__title {
  @include h1();
  @include header-underline();
}

.facts__items {
  @include bp(tablet) {
    display: flex;

    justify-content: space-between;
  }

  margin-bottom: 30px;
  padding-left: 0;

  list-style: none;
}

.facts__item {
  margin-bottom: 18px;
  span {
    @include bp(desktop-large) {
      font-size: 56px;

      margin-bottom: 3px;
    }
    @include bp(desktop-wide) {
      font-size: 72px;
    }

    font-size: 42px;
    line-height: 60px;

    display: block;

    color: $color__green;
  }
  b {
    @include bp(desktop-large) {
      font-size: 18px;

      display: block;
    }
    @include bp(desktop-wide) {
      font-size: 24px;
    }

    font-family: $font-family-second;
  }

  &:nth-child(1) span {
    @include bp(desktop-large) {
      margin-left: -10px;
    }
    @include bp(desktop-wide) {
      margin-left: -12px;
    }

    margin-left: -8px;
  }

  &:nth-child(4) b {
    @include bp(desktop-large) {
      max-width: 106px;
    }
    @include bp(desktop-wide) {
      max-width: 141px;
    }
  }
}
</style>

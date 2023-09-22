<template>
  <section class="howitworks" :class="`howitworks--${$i18n.locale}`">
    <Container>
      <h2
        v-animate.fade="'slide-left'"
        class="howitworks__title"
        v-html="$t('exante.pages.partner.howitworks.header')"
      ></h2>
      <ul class="howitworks__items">
        <li
          v-for="(item, index) of $t('exante.pages.partner.howitworks.items')"
          :key="index"
          v-animate.fade="'slide-left'"
          :style="{ 'transition-delay': `${0.5 * index}s` }"
          class="howitworks__item"
        >
          <span class="howitworks__item-title" v-html="item.title"></span>
          <p v-html="item.desc"></p>
        </li>
      </ul>
      <ul class="howitworks__numbers">
        <li
          v-for="(nItem, index) of $t(
            'exante.pages.partner.howitworks.numbers'
          )"
          :key="index"
          v-animate.fade="'slide-left'"
          :style="{ 'transition-delay': `${0.5 * index}s` }"
          class="howitworks__number"
        >
          <strong v-html="nItem.num"></strong>
          <p v-html="nItem.desc"></p>
        </li>
      </ul>
    </Container>
  </section>
</template>

<script>
import Container from '~/components/general/Container.vue'

export default {
  name: 'Howitworks',
  components: {
    Container
  }
}
</script>

<style lang="scss" scoped>
.howitworks {
  @include bp(desktop) {
    padding: 70px 0 50px;
  }
  @include bp(desktop-large) {
    padding: 80px 0 70px;
  }
  @include bp(desktop-wide) {
    padding: 90px 0 90px;
  }

  padding: 50px 0 50px;

  color: $color__white;
  background: $color__black--lighter;
}

.howitworks__title {
  @include h1();
  @include header-underline();
  @include bp(desktop) {
  }
  @include bp(tablet) {
    margin-bottom: 60px;
  }
  @include bp(desktop-wide) {
    margin-bottom: 58px;
  }

  margin-bottom: 40px;

  color: $color__white;
}

.howitworks__items {
  @include bp(tablet) {
    flex-direction: row;
  }
  @include bp(desktop-wide) {
    margin-bottom: 67px;
  }

  display: flex;
  flex-direction: column;

  margin: 0;
  margin-bottom: 40px;
  padding: 0;

  list-style: none;

  counter-reset: section;

  justify-content: space-between;
}

.howitworks__item {
  @include bp(tablet) {
    width: calc(33.3% - 75px);
  }
  @include bp(desktop-large) {
    width: calc(33.3% - 130px);
  }
  @include bp(desktop-wide) {
    width: calc(33.3% - 200px);
    min-width: 336px;
  }

  position: relative;

  padding-left: 60px;

  &:nth-last-child(n + 2):after {
    @include bp(tablet) {
      top: 4px;
      right: -65px;
      left: auto;

      width: 50px;
      height: 2px;
    }
    @include bp(desktop-large) {
      top: 10px;
      right: -130px;

      width: 100px;
    }
    @include bp(desktop-wide) {
      top: 20px;
      right: -200px;

      width: 100px;
    }

    position: absolute;
    top: 40px;
    left: 19px; // width of number (40) / 2 - width of line (2) / 2

    width: 2px;
    height: calc(
      100% - 64px
    ); // 100% - height of number (40) - margins on top and button and ?!4px

    content: '';

    background: $color__green--lighter;
  }

  p {
    @include bp(0 desktop-large) {
      max-width: 173px;
    }
    @include bp(desktop-large) {
      font-size: 18px;

      max-width: 200px;
    }
    @include bp(desktop-wide) {
      font-size: 24px;

      max-width: 260px;
    }

    font-size: 16px;
    line-height: 1.25;

    margin: 0;
  }

  &:nth-last-child(n + 2) {
    @include bp(tablet) {
      padding-bottom: 0;
    }

    padding-bottom: 42px;
  }
}

.howitworks__item-title {
  @include bp(desktop-large) {
    font-size: 24px;
  }
  @include bp(desktop-wide) {
    font-size: 32px;

    margin-bottom: 18px;
  }

  font-family: $font-family-second;
  font-size: 16px;
  line-height: 1.25;

  position: relative;

  display: block;

  margin-bottom: 9px;

  &:before {
    @include bp(desktop-large) {
      top: -6px;
    }
    @include bp(desktop-wide) {
      top: 0;
    }

    font-size: 24px;
    font-weight: 400;
    line-height: 38px;

    position: absolute;
    top: -13px;
    left: -60px;

    width: 36px;
    height: 36px;

    content: counter(section);
    counter-increment: section;
    text-align: center;

    color: $color__green--lighter;
    border: 2px solid $color__green--lighter;
    border-radius: 50%;
  }

  .howitworks__item:nth-child(3) &:before {
    content: '';

    background: $color__green--lighter;
  }

  .howitworks__item:nth-child(3) &:after {
    @include bp(desktop-large) {
      top: 6px;
    }
    @include bp(desktop-wide) {
      top: 12px;
    }

    position: absolute;
    top: 0;
    left: -47px;

    width: 16px;
    height: 8px;

    content: '';
    transform: rotate(-45deg);

    border-bottom: 2px solid $color__white;
    border-left: 2px solid $color__white;
  }
}

.howitworks__numbers {
  @include bp(desktop) {
    display: flex;

    padding: 30px 54px;

    border: solid 2px #4e5d60;

    justify-content: space-between;
  }
  @include bp(desktop-large) {
    margin-right: -50px;
    margin-left: -50px;
    padding: 30px 40px;
  }
  @include bp(desktop-wide) {
    padding: 40px 110px 50px;
  }

  margin: 0;
  padding-left: 0;

  list-style: none;
}

.howitworks__number {
  @include bp(0 desktop) {
    margin-bottom: 18px;
  }
  strong {
    @include bp(desktop-large) {
      font-size: 56px;
    }
    @include bp(desktop-wide) {
      // font-size: 72px;
      font-size: 68px;

      margin-bottom: 10px;
    }

    font-size: 42px;
    font-weight: 300;
    line-height: 60px;

    display: block;

    margin-bottom: 7px;

    color: $color__green--lighter;
  }

  p {
    @include bp(desktop-large) {
      font-size: 18px;
    }
    @include bp(desktop-wide) {
      font-size: 24px;
    }

    font-family: $font-family-second;
    font-size: 16px;
    font-weight: 400;
    line-height: 20px;

    margin: 0;
  }

  &:nth-child(3) p {
    @include bp(0 desktop-large) {
      width: 150px;
    }
  }

  &:nth-child(1) strong {
    margin-left: -8px;
    @include bp(desktop-large) {
      margin-left: -10px;
    }
  }
}

.howitworks--pl .howitworks__number:nth-child(1) strong,
.howitworks--de .howitworks__number:nth-child(1) strong {
  margin-left: 0 !important;

  @include bp(desktop-large) {
    margin-left: 0 !important;
  }
}

.howitworks--pl .howitworks__number:nth-child(2) strong,
.howitworks--de .howitworks__number:nth-child(2) strong,
.howitworks--cs .howitworks__number:nth-child(2) strong,
.howitworks--pl .howitworks__number:nth-child(4) strong,
.howitworks--de .howitworks__number:nth-child(4) strong,
.howitworks--pt .howitworks__number:nth-child(4) strong,
.howitworks--cs .howitworks__number:nth-child(4) strong {
  margin-left: -8px !important;

  @include bp(desktop-large) {
    margin-left: -10px !important;
  }
}
</style>

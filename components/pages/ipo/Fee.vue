<template>
  <div class="fee">
    <Container class="fee__container">
      <div class="fee__content">
        <h2
          v-animate.repeat.fade="'slide-left'"
          v-html="$t('exante.pages.ipo.fee.header')"
          class="fee__title"
        ></h2>
        <div class="fee__features">
          <ul class="fee__list fee__list--links">
            <li
              v-for="(item, index) in $t('exante.pages.ipo.fee.itemsWithLinks')"
              :key="index"
              v-animate.repeat.fade="'slide-left'"
              class="fee__item"
            >
              <svg-icon
                class="fee__icon"
                name="whitelabel/radiocheck-icon"
                width="15"
                height="10"
              ></svg-icon>
              <span v-html="item.text"></span>
              <a :href="item.linkUrl" v-html="item.linkName"></a>
            </li>
          </ul>
          <ul class="fee__list">
            <li
              v-for="(item, index) in $t('exante.pages.ipo.fee.items')"
              :key="index"
              v-animate.repeat.fade="'slide-left'"
              class="fee__item"
            >
              <svg-icon
                class="fee__icon"
                name="whitelabel/radiocheck-icon"
                width="15"
                height="10"
              ></svg-icon>
              <span v-html="item.text"></span>
              <a :href="item.linkUrl" v-html="item.linkName"></a>
            </li>
          </ul>
        </div>
      </div>
      <div v-animate.repeat.fade="'slide-right'" class="fee__offer">
        <div
          v-html="$t('exante.pages.ipo.fee.offer.title')"
          class="fee__offer-title"
        ></div>
        <OpenAccountButton
          v-animate.fade="'slide-right'"
          data-style-type="fwhite"
          class="fee__button"
          style="transition-delay:0.5s"
        >
          {{ $t('exante.pages.ipo.fee.offer.button') }}
        </OpenAccountButton>
        <p v-html="$t('exante.pages.ipo.fee.offer.note')"></p>
      </div>
    </Container>
  </div>
</template>

<script>
import OpenAccountButton from '~/components/general/OpenAccountButton/OpenAccountButton.vue'
import Container from '~/components/general/Container.vue'

export default {
  name: 'Fee',
  components: {
    Container,
    OpenAccountButton
  }
}
</script>

<style lang="scss" scoped>
.fee {
  @include bp(tablet) {
    padding: 90px 0 110px;
  }

  padding: 50px 0;

  color: #fff;
  background: $color__black--lighter;
}

.fee__offer {
  @include bp(0 desktop) {
    display: flex;
    flex-direction: column;

    margin: auto;

    justify-content: space-between;
  }
  @include bp(mobile) {
    width: 300px;
    height: 300px;
  }
  @include bp(tablet) {
    width: 400px;
    padding: 40px 0;
  }
  @include bp(desktop) {
    width: 500px;
    height: 400px;
    margin-left: 50px;
  }
  @include bp(desktop-large) {
    margin-left: 0;
  }

  width: 100%;
  height: auto;
  padding: 25px 0;

  text-align: center;

  background: url('/static/images/ipo/coupon.svg');
  background-position: bottom center;
  background-size: cover;

  p {
    @include bp(0 tablet) {
      font-size: 12px;
    }
    @include bp(desktop) {
      margin-top: 32px;
    }

    margin: 0;
    margin-top: 10px;
  }
}

.fee__offer-title {
  @include bp(desktop) {
    font-size: 54px;
  }

  font-size: 24px;
  font-weight: 400;

  color: #fff;

  ::v-deep span {
    @include bp(desktop) {
      font-size: 104px;

      margin-top: -24px;
    }

    font-size: 48px;

    display: block;
  }
}

.fee__container {
  @include bp(mobile) {
    display: flex;

    justify-content: space-between;
  }
}

.fee__content {
  @include bp(desktop) {
    width: calc(100% - 500px);
  }
}

.fee__features {
  @include bp(mobile) {
    //   display: flex;
    padding-right: 20px;
  }
  @include bp(desktop) {
    display: flex;

    margin-bottom: 0;
  }

  margin-bottom: 40px;
}

.fee__list {
  margin: 0;
  padding: 0;

  list-style: none;

  &.fee__list--links {
    @include bp(mobile) {
      margin-right: 50px;
    }
    @include bp(tablet) {
      margin-right: 100px;
    }
    @include bp(desktop-large) {
      margin-right: 152px;
    }
  }
}

.fee__item {
  position: relative;

  padding-left: 30px;

  &:nth-child(n + 1) {
    @include bp(tablet) {
      margin-top: 35px;
    }

    margin-top: 20px;
  }

  // span {
  //   font-weight: 400;
  // }

  a {
    display: block;

    text-decoration: underline;
  }
}

.fee__title {
  @include h1();
  @include header-underline();

  margin-top: 0;
  margin-bottom: 30px;

  color: #fff;
}

.fee__icon {
  position: absolute;
  top: 4px;
  left: 0;

  color: $color__green;
}

.fee__button {
  @include bp(0 desktop) {
    max-width: 180px;
    margin: auto;
  }
}
</style>

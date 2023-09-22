<template>
  <section class="features">
    <Container>
      <ul class="features__items">
        <li
          v-for="(item, icon, index) in $t('exante.pages.partner.features')"
          :key="icon"
          v-animate.fade="'slide-up'"
          :style="{ 'transition-delay': `${0.3 * index}s` }"
          class="features__item"
        >
          <svg-icon
            :name="`institutionals/${icon}`"
            :class="`features__icon features__icon--${icon}`"
          ></svg-icon>
          <p v-html="$t(`exante.pages.partner.features.${icon}`)"></p>
        </li>
      </ul>
    </Container>
  </section>
</template>

<script>
import Container from '~/components/general/Container.vue'

export default {
  components: {
    Container
  }
}
</script>

<style lang="scss" scoped>
.features {
  @include bp(tablet) {
    padding: 58px 0 56px;
  }
  @include bp(desktop-large) {
    padding: 70px 0 67px;
  }
  @include bp(desktop-wide) {
    padding: 80px 0;
  }

  padding: 40px 0 28px;

  background: $color__green--lightest;
}

.features__items {
  @include bp(tablet) {
    display: flex;

    margin: 0;

    justify-content: space-between;
  }

  padding-left: 0;

  list-style: none;
}

.features__item {
  @include bp(tablet) {
    max-width: 242px;
    margin-bottom: 0;
  }
  @include bp(desktop-large) {
    max-width: 370px;
  }
  @include bp(desktop-wide) {
    max-width: 500px;
  }

  margin-bottom: 34px;

  ::v-deep p {
    @include bp(tablet) {
      margin-top: 0;
    }
    @include bp(desktop-large) {
      font-size: 18px;
    }

    font-family: $font-family-second;
    font-size: 16px;
    font-weight: 400;

    margin-bottom: 0;
  }
}

.features__icon {
  @include bp(tablet) {
    margin-bottom: 28px;
  }
  @include bp(desktop-large) {
    margin-bottom: 18px;
  }
  @include bp(desktop-wide) {
    margin-bottom: 28px;
  }

  color: $color__green;

  &--24h {
    width: 51px;
    height: 53px;
  }
  &--layers {
    width: 60px;
    height: 51px;
  }

  &--tech {
    width: 60px;
    height: 45px;
  }
}
</style>

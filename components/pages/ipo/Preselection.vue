<template>
  <div class="preselection">
    <Container class="preselection__container">
      <h2
        v-animate.repeat.fade="'slide-left'"
        v-html="$t('exante.pages.ipo.preselection.header')"
        class="preselection__title"
      ></h2>
      <ol class="preselection__list">
        <li
          v-for="(item, index) in $t('exante.pages.ipo.preselection.items')"
          :key="index"
          v-animate.fade="'slide-left'"
          :style="{ 'transition-delay': `${index * 0.5}s` }"
        >
          <span class="preselection__num"></span>
          <span v-html="item" class="preselection__item"></span>
        </li>
      </ol>
    </Container>
  </div>
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
.preselection {
  @include bp(tablet) {
    padding-top: 100px;
    padding-bottom: 150px;
  }

  padding-top: 50px;
  padding-bottom: 100px;

  background: $color__green;
}

.preselection__title {
  @include h1();
  @include header-underline();
  @include bp(tablet) {
    margin-bottom: 70px;
  }
  @include bp(desktop-wide) {
    margin-bottom: 70px;
  }

  margin-bottom: 30px;

  color: #fff;

  &:after {
    background: #fff;
  }
}

.preselection__list {
  @include bp(tablet) {
    display: flex;

    justify-content: space-between;
  }

  margin: 0;
  padding: 0;

  counter-reset: list 0;

  li {
    // width: 300px;
    // @include bp(mobile) {
    //   width: 500px;
    // }
    @include bp(tablet) {
      max-width: 500px;
      height: 150px;
      margin-right: 50px;
      margin-bottom: 0;
      padding: 50px 50px 50px 70px;
    }

    position: relative;

    display: flex;

    width: 100%;
    margin-bottom: 40px;
    padding: 20px 16px 20px;

    list-style-type: none;

    background: #fff;

    align-items: center;
    &:first-child {
      @include bp(tablet) {
        max-width: 500px;
        padding: 50px;
      }
    }
    &:last-child {
      @include bp(0 tablet) {
        margin-bottom: 0;
      }
    }
  }

  // li:nth-child(2) {
  //   @include bp(tablet) {
  //     width: 520px;
  //   }
  // }

  li:after {
    @include svg_triangle_top(#ffffff);
    @include bp(tablet) {
      @include svg_triangle_right(#ffffff);

      top: 0;
      left: 100%;

      width: 20px;
      height: 100%;

      transform: rotateZ(0);

      background-position: 0 100%;
      background-size: 100% 100%;
    }

    font-size: 0;

    position: absolute;
    top: 100%;
    left: 0;

    width: 100%;
    height: 20px;

    content: '';
    transform: rotateZ(180deg);

    background-position: 0 100%;
    background-size: 100% 100%;
  }

  li:last-child {
    @include bp(tablet) {
      margin-right: 0;
    }

    &:after {
      display: none;
    }
  }

  li:not(:first-child):before {
    @include svg_untriangle_top(#ffffff);
    @include bp(tablet) {
      @include svg_untriangle_right(#ffffff);

      top: 0;
      left: -20px;

      width: 20px;
      height: 100%;

      background-position: 0 100%;
      background-size: 100% 100%;
      border-bottom-width: 0;
    }

    font-size: 0;

    position: absolute;
    top: -20px;
    left: 0;

    width: 100%;
    height: 20px;

    content: '';

    background-position: 0 100%;
    background-size: 100% 100%;
    border-bottom: 1px solid white;
  }

  span {
    position: relative;
    z-index: 1;
  }
}

.preselection__num:before {
  font-size: 56px;
  line-height: 1;

  position: relative;
  z-index: 1;

  margin-right: 22px;

  content: counter(list) '';
  counter-increment: list;

  color: $color__green;
}

.preselection__item {
  @include bp(0 desktop) {
    ::v-deep br {
      display: none;
    }
  }
  @include bp(desktop-wide) {
    font-size: 22px;
  }

  font-size: 18px;
  font-weight: 400;
  line-height: 1.15;
}
</style>

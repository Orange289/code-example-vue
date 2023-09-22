<template>
  <div :class="['features', { 'features--list': list }]">
    <div class="features__wrap">
      <div class="features__items">
        <div
          v-for="(item, icon, index) in $t(itemsTKey)"
          :style="{ 'transition-delay': `${0.15 * (index + 1)}s` }"
          v-animate.repeat.fade="'slide-up'"
          :key="icon + index"
          class="features__item"
        >
          <div class="features__item-wrap">
            <div
              v-if="icon"
              class="features__item-icon-wrap"
              role="presentation"
            >
              <svg-icon :name="icon" class="features__item-icon"></svg-icon>
            </div>
            <div
              v-if="$te(`${itemsTKey}.${icon}.text`)"
              v-html="$t(`${itemsTKey}.${icon}.text`)"
              class="features__item-title"
            ></div>
          </div>
        </div>
      </div>
      <ul v-if="list" class="features__list">
        <li
          v-for="(item, index) in list"
          v-animate.repeat.fade="'slide-up'"
          :key="index"
          v-html="item"
          :style="{ 'transition-delay': `${0.15 * (index + 1)}s` }"
          class="features__list-item"
        ></li>
      </ul>
    </div>
  </div>
</template>

<script>
// import Container from '~/components/general/Container.vue'

export default {
  name: 'Features',
  components: {
    // Container
  },
  props: {
    itemsTKey: {
      type: String,
      default: ''
    },
    list: {
      type: Array,
      default: null
    }
  }
}
</script>

<style lang="scss" scoped>
.features {
  // @include bp(tablet) {
  //   background: radial-gradient(
  //     ellipse at center 90%,
  //     #2d9253 10%,
  //     #114d26 100%
  //   );
  //   background-color: #ffffff;
  //   background-repeat: no-repeat;
  // }
  @include bp(tablet) {
    padding: 30px 0 120px;
  }

  padding: 30px 0 60px;

  color: #fff;
  // background-color: $color__green;

  .features__header {
    @include h1;
    @include header-underline(#fff);

    margin-top: 0;

    color: inherit;
  }

  .features__wrap {
    @include bp(tablet) {
      // display: grid;

      // grid-template-columns: auto 9.375%;
    }

    // padding-top: 20px;
  }

  .features__items {
    // display: flex;
    // flex-wrap: wrap;
    // justify-content: space-between;
    @include bp(tablet) {
      display: grid;

      grid-gap: 50px;
      grid-template-columns: calc(50% - 25px) calc(50% - 25px);
    }
    @include bp(desktop-wide) {
      grid-template-columns: calc(33.3% - 25px) calc(33.3% - 25px) calc(
          33.3% - 25px
        );
    }
  }

  .features__item {
    @include bp(tablet) {
      margin-bottom: 0;
      // flex: 0 1 calc((100% - 100px) / 2);
      // flex: 0 1 calc(84.375% / 2);
    }

    margin-bottom: 40px;

    color: $color__black--light;
  }

  .features__item-title {
    font-family: $font-family-second;
    font-weight: 400;
  }

  .features__item-wrap {
    z-index: 1;

    display: flex;
    flex-direction: column;

    height: 100%;
    padding: 40px 50px;

    background-color: #fff;
    box-shadow: 0 10px 25px 0 rgba(166, 173, 175, 0.1);
  }

  .features__item-icon-wrap {
    margin-right: 20px;
    margin-bottom: 6px;
  }

  .features__item-icon {
    max-width: 60px;
    max-height: 45px;

    color: $color__green;
  }

  .features__list {
    @include bp(tablet) {
      padding-right: 16%;
      padding-left: 30%;
    }

    font-family: $font-family-second;
    font-size: 24px;
    line-height: 1.25;

    margin: 0;
    padding: 0;

    list-style: none;
  }

  .features__list-item {
    position: relative;

    margin-bottom: 45px;
    padding-left: 50px;

    &:before {
      position: absolute;
      top: 0;
      left: 0;

      display: block;

      width: 24px;
      height: 14px;

      content: '';
      transform: rotateZ(-45deg);

      border-bottom: 1px solid $color__white;
      border-left: 1px solid $color__white;
    }
  }

  &.features--list {
    padding: 120px 0 140px;

    .features__wrap {
      @include bp(tablet) {
        // display: grid;

        // grid-template-columns: auto 31.25%;
      }
    }
    .features__item {
      @include bp(tablet) {
        flex: 0 1 calc(93.75% / 2);
      }
    }
  }
}
</style>

<template>
  <div :class="['opportunities', { 'opportunities--list': list }]">
    <Container class="opportunities__container">
      <h2 v-animate.repeat.fade="'slide-left'" class="opportunities__header">
        What can you build with EXANTE Market Data API?
      </h2>
      <div class="opportunities__wrap">
        <div class="opportunities__items">
          <div
            v-for="(item, index) in items"
            :style="{ 'transition-delay': `${0.15 * (index + 1)}s` }"
            v-animate.repeat.fade="'slide-up'"
            :key="index"
            class="opportunities__item"
          >
            <div class="opportunities__item-wrap">
              <div
                v-if="item.icon"
                class="opportunities__item-icon-wrap"
                role="presentation"
              >
                <svg-icon
                  :name="item.icon"
                  class="opportunities__item-icon"
                ></svg-icon>
              </div>
              <div
                v-if="item.text"
                v-html="item.text"
                class="opportunities__item-title"
              ></div>
            </div>
          </div>
        </div>
        <ul v-if="list" class="opportunities__list">
          <li
            v-for="(item, index) in list"
            v-animate.repeat.fade="'slide-up'"
            :key="index"
            v-html="item"
            :style="{ 'transition-delay': `${0.15 * (index + 1)}s` }"
            class="opportunities__list-item"
          ></li>
        </ul>
      </div>
    </Container>
  </div>
</template>

<script>
import Container from '~/components/general/Container.vue'

export default {
  name: 'Opportunities',
  components: {
    Container
  },
  props: {
    items: {
      type: Array,
      default: null
    },
    list: {
      type: Array,
      default: null
    }
  }
}
</script>

<style lang="scss" scoped>
.opportunities {
  @include bp(tablet) {
    background: radial-gradient(
      ellipse at center 90%,
      #2d9253 10%,
      #114d26 100%
    );
    background-color: #ffffff;
    background-repeat: no-repeat;
  }

  padding: 120px 0 160px;

  color: #fff;
  background-color: $color__green;

  .opportunities__header {
    @include h1;
    @include header-underline(#fff);

    margin-top: 0;

    color: inherit;
  }

  .opportunities__wrap {
    @include bp(tablet) {
      display: grid;

      grid-template-columns: auto 9.375%;
    }

    padding-top: 20px;
  }

  .opportunities__items {
    display: flex;

    flex-wrap: wrap;
    justify-content: space-between;
  }

  .opportunities__item {
    @include bp(tablet) {
      // flex: 0 1 calc((100% - 100px) / 2);
      flex: 0 1 calc(84.375% / 2);
    }

    position: relative;
    z-index: 0;

    margin-bottom: 70px;

    color: $color__black--light;
    background-color: #ffffff;
    box-shadow: 0 10px 25px 0 rgba(166, 173, 175, 0.1);

    &:before,
    &:after {
      position: absolute;
      z-index: -1;
      top: 10px;
      left: 10px;

      width: 100%;
      height: 100%;

      content: '';

      background-color: #f2f8f2;
      box-shadow: 0 10px 25px 0 rgba(166, 173, 175, 0.1);
    }
    &:after {
      z-index: -2;
      top: 20px;
      left: 20px;

      background-color: #bfdfcd;
    }
  }

  .opportunities__item-wrap {
    z-index: 1;

    display: flex;

    padding: 55px 40px 50px;

    background-color: #ffffff;

    align-items: center;
  }

  .opportunities__item-icon-wrap {
    margin-right: 20px;
  }

  .opportunities__item-icon {
    max-width: 60px;
    max-height: 45px;

    color: $color__green;
  }

  .opportunities__list {
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

  .opportunities__list-item {
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

  &.opportunities--list {
    padding: 120px 0 140px;

    .opportunities__wrap {
      @include bp(tablet) {
        display: grid;

        grid-template-columns: auto 31.25%;
      }
    }
    .opportunities__item {
      @include bp(tablet) {
        flex: 0 1 calc(93.75% / 2);
      }
    }
  }
}
</style>

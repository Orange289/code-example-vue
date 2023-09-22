<template>
  <div class="roadmap">
    <Container class="roadmap__container">
      <h2
        v-animate.repeat.fade="'slide-left'"
        v-html="$t('exante.pages.ipo.roadmap.header')"
        class="roadmap__title"
      ></h2>
      <div class="roadmap__route">
        <div
          :class="['roadmap__item', `roadmap__item--${item.name}`]"
          v-for="(item, index) in $t('exante.pages.ipo.roadmap.items')"
          :key="index"
        >
          <span v-html="item.title" class="roadmap__item-title"></span>
          <svg-icon
            v-if="item.icon"
            :name="item.icon"
            class="roadmap__icon"
            width="30"
            height="30"
          ></svg-icon>
          <span
            v-if="item.note"
            v-html="item.note"
            class="roadmap__item-note"
          ></span>
        </div>
      </div>
    </Container>
  </div>
</template>

<script>
import Container from '~/components/general/Container.vue'

export default {
  name: 'Roadmap',
  components: {
    Container
  }
}
</script>

<style lang="scss" scoped>
.roadmap {
  @include bp(tablet) {
    padding: 100px 0 135px;
  }

  padding: 50px 0 0;

  background: $color__green--lightest;
}

// .roadmap__container {
//   @include bp(0 tablet) {
//     overflow: scroll;
//   }
// }

.roadmap__title {
  @include h1();
  @include header-underline();
  @include bp(desktop-wide) {
    margin-top: 20px;
    margin-bottom: 70px;
    padding-bottom: 15px;
  }

  margin-bottom: 40px;
  padding-bottom: 28px;
}

.roadmap__route {
  @include bp(tablet) {
    flex-direction: row;
  }

  display: flex;
  flex-direction: column;

  // @include bp(0 tablet) {
  //   width: 1000px;
  // }
}

.roadmap__item {
  @include bp(tablet) {
    flex-direction: column;

    justify-content: flex-start;
    flex-wrap: nowrap;
  }

  position: relative;

  display: flex;
  flex-direction: row-reverse;

  justify-content: flex-end;
  flex-wrap: wrap;

  &:after {
    @include bp(tablet) {
      top: 78px;
      left: 35px;

      width: calc(100% - 40px);
      height: 2px;
    }
    @include bp(desktop-prewide) {
      top: 87px;
    }
    @include bp(desktop-wide) {
      top: 96px;
    }

    position: absolute;
    top: 35px;
    left: 14px;

    width: 2px;
    height: calc(100% - 40px);

    content: '';
  }

  &.roadmap__item--signsup {
    @include bp(tablet) {
      padding-right: 5%;
      padding-bottom: 0;
    }
    @include bp(desktop-wide) {
      padding-right: 113px;
    }

    padding-bottom: 26px;

    color: #7fbe9b;

    &:after {
      @include bp(desktop-wide) {
        width: 160px;
      }

      background: #7fbe9b;
    }
  }

  &.roadmap__item--instrument,
  &.roadmap__item--deactivate {
    @include bp(0 tablet) {
      display: grid;

      justify-content: flex-start;
      grid-template-columns: 40px auto;
    }
  }
  &.roadmap__item--instrument {
    @include bp(0 tablet) {
      padding-bottom: 50px;
    }

    padding-right: 10%;

    color: $color__green;

    &:after {
      background: $color__green;
    }
  }

  &.roadmap__item--deactivate {
    @include bp(tablet) {
      padding-right: 20%;
      padding-bottom: 0;
    }

    padding-bottom: 70px;

    color: #7a8688;

    &:after {
      background: #7a8688;
    }
  }

  &.roadmap__item--closed {
    @include bp(0 tablet) {
      padding-bottom: 80px;
    }

    color: #d2d6d7;

    &:after {
      @include bp(tablet) {
        width: 1000px;
      }

      background: #d2d6d7;
    }
  }
}

.roadmap__icon {
  @include bp(tablet) {
    margin-right: 0;
  }

  margin-right: 10px;

  .roadmap__item--instrument &,
  .roadmap__item--deactivate & {
    @include bp(0 tablet) {
      order: -1;
    }
  }
}

.roadmap__item-title {
  @include bp(0 tablet) {
    font-size: 14px;

    padding-top: 7px;
  }

  font-family: $font-family-second;
  font-weight: 400;

  display: block;

  margin-bottom: 23px;

  ::v-deep br {
    @include bp(0 tablet) {
      display: none;
    }
  }

  .roadmap__item--instrument & {
    @include bp(tablet) {
      flex-direction: row;

      margin-bottom: 23px;
    }

    position: relative;

    display: flex;
    flex-direction: column;

    margin-bottom: 10px;

    &:before {
      @include bp(tablet) {
        position: absolute;
        left: 66px;
        left: 60px;

        width: 2px;
        height: 50px;

        content: '';

        background: $color__green;
      }
      @include bp(desktop) {
        left: 70px;
      }
      @include bp(desktop-wide) {
        left: 82px;
      }
    }

    ::v-deep span:first-child {
      @include bp(tablet) {
        margin-right: 40px;
        margin-bottom: 0;
      }

      margin-bottom: 20px;
    }
  }

  .roadmap__item--deactivate & {
    @include bp(0 tablet) {
      margin-bottom: 10px;
    }
  }
}

.roadmap__item-note {
  @include bp(tablet) {
    margin-top: 20px;
  }

  font-weight: 300;

  display: block;

  color: $color__black--light;

  .roadmap__item--instrument &,
  .roadmap__item--deactivate & {
    @include bp(0 tablet) {
      grid-column: 2;
    }
  }
  .roadmap__item--instrument & {
    ::v-deep b {
      @include bp(0 tablet) {
        display: block;
      }
    }
  }
  .roadmap__item--deactivate & {
    font-weight: 400;

    color: #7a8688;
  }
}
</style>

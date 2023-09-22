<template>
  <section class="info">
    <Container>
      <div class="info__image">
        <picturelazy
          v-animate.repeat.fade="'slide-up'"
          :source="[
            {
              srcset:
                '/static/images/markets-square.webp 1x, /static/images/markets-square@2x.webp 2x',
              media: '(max-width: 1149px), (min-width: 1680px)'
            },
            {
              srcset:
                '/static/images/markets-square.png 1x, /static/images/markets-square@2x.png 2x',
              media: '(max-width: 1149px), (min-width: 1680px)'
            },
            {
              srcset:
                '/static/images/markets-rectangle.webp 1x, /static/images/markets-rectangle@2x.webp 2x',
              media: '(min-width: 1150px) and (max-width: 1679px)'
            },
            {
              srcset:
                '/static/images/markets-rectangle.png 1x, /static/images/markets-rectangle@2x.png 2x',
              media: '(min-width: 1150px) and (max-width: 1679px)'
            }
          ]"
          class="bonds__image"
          alt="Markets"
        ></picturelazy>
      </div>
      <p
        v-animate.repeat.fade="'slide-left'"
        class="info__desc"
        v-html="$t('exante.pages.dma.info.desc')"
      ></p>
      <ul class="info__points">
        <li
          v-for="(item, index) in $t('exante.pages.dma.info.points')"
          :key="index"
          v-animate.repeat.fade="'slide-left'"
          :style="{ 'transition-delay': `${0.15 * (index + 1)}s` }"
          v-html="item"
        ></li>
      </ul>
      <!-- <div class="info__graphic">
        <div
          v-for="(item, index) in info.graphics"
          :key="index"
          :class="[
            'info__graphic-item',
            { 'info__graphic-item--main': item.isMain }
          ]"
        >
          <h4 v-html="item.title"></h4>
          <div class="info__graphic-blocks">
            <div
              v-for="(block, bindex) in item.blocks"
              :key="bindex"
              class="info__graphic-block"
            >
              <span v-html="block"></span>
              <span class="arrow"></span>
            </div>
            <div
              v-html="item.endBlockName"
              class="info__graphic-block info__graphic-block--end"
            ></div>
          </div>
        </div>
      </div> -->
      <div class="info__account">
        <p
          v-animate.repeat.fade="'slide-left'"
          :style="{
            'transition-delay': `${0.15 *
              ($t('exante.pages.dma.info.points').length + 1)}s`
          }"
          v-html="$t('exante.pages.dma.info.accountText')"
        ></p>
        <div
          v-animate.repeat.fade="'slide-left'"
          :style="{
            'transition-delay': `${0.15 *
              ($t('exante.pages.dma.info.points').length + 2)}s`
          }"
          class="but_wrap"
        >
          <OpenAccountButton
            data-style-type="fgreen"
            class="info__btn"
          ></OpenAccountButton>
        </div>
      </div>
    </Container>
  </section>
</template>

<script>
import Container from '~/components/general/Container.vue'
import OpenAccountButton from '~/components/general/OpenAccountButton/OpenAccountButton.vue'
import picturelazy from '~/components/general/Lazy/PictureLazy.vue'

export default {
  name: 'Info',
  components: {
    Container,
    OpenAccountButton,
    picturelazy
  },
  props: {
    info: {
      type: Object,
      default: null
    }
  }
}
</script>

<style lang="scss" scoped>
.info {
  @include bp(desktop) {
    padding: 60px 0 80px;

    .container {
      display: grid;

      grid-template-columns: 49% 48%;
      grid-column-gap: 3%;
      grid-template-rows: max-content auto;
    }
  }
  @include bp(desktop-large) {
    padding: 50px 0 80px;
  }
  @include bp(desktop-wide) {
    padding: 61px 0 78px;

    .container {
      grid-column-gap: 150px;
      grid-template-columns: 850px 600px;
    }
  }

  padding: 60px 0 67px;
}

.info__desc {
  @include bp(desktop) {
    margin: 0 0 55px;
  }
  @include bp(desktop-large) {
    font-size: 22px;
    line-height: 30px;

    margin: 0 0 80px;
  }
  @include bp(desktop-wide) {
    margin: 0 0 50px;
  }

  margin: 0 0 40px;
}

.info__points {
  @include bp(desktop) {
    margin: 0 0 47px;

    li {
      font-size: 22px;
      line-height: 36px;
    }

    li:nth-child(3) {
      align-items: flex-start;
    }
  }
  @include bp(desktop-large) {
    li {
      font-size: 28px;
      line-height: 36px;
    }

    li:before {
      margin-right: 29px;
    }
  }
  @include bp(desktop-wide) {
    li {
      font-size: 32px;
      line-height: 50px;
    }
  }

  margin: 0 0 62px;
  padding: 0;

  li {
    font-family: $font-family-second;
    font-size: 18px;
    line-height: 26px;

    position: relative;

    display: flex;

    list-style: none;

    align-items: center;

    &:before {
      width: 2px;
      height: 40px;
      margin-right: 25px;

      content: '';

      background: $color__green;
    }
  }

  li + li {
    margin-top: 25px;
  }
}

// .info__graphic {
//   @include bp(desktop) {
//     grid-column: 2;
//     grid-row: 1 / 4;
//   }

//   margin-bottom: 46px;
// }

// .info__graphic-item {
//   @include bp(desktop) {
//     padding: 37px 24px 51px;

//     ::v-deep h4 {
//       font-size: 18px;
//       line-height: 25px;

//       span {
//         font-size: 14px;
//         line-height: 25px;
//       }
//     }

//     &:nth-child(2) {
//       .info__graphic-block + .info__graphic-block {
//         margin-left: 42px;
//       }

//       .info__graphic-block .arrow:before {
//         width: 42px;
//       }

//       .info__graphic-block .arrow:after {
//         top: -2px;
//         right: -42px;
//       }

//       .info__graphic-block
//         + .info__graphic-block:not(.info__graphic-block--end):before {
//         left: -21px;
//       }

//       .info__graphic-block
//         + .info__graphic-block:not(.info__graphic-block--end):after {
//         left: -38px;
//       }
//     }

//     &:nth-child(3) {
//       padding-bottom: 60px;

//       .info__graphic-block + .info__graphic-block {
//         margin-left: 19px;
//       }

//       .info__graphic-block .arrow:before {
//         width: 19px;
//       }

//       .info__graphic-block .arrow:after {
//         top: -2px;
//         right: -19px;
//       }

//       .info__graphic-block
//         + .info__graphic-block:not(.info__graphic-block--end):before {
//         left: -10px;
//       }

//       .info__graphic-block
//         + .info__graphic-block:not(.info__graphic-block--end):after {
//         left: -28px;
//       }
//     }
//   }
//   @include bp(desktop-large) {
//     ::v-deep h4 {
//       font-size: 22px;
//       line-height: 30px;

//       span {
//         font-size: 18px;
//         line-height: 30px;

//         display: inline-block;

//         margin-left: 14px;
//       }
//     }

//     &:nth-child(2) {
//       padding: 40px 20px 72px;

//       .info__graphic-block + .info__graphic-block {
//         margin-left: 60px;
//       }

//       .info__graphic-block .arrow:before {
//         width: 60px;
//       }

//       .info__graphic-block .arrow:after {
//         right: -60px;
//       }

//       .info__graphic-block
//         + .info__graphic-block:not(.info__graphic-block--end):before {
//         left: -31px;
//       }

//       .info__graphic-block
//         + .info__graphic-block:not(.info__graphic-block--end):after {
//         left: -64px;
//       }
//     }

//     &:nth-child(3) {
//       padding: 40px 20px 77px;

//       .info__graphic-block + .info__graphic-block {
//         margin-left: 25px;
//       }

//       .info__graphic-block .arrow:after {
//         right: -25px;
//       }

//       .info__graphic-block
//         + .info__graphic-block:not(.info__graphic-block--end):after {
//         left: -40px;
//       }
//     }
//   }
//   @include bp(desktop-wide) {
//     display: flex;

//     padding: 50px 40px;

//     align-items: center;

//     ::v-deep h4 {
//       margin-right: 24px;
//       margin-bottom: 0;

//       span {
//         display: block;

//         margin-left: 0;
//       }
//     }

//     &:nth-child(2) {
//       padding: 50px 40px 60px;
//     }

//     &:nth-child(3) {
//       padding: 50px 40px 60px;
//     }
//   }

//   padding: 10px;
//   padding-bottom: 16px;

//   color: $color__text;
//   border-bottom: 1px solid $color__gray--lightest;

//   &:nth-child(2) {
//     .info__graphic-block + .info__graphic-block {
//       margin-left: 20px;
//     }

//     .info__graphic-block
//       + .info__graphic-block:not(.info__graphic-block--end):before {
//       left: -10px;
//     }

//     .info__graphic-block
//       + .info__graphic-block:not(.info__graphic-block--end):after {
//       content: '100-300 ms';
//     }

//     .info__graphic-block .arrow:before {
//       width: 20px;
//     }

//     .info__graphic-block .arrow:after {
//       top: -1px;
//       right: -21px;
//     }
//   }

//   &:nth-child(3) {
//     padding-bottom: 22px;

//     .info__graphic-block + .info__graphic-block {
//       margin-left: 8px;
//     }

//     .info__graphic-block
//       + .info__graphic-block:not(.info__graphic-block--end):after {
//       content: '100-300 ms';
//     }

//     .info__graphic-block
//       + .info__graphic-block:not(.info__graphic-block--end):before {
//       left: -5px;
//     }

//     .info__graphic-block .arrow:before {
//       width: 8px;
//     }

//     .info__graphic-block .arrow:after {
//       top: -1px;
//       right: -9px;
//     }
//   }

//   ::v-deep h4 {
//     font-size: 8px;
//     font-weight: 400;
//     line-height: 1.67;

//     margin-bottom: 5px;

//     span {
//       font-size: 6px;
//       font-weight: 300;

//       display: block;
//     }
//   }
// }

// .info__graphic-item--main {
//   @include bp(desktop) {
//     padding: 20px 24px 41px;

//     h4 {
//       font-size: 22px;
//       line-height: 25px;
//     }

//     .info__graphic-block {
//       .arrow:before {
//         width: 18px;
//       }

//       .arrow:after {
//         right: -18px;
//       }
//     }

//     .info__graphic-block + .info__graphic-block {
//       margin-left: 18px;
//     }

//     .info__graphic-block
//       + .info__graphic-block:not(.info__graphic-block--end):before {
//       left: -10px;
//     }

//     .info__graphic-block
//       + .info__graphic-block:not(.info__graphic-block--end):after {
//       left: -19px;
//     }
//   }
//   @include bp(desktop-large) {
//     padding: 26px 20px 50px;
//   }
//   @include bp(desktop-wide) {
//     padding: 50px 40px;

//     h4 {
//       width: 88px;
//       margin-right: 72px;
//       margin-bottom: 0;
//     }
//   }

//   padding: 8px 13px;
//   padding-bottom: 17px;

//   background: $color__green--lightest;

//   h4 {
//     font-weight: 500;

//     margin-bottom: 9px;

//     color: $color__green;
//   }

//   .info__graphic-block {
//     color: #fff;
//     background: $color__green--lighter;

//     .arrow:before {
//       width: 7px;

//       background: $color__green;
//     }

//     .arrow:after {
//       right: -9px;

//       border-color: transparent transparent transparent $color__green;
//     }
//   }

//   .info__graphic-block + .info__graphic-block {
//     margin-left: 8px;
//   }

//   .info__graphic-block
//     + .info__graphic-block:not(.info__graphic-block--end):before {
//     left: -4px;

//     opacity: 0.5;
//     background: $color__green--lighter;
//   }

//   .info__graphic-block
//     + .info__graphic-block:not(.info__graphic-block--end):after {
//     left: -9px;

//     content: '50 ms';

//     color: rgba($color__green--lighter, 0.5);
//   }

//   .info__graphic-block--end {
//     background: $color__green;
//   }
// }

// .info__graphic-blocks {
//   display: flex;
// }

// .info__graphic-block {
//   @include bp(desktop) {
//     font-size: 10px;
//     line-height: 12px;

//     width: 100px;
//     height: 66px;
//     padding: 22px 15px;

//     .arrow:before {
//       height: 2px;
//     }

//     .arrow:after {
//       border-width: 3.35px 0 3.35px 8.3px;
//     }

//     & + &:not(.info__graphic-block--end):before {
//       top: calc(50% + 8px);

//       height: 34px;

//       content: '';
//     }

//     & + &:not(.info__graphic-block--end):after {
//       font-size: 10px;

//       bottom: -25px;
//     }
//   }
//   @include bp(desktop-large) {
//     font-size: 14px;
//     line-height: 15px;

//     width: 120px;
//     height: 80px;
//     padding: 25px 20px;

//     & + &:not(.info__graphic-block--end):after {
//       font-size: 14px;
//       line-height: 15px;
//     }
//   }

//   font-size: 4px;
//   font-weight: 500;
//   line-height: 5px;

//   position: relative;

//   display: flex;

//   width: 40px;
//   height: 25px;
//   padding: 8px 5px;

//   background: $color__gray--lightest;

//   align-items: center;

//   .arrow {
//     position: absolute;
//     top: 50%;
//     right: 0;
//   }

//   .arrow:before {
//     position: absolute;

//     height: 1px;

//     content: '';

//     background: #a6adaf;
//   }

//   .arrow:after {
//     position: absolute;
//     top: -2px;
//     right: -4px;

//     width: 0;
//     height: 0;

//     content: '';

//     border-width: 2px 0 2px 3px;
//     border-style: solid;
//     border-color: transparent transparent transparent #a6adaf;
//   }

//   & + & {
//     position: relative;
//   }

//   & + &:not(.info__graphic-block--end):before {
//     position: absolute;
//     top: calc(50% + 2px);

//     width: 1px;
//     height: 14px;

//     content: '';

//     background: rgba(#a6adaf, 0.5);
//   }

//   & + &:not(.info__graphic-block--end):after {
//     font-family: $font-family-second;
//     font-size: 3px;

//     position: absolute;
//     bottom: -9px;
//     left: -15px;

//     color: rgba(#a6adaf, 0.5);
//   }
// }

// .info__graphic-block--end {
//   color: #fff;
//   background: #a6adaf;
// }

.info__account {
  p {
    margin: 0;
    margin-bottom: 30px;
  }
}

.info__image {
  @include bp(desktop) {
    text-align: right;

    grid-column: 2;
    grid-row: 1 / 4;
  }

  margin-bottom: 20px;

  text-align: center;
}
</style>

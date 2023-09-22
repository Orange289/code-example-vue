<template>
  <section class="screen">
    <Container class="screen__container">
      <h2
        v-html="$t('exante.pages.whitelabel.screen.header')"
        v-animate.repeat.fade="'slide-left'"
        class="whitelabel__header screen__header"
      ></h2>
      <div v-animate.repeat.fade="'slide-left'" class="screen__text ">
        <p v-html="$t('exante.pages.whitelabel.screen.text')"></p>
      </div>
      <div
        v-if="$te('exante.pages.whitelabel.screen.items')"
        v-animate.repeat.fade="'slide-left'"
        class="screen__list"
      >
        <List :items="$t('exante.pages.whitelabel.screen.items')"></List>
      </div>
      <div v-animate.repeat.fade="'slide-left'" class="screen__button">
        <WlpOpenAccButt data-style-type="fgreenwt"></WlpOpenAccButt>
      </div>
      <div class="screen__image">
        <picturelazy
          :source="[
            {
              srcset:
                '/static/images/whitelabel/screen.webp 1x, /static/images/whitelabel/screen@2x.webp 2x'
            },
            {
              srcset:
                '/static/images/whitelabel/screen.png 1x, /static/images/whitelabel/screen@2x.png 2x'
            }
          ]"
          v-animate.repeat.fade="'slide-right'"
          class="screen__image-item"
          alt="One-Stop Solution"
        ></picturelazy>
      </div>
    </Container>
  </section>
</template>

<script>
import WlpOpenAccButt from '~/components/pages/whitelabel/general/WlpOpenAccButt.vue'
import List from '~/components/pages/whitelabel/general/List.vue'
import Container from '~/components/general/Container.vue'
import Block800 from '~/components/general/blocks/Block-800.vue'
import picturelazy from '~/components/general/Lazy/PictureLazy.vue'

export default {
  name: 'WhiteLabelScreen',
  components: {
    Container,
    picturelazy,
    WlpOpenAccButt,
    List
  },
  mixins: [Block800]
}
</script>

<style lang="scss" scoped>
.screen {
  @include bp(tablet) {
    min-height: 420px;
    padding-top: 80px;
    padding-bottom: 100px;
  }
  @include bp(desktop-large) {
    padding-top: 95px;
    padding-bottom: 47px;
  }
  @include bp(desktop-wide) {
    padding-top: 100px;
    padding-bottom: 36px;
  }

  padding-top: 25px;
  padding-bottom: 70px;

  color: $color__white;
  background-color: #4e5d60;

  .screen__container {
    @include bp(tablet) {
      display: grid;

      grid-template-columns: auto 42.5%;
    }
    @include bp(desktop-large) {
      grid-template-columns: auto 50%;
    }
    @include bp(desktop-wide) {
      grid-template-columns: auto 47%;
    }

    display: flex;
    flex-direction: column;
  }

  .screen__header.whitelabel__header {
    @include bp(tablet) {
      order: initial;
    }
    @include bp(tablet desktop-large) {
      margin-bottom: 33px;
      padding-bottom: 12px;
    }
    @include bp(desktop-large) {
      margin-bottom: 15px;
    }

    margin-top: 0;

    order: -1;
  }

  .screen__text {
    @include bp(tablet) {
      // width: 100%;
      // max-width: 180px;
      // margin-right: 60px;
      max-width: 90%;
      margin-bottom: 38px;
      padding-right: 0;

      order: initial;
    }
    @include bp(desktop-large) {
      max-width: 83.8%;
      margin-bottom: 32px;
    }

    overflow: hidden;

    margin-bottom: 15px;
    padding-right: 20px;
    // @include bp(desktop-large) {
    //   max-width: 240px;
    // }
    // @include bp(desktop-wide) {
    //   max-width: 320px;
    //   margin-top: 30px;
    //   margin-right: 88px;
    // }

    order: -1;

    p {
      @include bp(tablet) {
        font-size: 16px;

        margin-bottom: 0;
      }
      @include bp(desktop-large) {
        font-size: 18px;
        line-height: 1.67;
      }
      @include bp(desktop-wide) {
        font-size: 32px;
        line-height: 1.25;

        margin-top: 30px;
      }

      font-family: $font-family-second;
      line-height: 1.56;

      // &:first-child {
      //   @include bp(tablet) {
      //     margin-top: 0;
      //   }
      // }

      // &:last-child {
      //   @include bp(tablet) {
      //     margin-bottom: 30px;
      //   }
      // }
    }

    .site-button {
      @include bp(tablet) {
        display: block;
      }
      @include bp(desktop-wide) {
        max-width: 270px;
      }

      display: none;
    }
  }

  .screen__image {
    @include bp(tablet) {
      width: 123%;
      margin-bottom: 0;
      padding-top: 50px;

      transform: translateX(-1.5%);

      grid-column: 2;
      grid-row: 1 / 12;
      order: initial;
    }
    @include bp(desktop-large) {
      width: 103.5%;
      padding-top: 30px;

      transform: translateX(8%);
    }
    @include bp(desktop-wide) {
      padding-top: 50px;

      transform: translateX(0);
    }

    width: 115%;
    margin-bottom: 20px;

    order: -1;
    // @include bp(tablet) {
    //   max-height: 240px;
    //   margin: 0;
    // }
    // @include bp(desktop-large) {
    //   max-height: 315px;
    // }

    // margin: 30px 0;

    img {
      @include bp(desktop-large) {
        height: 100%;
      }
      @include bp(desktop-wide) {
        height: auto;
      }
    }
  }

  .screen__list {
    @include bp(tablet) {
      margin-bottom: 20px;

      flex-shrink: 0;
    }
    @include bp(desktop-large) {
      margin-bottom: 35px;
    }

    margin-bottom: 50px;

    ::v-deep .list {
      @include bp(mobile) {
        column-count: 2;
      }
      @include bp(tablet) {
        font-size: 16px;
        //   display: flex;
        //   flex-direction: column;
        // grid-template-columns: 45% 40%;

        padding-right: 14%;
        // max-width: 86%;
      }
      @include bp(desktop-large) {
        font-size: 18px;
        line-height: 1.1;
        // padding-right: 18px;

        max-width: calc(100% - 18px);
      }
      @include bp(desktop-wide) {
        font-size: 22px;

        max-width: 73%;
        // display: grid;
        padding-right: 0;
        // grid-template-columns: 38% auto;
      }

      list-style: none;

      .list__item {
        @include bp(mobile tablet) {
          display: flex;
        }
        @include bp(tablet) {
          margin-bottom: 20px;
        }
        @include bp(desktop-wide) {
          margin-bottom: 25px;
          // margin-bottom: 40px;
          // padding-left: 70px;
          // &:before {
          //   width: 30px;
          //   height: 20px;
          // }
        }

        margin-bottom: 10px;
        // padding-left: 50px;

        &:nth-child(5) {
          @include bp(desktop-large desktop-wide) {
            margin-right: 80px;
          }
        }
        &:nth-child(6) {
          @include bp(desktop-large desktop-wide) {
            margin-right: -20px;
          }
        }
        &:nth-child(5),
        &:nth-child(6) {
          @include bp(desktop-wide) {
            margin-right: -50%;
          }
        }
      }
    }
    ::v-deep .list__icon-wrap {
      @include bp(0 tablet) {
        margin-right: 16px;
      }
      @include bp(tablet desktop-wide) {
        margin-right: 15px;
      }
    }

    // .screen__button {
    //   @include bp(tablet) {
    //     display: none;
    //   }
    // }
  }
}
</style>

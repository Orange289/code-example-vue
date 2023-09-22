<template>
  <section class="start">
    <Container class="start__container">
      <!-- <div class="start__text"> -->
      <h2
        v-html="$t('exante.pages.whitelabel.start.header')"
        v-animate.repeat.fade="'slide-left'"
        class="whitelabel__header start__header"
      ></h2>
      <div class="start__image">
        <picturelazy
          :source="[
            {
              srcset:
                '/static/images/whitelabel/notebook--dark.webp 1x, /static/images/whitelabel/notebook--dark@2x.webp 2x'
            },
            {
              srcset:
                '/static/images/whitelabel/notebook--dark.png 1x, /static/images/whitelabel/notebook--dark@2x.png 2x'
            }
          ]"
          v-animate.repeat.fade="'slide-right'"
          class="start__image-item"
          alt=""
        ></picturelazy>
      </div>
      <div v-animate.repeat.fade="'slide-left'" class="start__list">
        <List
          :items="$t('exante.pages.whitelabel.start.list')"
          icon="whitelabel/radiocheck-icon-rounded"
        ></List>
      </div>
      <div v-animate.repeat.fade="'slide-left'" class="start__button-wrap">
        <WlpOpenAccButt class="start__button" data-style-type="fgreenwt">
        </WlpOpenAccButt>
      </div>
      <!-- </div> -->
    </Container>
  </section>
</template>

<script>
import WlpOpenAccButt from '~/components/pages/whitelabel/general/WlpOpenAccButt.vue'
import Container from '~/components/general/Container.vue'
import Block800 from '~/components/general/blocks/Block-800.vue'
import picturelazy from '~/components/general/Lazy/PictureLazy.vue'
import List from '~/components/pages/whitelabel/general/List.vue'

export default {
  name: 'WhiteLabelStart',
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
.start {
  @include bp(tablet) {
    padding-top: 55px;
    padding-bottom: 40px;
  }
  @include bp(tablet desktop-large) {
    min-height: 500px;
  }
  @include bp(desktop-large) {
    padding-top: 80px;
    padding-bottom: 30px;
  }
  @include bp(desktop-large desktop-wide) {
    min-height: 650px;
  }
  @include bp(desktop-wide) {
    padding-top: 100px;
  }

  overflow: hidden;

  padding-top: 45px;
  padding-bottom: 70px;

  color: $color__white;
  background-color: #252c2e;

  .start__container {
    @include bp(tablet) {
      display: grid;

      grid-template-columns: 53.125% auto;
      grid-template-rows: max-content max-content auto;
    }
    @include bp(desktop-large) {
      grid-template-columns: 52% auto;
    }
  }

  .start__header.whitelabel__header {
    @include bp(tablet) {
      margin-bottom: 25px;

      text-align: left;

      // grid-column: 1/3;
    }
    @include bp(desktop-large) {
      margin-bottom: 40px;
    }
    @include bp(desktop-wide) {
      padding-bottom: 0;
    }

    margin-bottom: 20px;
    padding-bottom: 0;

    text-align: center;

    &::after {
      display: none;
    }
  }

  .start__list {
    ::v-deep .list {
      @include bp(tablet) {
        margin-bottom: 20px;
      }
      @include bp(desktop-large) {
        margin-bottom: 40px;
      }
      @include bp(desktop-wide) {
        margin-bottom: 60px;
      }
      // margin-bottom: 20px;

      margin-bottom: 27px;

      .list__item {
        @include bp(tablet) {
          padding-bottom: 25px;
        }
        @include bp(desktop-large) {
          padding-bottom: 34px;
        }
        @include bp(desktop-wide) {
          padding-bottom: 50px;
        }

        position: relative;

        display: flex;

        padding-bottom: 28px;

        &:after {
          position: absolute;
          top: 28px;
          left: 11px;

          display: block;

          width: 2px;
          height: calc(100% - 32px);

          content: '';

          background-color: $color__green--light;
        }

        &:last-child {
          padding-bottom: 0;

          &:after {
            display: none;
          }
        }
      }

      .list__icon {
        width: 24px;
        height: 24px;
      }
    }
    ::v-deep .list__icon-wrap {
      @include bp(0 tablet) {
        margin-right: 25px;
      }
    }
  }

  .start__image {
    @include bp(tablet) {
      margin-bottom: 0;

      grid-column: 2;
      grid-row: 1/4;
    }

    margin-bottom: 15px;

    ::v-deep picture {
      @include bp(tablet) {
        width: 130%;
        margin: 4% -20% 0 -7%;
      }
      @include bp(desktop-large) {
        width: 147%;
        margin: 8.5% -25% 0;
      }
      @include bp(desktop-wide) {
        width: 150%;
        margin: 1% -25% 0;
      }

      width: 140%;
      margin: -2% -16.5% 0;
    }
    // @include bp(desktop-wide) {
    //   margin-top: -56px;
    // }

    // margin-bottom: 20px;

    // img {
    //   @include bp(tablet) {
    //     max-width: 118%;
    //     margin-right: -9%;
    //     margin-left: -9%;
    //   }
    //   @include bp(desktop-large) {
    //     max-width: 150%;
    //     margin-right: -25%;
    //     margin-left: -25%;
    //   }

    //   max-width: calc(100% + 60px);
    //   margin-right: -30px;
    //   margin-left: -30px;
    // }
  }

  .start__button {
    @include bp(tablet) {
      width: auto;
      min-width: 220px;
    }
    @include bp(desktop-large) {
      min-width: 0;
      min-width: 300px;
    }

    width: 100%;
  }
}
</style>

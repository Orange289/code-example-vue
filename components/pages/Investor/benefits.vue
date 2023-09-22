<template>
  <section class="benefits">
    <Container class="benefits__container">
      <div class="benefits__content">
        <h2
          v-html="$t('exante.pages.investor.benefits.header')"
          v-animate.repeat.fade="'slide-up'"
          class="benefits__header"
        ></h2>
        <IconTextList
          :tKey="'exante.pages.investor.benefits.items'"
          class="benefits__list"
        ></IconTextList>
      </div>
      <div class="benefits__image-wrap" sticky-container>
        <picturelazy
          :source="[
            {
              srcset:
                '/static/images/investor/phone.webp 1x,/static/images/investor/phone@2x.webp 2x'
            },
            {
              srcset:
                '/static/images/investor/phone.png 1x, /static/images/investor/phone@2x.png 2x'
            }
          ]"
          v-sticky
          sticky-offset="{ top: 200 }"
          alt=""
          class="benefits__image"
          role="presentation"
        ></picturelazy>
      </div>
    </Container>
  </section>
</template>

<script>
import Container from '~/components/general/Container.vue'
import Block800 from '~/components/general/blocks/Block-800.vue'
import IconTextList from '~/components/icon-text/IconTextList.vue'
import picturelazy from '~/components/general/Lazy/PictureLazy.vue'

export default {
  name: 'InvestorBenefits',
  components: {
    Container,
    IconTextList,
    picturelazy
  },
  mixins: [Block800]
}
</script>

<style lang="scss" scoped>
.benefits {
  // @include bp(tablet) {
  //   padding-top: 70px;
  //   padding-bottom: 41px;
  // }
  // padding-top: 35px;
  // padding-bottom: 44px;
  background-color: #fff;

  .benefits__container {
    @include bp(tablet) {
      display: flex;
    }
  }

  .benefits__content {
    @include bp(tablet) {
      padding-top: 60px;
      padding-bottom: 40px;
    }
    @include bp(desktop-large) {
      max-width: 58%;
      padding-top: 70px;
    }
    @include bp(desktop-wide) {
      max-width: 63.5%;
    }

    width: 100%;
    padding-top: 45px;
    padding-bottom: 20px;
  }

  .benefits__image-wrap {
    @include bp(tablet) {
      display: block;

      width: 100%;
      max-width: 36%;
      min-height: 100%;
      margin: -50px -50px -50px 20px;
    }
    @include bp(desktop-large) {
      max-width: 45%;
      margin-right: -80px;
      margin-left: 30px;
      padding-right: 6.25%;
    }
    @include bp(desktop-large) {
      max-width: 37.5%;
    }

    width: 80%;
    margin-bottom: 43px;
    margin-left: 25px;
  }
  .benefits__image {
    @include bp(tablet) {
      margin-top: -100px;
    }
    ::v-deep picture {
      position: relative;
      z-index: 0;

      display: block;

      @supports (filter: blur(55px)) {
        &::after {
          position: absolute;
          z-index: -1;
          top: 50%;
          left: 50%;

          display: block;

          width: 50%;
          height: 85%;

          content: '';
          transform: translate(-20%, -5%) skew(-15deg, 0deg)
            rotate3d(2.5, -1, 1, 65deg);

          opacity: 0.3;
          background: black;

          filter: blur(55px);
        }
      }
    }
  }

  .benefits__header {
    @include h1;
    @include header_underline;
    @include bp(desktop-large) {
      margin-bottom: 40px;
      padding-bottom: 10px;
    }
    @include bp(desktop-wide) {
      margin-bottom: 35px;
      padding-bottom: 35px;
    }

    margin-bottom: 20px;
  }

  .benefits__list {
    ::v-deep .icon-text {
      @include bp(tablet) {
        max-width: 50%;
        padding-right: 50px;

        &:nth-child(even) {
          padding-right: 0px;
        }
      }

      width: 100%;

      .icon-text__icon-wrap {
        @include bp(tablet) {
          margin-bottom: 15px;
        }
        @include bp(desktop-wide) {
          margin-bottom: 20px;
        }

        margin-bottom: 5px;
      }

      .icon-text__icon {
        @include bp(desktop-large) {
          max-width: 60px;
          max-height: 55px;
        }

        max-width: 50px;
        max-height: 45px;
      }
      .icon-text__title {
        br {
          @include bp(0 desktop-large) {
            display: none;
          }
        }
      }

      &:nth-child(1),
      &:nth-child(2) {
        @include bp(desktop-large desktop-wide) {
          margin-bottom: 25px;
        }
        .icon-text__icon-wrap {
          @include bp(tablet desktop-wide) {
            margin-bottom: 10px;
          }
          // @include bp(desktop-large) {
          //   margin-bottom: 20px;
          // }
        }
      }
      &:nth-child(2) {
        .icon-text__title {
          @include bp(desktop-large) {
            margin-right: -60px;
          }
        }
      }
      &:nth-child(3),
      &:nth-child(4) {
        .icon-text__icon-wrap {
          @include bp(tablet) {
            margin-bottom: 25px;
          }
          @include bp(desktop-large) {
            margin-bottom: 30px;
          }
          @include bp(desktop-wide) {
            margin-bottom: 30px;
          }
        }
      }
      &:nth-child(4) {
        @include bp(desktop-large) {
          padding-right: 10px;
        }
      }
      &:nth-child(3),
      &:nth-child(4),
      &:nth-child(5),
      &:nth-child(6) {
        br {
          @include bp(desktop-large) {
            display: none;
          }
        }
      }
      &:nth-child(5) {
        .icon-text__icon-wrap {
          @include bp(desktop-large) {
            margin-bottom: 20px;
          }
        }
      }
      &:nth-child(6) {
        .icon-text__icon-wrap {
          @include bp(desktop-large) {
            margin-bottom: 5px;
          }
        }
      }

      &:last-child {
        @include bp(tablet) {
          padding-right: 100px;
        }
        @include bp(desktop-large) {
          padding-right: 80px;
        }
        @include bp(desktop-wide) {
          padding-right: 120px;
        }
      }
    }
  }

  ::v-deep .icon-text-list {
    .icon-text-list__item {
      @include bp(tablet) {
        margin-bottom: 20px;
      }
      @include bp(desktop-large) {
        margin-bottom: 58px;
      }

      margin-bottom: 30px;
    }
  }
}
</style>

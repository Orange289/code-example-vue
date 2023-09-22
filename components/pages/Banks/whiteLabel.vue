<template>
  <section class="white-label">
    <Container>
      <div class="white-label__content">
        <div class="white-label__desc">
          <h2
            v-animate.repeat.fade="'slide-left'"
            class="white-label__header"
            v-html="$t('exante.pages.banks-institutionals.whitelabel.title')"
          ></h2>
          <div class="white-label__subtitle">
            <p
              v-animate.repeat.fade="'slide-left'"
              v-html="
                $t('exante.pages.banks-institutionals.whitelabel.subtitle')
              "
            ></p>
            <div
              v-animate.repeat.fade="'slide-left'"
              stye="transition-dalay:0.4s"
            >
              <!-- <OpenAccountButton
                class="white-label__button"
                data-style-type="fgreen"
              ></OpenAccountButton> -->
              <SiteButton
                class="white-label__button white-label__button--contact"
                data-style-type="fgreen"
                :href="`${$langUrlPrefix}/company/contact_us/`"
                >{{
                  $t('exante.pages.banks-institutionals.whitelabel.contactBtn')
                }}
              </SiteButton>
            </div>
          </div>
          <p
            v-animate.repeat.fade="'slide-left'"
            class="white-label__desc-cont"
            v-html="$t('exante.pages.banks-institutionals.whitelabel.desc')"
          ></p>
        </div>

        <picturelazy
          v-animate.repeat.fade="'slide-right'"
          :source="[
            {
              srcset:
                '/static/images/banks-institutionals/whitelabel-pic.webp 1x, /static/images/banks-institutionals/whitelabel-pic@2x.webp 2x'
            },
            {
              srcset:
                '/static/images/banks-institutionals/whitelabel-pic.png 1x, /static/images/banks-institutionals/whitelabel-pic@2x.png 2x'
            }
          ]"
          :alt="$t('exante.pages.banks-institutionals.whitelabel.image_alt')"
          class="white-label__img"
          role="presentation"
        ></picturelazy>
      </div>
      <IconTextList
        :t-key="'exante.pages.banks-institutionals.whitelabel.items'"
        class="white-label__features"
      ></IconTextList>
    </Container>
  </section>
</template>

<script>
import Container from '~/components/general/Container.vue'
import SiteButton from '~/components/general/SiteButton/SiteButton.vue'
// import OpenAccountButton from '~/components/general/OpenAccountButton/OpenAccountButton.vue'
import Block800 from '~/components/general/blocks/Block-800.vue'
import IconTextList from '~/components/icon-text/IconTextList.vue'
import picturelazy from '~/components/general/Lazy/PictureLazy.vue'

export default {
  name: 'WhiteLabel',
  components: {
    Container,
    SiteButton,
    // OpenAccountButton,
    IconTextList,
    picturelazy
  },
  mixins: [Block800]
}
</script>

<style lang="scss" scoped>
.white-label {
  @include bp(tablet) {
    padding-top: 54px;
    padding-bottom: 106px;
  }
  @include bp(desktop) {
    padding-top: 67px;
    padding-bottom: 110px;

    ::v-deep .icon-text .icon-text__icon {
      max-width: 50px;
      max-height: 50px;
    }

    ::v-deep .icon-text .icon-text__icon-wrap {
      margin-bottom: 25px;
    }
  }
  @include bp(desktop-wide) {
    padding-top: 111px;
    padding-bottom: 118px;
  }

  overflow: hidden;

  padding-top: 40px;
  padding-bottom: 46px;

  background: #f7f8fb;

  .white-label__content {
    @include bp(tablet) {
      display: flex;
    }

    position: relative;
  }

  .white-label__desc {
    @include bp(desktop) {
      margin-bottom: 35px;
    }
    @include bp(desktop-wide) {
      margin-bottom: 30px;
    }

    position: relative;
    z-index: 1;

    width: 100%;
    max-width: 700px;
  }

  .white-label__desc-cont {
    @include bp(tablet) {
      margin-top: 70px;
      margin-bottom: 0;
    }
    @include bp(desktop-wide) {
      margin-top: 38px;
    }

    margin-top: 25px;
  }

  .white-label__header {
    @include header-underline();
    @include h1;
    @include bp(tablet) {
      margin-bottom: 46px;
    }

    margin-bottom: 20px;
  }

  .white-label__subtitle {
    @include bp(tablet) {
      flex-direction: row;

      flex-wrap: nowrap;
    }

    font-weight: 400;

    display: flex;
    flex-direction: column;

    p {
      @include bp(tablet) {
        margin-bottom: 0;
      }
      @include bp(desktop) {
        font-size: 18px;
      }
      @include bp(desktop-wide) {
        font-size: 22px;
      }

      margin: 0;
      margin-bottom: 20px;
    }
  }

  .white-label__button {
    @include bp(tablet) {
      margin-left: 53px;
    }
  }

  .white-label__button--contact {
    @include bp(tablet) {
      min-width: 270px;
    }

    width: 100%;
  }

  .white-label__img {
    @include bp(tablet) {
      width: 936px;
      // margin-top: -100px;
      margin-right: -200px;
      margin-bottom: 0;
      margin-left: 0;
    }
    @include bp(desktop-large) {
      width: 1036px;
      // margin-top: -150px;
      margin-right: -300px;
    }
    @include bp(desktop-wide) {
      position: absolute;
      z-index: 0;
      top: -50px;
      right: 68px;

      width: 1133px;
    }

    max-width: calc(100% + 80px);
    margin-right: -40px;
    margin-bottom: 23px;
    margin-left: -40px;
  }

  .white-label__features {
    @include bp(tablet) {
      display: flex;

      flex-wrap: nowrap;
    }

    position: relative;
    z-index: 1;

    ::v-deep .icon-text__text {
      font-weight: 400;

      margin: 0;

      color: $color__black--light;
    }

    ::v-deep .icon-text-list__item {
      @include bp(tablet) {
        max-width: 200px;
        margin-right: 60px;
        margin-bottom: 0;
        padding-right: 0;
      }
      // @include bp(desktop) {
      //   max-width: 213px;
      // }
      @include bp(desktop-wide) {
        max-width: 270px;
      }

      width: 100%;
      margin-bottom: 31px;

      &:last-child {
        @include bp(tablet) {
          margin-right: 0;
        }
        @include bp(desktop desktop-wide) {
          max-width: 160px;
        }
      }

      ::v-deep .icon-text .icon-text__title {
        @include bp(desktop) {
          font-size: 18px;
          line-height: 30px;
        }
      }
    }
  }
}
</style>

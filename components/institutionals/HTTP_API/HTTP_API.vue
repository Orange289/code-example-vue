<template>
  <section class="http_api">
    <Container class="http_api__container">
      <div class="http_api__content">
        <h2
          v-if="$te('exante.pages.institutionals.httpapi.header')"
          v-html="$t('exante.pages.institutionals.httpapi.header')"
          v-animate.repeat.fade="'slide-left'"
          class="http_api__header"
        ></h2>
        <p
          v-if="$te('exante.pages.institutionals.httpapi.text')"
          v-html="$t('exante.pages.institutionals.httpapi.text')"
          v-animate.repeat.fade="'slide-left'"
          class="http_api__text"
        ></p>
      </div>
      <div class="http_api__content">
        <IconTextList
          :tKey="'exante.pages.institutionals.httpapi.items'"
          class="http_api__list"
        ></IconTextList>
      </div>
      <Picturelazy
        :source="[
          {
            srcset:
              '/static/images/traders/devices.webp 1x, /static/images/traders/devices@2x.webp 2x'
          },
          {
            srcset:
              '/static/images/traders/devices.png 1x, /static/images/traders/devices@2x.png 2x'
          }
        ]"
        v-animate.repeat.fade="'slide-right'"
        class="http_api__image"
      ></Picturelazy>
      <div v-animate.repeat.fade="'slide-left'" class="http_api__button-wrap">
        <OpenAccountButton
          data-style-type="fgreen"
          class="http_api__button"
        ></OpenAccountButton>
      </div>
    </Container>
  </section>
</template>

<script>
import OpenAccountButton from '~/components/general/OpenAccountButton/OpenAccountButton.vue'
import Container from '~/components/general/Container.vue'
import Block800 from '~/components/general/blocks/Block-800.vue'
import IconTextList from '~/components/icon-text/IconTextList.vue'
import Picturelazy from '~/components/general/Lazy/PictureLazy.vue'

export default {
  name: 'HTTPAPI',
  components: {
    Container,
    OpenAccountButton,
    IconTextList,
    Picturelazy
  },
  mixins: [Block800]
}
</script>

<style lang="scss" scoped>
.http_api {
  @include bp(tablet) {
    padding-top: 60px;
    padding-bottom: 80px;
  }
  @include bp(desktop-large) {
    padding-top: 68px;
    padding-bottom: 140px;
  }
  @include bp(desktop-wide) {
    padding-top: 90px;
    padding-bottom: 100px;
  }

  padding-top: 43px;
  padding-bottom: 50px;

  .http_api__container {
    @include bp(tablet) {
      display: grid;

      grid-template-columns: 59.5% auto;
    }
    @include bp(desktop-large) {
      grid-template-columns: 50.625% auto;
    }
  }

  .http_api__content {
    @include bp(tablet) {
      grid-column: 1;
    }
  }

  .http_api__image {
    @include bp(tablet) {
      justify-content: center;
      grid-column: 2;
      grid-row: 1/4;
      // max-width: 100%;
      ::v-deep picture {
        margin-left: -90px;
      }
    }
    @include bp(desktop-large) {
      ::v-deep picture {
        // min-width: 128%;
        // margin-top: -40px;
        max-width: 106%;
        margin-top: 72px;
        // min-width: 128.4%;
        // margin-top: -50px; // 70 + 90(padding)
      }
    }
    @include bp(desktop-wide) {
      margin-bottom: -80px;
      ::v-deep picture {
        min-width: 128%;
        margin-top: -40px;
        margin-left: 0;
      }
    }

    ::v-deep img {
      @include bp(tablet) {
        max-width: 100%;
        margin: 0;

        transform: none;
      }

      max-width: calc(100vw - 20px);
      margin: -15px -40px 25px;

      transform: translateX(-10px);
    }
  }

  .http_api__header {
    @include h1;
    @include header-underline;
    @include bp(0 tablet) {
      margin-bottom: 20px;
      padding-bottom: 15px;
    }
    @include bp(tablet desktop-large) {
      margin-bottom: 28px;
    }
    @include bp(desktop-large desktop-wide) {
      margin-bottom: 48px;
      padding-bottom: 10px;
    }
  }

  .http_api__text {
    @include bp(tablet) {
      margin-bottom: 65px;
    }
    @include bp(desktop-large) {
      margin-bottom: 30px;
    }
    @include bp(desktop-wide) {
      margin-bottom: 25px;
    }

    margin-bottom: 15px;
  }

  ::v-deep .icon-text-list .icon-text-list__item {
    @include bp(tablet) {
      width: 44%;
      margin-bottom: 50px;
      // padding-right: 57px;
      padding-right: 40px;
    }
    @include bp(desktop-large) {
      width: 42%;
      margin-bottom: 35px;
      padding-right: 65px;
    }
    @include bp(desktop-wide) {
      width: 50%;
      margin-bottom: 62px;
    }

    &:nth-child(1),
    &:nth-child(3) {
      @include bp(tablet desktop-large) {
        width: 56%;
      }
      @include bp(desktop-large desktop-wide) {
        width: 58%;
      }
    }
    &:nth-child(1),
    &:nth-child(2) {
      // @include bp(desktop-large) {
      //   padding-right: 75px;
      // }
      @include bp(desktop-wide) {
        margin-bottom: 54px;
        padding-right: 65px;
      }
    }

    &:nth-child(1) {
      @include bp(tablet desktop-wide) {
        padding-right: 140px;
      }
    }
    &:nth-child(2) {
      @include bp(tablet desktop-wide) {
        padding-right: 60px;
      }
    }
    &:nth-child(3) {
      @include bp(tablet desktop-large) {
        padding-right: 90px;
      }
      @include bp(desktop-large desktop-wide) {
        padding-right: 110px;
      }
    }
    &:last-child {
      @include bp(tablet desktop-wide) {
        padding-right: 0px;
      }
    }
  }

  ::v-deep .icon-text {
    .icon-text__icon-wrap {
      @include bp(tablet) {
        margin-bottom: 17px;
      }
      @include bp(desktop-wide) {
        margin-bottom: 20px;
      }
    }

    .icon-text__icon {
      @include bp(desktop-wide) {
        max-width: 50px;
        max-height: 64px;
      }

      max-width: 42px;
      max-height: 58px;
    }

    &:first-child {
      .icon-text__icon-wrap {
        @include bp(0 tablet) {
          margin-bottom: 5px;
        }
      }
    }
    &:nth-child(3) {
      .icon-text__icon-wrap {
        @include bp(tablet desktop-wide) {
          margin-bottom: 20px;
        }
      }
    }
    &:last-child {
      .icon-text__icon-wrap {
        @include bp(tablet desktop-wide) {
          margin-bottom: 20px;
        }
      }
    }
  }

  .http_api__button-wrap {
    @include bp(tablet) {
      grid-column: 1;
    }

    transition-delay: 0.75s;
  }
}
</style>

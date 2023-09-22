<template>
  <div class="howto">
    <Container class="howto__container">
      <h2
        v-animate.repeat.fade="'slide-left'"
        class="howto__header"
        v-html="$t('exante.pages.ipo.howto.header')"
      ></h2>
      <StartList
        t-key="exante.pages.ipo.howto.items"
        class="howto__list"
      ></StartList>
      <Picturelazy
        v-animate.repeat.fade="'slide-right'"
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
        class="howto__image"
      ></Picturelazy>
      <div v-animate.repeat.fade="'slide-left'" class="howto__button-wrap">
        <OpenAccountButton data-style-type="fgreen" class="howto__button">
          {{ $t('exante.globals.open_account.getStartedNow') }}
        </OpenAccountButton>
      </div>
    </Container>
  </div>
</template>

<script>
import Container from '~/components/general/Container.vue'
import OpenAccountButton from '~/components/general/OpenAccountButton/OpenAccountButton.vue'
import Picturelazy from '~/components/general/Lazy/PictureLazy.vue'
import StartList from '~/components/institutionals/Start/StartList.vue'

export default {
  name: 'HowToUbscribe',
  components: {
    Container,
    StartList,
    OpenAccountButton,
    Picturelazy
  }
}
</script>

<style lang="scss" scoped>
.howto {
  @include bp(tablet) {
    padding: 110px 0 130px;
  }

  padding: 50px 0;

  background-color: #f7f7f7;

  .howto__container {
    @include bp(tablet) {
      display: grid;

      grid-template-columns: 59.5% auto;
    }
    @include bp(desktop-large) {
      grid-template-columns: 42.0625% auto;
    }
  }
  .howto__header {
    @include h1();
  }
  .howto__list {
    @include bp(tablet) {
      grid-column: 1;
    }

    font-weight: 400;
    ::v-deep li {
      @include bp(0 mobile) {
        padding-bottom: 20px;
      }
    }

    ::v-deep span {
      font-weight: 300;
    }
  }

  .howto__image {
    @include bp(tablet) {
      justify-content: center;
      grid-column: 2;
      grid-row: 1/4;

      ::v-deep picture {
        margin-left: -90px;
      }
    }
    @include bp(desktop-large) {
      ::v-deep picture {
        // max-width: 106%;
        margin-top: 72px;
      }
    }
    @include bp(desktop-wide) {
      margin-bottom: -80px;

      ::v-deep picture {
        // min-width: 128%;
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

  .howto__button {
    @include bp(tablet) {
      min-width: 300px;
    }
  }
}
</style>

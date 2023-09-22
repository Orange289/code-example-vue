<template>
  <section class="fix-api">
    <Container class="fix-api__container">
      <div class="fix-api__header-wrap">
        <h2
          v-html="$t('exante.pages.small-and-medium-businesses.fixapi.header')"
          v-animate.repeat.fade="'slide-up'"
          class="fix-api__header"
        ></h2>
        <div
          v-html="
            $t('exante.pages.small-and-medium-businesses.fixapi.subheader')
          "
          v-animate.repeat.fade="'slide-up'"
          class="fix-api__subheader"
        ></div>
        <div v-animate.repeat.fade="'slide-up'">
          <OpenAccountButton
            data-style-type="fgreen"
            class="fix-api__button"
          ></OpenAccountButton>
        </div>
      </div>
      <div class="fix-api__content">
        <picturelazy
          :source="[
            {
              srcset:
                '/static/images/traders/fix-protocol.webp 1x, /static/images/traders/fix-protocol@2x.webp 2x'
            },
            {
              srcset:
                '/static/images/traders/fix-protocol.png 1x, /static/images/traders/fix-protocol@2x.png 2x'
            }
          ]"
          v-animate.repeat.fade="'slide-up'"
          alt="Fix protocol"
          class="fix-api__image"
        ></picturelazy>
        <div v-animate.repeat.fade="'slide-up'" class="fix-api__texts">
          <p
            v-html="$t('exante.pages.small-and-medium-businesses.fixapi.text1')"
          ></p>
          <p
            v-html="$t('exante.pages.small-and-medium-businesses.fixapi.text2')"
          ></p>
        </div>
      </div>
    </Container>
  </section>
</template>

<script>
import Container from '~/components/general/Container.vue'
import OpenAccountButton from '~/components/general/OpenAccountButton/OpenAccountButton.vue'
import Block500 from '~/components/general/blocks/Block-500.vue'
import picturelazy from '~/components/general/Lazy/PictureLazy.vue'

export default {
  name: 'FixApi',
  components: {
    Container,
    OpenAccountButton,
    picturelazy
  },
  mixins: [Block500],
  props: {
    texts: {
      default: null,
      type: Object
    }
  }
}
</script>

<style lang="scss" scoped>
.fix-api {
  @include bp(tablet) {
    padding-top: 100px;
    padding-bottom: 108px;
  }

  padding-top: 50px;
  padding-bottom: 54px;

  color: #fff;
  background-color: #4e5d60;

  .fix-api__container {
    @include bp(tablet) {
      display: flex;
    }
  }

  .fix-api__header-wrap {
    @include bp(tablet) {
      max-width: 31.25%;
      margin-bottom: 0;
      padding-right: 7.5%;
    }

    width: 100%;
    margin-bottom: 30px;
  }

  .fix-api__header {
    @include h1;
    @include header-underline;
    @include bp(tablet) {
      margin-bottom: 50px;
    }

    margin-bottom: 25px;

    color: inherit;
  }

  .fix-api__subheader {
    @include bp(tablet) {
      font-size: 28px;

      margin-bottom: 42px;
    }

    font-family: $font-family-second;
    font-size: 20px;

    margin-bottom: 22px;
  }

  .fix-api__button {
    &:hover,
    &:focus {
      color: #fff;
    }
  }

  .fix-api__image {
    @include bp(tablet) {
      margin-bottom: 45px;
    }

    width: 100%;
    margin-bottom: 22px;
    ::v-deep img {
      width: 100%;
      max-width: 375px;
    }
  }

  .fix-api__texts {
    @include bp(tablet) {
      display: flex;

      justify-content: space-between;
    }

    & > * {
      @include bp(tablet) {
        max-width: 45.45%;
        margin-top: 0;
      }
    }
  }
}
</style>

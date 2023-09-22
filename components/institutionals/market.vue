<template>
  <section class="market">
    <Container class="market__container">
      <h2 v-html="market.header" class="market__header"></h2>
      <picturelazy
        :source="[
          {
            srcset:
              '/static/images/logos-black.webp 1x, /static/images/logos-black@2x.webp 2x'
          },
          {
            srcset:
              '/static/images/logos-black.png 1x, /static/images/logos-black@2x.png 2x'
          }
        ]"
        class="market__logos"
        alt="logos"
      ></picturelazy>
      <div class="market__content">
        <div class="market__desc">
          <h3 v-if="market.subtitle" v-html="market.subtitle"></h3>
          <div v-html="market.desc"></div>
        </div>
      </div>
    </Container>
  </section>
</template>

<script>
import Container from '~/components/general/Container.vue'
import picturelazy from '~/components/general/Lazy/PictureLazy.vue'

export default {
  name: 'Market',
  components: {
    Container,
    picturelazy
  },
  props: {
    market: {
      type: Object,
      default: null
    }
  }
}
</script>

<style lang="scss" scoped>
.market {
  @include bp(tablet) {
    padding-top: 76px;
    padding-bottom: 60px;
  }
  @include bp(desktop-large) {
    padding-top: 80px;
    padding-bottom: 80px;
  }
  @include bp(desktop-wide) {
    padding-top: 65px;
    padding-bottom: 75px;
  }

  padding-top: 55px;
  padding-bottom: 40px;

  color: #fff;
  background-color: $color__black--lighter;

  .market__container {
    @include bp(tablet) {
      display: grid;

      grid-template-columns: 50% 43.75%;
      grid-template-rows: auto auto;
      grid-column-gap: 6.25%;
    }

    clear: both;
    overflow: hidden;
  }

  .market__header {
    @include h1;
    @include header-underline();
    @include bp(tablet) {
      width: 100%;
      margin-top: 14px;
      margin-bottom: 40px;
    }

    color: #fff;
  }

  .market__content {
    @include bp(tablet) {
      // display: flex;
      // float: left;
      // max-width: 50%;
      grid-row: 2;
      // justify-content: space-between;
    }
    h3 {
      @include bp(tablet) {
        font-size: 24px;
        line-height: 30px;

        margin-top: 0;
        margin-bottom: 10px;

        // color: $color__black--light;
      }
      @include bp(desktop-large) {
        font-size: 28px;
        line-height: 35px;
      }
      @include bp(desktop-wide) {
        font-size: 32px;
        line-height: 40px;
      }

      font-family: $font-family-second;
      font-size: 18px;
      font-weight: 300;
      line-height: 25px;

      margin-bottom: 16px;

      color: #fff;
    }

    p {
      @include bp(tablet) {
        margin: 0;
      }
      @include bp(desktop-large) {
        font-size: 22px;
        line-height: 30px;
      }

      font-size: 16px;
      line-height: 24px;
    }

    img {
      @include bp(tablet) {
        flex: 1;

        margin-bottom: 0;
      }
      @include bp(desktop-wide) {
        max-width: 600px;
      }

      margin-bottom: 30px;
    }
  }

  .market__logos {
    @include bp(tablet) {
      // float: right;
      // max-width: 50%;
      grid-column: 2;
      grid-row: 1 / 3;
    }

    width: 100%;
  }

  .market__desc {
    // @include bp(tablet) {
    //   flex: 1;
    //   order: -1;
    // }
    @include bp(desktop-large) {
      max-width: 554px;
      margin: 0;
    }
    @include bp(desktop-wide) {
      max-width: 750px;
    }
  }
}
</style>

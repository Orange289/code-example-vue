<template>
  <div class="http-api">
    <TextAdd :textadd="textadd" class="http-api__main">
      <template v-slot:additional>
        <picturelazy
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
          class="http-api__main-image"
        ></picturelazy>
      </template>
    </TextAdd>

    <!-- :items="httpapi.items"
      :link="httpapi.link" -->
    <features :httpapi="httpapi" class="http-api__features"> </features>
  </div>
</template>

<script>
import features from './Features'
import TextAdd from '~/components/text-add/TextAdd'
import picturelazy from '~/components/general/Lazy/PictureLazy.vue'

export default {
  name: 'HttpApi',
  components: {
    TextAdd,
    features,
    picturelazy
  },
  props: {
    httpapi: {
      default: null,
      type: Object
    }
  },
  data() {
    return {
      textadd: {
        header: this.httpapi.header,
        text: this.httpapi.text
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.http-api {
  .http-api__main {
    @include bp(desktop-large) {
      padding: 90px 0 75px;
    }
    @include bp(desktop-wide) {
      padding: 95px 0 78px;
    }
  }

  ::v-deep .text-add__wrap {
    @include bp(mobile) {
      display: flex;
    }
    @include bp(desktop-wide) {
      position: relative;

      &:after {
        @include triangle(100px 50px, #fff, down);

        position: absolute;
        bottom: calc(-50px - 78px); // minus padding-bottom on http-api__main
        left: 40px;
      }
    }
  }
  ::v-deep .text-add__text-wrap {
    @include bp(mobile) {
      width: 50%;
      margin-bottom: 0;

      flex-shrink: 0;
    }
    @include bp(tablet) {
      padding-right: 9.5%;
    }
    @include bp(desktop-large) {
      padding-right: 50px;
    }
  }
  ::v-deep .text-add__text {
    @include bp(desktop-large) {
      padding-right: 30%;
    }
    @include bp(desktop-wide) {
      padding-right: 8%; // will be 6.25% but for non typograhy text is 8%
    }
  }
  ::v-deep .text-add__add-wrap {
    @include bp(0 mobile) {
      margin-bottom: -110px;
    }
    @include bp(mobile) {
      position: absolute;
      top: -30%;
      right: 0;

      width: 100%;
      max-width: 55%;
    }
    @include bp(tablet) {
      top: -55%;
      right: 40px;
    }
    @include bp(desktop-large) {
      max-width: 52.8%;
    }
    @include bp(desktop-wide) {
      top: -69%;

      max-width: 56.6%;
    }
  }

  .http-api__features {
    @include bp(mobile) {
      padding-top: 50px;
    }
    @include bp(desktop-large) {
      padding: 90px 0px;
    }

    padding-top: 100px;
    padding-bottom: 50px;

    background-color: #f7f7f7;
  }

  .http-api__main-image {
    @include bp(0 mobile) {
      max-width: calc(100% + 50px);
      margin-right: -10px;
      margin-left: -40px;
    }
  }
}
</style>

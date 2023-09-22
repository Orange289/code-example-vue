<template>
  <div class="http-api-features">
    <Container>
      <template v-if="httpapi && httpapi.header2">
        <h2 class="http-api-features__header" v-html="httpapi.header2"></h2>
      </template>
      <template v-else>
        <h2 class="http-api-features__header"><slot name="header"></slot></h2>
      </template>

      <template v-if="httpapi && httpapi.text2">
        <div class="http-api-features__text" v-html="httpapi.text2"></div>
      </template>
      <template v-else>
        <slot></slot>
      </template>

      <IconTextList
        :items="items || httpapi.items"
        class="http-api-features__list"
      ></IconTextList>

      <template v-if="httpapi && httpapi.link_text">
        <TextButLink
          :link="link || httpapi.link"
          class="http-api-features__link"
          ><div v-html="httpapi.link_text"></div
        ></TextButLink>
      </template>
      <template v-else>
        <TextButLink
          :link="link || httpapi.link"
          class="http-api-features__link"
        >
          <slot name="link-text"></slot
        ></TextButLink>
      </template>
    </Container>
  </div>
</template>

<script>
import Container from '~/components/general/Container.vue'
import IconTextList from '~/components/icon-text/IconTextList.vue'
import TextButLink from '~/components/text-but-link/TextButLink.vue'

export default {
  name: 'HttpApiFeatures',
  components: {
    Container,
    IconTextList,
    TextButLink
  },
  props: {
    link: {
      default: null,
      type: String
    },
    items: {
      default: null,
      type: Array
    },
    httpapi: {
      default: null,
      type: Object
    }
  }
}
</script>

<style lang="scss" scoped>
.http-api-features {
  // .http-api-features__header,
  // .http-api-features__text,
  // .http-api-features__link {
  //   display: none;

  //   @include bp(desktop-wide) {
  //     display: block;
  //   }
  // }
  .http-api-features__header {
    @include h1;
  }
  .http-api-features__list {
    ::v-deep .icon-text__text {
      @include bp(tablet) {
        font-weight: 400;
      }
    }

    ::v-deep .icon-text-list__item {
      @include bp(tablet) {
        width: 33%;
        margin-bottom: 35px;
      }
      @include bp(tablet desktop-large) {
        &:nth-of-type(2) {
          width: 34%;
        }
      }
      @include bp(desktop-large) {
        width: 20%;
        padding-right: 40px;
      }
    }
    ::v-deep .icon-text__icon {
      @include bp(desktop-large) {
        max-width: 50px;

        max-heught: 73px;
      }
    }
    ::v-deep .icon-text__icon-wrap {
      @include bp(desktop-wide) {
        margin-bottom: 25px;
      }
    }
  }
  .http-api-features__link {
    color: $color__green;
  }
}
</style>

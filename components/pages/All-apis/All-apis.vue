<template>
  <DefaultLayout class="apis">
    <UnderHeader>
      <Container
        :class="[
          'apis__container',
          { 'apis__container--noBreadcrumbs': noBreadcrumbs }
        ]"
      >
        <Breadcrumbs v-if="!noBreadcrumbs" green class="apis__breadcrumbs" />
        <div class="apis__items">
          <div
            v-for="(item, key, index) in itemsWithTexts"
            :key="index"
            class="api-item apis__item"
          >
            <h2 v-if="item.name" class="api-item__header">
              <a :href="`${item.url}/`" class="api-item__header-link">
                <div class="api-item__name" v-html="item.name"></div>
                <svg-icon
                  name="institutionals/arrow"
                  class="api-item__arrow"
                  width="100"
                  height="10"
                ></svg-icon>
              </a>
            </h2>
            <a
              v-if="item.img"
              :href="`${item.url}/`"
              class="api-item__img-wrap"
            >
              <imagelazy
                :lazy-src="item.img"
                :alt="item.name"
                class="api-item__img"
                role="presentation"
              />
            </a>
            <p v-if="item.text" class="api-item__text" v-html="item.text"></p>
          </div>
        </div>
      </Container>
    </UnderHeader>
  </DefaultLayout>
</template>

<script>
import DefaultLayout from '~/components/layouts/default.vue'
import Container from '~/components/general/Container.vue'
import Breadcrumbs from '~/components/general/Breadcrumbs/Breadcrumbs'
import imagelazy from '~/components/general/Lazy/ImageLazy.vue'
import UnderHeader from '~/components/general/UnderHeader/UnderHeader.vue'

export default {
  name: 'Apis',
  components: {
    UnderHeader,
    DefaultLayout,
    Container,
    Breadcrumbs,
    imagelazy
  },
  data() {
    return {
      noBreadcrumbs: false,
      items: {
        'http-api': {
          url: 'http-api',
          img: '/static/images/apis/http-api.svg'
        },
        'fix-api': {
          url: 'fix-api',
          img: '/static/images/apis/fix-scheme.svg'
        }
      }
    }
  },
  computed: {
    itemsWithTexts() {
      const items = {}
      for (const item in this.items) {
        items[item] = Object.assign(
          this.items[item],
          this.$t(`exante.pages.apis.items.${item}`)
        )
      }
      return items
    }
  },
  created() {
    this.$route.meta.currentPageName = this.$t('exante.pages.apis.pagename')
  }
}
</script>

<style lang="scss" scoped>
.apis {
  .apis__breadcrumbs {
    margin: 0 0 50px;
  }
  .apis__container {
    &.apis__container--noBreadcrumbs {
      @include bp(tablet) {
        padding-top: 50px;
      }
    }
  }

  .apis__items {
    display: flex;

    padding-bottom: 50px;

    flex-wrap: wrap;
    justify-content: space-between;
  }

  .apis__item {
    @include bp(tablet) {
      flex: 0 1 43.75%;

      margin-right: 50px;
    }
  }
}

.api-item {
  display: flex;
  flex-direction: column;

  margin-bottom: 50px;

  .api-item__name {
    color: $color__black--light;
  }

  .api-item__img-wrap {
    font-size: 0;

    position: relative;

    display: flex;

    width: 100%;
    // max-height: 500px;
    // margin-bottom: 50px;
    // padding-bottom: 66.666%;

    justify-content: center;
    align-items: center;
  }

  .api-item__img {
    max-width: calc(100% + 60px);
    margin: 0 -30px;
    // position: absolute;
    // top: 0;
    // bottom: 0;

    // height: 100%;
  }

  .api-item__header {
    @include h1;

    margin-bottom: 24px;
  }

  .api-item__arrow {
    transition: transform 0.3s ease-in-out;

    will-change: transform;
  }

  .api-item__header-link {
    &:hover,
    &:focus {
      text-decoration: none;

      .api-item__arrow {
        transform: translateX(10px);
      }
    }
  }

  .api-item__text {
    // @include bp(tablet) {
    //   padding-right: 7%;
    // }
    margin: 0 0 50px;

    flex-grow: 1;
  }
}
</style>

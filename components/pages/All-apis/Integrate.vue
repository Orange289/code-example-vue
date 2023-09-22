<template>
  <DefaultLayout class="integrate">
    <UnderHeader>
      <Container class="intro__container">
        <Breadcrumbs green class="intro__breadcrumbs" />
      </Container>
    </UnderHeader>
    <HowTo :steps="steps">
      <template #header>
        <h1 class="integrate__header" v-html="header"></h1>
        <SiteButton
          v-if="fullDocLink"
          :href="fullDocLink"
          data-style-type="sfwhite"
          class="integrate__liveapi"
          target="_blank"
        >
          {{ fullDocText }}
        </SiteButton>
      </template>
      <template #text>
        <p v-html="text"></p>
      </template>
    </HowTo>
  </DefaultLayout>
</template>

<script>
import HowTo from './HowTo/HowTo.vue'
import DefaultLayout from '~/components/layouts/default.vue'
import SiteButton from '~/components/general/SiteButton/SiteButton.vue'
import Breadcrumbs from '~/components/general/Breadcrumbs/Breadcrumbs'
import Container from '~/components/general/Container.vue'
import UnderHeader from '~/components/general/UnderHeader/UnderHeader.vue'

export default {
  name: 'Integrate',
  components: {
    UnderHeader,
    DefaultLayout,
    HowTo,
    SiteButton,
    Breadcrumbs,
    Container
  },
  props: {
    // routeName: {
    //   type: String,
    //   default: null
    // },
    // parentName: {
    //   type: String,
    //   default() {
    //     return this.$t('exante.pages.apis.pagename')
    //   }
    // },
    header: {
      type: String,
      default: null
    },
    text: {
      type: String,
      default: null
    },
    fullDocLink: {
      type: String,
      default: null
    },
    fullDocText: {
      type: String,
      default: null
    },
    steps: {
      type: Array,
      default: null
    }
  }
}
</script>

<style lang="scss" scoped>
@keyframes blink {
  0% {
    opacity: 1;
  }
  50% {
    opacity: 0;
  }
  100% {
    copacity: 1;
  }
}

.integrate {
  .integrate__header {
    @include h1;
    @include header-underline;
  }

  .integrate__liveapi {
    @include bp(desktop) {
      min-width: 200px;
    }

    position: relative;
    &:after {
      position: absolute;
      top: -4px;
      right: 20px;

      display: block;

      width: 10px;
      height: 10px;

      content: '';
      animation-name: blink;
      animation-duration: 3s;
      animation-timing-function: linear;
      animation-iteration-count: infinite;

      border-radius: 50%;
      background-color: #03bf56;
    }
  }
}
</style>

<template>
  <defaulLayout className="subscription-layout">
    <div class="subscription">
      <Intro />
      <Author />
      <Choose />
      <Latest />
      <News />
    </div>
  </defaulLayout>
</template>

<script>
import Intro from './Intro.vue'
import Author from './Author.vue'
import Choose from './Choose.vue'
import Latest from './Latest.vue'
import News from './News.vue'
import defaulLayout from '~/components/layouts/default.vue'

export default {
  name: 'SubscriptionPage',
  components: {
    defaulLayout,
    Intro,
    Author,
    Choose,
    Latest,
    News
  }
}
</script>

<style lang="scss" scoped>
.subscription {
  ::v-deep .site-button {
    button {
      margin: 0;
      @include bp(tablet) {
        width: auto;
        font-size: 24px;
        padding: 13px 34px;
      }
    }
  }
}
</style>

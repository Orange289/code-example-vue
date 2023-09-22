<template>
  <Intro
    :header="$t('exante.pages.apis.items.fix-api.intro.header')"
    class="intro"
  >
    <Features :itemsTKey="'exante.pages.apis.items.fix-api.intro.items'" />
  </Intro>
</template>

<script>
import Intro from '../Intro.vue'
import Features from './Features.vue'

export default {
  name: 'IntroFIXAPI',
  components: {
    Intro,
    Features
  }
}
</script>

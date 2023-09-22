<template>
  <div class="nuxt_page">
    <main class="argo">
      <Intro />
      <Whatis />
      <Features />
      <Principles />
      <Nutshell />
      <Performance />
      <!-- <Contact :texts="texts.contact" :signupText="texts.signup" /> -->
      <div class="argo__signup">
        <Signup />
      </div>
      <Team />
      <Disclaimer />
      <Oac />
    </main>
    <client-only>
      <script src="https://exante.eu/clientsarea/blank/?utm_medium=affiliate&utm_campaign=kko&utm_source=https%3A%2F%2Fexante.eu%2Fmypartnerlink%2F&utm_term=14931"></script>
    </client-only>
  </div>
</template>

<script>
import Intro from './Intro'
import Whatis from './Whatis'
import Features from './Features'
import Principles from './Principles'
import Nutshell from './Nutshell'
import Performance from './Performance'
// import Contact from './Contact'
import Signup from './Signup.vue'
import Team from './Team'
import Disclaimer from './Disclaimer'
import Oac from './Oac'

export default {
  name: 'Argo',
  components: {
    Intro,
    Whatis,
    Features,
    Principles,
    Nutshell,
    Performance,
    // Contact,
    Signup,
    Team,
    Disclaimer,
    Oac
  }
}
</script>

<style lang="scss">
.nuxt_page {
  overflow: hidden;
}

// Micromodal
@include bp(0 $width--tablet) {
  .page {
    &.vex-open,
    &.micromodal-open {
      .foot,
      .nuxt_page,
      .site-head {
        display: none;
      }
    }
  }
}
</style>

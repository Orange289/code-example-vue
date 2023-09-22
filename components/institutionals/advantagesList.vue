<template>
  <div class="advantages-list">
    <Container>
      <Advantages
        v-for="(item, index) in advantages.items"
        :key="item.text + index"
        :item="item"
      ></Advantages>
      <TextButLink
        v-if="advantages.moreText"
        class="advantages-list__more"
        open-account
      >
        <div v-if="loggedin" v-html="account"></div>
        <div v-else v-html="advantages.moreText"></div>
      </TextButLink>
    </Container>
  </div>
</template>

<script>
import Advantages from './advantages'
import Container from '~/components/general/Container.vue'
import TextButLink from '~/components/text-but-link/TextButLink.vue'

export default {
  name: 'AdvantagesList',
  components: {
    Container,
    Advantages,
    TextButLink
  },
  props: {
    advantages: {
      default: null,
      type: Object
    }
  },
  computed: {
    loggedin() {
      return this.$store.state.loggedin
    },
    account() {
      return this.$store.state.openAccount.texts.account
    }
  }
}
</script>

<style lang="scss" scoped>
.advantages-list {
  @include bp(desktop) {
    padding-top: 80px;
    padding-bottom: 80px;
  }

  padding-top: 55px;
  padding-bottom: 55px;
}

.advantages-list__more {
  @include bp(tablet) {
    margin-top: 45px;
  }
  @include bp(desktop-wide) {
    padding-left: 50px;
  }
}
</style>

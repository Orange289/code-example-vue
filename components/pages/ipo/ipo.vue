<template>
  <DefaultLayout>
    <div class="ipo">
      <Container class="ipo__container">
        <Intro></Intro>
      </Container>
      <IpoTable></IpoTable>
      <Preselection></Preselection>
      <Roadmap></Roadmap>
      <Fee></Fee>
      <HowTo></HowTo>
      <Notice></Notice>
    </div>
  </DefaultLayout>
</template>

<script>
import Notice from './Notice.vue'
import IpoTable from './IpoTable/IpoTable.vue'
import HowTo from './HowTo.vue'
import Fee from './Fee.vue'
import Roadmap from './Roadmap.vue'
import Preselection from './Preselection.vue'
import Intro from './Intro.vue'
import DefaultLayout from '~/components/layouts/default.vue'
import Container from '~/components/general/Container.vue'

export default {
  components: {
    DefaultLayout,
    Container,
    Intro,
    IpoTable,
    HowTo,
    Notice,
    Fee,
    Roadmap,
    Preselection
  }
  // created() {
  //   this.$route.meta.currentPageName = this.$t('exante.pages.ipo.pageName')
  // }
}
</script>

<style lang="scss" scoped></style>

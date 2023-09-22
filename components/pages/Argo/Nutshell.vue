<template>
  <section class="nutshell">
    <Container>
      <div class="nutshell__header">
        <h3 v-html="$t('exante.pages.funds.argo.nutshell.header')"></h3>
        <ArgoLetters />
      </div>
      <div class="nutshell__data">
        <div class="nutshell__cell nutshell__cell--main">
          <span
            v-html="$t('exante.pages.funds.argo.nutshell.data.head.title')"
            class="nutshell__cell-title"
          ></span>
          <span
            v-html="$t('exante.pages.funds.argo.nutshell.data.head.info')"
            class="nutshell__cell-info"
          ></span>
        </div>
        <div
          v-for="(item, index) in $t(
            'exante.pages.funds.argo.nutshell.data.cells'
          )"
          :key="index"
          class="nutshell__cell"
        >
          <span v-html="item.title" class="nutshell__cell-title"></span>
          <span v-html="item.info" class="nutshell__cell-info"></span>
        </div>
      </div>
    </Container>
  </section>
</template>

<script>
import ArgoLetters from './ArgoLetters'
import Container from '~/components/general/Container'

export default {
  name: 'Nutshell',
  components: {
    ArgoLetters,
    Container
  }
}
</script>

<style lang="scss" scoped>
.nutshell {
  @include bp(tablet) {
    padding-top: 86px;
    padding-bottom: 160px;
  }
  @include bp(desktop) {
    padding-top: 160px;
  }

  overflow: hidden;

  padding-top: 60px;
  padding-bottom: 50px;

  color: $color__white;
  background: $color__black-2;

  h3 {
    @include argoTitle();
    @include bp(desktop) {
      margin-bottom: 80px;
    }

    color: #fff;

    ::v-deep strong {
      color: $color__green-2;
    }
  }
}

.nutshell__header {
  @include bp(tablet) {
    margin-bottom: 5px;
  }

  position: relative;

  margin-bottom: 40px;

  h3 {
    position: relative;
    z-index: 1;

    margin: 0;
  }
}

.nutshell__data {
  @include bp(tablet) {
    display: flex;

    flex-wrap: wrap;
  }
}

.nutshell__cell {
  @include bp(tablet) {
    width: 50%;
    margin-bottom: 30px;
  }

  margin-bottom: 20px;

  border-bottom: 1px solid rgba($color__gray-2, 0.3);
}

.nutshell__cell--main {
  @include bp(tablet) {
    width: 100%;
  }
}

.nutshell__cell-title {
  @include bp(tablet) {
    font-size: 20px;

    margin-bottom: 10px;
  }

  font-weight: 600;

  display: block;

  margin-bottom: 5px;

  color: $color__gray-2;
}

.nutshell__cell-info {
  @include bp(tablet) {
    font-size: 30px;

    margin-bottom: 30px;
  }

  font-size: 20px;
  font-weight: 600;

  display: block;

  margin-bottom: 20px;
}
</style>

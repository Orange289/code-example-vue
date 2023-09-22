<template>
  <section id="models" class="models">
    <Container class="container">
      <div class="models__text">
        <h2
          v-animate.repeat.fade="'slide-up'"
          class="whitelabel__header models__header"
          v-html="$t('exante.pages.whitelabel.models.header')"
        ></h2>
        <p
          v-animate.repeat.fade="'slide-up'"
          v-html="$t('exante.pages.whitelabel.models.text')"
        ></p>
      </div>

      <div class="models__table" aria-label="modelstable">
        <Services
          class="models__services"
          :services="$t('exante.pages.whitelabel.models.services')"
        >
        </Services>
        <div class="models__items">
          <Model
            v-for="(model, label, index) in $t(
              'exante.pages.whitelabel.models.models'
            )"
            :key="index"
            :label="label"
            :model="model"
          >
          </Model>
        </div>
      </div>
    </Container>
  </section>
</template>

<script>
import Services from './Services.vue'
import Model from './Model.vue'
import Container from '~/components/general/Container.vue'

export default {
  name: 'WhiteLabelModels',
  components: { Container, Services, Model }
}
</script>

<style lang="scss" scoped>
.models {
  @include bp(tablet) {
    padding-top: 55px;
    padding-bottom: 75px;
  }
  @include bp(desktop-large) {
    padding-top: 65px;
    padding-bottom: 50px;
  }
  @include bp(desktop-wide) {
    padding-top: 100px;
    padding-bottom: 123px;
  }

  overflow: hidden;

  padding-top: 40px;
  // padding-bottom: 50px;

  background-color: #f2f8f2;

  .models__header.whitelabel__header {
    @include bp(tablet) {
      // margin-top: 50px;
      margin-bottom: 30px;
    }
    @include bp(desktop-large) {
      margin-bottom: 28px;
      padding-bottom: 16px;
    }
    @include bp(desktop-wide) {
      margin-bottom: 26px;
      padding-bottom: 22px;
    }

    &:after {
      @include bp(tablet) {
        right: 0;
        left: 0;
      }
    }
  }

  .models__text {
    @include bp(tablet) {
      margin-bottom: 42px;

      text-align: center;
    }
    @include bp(desktop-large) {
      margin-bottom: 35px;
    }
    @include bp(desktop-wide) {
      margin-bottom: 40px;
    }

    display: block;

    margin-bottom: 30px;

    p {
      @include bp(tablet) {
        max-width: 75%;
        margin-top: 0;
        margin-right: auto;
        margin-left: auto;
      }
      @include bp(desktop-large) {
        max-width: 62%;
      }
      @include bp(desktop-wide) {
        max-width: 56%;
      }
    }
  }

  .models__services {
    @include bp(tablet) {
      display: block;

      width: 230px;
      margin-top: 92px;
    }
    @include bp(desktop-large) {
      width: 310px;
      margin-top: 102px;
    }
    @include bp(desktop-wide) {
      margin-top: 146px;
    }

    display: none;
  }

  .models__table {
    @include bp(tablet) {
      display: flex;

      align-items: flex-start;
    }
    @include bp(desktop-wide) {
      max-width: 1200px;
      margin: auto;
    }

    font-family: $font-family-second;
  }

  .models__items {
    @include bp(tablet) {
      display: flex;

      flex-grow: 1;
    }
  }
}
</style>

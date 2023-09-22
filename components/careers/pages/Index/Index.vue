<template>
  <DefaultLayout :awards="{ styleType: 'minimal' }" class="index">
    <Hero></Hero>
    <template #beforeCallta>
      <Glassdoor></Glassdoor>

      <!-- <xGrid>
        <xRow class="land">
          <xCol cols="24" sm="12" lg="13" class="land__col">
            <land-images />
          </xCol>
          <xCol cols="24" sm="12" lg="11" class="land__col">
            <land-text />
          </xCol>
        </xRow>
      </xGrid> -->
    </template>
  </DefaultLayout>
</template>

<script>
import Glassdoor from './Glassdoor/Glassdoor.vue'
import Hero from './Hero/Hero.vue'
// import LandImages from '~/components/careers/general/Land/LandImages.vue'
// import LandText from '~/components/careers/general/Land/LandText.vue'
import DefaultLayout from '~/components/careers/layouts/DefaultCareersLayout.vue'

export default {
  name: 'CareersHome',
  components: {
    DefaultLayout,
    Hero,
    // LandImages,
    // LandText,
    Glassdoor
  }
}
</script>

<style lang="postcss" scoped>
.index__header {
  font-size: 24px;
  line-height: 32px;
  @media (--md) {
    font-size: 32px;
    line-height: 40px;
  }
  @media (--lg) {
    font-size: 36px;
    line-height: 48px;
  }
  @media (--xl) {
    font-size: 48px;
    line-height: 64px;
  }
}
.index__subheader {
  font-size: 18px;
  line-height: 22.5px;
  @media (--sm) {
    font-size: 16px;
    line-height: 20px;
  }
  @media (--md) {
    font-size: 20px;
    line-height: 25px;
  }
  @media (--lg) {
    font-size: 24px;
    line-height: 30px;
  }
  @media (--xl) {
    font-size: 32px;
    line-height: 40px;
  }
}
.index__wrap {
  @media (--md) {
    flex-wrap: nowrap;
  }
}
.index__description {
  @media (--sm) {
    display: flex;
    z-index: 1;
    flex-direction: column;
  }
}

.index__slider {
  padding-top: 0;
  @media (--md) {
    z-index: 0;
    /* margin-left: calc(100% / -24); */
    /* margin-right: -106px; */
  }
}

.index__search {
  margin-top: 16px;
  padding-bottom: 48px;
  @media (--md) {
    margin-top: 48px;
  }
}

/* .land {
  @media (--sm) {
    padding-top: 8px;
  }
  @media (--md) {
    padding-top: 22px;
  }
}

.land__col:nth-child(2) {
  @media (--sm) {
    order: -1;
  }
} */
</style>

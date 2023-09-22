<template>
  <div class="land__images">
    <xTile
      v-for="(item, index) in images"
      :key="index"
      class="land__tile"
      :pic-url="item.url"
      :pic-url-large="item.urlLarge"
    />
  </div>
</template>

<script>
import xTile from '../../general/xTile/xTile.vue'

export default {
  name: 'LandImages',
  components: {
    xTile
  },
  data() {
    return {
      images: [
        {
          url: 'url(/static/images/careers/land-1.webp)',
          urlLarge: 'url(/static/images/careers/land-1.webp)'
        },
        {
          url: 'url(/static/images/careers/land-2.webp)',
          urlLarge: 'url(/static/images/careers/land-2.webp)'
        },
        {
          url: 'url(/static/images/careers/land-3.webp)',
          urlLarge: 'url(/static/images/careers/land-3.webp)'
        }
      ]
    }
  }
}
</script>

<style lang="postcss" scoped>
.land__images {
  position: relative;
  padding-top: 16px;
  margin: auto;
  margin-bottom: 30px;

  @media (max-width: 576px) {
    max-width: 320px;
  }

  @media (--sm) {
    padding-top: 87px;
    margin-bottom: 44px;
  }
  @media (--md) {
    padding-top: 48px;
  }
  @media (--xl) {
    padding-top: 100px;
    margin-bottom: 140px;
  }
}
.land__tile {
  @media (--sm) {
    background-size: cover;
  }
}
.land__tile:nth-child(1) {
  width: 166px;
  height: 110px;

  @media (--sm) {
    width: 184px;
    height: 124px;
  }
  @media (--md) {
    width: 264px;
    height: 176px;
  }
  @media (--lg) {
    width: 320px;
    height: 212px;
  }
  @media (--xl) {
    width: 430px;
    height: 288px;
  }
}
.land__tile:nth-child(2) {
  width: 196px;
  height: 96px;
  margin-left: 40px;
  margin-top: -32px;

  @media (--sm) {
    width: 225px;
    height: 110px;
    margin-top: -20px;
  }
  @media (--md) {
    width: 304px;
    height: 148px;
    margin-top: -60px;
  }
  @media (--lg) {
    width: 368px;
    height: 168px;
    margin-left: 96px;
  }
  @media (--xl) {
    margin-left: 128px;
    margin-top: -96px;
    width: 498px;
    height: 244px;
  }
}
.land__tile:nth-child(3) {
  width: 208px;
  height: 156px;
  position: absolute;
  top: 0;
  right: 0;
  z-index: -1;

  @media (--sm) {
    width: 226px;
    height: 172px;
  }
  @media (--md) {
    width: 306px;
    height: 232px;
  }
  @media (--lg) {
    width: 370px;
    height: 284px;
  }
  @media (--xl) {
    top: 54px;
    width: 498px;
    height: 384px;
  }
}
</style>

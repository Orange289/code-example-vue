<template>
  <xGrid class="hero">
    <InitSlideFromLeft class="hero__left">
      <h1 class="hero__header">
        Join&nbsp;us in&nbsp;Creating <br />a&nbsp;New Standard <br />for
        Financial Services
      </h1>
    </InitSlideFromLeft>
    <InitSlideFromLeft class="hero__left">
      <h4 class="hero__subheader">
        Global Opportunities for Growth
      </h4>
    </InitSlideFromLeft>
    <InitSlideFromLeft class="hero__left hero__form-wrap">
      <SearchForm></SearchForm>
    </InitSlideFromLeft>
    <InitSlideFromRight class="hero__images">
      <ImagesSwiper ref="imagesSwiper" :items="sliderItems"></ImagesSwiper>
    </InitSlideFromRight>
    <!-- <InitSlideFromLeft class="hero__left">
      <LabelsSwiper
        ref="labelsSwiper"
        :items="sliderItems"
        @isMounted="onLabelsSwiperMounted"
      ></LabelsSwiper>
    </InitSlideFromLeft> -->
  </xGrid>
</template>

<script>
import ImagesSwiper from './ImagesSwiper.vue'
// import LabelsSwiper from './LabelsSwiper.vue'
import { xGrid } from '~/components/careers/general/xGrid'
import SearchForm from '~/components/careers/careers/SearchForm.vue'
import InitSlideFromLeft from '~/components/careers/general/xAnimate/InitSlide/InitSlideFromLeft.vue'
import InitSlideFromRight from '~/components/careers/general/xAnimate/InitSlide/InitSlideFromRight.vue'

export default {
  components: {
    xGrid,
    SearchForm,
    ImagesSwiper,
    // LabelsSwiper,
    InitSlideFromLeft,
    InitSlideFromRight
  },
  data() {
    return {
      sliderItems: [],
      config: {
        headers: {
          Authorization:
            'bearer d45e87ecab1f7f70e058a55b3e20486938a8a0d53262b2d4694415036f18d3221826066918ff4e3b37485b76b61405c7186502c8b375a7c8b816342a4b51e02bac556b1d06f8aed509a17f2cd883246eef40c23b054878f4c0a6a49ff95ebac5b6eaf018acd3404358c2a45a4dc5bc7be00378c882095b22b344728f98fdabce'
        }
      },
      apiUrl: 'https://content.exante.eu/api/careers-photo-gallery?populate=%2A'
      // sliderItems: [
      //   {
      //     src: '/static/images/careers/hero/image-5.jpg',
      //     srcset:
      //       '/static/images/careers/hero/image-5.jpg, /static/images/careers/hero/image-5@2x.jpg 2x',
      //     alt: ''
      //   },
      //   {
      //     src: '/static/images/careers/hero/image-6.jpg',
      //     srcset:
      //       '/static/images/careers/hero/image-6.jpg, /static/images/careers/hero/image-6@2x.jpg 2x',
      //     alt: ''
      //   },
      //   {
      //     src: '/static/images/careers/hero/image-8.jpg',
      //     srcset:
      //       '/static/images/careers/hero/image-8.jpg, /static/images/careers/hero/image-8@2x.jpg 2x',
      //     alt: ''
      //   },
      //   {
      //     src: '/static/images/careers/hero/image-12.jpg',
      //     srcset:
      //       '/static/images/careers/hero/image-12.jpg, /static/images/careers/hero/image-12@2x.jpg 2x',
      //     alt: ''
      //   },
      //   {
      //     src: '/static/images/careers/hero/new1.jpg',
      //     srcset:
      //       '/static/images/careers/hero/new1.jpg, /static/images/careers/hero/new1@2x.jpg 2x',
      //     alt: ''
      //   },
      //   {
      //     src: '/static/images/careers/hero/new2.jpg',
      //     srcset:
      //       '/static/images/careers/hero/new2.jpg, /static/images/careers/hero/new2@2x.jpg 2x',
      //     alt: ''
      //   },
      //   {
      //     src: '/static/images/careers/hero/new3.jpg',
      //     srcset:
      //       '/static/images/careers/hero/new3.jpg, /static/images/careers/hero/new3@2x.jpg 2x',
      //     alt: ''
      //   },
      //   {
      //     src: '/static/images/careers/hero/new4.jpg',
      //     srcset:
      //       '/static/images/careers/hero/new4.jpg, /static/images/careers/hero/new4@2x.jpg 2x',
      //     alt: ''
      //   },
      //   {
      //     src: '/static/images/careers/hero/new5.jpg',
      //     srcset:
      //       '/static/images/careers/hero/new5.jpg, /static/images/careers/hero/new5@2x.jpg 2x',
      //     alt: ''
      //   },
      //   {
      //     src: '/static/images/careers/hero/new10.jpg',
      //     srcset:
      //       '/static/images/careers/hero/new10.jpg, /static/images/careers/hero/new10@2x.jpg 2x',
      //     alt: ''
      //   },
      //   {
      //     src: '/static/images/careers/hero/new11.jpg',
      //     srcset:
      //       '/static/images/careers/hero/new11.jpg, /static/images/careers/hero/new11@2x.jpg 2x',
      //     alt: ''
      //   },
      //   {
      //     src: '/static/images/careers/hero/new12.jpg',
      //     srcset:
      //       '/static/images/careers/hero/new12.jpg, /static/images/careers/hero/new12@2x.jpg 2x',
      //     alt: ''
      //   },
      //   {
      //     src: '/static/images/careers/hero/new13.jpg',
      //     srcset:
      //       '/static/images/careers/hero/new13.jpg, /static/images/careers/hero/new13@2x.jpg 2x',
      //     alt: ''
      //   },
      //   {
      //     src: '/static/images/careers/hero/new14.jpg',
      //     srcset:
      //       '/static/images/careers/hero/new14.jpg, /static/images/careers/hero/new14@2x.jpg 2x',
      //     alt: ''
      //   },
      //   {
      //     src: '/static/images/careers/hero/new16.jpg',
      //     srcset:
      //       '/static/images/careers/hero/new16.jpg, /static/images/careers/hero/new16@2x.jpg 2x',
      //     alt: ''
      //   }
      // ]
    }
  },
  mounted() {
    this.fetch()
  },
  methods: {
    onImagesSwiperMounted(imagesSwiper) {
      this.$nextTick(() => {
        this.$refs.labelsSwiper.setController(imagesSwiper)
      })
    },
    async fetch() {
      const sliderItems = await this.$axios.$request({
        method: 'get',
        url: this.apiUrl,
        headers: this.config.headers
      })
      console.log(sliderItems)
      this.sliderItems = sliderItems.data.attributes.Photo.data
      // .filter((el) => el.active)
      // .sort(function(a, b) {
      //   return b.order - a.order
      // })
    }
  }
}
</script>

<style lang="postcss" scoped>
.hero {
  @media (--sm) {
    display: grid;
    grid-template-columns: 41.6666666667% auto calc(50% - 8px);
    grid-template-rows: min-content min-content 1fr min-content;
    /* justify-content: space-between; */
  }
  @media (--md) {
    grid-template-columns: 41.6666666667% auto calc(54.1666666667% - 8px);
  }
}

.hero__left {
  @media (--sm) {
    grid-column: 1;
  }
}

.hero__form-wrap {
  z-index: 1;
  margin-top: 16px;
  padding-bottom: 48px;
  position: relative;

  @media (--md) {
    margin-top: 48px;
  }
}

.hero__images {
  @media (--sm) {
    grid-row: 1 / 5;
    grid-column: 3;
  }
}

.hero__header {
  font-size: 24px;
  line-height: 32px;
  margin: 0;
  @media (--md) {
    font-size: 32px;
    line-height: 40px;
    margin-top: 30px;
  }
  @media (--lg) {
    font-size: 36px;
    line-height: 48px;
    margin-top: 60px;
  }
  @media (--xl) {
    font-size: 48px;
    line-height: 64px;
    margin-top: 100px;
  }
}
.hero__subheader {
  font-size: 18px;
  line-height: 22.5px;
  margin-bottom: 0;
  color: var(--accent-100-color);

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

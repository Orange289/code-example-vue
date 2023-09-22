<template>
  <xGrid>
    <xRow class="glassdoor">
      <xCol cols="24" md="12" class="glassdoor__item" @click="onReviewClick">
        <InitSlideFromLeft class="glassdoor__animate">
          <bordered-item>
            <transition name="review-fade" mode="out-in">
              <Review
                ref="review"
                :key="randomReviewIndex"
                class="glassdoor__review"
                v-bind="reviews[randomReviewIndex]"
              ></Review>
            </transition>
          </bordered-item>
        </InitSlideFromLeft>
      </xCol>
      <xCol cols="24" md="12" class="glassdoor__item">
        <InitSlideFromRight class="glassdoor__animate">
          <bordered-item> <Rating></Rating> </bordered-item
        ></InitSlideFromRight>
      </xCol>
    </xRow>
  </xGrid>
</template>

<script>
import Review from './Review.vue'
import Rating from './Rating.vue'
import borderedItem from './BorderedItem.vue'
import { xGrid, xRow, xCol } from '~/components/careers/general/xGrid'
import InitSlideFromLeft from '~/components/careers/general/xAnimate/InitSlide/InitSlideFromLeft.vue'
import InitSlideFromRight from '~/components/careers/general/xAnimate/InitSlide/InitSlideFromRight.vue'

export default {
  components: {
    xGrid,
    xRow,
    xCol,
    borderedItem,
    Review,
    Rating,
    InitSlideFromLeft,
    InitSlideFromRight
  },
  data() {
    return {
      reviews: [
        {
          review:
            'EXANTE is a great place to apply your skills, enthusiasm \nand professionalism. Also, at EXANTE you can find a healthy \nbalance between work and personal life',
          fullname: 'Francesco Palmisano',
          position: 'Regional Head of Sales',
          imgSrc: '/static/images/careers/reviews/Francesco_Palmisano.jpg',
          imgSrcSet:
            '/static/images/careers/reviews/Francesco_Palmisano.jpg, /static/images/careers/reviews/Francesco_Palmisano.2x.jpg 2x'
        },
        {
          review:
            'I’m very excited about the dynamic migration project and other projects in the EXANTE pipeline. Working at this company is always challenging and rewarding.',
          fullname: 'Jacob Bikovskis',
          position: 'Financial Analyst',
          imgSrc: '/static/images/careers/reviews/Jacob_Bikovskis.jpg',
          imgSrcSet:
            '/static/images/careers/reviews/Jacob_Bikovskis.jpg, /static/images/careers/reviews/Jacob_Bikovskis.2x.jpg 2x'
        },
        {
          review:
            'Our work is broad-ranging, there are a bunch of complex global projects and I’ve got a chance to embody many of my creative ideas.',
          fullname: 'Danya Dolotov',
          position: 'Designer',
          imgSrc: '/static/images/careers/reviews/Danya_Dolotov.jpg',
          imgSrcSet:
            '/static/images/careers/reviews/Danya_Dolotov.jpg, /static/images/careers/reviews/Danya_Dolotov.2x.jpg 2x'
        },
        {
          review:
            'A really great culture exists within this firm. I have the opportunity to work for a diverse range of clients, and the spirit of what I do is always collaborative.',
          fullname: 'Andrea Michael',
          position: 'Senior Account Executive',
          imgSrc: '/static/images/careers/reviews/Andrea_Michael.jpg',
          imgSrcSet:
            '/static/images/careers/reviews/Andrea_Michael.jpg, /static/images/careers/reviews/Andrea_Michael.2x.jpg 2x'
        },
        {
          review:
            'A large part of my work deals with presenting complex technical information in an easily comprehensible manner. This has enabled me to learn a lot more about the industry.',
          fullname: 'Megija Milberga',
          position: 'Copywriter',
          imgSrc: '/static/images/careers/reviews/Megija_Milberga.jpg',
          imgSrcSet:
            '/static/images/careers/reviews/Megija_Milberga.jpg, /static/images/careers/reviews/Megija_Milberga.2x.jpg 2x'
        },
        {
          review:
            'EXANTE is a company that espouses values I care deeply for. Kindness, mindfulness and equal rights make up a great workplace ethos.',
          fullname: 'Olga Aleksashenko',
          position: 'Front End Developer',
          imgSrc: '/static/images/careers/reviews/Olga_Aleksashenko.jpg',
          imgSrcSet:
            '/static/images/careers/reviews/Olga_Aleksashenko.jpg, /static/images/careers/reviews/Olga_Aleksashenko.2x.jpg 2x'
        }
      ],
      reviewInterval: 10000,
      reviewRunning: true,
      interval: null,
      randomReviewIndex: 0
    }
  },
  created() {
    this.calcReviewIndex()
  },
  mounted() {
    this.reviewsChanging()
  },
  beforeDestroy() {
    clearInterval(this.interval)
  },
  methods: {
    calcRandomReviewIndex() {
      return Math.floor(Math.random() * this.reviews.length - 1) + 1
    },
    calcReviewIndex() {
      let newIndex = this.calcRandomReviewIndex()

      while (this.randomReviewIndex === newIndex) {
        // not the same one after another
        newIndex = this.calcRandomReviewIndex()
      }

      this.randomReviewIndex = newIndex
    },
    onReviewClick() {
      this.calcReviewIndex()
      // need to clear for normal run
      clearInterval(this.interval)
      this.reviewsRun()
    },
    reviewsRun() {
      this.interval = setInterval(this.calcReviewIndex, this.reviewInterval)
    },
    reviewsChanging() {
      if (this.reviewRunning) {
        this.reviewsRun()
      }
    }
  }
}
</script>

<style lang="postcss" scoped>
.glassdoor {
  padding: 24px 0 48px;

  font-size: 14px;
  line-height: 24px;

  @media (--sm) {
    font-size: 15px;
  }
  @media (--xl) {
    font-size: 18px;
  }

  /* .glassdoor__review {
    opacity: 0;
    transition: opacity 0.5s ease-in-out;

    &.visible {
      opacity: 1;
    }
  } */
}
.glassdoor__item {
  display: flex;
}
.glassdoor__animate {
  display: flex;
  width: 100%;
}

.review-fade-enter-active,
.review-fade-leave-active {
  transition-property: opacity;
  transition-timing-function: ease-in-out;
  transition-duration: 0.5s;
}

.review-fade-enter,
.review-fade-leave-to {
  opacity: 0;
}
</style>

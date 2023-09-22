<template>
  <div class="why">
    <InitSlideFromLeft><h3>Why work for us</h3></InitSlideFromLeft>
    <InitSlideFromLeft><feature-list :items="features"/></InitSlideFromLeft>
  </div>
</template>

<script>
import FeatureList from './FeatureList.vue'
import InitSlideFromLeft from '~/components/careers/general/xAnimate/InitSlide/InitSlideFromLeft.vue'

export default {
  name: 'Why',
  components: {
    FeatureList,
    InitSlideFromLeft
  },
  data() {
    return {
      features: [
        {
          icon: 'careers-laptop',
          text: 'Professional \ngrowth',
          desc:
            'EXANTE invests in the professional and\u00A0personal growth of each employee.'
        },
        {
          icon: 'careers-rocket',
          text: 'Shaping the future \nof\u00A0finance',
          desc:
            'At\u00A0EXANTE, we\u00A0develop financial technology to\u00A0make global markets universally accessible\u00A0and\u00A0success measurable\u00A0and\u00A0achievable.'
        },
        {
          icon: 'careers-exchange',
          text: 'Diversity',
          desc:
            'At EXANTE, we promote equal opportunities for all employees, regardless of gender, age, race, religion or disability.'
        },
        {
          icon: 'careers-perks',
          text: 'Perks',
          desc:
            'Flexible schedules, remote work, educational courses and private healthcare are just some of\u00A0the benefits available at\u00A0EXANTE.'
        }
      ]
    }
  }
}
</script>

<style lang="postcss" scoped>
.why {
  position: relative;
  padding-bottom: 185px;
  height: 100%;

  h3 {
    font-size: 32px;
    margin-top: 0;
    margin-bottom: 36px;

    @media (--lg) {
      font-size: 36px;
      margin-bottom: 25px;
    }
    @media (--xl) {
      font-size: 44px;
      margin-bottom: 40px;
    }
  }
  @media (--sm) {
    padding-bottom: 40px;
  }
  @media (--md) {
    padding-top: 60px;
    padding-bottom: 224px;
    padding-right: 48px;
  }
  @media (--xl) {
    padding-top: 76px;
    padding-bottom: 270px;
  }

  &::after {
    content: '';
    position: absolute;
    bottom: -50px;
    left: -190px;
    width: 627px;
    height: 236px;
    background-image: url('/static/images/careers/about/about-illustration.webp');
    background-size: cover;

    @media (--sm) {
      display: none;
    }
    @media (--md) {
      display: block;
      bottom: 0;
      left: -146px;
      width: 627px;
      height: 236px;
    }
    @media (--lg) {
      right: -16px;
      left: auto;
    }
    @media (--xl) {
      width: 808px;
      height: 304px;
    }
  }

  ::v-deep {
    .careers-laptop {
      .icontext__icon {
        @media (--xs) {
          width: 58px;
          height: 44px;
        }
      }
    }

    .careers-rocket {
      .icontext__icon {
        @media (--xs) {
          width: 52px;
          height: 52px;
        }
      }
    }

    .careers-exchange {
      .icontext__icon {
        @media (--xs) {
          width: 55px;
          height: 50px;
        }
      }
    }

    .careers-perks {
      .icontext__icon {
        @media (--xs) {
          width: 48px;
          height: 52px;
        }
      }
    }

    .icontext__icon {
      @media (--lg) {
        margin-bottom: 15px;
      }
    }

    .feature__desc {
      @media (--lg) {
        max-width: 224px;
      }
      @media (--xl) {
        max-width: 304px;
      }
    }
  }

  ::v-deep .xCol:nth-child(1),
  ::v-deep .xCol:nth-child(2) {
    @media (--lg) {
      .feature {
        margin-bottom: 18px;
      }
    }
  }
}
</style>

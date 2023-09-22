<template>
  <div class="values">
    <InitSlideFromRight><h3>Our values</h3></InitSlideFromRight>
    <div class="values__right"></div>
    <InitSlideFromRight><feature-list :items="features"/></InitSlideFromRight>
  </div>
</template>

<script>
import FeatureList from './FeatureList.vue'
import InitSlideFromRight from '~/components/careers/general/xAnimate/InitSlide/InitSlideFromRight.vue'

export default {
  name: 'Values',
  components: {
    FeatureList,
    InitSlideFromRight
  },
  data() {
    return {
      features: [
        {
          icon: 'careers-passion',
          text: 'Passion',
          desc:
            'We\u00A0believe that anything is\u00A0possible. We\u00A0enjoy advancing ideas, creating new products and pushing old boundaries to\u00A0form different models and approaches.'
        },
        {
          icon: 'careers-ownership',
          text: 'Ownership',
          desc:
            'We\u00A0learn from our mistakes and\u00A0use\u00A0them\u00A0to\u00A0develop new ideas. We\u00A0run towards new challenges as\u00A0we\u00A0know opportunity is\u00A0often where it\u00A0is\u00A0least expected.'
        },
        {
          icon: 'careers-evangelist',
          text: 'Change evangelist',
          desc:
            'We\u00A0want to\u00A0be\u00A0market leaders, not followers. There is\u00A0always an\u00A0opportunity to\u00A0make an\u00A0impact.'
        },
        {
          icon: 'careers-loyality',
          text: 'Loyalty',
          desc:
            "Loyalty is\u00A0about action, not length of\u00A0employment. We\u00A0work smart and hard; we\u00A0know the company's success is\u00A0tied to\u00A0our success."
        },
        {
          icon: 'careers-integrity',
          text: 'Integrity',
          desc:
            'We\u00A0take our commitment to\u00A0giving the best service and products to\u00A0our customers seriously. We\u00A0honour all our promises as\u00A0we\u00A0know our customers rely on\u00A0us and\u00A0we\u00A0rely on\u00A0them. We\u00A0value this relationship at\u00A0all costs.'
        }
      ]
    }
  }
}
</script>

<style lang="postcss" scoped>
.values {
  color: #fff;
  background: var(--primary-300-color);
  position: relative;
  margin-left: -20px;
  margin-right: -20px;
  padding: 63px 20px 24px;
  height: 100%;

  @media (--sm) {
    margin-left: -72px;
    margin-right: -72px;
    padding: 40px 72px 44px 72px;
  }
  @media (--md) {
    margin-left: 0;
    margin-right: 0;
    padding: 60px 14px 44px 40px;
  }
  @media (--lg) {
    padding: 60px 0 30px 50px;
  }
  @media (--xl) {
    padding: 76px 14px 88px 62px;
  }

  h3 {
    color: inherit;
    font-size: 32px;
    margin-bottom: 36px;
    margin-top: 0;

    @media (--lg) {
      font-size: 36px;
      margin-bottom: 25px;
    }
    @media (--xl) {
      font-size: 44px;
      margin-bottom: 40px;
    }
  }

  ::v-deep .icontext__text,
  ::v-deep .icontext__icon,
  ::v-deep .feature__desc {
    color: #fff;
  }

  ::v-deep .icontext__icon {
    width: 50px;
    height: 50px;
    margin-right: 16px;

    @media (--sm) {
      width: 40px;
      height: 40px;
      margin-right: 0;
      margin-bottom: 12px;
    }
    @media (--md) {
      width: 32px;
      height: 32px;
    }
    @media (--lg) {
      margin-bottom: 15px;
    }
    @media (--xl) {
      width: 48px;
      height: 48px;
    }
  }

  ::v-deep .feature__desc {
    margin-top: 16px;
    margin-bottom: 24px;

    @media (--sm) {
      margin-bottom: 8px;
      font-weight: 400;
    }
    @media (--lg) {
      margin-top: 0;
      max-width: 224px;
    }
    @media (--xl) {
      max-width: 342px;
    }
  }

  ::v-deep .xCol:last-child {
    max-width: 100%;
    flex-basis: 100%;

    .feature,
    .feature__desc {
      max-width: 100%;
    }

    .feature__desc {
      @media (--lg) {
        max-width: calc(100% - 60px);
      }
    }
  }

  ::v-deep .xCol:first-child {
    .feature__desc {
      @media (--xl) {
        max-width: 304px;
      }
    }
  }

  ::v-deep .xCol:nth-child(3) {
    .feature {
      @media (--md) {
        margin-bottom: 64px;
      }
      @media (--lg) {
        margin-bottom: 0;
      }
    }

    .feature__desc {
      @media (--lg) {
        max-width: 208px;
      }
      @media (--xl) {
        max-width: 272px;
      }
    }
  }

  ::v-deep .xCol:nth-child(1),
  ::v-deep .xCol:nth-child(2) {
    @media (--xl) {
      .feature {
        margin-bottom: 18px;
      }
    }
  }
}

.values__right {
  position: absolute;
  top: 0;
  right: 0;

  padding: 56px 20px 24px;

  background: var(--primary-300-color);
  @media (--sm) {
    min-width: 72px;
    height: 100%;
    padding: 42px 0 42px 8px;
  }
  @media (--md) {
    left: 100%;

    min-width: 104px;
    padding: 62px 69px 69px 9px;
  }
  @media (--lg) {
    padding: 76px 62px 76px 16px;
  }
  @media (--xl) {
    right: auto;

    min-width: calc((100vw - var(--xcontainer__max-width-xl)) / 2 + 128px);
    padding: 80px 75px 80px 13px;
  }
}
</style>

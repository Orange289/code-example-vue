<template>
  <div class="info">
    <InitSlideFromLeft>
      <Title class="info__title" underlined>About</Title>
    </InitSlideFromLeft>
    <xRow>
      <xCol class="info__desc" cols="24" sm="8" md="11">
        <InitSlideFromLeft>
          <p>{{ descFirst }}</p>
        </InitSlideFromLeft>
        <InitSlideFromLeft>
          <div class="info__quote" v-html="quoteFirst"></div>
        </InitSlideFromLeft>
        <InitSlideFromLeft>
          <p>{{ descSecond }}</p>
        </InitSlideFromLeft>
      </xCol>
      <xCol class="info__values" cols="24" sm="8" md="13">
        <BackMap></BackMap>
        <InitSlideFromRight>
          <div class="info__quote" v-html="quoteSecond"></div>
        </InitSlideFromRight>
        <ul class="info__nums">
          <li v-for="(item, index) in nums" :key="index">
            <InitSlideFromRight>
              <NumText
                class="info__numtext"
                :amount="item.amount"
                :value="item.value"
              >
                <template v-if="item.symbol" v-slot:symbol>
                  <span>{{ item.symbol }}</span>
                </template>
              </NumText>
            </InitSlideFromRight>
          </li>
        </ul>
      </xCol>
    </xRow>
  </div>
</template>

<script>
import Title from '../../general/title/Title.vue'
import NumText from '../../general/numtext/NumText.vue'
import { xRow, xCol } from '../../general/xGrid'
import BackMap from './BackMap.vue'
import InitSlideFromLeft from '~/components/careers/general/xAnimate/InitSlide/InitSlideFromLeft.vue'
import InitSlideFromRight from '~/components/careers/general/xAnimate/InitSlide/InitSlideFromRight.vue'

export default {
  name: 'Info',
  components: {
    Title,
    NumText,
    xRow,
    xCol,
    BackMap,
    InitSlideFromLeft,
    InitSlideFromRight
  },
  data() {
    return {
      descFirst:
        'EXANTE is a wealthtech company that provides centralised trading solutions and B2B financial infrastructure; we create value through technology.',
      descSecond:
        'The globalisation of capital flows, in combination with digitalisation, enables capital markets to be constantly in motion. In this day and age, as capital and information are intrinsically the same, people, businesses, and AI should be able to freely connect and transact with each other, without boundaries and limits.',
      quoteFirst: 'We believe freedom<br>is an inherent right',
      quoteSecond:
        'As a financial company, we\u00A0know\u00A0our\u00A0investment\u00A0priorities.<br>We invest in our people.',
      nums: [
        {
          amount: '500',
          symbol: '+',
          value: 'professionals'
        },
        {
          amount: '33',
          symbol: '%',
          value: 'females'
        },
        {
          amount: '25',
          symbol: '+',
          value: 'nationalities'
        },
        {
          amount: '35',
          symbol: '+',
          value: 'countries of remote\u00A0work'
        }
      ]
    }
  }
}
</script>

<style lang="postcss" scoped>
.info {
  margin-bottom: 24px;
  position: relative; /* for map */

  @media (--lg) {
    margin-bottom: 40px;
  }
  @media (--xl) {
    margin-bottom: 54px;
  }

  ::v-deep .xRow {
    justify-content: space-between;
  }
}

.info__quote {
  font-size: 18px;
  font-weight: 300;
  line-height: 1.3;
  padding-left: 19px;
  border-left: 2px solid var(--primary-300-color);
  margin-bottom: 26px;

  @media (--sm) {
    padding-left: 14px;
  }
  @media (--md) {
    font-size: 20px;
    padding-left: 22px;
    margin-bottom: 46px;
  }
  @media (--lg) {
    font-size: 24px;
    padding-left: 46px;
  }
  @media (--xl) {
    font-size: 32px;
    margin-bottom: 49px;
  }
}

.info__desc {
  color: var(--accent-100-color);
  font-size: 14px;
  line-height: 1.7;
  font-weight: 400;
  margin-top: 0;
  margin-bottom: 20px;

  @media (--sm) {
    font-size: 15px;
    margin-bottom: 28px;
    max-width: 264px;
  }
  @media (--md) {
    font-size: 16px;
    margin-bottom: 44px;
    max-width: 384px;
  }
  @media (--lg) {
    font-size: 15px;
    max-width: 416px;
    margin-bottom: 53px;
  }
  @media (--xl) {
    font-size: 18px;
    line-height: 28px;
    margin-bottom: 53px;
    max-width: 560px;
  }

  p {
    @media (--sm) {
      max-width: 264px;
    }
    @media (--md) {
      max-width: 384px;
    }
    @media (--lg) {
      max-width: 416px;
    }
    @media (--xl) {
      max-width: 560px;
    }
  }

  .info__quote {
    margin-top: 20px;

    @media (--sm) {
      margin-top: 28px;
    }
    @media (--md) {
      margin-top: 44px;
    }
    @media (--lg) {
      margin-top: 48px;
    }
    @media (--xl) {
      margin-top: 52px;
    }
  }
}

.info__desc--second {
  margin-bottom: 0;
}

.info__nums {
  list-style: none;
  display: grid;
  grid-template-columns: 50% 50%;
  grid-row-gap: 33px;
  padding: 0;
  margin: 0;
  margin-top: 44px;

  @media (--sm) {
    grid-row-gap: 34px;
    margin-top: 0;
    max-width: 304px;
  }
  @media (--md) {
    max-width: 312px;
  }
  @media (--lg) {
    max-width: 512px;
    grid-row-gap: 36px;
  }
  @media (--xl) {
    max-width: 640px;
    grid-row-gap: 37px;
  }
}

.info__title {
  @media (--sm) {
    margin-bottom: 31px;
  }
  @media (--md) {
    margin-bottom: 35px;
  }
  @media (--xl) {
    margin-bottom: 47px;
  }
}

.info__values {
  @media (--sm) {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
  @media (--md) {
    position: relative; /* for map */
  }
  @media (--lg) {
    justify-content: flex-start;
  }
  .info__quote {
    @media (--md) {
      max-width: 344px;
    }
    @media (--lg) {
      margin-bottom: 70px;
    }
    @media (--lg) {
      max-width: 560px;
    }
  }
}

.info__numtext {
  font-family: inherit;
}
</style>

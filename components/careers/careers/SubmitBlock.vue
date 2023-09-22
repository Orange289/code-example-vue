<template>
  <div
    :class="[
      'submitblock',
      { 'submitblock--privacy': withPrivacy },
      { 'submitblock--about': currentPage.includes('about') }
    ]"
  >
    <xGrid>
      <xRow>
        <xCol
          cols="24"
          :sm="withSearch ? '16' : '10'"
          :md="withSearch ? '12' : '18'"
          class="submitblock__texts"
        >
          <xRow>
            <xCol cols="3" sm="24" md="16">
              <div v-if="title" class="submitblock__title">
                <InitSlideFromLeft>
                  <h2>{{ title }}</h2>
                </InitSlideFromLeft>
              </div>
            </xCol>
            <xCol
              v-if="withPrivacy"
              cols="1"
              class="submitblock__icon-wrap submitblock__icon-wrap--mobile"
            >
              <InitSlideFromRight>
                <SvgIcon id="privacy" label="privacy icon" role="img" />
              </InitSlideFromRight>
            </xCol>
            <xCol
              v-if="!withSearch"
              md="8"
              class="submitblock__btn-wrap submitblock__btn-wrap--desktop"
            >
              <InitSlideFromRight>
                <xButton
                  style-type="secondary"
                  :label="buttonText"
                  class="submitblock__btn"
                  @click.native="onSubmit"
                ></xButton>
              </InitSlideFromRight>
            </xCol>
          </xRow>

          <div v-if="text" class="submitblock__text">
            <InitSlideFromLeft>
              <p>{{ text }}</p>
            </InitSlideFromLeft>
          </div>
        </xCol>
        <!-- <xCol
          v-if="buttonText"
          class="submitblock__btn-wrap"
          cols="24"
          sm="8"
          md="5"
        >
          <InitSlideFromRight>
            <xButton
              style-type="secondary"
              href="/submit-cv/"
              :label="buttonText"
              class="submitblock__btn submitblock__btn--mobile"
            ></xButton>
            <xButton
              style-type="secondary"
              :label="buttonText"
              class="submitblock__btn"
              @click.native="onSubmit"
            ></xButton>
          </InitSlideFromRight>
        </xCol> -->
        <xSpacer></xSpacer>
        <xCol v-if="withPrivacy" class="submitblock__icon" sm="6" md="4">
          <InitSlideFromRight
            v-if="!withSearch"
            class="submitblock__btn-wrap submitblock__btn-wrap--mobile"
          >
            <xButton
              style-type="secondary"
              href="/submit-cv/"
              :label="buttonText"
              class="submitblock__btn submitblock__btn--mobile"
            ></xButton>
          </InitSlideFromRight>
          <InitSlideFromRight class="submitblock__icon-wrap">
            <SvgIcon id="privacy" label="privacy icon" role="img" />
          </InitSlideFromRight>
        </xCol>
        <xCol
          v-if="withSearch"
          class="submitblock__searchFormWrap"
          cols="24"
          md="12"
        >
          <InitSlideFromRight>
            <search-form style-type="light" />
          </InitSlideFromRight>
        </xCol>
        <xSpacer v-if="withSearch" class="submitblock__xl-spacer"></xSpacer>
      </xRow>
    </xGrid>
  </div>
</template>

<script>
import { xGrid, xRow, xCol, xSpacer } from '../general/xGrid'
import xButton from '../general/xButton/xButton'
import SvgIcon from '../svg-icon/SvgIcon.vue'
import SearchForm from './SearchForm.vue'
import InitSlideFromLeft from '~/components/careers/general/xAnimate/InitSlide/InitSlideFromLeft.vue'
import InitSlideFromRight from '~/components/careers/general/xAnimate/InitSlide/InitSlideFromRight.vue'

export default {
  name: 'SubmitBlock',
  components: {
    xGrid,
    xRow,
    xCol,
    xSpacer,
    xButton,
    SvgIcon,
    InitSlideFromLeft,
    InitSlideFromRight,
    SearchForm
  },
  props: {
    title: {
      type: String
    },
    text: {
      type: String
    },
    buttonText: {
      type: String
    },
    buttonAttrs: {
      type: Object,
      default: () => {}
    },
    onClick: {
      type: Function
    },
    withPrivacy: {
      type: Boolean,
      default: false
    },
    withSearch: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    currentPage() {
      return this.$nuxt.$route.name
    }
  },
  methods: {
    onSubmit() {
      if (this.onClick) {
        this.onClick()
      }
      this.$emit('onSubmit')
    }
  }
}
</script>

<style lang="postcss" scoped>
.submitblock {
  color: #fff;
  background: var(--primary-500-color);

  padding: 32px 0 48px;

  @media (--sm) {
    padding: 40px 0;
  }

  @media (--md) {
    padding: 36px 0;
  }

  @media (--lg) {
    padding: 52px 0 51px;
  }

  @media (--xl) {
    padding: 48px 0 64px;
  }
}

.submitblock__title {
  padding-bottom: 0;

  h2 {
    color: inherit;
    font-size: 24px;
    line-height: 1.3;
    margin: 0;
    padding: 0;
    max-width: 200px;

    @media (--sm) {
      max-width: 100%;
    }
    @media (--md) {
      font-size: 32px;
    }
    @media (--lg) {
      font-size: 36px;
    }
    @media (--xl) {
      font-size: 44px;
      line-height: 48px;
    }
  }

  @media (--xl) {
    padding-bottom: 16px;
  }
}

.submitblock__text {
  font-size: 14px;
  line-height: 24px;

  @media (--xl) {
    font-size: 18px;
  }

  p {
    @media (--sm) {
      max-width: 300px;
    }
    @media (--md) {
      font-size: 15px;
      max-width: 720px;
    }
    @media (--lg) {
      max-width: 768px;
    }
    @media (--xl) {
      font-size: 18px;
      max-width: 100%;
    }
  }
}

.submitblock__icon {
  svg {
    display: none;
    width: 112px;
    height: 96px;

    @media (--sm) {
      display: block;
    }
  }
  /* 
  @media (--md) {
    display: flex;
    justify-content: flex-end;
    padding-top: 12px;
  }
  @media (--lg) {
    padding-top: 16px;
  } */
}

.submitblock__searchFormWrap {
  z-index: 1;

  @media (--lg) {
    margin-top: 10px;
    padding-left: 0;
  }

  ::v-deep .xCol:first-child {
    @media (--lg) {
      padding-left: 5px;
    }
  }
}

.submitblock__xl-spacer {
  display: none;
  @media (--xl) {
    display: block;
  }
}

.submitblock__icon-wrap {
  @media (--md) {
    display: flex;
    justify-content: flex-end;
  }
}

.submitblock__btn-wrap {
  &--mobile {
    @media (--sm) {
      margin-bottom: 16px;
      .submitblock__btn {
        max-width: 200px;
      }
    }
    @media (--md) {
      display: none;
    }
  }
  &--desktop {
    display: none;
    @media (--md) {
      display: flex;
      padding-bottom: 16px;
      align-items: center;
    }
  }
}

.submitblock__icon-wrap {
  svg {
    width: 76px;
    height: 64px;

    @media (--sm) {
      width: 68px;
      height: 58px;
    }
    @media (--md) {
      width: 118px;
      height: 100px;
    }
    @media (--lg) {
      width: 128px;
      height: 108px;
    }
  }
}

.submitblock__icon-wrap.submitblock__icon-wrap--mobile {
  @media (--sm) {
    display: none;
  }
}

.submitblock--about {
  @media (--sm) {
    padding: 37px 0 48px;
  }

  @media (--md) {
    padding: 44px 0 48px;
  }

  @media (--lg) {
    padding: 37px 0 44px;
  }

  @media (--xl) {
    padding: 44px 0 48px;
  }

  ::v-deep .xForm__fields {
    @media (--sm) {
      /* margin-left: calc(var(--xgrid__gutter, 16px) / -1) !important; */
    }
  }
  ::v-deep .xForm__fields-wrap {
    @media (--sm) {
      flex-wrap: nowrap;
    }
  }

  ::v-deep .xForm__field-wrap {
    margin-bottom: 8px;

    @media (--sm) {
      margin-bottom: 0;
      flex-grow: 1 !important;
      flex-shrink: 1 !important;
    }
  }

  ::v-deep .xForm__submit_wrap {
    margin-right: 7px;

    @media (--sm) {
      width: 112px;
      margin-top: 0;
      flex-grow: 0;
      flex-shrink: 1;
      flex-basis: auto;
    }
    @media (--lg) {
      margin-right: 0;
      width: auto;
      flex-basis: 112px;
    }
  }

  ::v-deep .spacer {
    @media (--lg) {
      flex-grow: 0 !important;
    }
  }

  .submitblock__title {
    h2 {
      max-width: 320px;

      @media (--sm) {
        max-width: 100%;
      }
    }
  }
}
</style>

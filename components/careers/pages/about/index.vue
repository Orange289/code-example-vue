<template>
  <DefaultLayout class="about">
    <xGrid class="about__wrap">
      <xRow>
        <xCol cols="24">
          <transition name="left">
            <Info />
          </transition>
        </xCol>
      </xRow>
    </xGrid>
    <button type="button" class="about__video" @click="openVideo">
      <xGrid class="about__wrap">
        <svg
          role="presentation"
          class="about__play"
          width="40"
          height="40"
          viewBox="0 0 40 40"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="20" cy="20" r="19.1" fill="currentColor" />
          <path d="M26 20.2L17 25.3962L17 15.0039L26 20.2Z" fill="#06c8ff" />
        </svg>
        <span>Watch video about our values</span>
      </xGrid>
    </button>

    <xGrid class="about__wrap">
      <xRow class="about__features">
        <xCol class="about__why" cols="24" md="11">
          <Why />
        </xCol>
        <xCol class="about__values" cols="24" md="13">
          <Values />
        </xCol>
      </xRow>
    </xGrid>
    <template #callta>
      <SubmitBlock :title="aboutSubmitTitle" with-search />
    </template>
    <VideoPopup @close="closeVideo">
      <template #iframe>
        <vimeo-player
          ref="player"
          video-url="https://vimeo.com/624398492/8442ecfd5f"
          player-width="800"
          player-height="auto"
          :options="{
            color: '007f39'
          }"
        />
      </template>
    </VideoPopup>
    <template #awards><VVoid></VVoid></template>
  </DefaultLayout>
</template>

<script>
import DefaultLayout from '../../layouts/DefaultCareersLayout.vue'
import { xGrid, xRow, xCol } from '../../general/xGrid'
import Info from './Info.vue'
import Why from './Why.vue'
import Values from './Values.vue'
import VideoPopup from './VideoPopup.vue'
import SubmitBlock from '~/components/careers/careers/SubmitBlock.vue'
import VVoid from '~/utils/VVoid'

export default {
  components: {
    DefaultLayout,
    VVoid,
    SubmitBlock,
    xGrid,
    xRow,
    xCol,
    Info,
    Why,
    Values,
    VideoPopup
  },
  data() {
    return {
      aboutSubmitTitle:
        'Ready to find your next opportunity\u00A0for\u00A0growth?',
      desc:
        'As a financial company, we know our investment priorities. We choose to invest into your professional improvement and\u00A0well-being.'
    }
  },
  methods: {
    openVideo() {
      this.$store.commit('careers/toggleVideo')
      this.$emit('open')
      this.$nextTick(() => {
        document.body.classList.add('popup-open')
      })
    },
    closeVideo() {
      this.$store.commit('careers/toggleVideo')
      this.$refs.player.pause()
      this.$nextTick(() => {
        document.body.classList.remove('popup-open')
      })
    }
  }
}
</script>

<style lang="postcss" scoped>
.about__wrap {
  @media (--xs) {
    overflow: hidden;
  }
}

.about__desc {
  margin-bottom: 24px;

  p {
    color: var(--accent-100-color);
    font-family: var(--font-family-secondary);
    font-size: 18px;
    line-height: 1.3;
    font-weight: 400;
    margin: 0;
  }

  @media (--sm) {
    margin-bottom: 32px;

    p {
      font-size: 24px;
    }
  }
  @media (--md) {
    margin-top: -48px;
    margin-bottom: 56px;
  }
  @media (--lg) {
    margin-top: -20px;

    p {
      line-height: 1.5;
    }
  }
  @media (--xl) {
    margin-top: -40px;
    p {
      font-size: 32px;
    }
  }
}

/* .about__features {
  @media (--sm) {
    margin-bottom: 40px;
  }
  @media (--lg) {
    margin-bottom: 60px;
  }
  @media (--xl) {
    margin-bottom: 80px;
  }
} */

.about__events {
  margin-bottom: 22px;

  @media (--lg) {
    margin-bottom: 45px;
  }
  @media (--xl) {
    margin-bottom: 92px;
  }
}

.about__video {
  display: block;
  cursor: pointer;
  width: 100%;
  margin-bottom: 52px;
  padding: 44px 0;

  color: #ffffff;

  background: var(--accent-1000-color);
  border: 0 none;

  @media (--sm) {
    padding: 30px 0;
  }
  @media (--md) {
    margin-bottom: 0;
    padding: 36px 0 32px;
  }
  @media (--lg) {
    padding: 44px 0 40px;
  }
  @media (--xl) {
    padding: 48px 0 44px;
  }
  span {
    font-weight: 300;
    font-size: 24px;
    @media (--sm) {
      font-size: 32px;
    }
    @media (--lg) {
      font-size: 36px;
    }
    @media (--xl) {
      font-size: 44px;
    }
  }
  .about__wrap {
    display: flex;
    flex-wrap: nowrap;
    justify-content: flex-start;
    align-items: center;
    text-align: left;
    transform-origin: left center;
  }
  svg,
  span {
    transition: transform 0.3s ease-in-out;
  }

  &:hover,
  &:focus {
    svg {
      transform: scale(1.1);
    }
    span {
      transform: scale(1.025);
    }
  }
}

.about__play {
  width: 56px;
  height: 56px;
  margin-right: 28px;
  @media (--sm) {
    width: 40px;
    height: 40px;
    margin-right: 40px;
  }
  @media (--md) {
    width: 32px;
    height: 32px;
    margin-right: 32px;
  }
  @media (--xl) {
    width: 48px;
    height: 48px;
    margin-right: 48px;
  }
}
</style>

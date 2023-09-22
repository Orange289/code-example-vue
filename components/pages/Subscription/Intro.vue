<template>
  <section class="intro">
    <UnderHeader class="intro__underheader">
      <Container>
        <div class="intro__top">
          <div class="intro__text">
            <h1>
              EXANTE Market Insights
              <span>Unlock the power of exclusive market analysis</span>
            </h1>
            <p>
              Join our growing community of investors who rely on EXANTE Market
              Insights to stay informed and make smarter investment decisions.
            </p>
            <SiteButton
              dataStyleType="fgreen"
              class="intro__btn"
              @click.native="toChoose"
              >Join us</SiteButton
            >
          </div>
          <div class="intro__pic">
            <img
              class="intro__image intro__image--mobile"
              src="/static/images/subscription/subscription-intro-pic-mobile.png"
              alt="intro picture"
            />
            <div class="intro__image intro__image--desktop">
              <div
                class="intro__overlay"
                :class="{ 'intro__overlay--show': showPic }"
              ></div>
              <img
                class="intro__img intro__img--laptop"
                src="/static/images/subscription/laptop.png"
                alt="laptop"
              />
              <div
                class="intro__pics intro__pics--top"
                :class="{ 'intro__pics--show': showPic }"
              >
                <img
                  src="/static/images/subscription/top-screen-1.png"
                  alt="screen image"
                />
                <img
                  src="/static/images/subscription/top-screen-2.png"
                  alt="screen image"
                />
                <img
                  src="/static/images/subscription/top-screen-3.png"
                  alt="screen image"
                />
                <div class="intro__label">Researches</div>

                <img
                  src="/static/images/subscription/bottom-screen-1.png"
                  alt="screen image"
                />
                <img
                  src="/static/images/subscription/bottom-screen-2.png"
                  alt="screen image"
                />
                <img
                  src="/static/images/subscription/bottom-screen-4.png"
                  alt="screen image"
                />
                <img
                  src="/static/images/subscription/bottom-screen-3.png"
                  alt="screen image"
                />
                <div class="intro__label">Regular Insights</div>
              </div>
              <!-- <div
                class="intro__pics intro__pics--bottom"
                :class="{ 'intro__pics--show': showPic }"
              >
                
              </div> -->
            </div>
          </div>
        </div>
        <ul class="intro__features">
          <li v-for="(item, index) in items" :key="index">
            <img
              :src="`/static/images/subscription/${item.icon}.svg`"
              :alt="item.icon"
            />
            <p v-html="item.desc"></p>
          </li>
        </ul>
      </Container>
    </UnderHeader>
  </section>
</template>

<script>
import UnderHeader from '~/components/general/UnderHeader/UnderHeader.vue'
import Container from '~/components/general/Container.vue'
import SiteButton from '~/components/general/SiteButton/SiteButton.vue'

export default {
  name: 'Intro',
  data() {
    return {
      items: [
        {
          icon: 'rocket-icon',
          desc:
            'Stay ahead of the curve: follow the&nbsp;markets with&nbsp;EXANTE’s regular insights'
        },
        {
          icon: 'eye-icon-2',
          desc:
            'Look beyond the headlines and discover what’s moving&nbsp;and shaping the markets'
        }
      ],
      showPic: false
    }
  },
  components: {
    UnderHeader,
    Container,
    SiteButton
  },
  methods: {
    toChoose() {
      document.querySelector('#choose').scrollIntoView({ behavior: 'smooth' })
    }
  },
  mounted() {
    setTimeout(() => {
      this.showPic = true
    }, 200)
  }
}
</script>

<style lang="scss" scoped>
.intro {
  padding-bottom: 70px;

  h1 {
    @include h1;

    @include header_underline;

    span {
      font-size: 24px;
      line-height: 27px;
      display: block;
      margin-top: 10px;

      @include bp(desktop-wide) {
        font-size: 44px;
        line-height: 55px;
      }
    }

    @include bp(desktop-wide) {
      font-size: 58px;
      line-height: 70px;
    }
  }

  p {
    margin-bottom: 30px;

    @include bp(desktop-wide) {
      font-size: 22px;
      line-height: 30px;
      margin-bottom: 40px;
    }
  }

  @include bp(desktop-large) {
    padding-bottom: 100px;
  }
}

.intro__btn {
  width: 100%;

  margin-bottom: 35px;

  ::v-deep button {
    height: 50px;
  }

  @include bp(desktop-large) {
    width: 154px;
  }
}

.intro__pic {
  width: 100%;
  margin-bottom: 48px;
  text-align: center;

  @include bp(desktop-large) {
    width: 600px;
    margin-bottom: 0;
  }

  @include bp(desktop-wide) {
    width: 670px;
  }
}

.intro__image {
  &--desktop {
    display: none;

    @include bp(desktop-large) {
      display: block;
      position: relative;
    }
  }

  &--mobile {
    @include bp(desktop-large) {
      display: none;
    }
  }
}

.intro__top {
  @include bp(desktop-large) {
    display: flex;
    justify-content: space-between;
  }
}

.intro__text {
  @include bp(desktop-large) {
    width: 50%;
    max-width: 720px;
    padding-right: 90px;
  }
}

.intro__features {
  list-style: none;
  padding: 0;
  margin: 0;
  margin-top: 100px;

  p {
    font-family: $font-family-second;
    font-weight: 400;
    font-size: 20px;
    line-height: 25px;
    margin-top: 20px;
    margin-bottom: 0;

    @include bp(desktop-large) {
      margin-top: 0;
      max-width: 550px;
    }

    @include bp(desktop-wide) {
      font-size: 28px;
      line-height: 35px;
    }
  }

  li + li {
    margin-top: 50px;
    @include bp(desktop-large) {
      margin-top: 0;
    }
  }

  li {
    @include bp(desktop-large) {
      display: flex;
      align-items: center;
      max-width: 710px;
      width: 50%;
    }
  }

  img {
    @include bp(desktop-large) {
      width: 60px;
      margin-right: 40px;
    }
  }

  @include bp(desktop-large) {
    display: flex;
    justify-content: space-between;
  }
}

.intro__underheader {
  @include bp(mobile) {
    padding-top: 220px;
  }
  @include bp(tablet) {
    padding-top: 190px;
  }
  padding-top: 90px;
}

.intro__overlay {
  position: absolute;
  top: 31px;
  left: 71px;
  width: 466px;
  height: 281px;
  background: rgba(#f5f5f5, 0.9);
  opacity: 0;
  transition: opacity 1s;

  &--show {
    opacity: 1;
  }

  @include bp(desktop-wide) {
    top: 36px;
    left: 78px;
    width: 521px;
    height: 312px;
  }
}

.intro__pics {
  .intro__label {
    color: $color__green;
    font-family: $font-family-second;
    font-weight: 400;
    position: absolute;
    background: $color__green-2-lighter;
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 3;
  }

  img,
  .intro__label {
    opacity: 0;
  }

  &--show {
    img,
    .intro__label {
      opacity: 1;
      transition: opacity 0.5s;
    }
  }

  // &--top {
  img:nth-of-type(1),
  img:nth-of-type(2),
  img:nth-of-type(3) {
    position: absolute;
    width: 370px;
    height: auto;
    // z-index: 2;

    @include bp(desktop-wide) {
      width: 440px;
    }
  }

  img:nth-of-type(1) {
    top: -20px;
    left: 58px;
    transition-delay: 1.6s;
    z-index: 3;
  }

  img:nth-of-type(2) {
    top: 0px;
    left: 38px;
    transition-delay: 1.9s;
    z-index: 5;
  }

  img:nth-of-type(3) {
    top: 20px;
    left: 18px;
    transition-delay: 2.2s;
    z-index: 7;
  }

  .intro__label:nth-of-type(1) {
    font-size: 28px;
    left: 0;
    bottom: 113px;
    padding: 10px;
    max-height: 50px;
    width: 180px;
    transition-delay: 2.4s;
    z-index: 8;

    @include bp(desktop-wide) {
      bottom: 116px;
    }
  }
  // }

  // &--bottom {
  //   z-index: 1;

  img:nth-of-type(4),
  img:nth-of-type(5),
  img:nth-of-type(6),
  img:nth-of-type(7) {
    position: absolute;
    width: 210px;

    @include bp(desktop-wide) {
      width: 260px;
    }
  }

  img:nth-of-type(4) {
    top: 122px;
    right: -24px;
    transition-delay: 0.6s;
    z-index: 1;
  }

  img:nth-of-type(5) {
    top: 142px;
    right: -4px;
    transition-delay: 0.9s;
    z-index: 2;
  }

  img:nth-of-type(6) {
    top: 162px;
    right: 16px;
    transition-delay: 1.2s;
    z-index: 4;
  }

  img:nth-of-type(7) {
    top: 182px;
    right: 36px;
    transition-delay: 1.5s;
    z-index: 6;
  }

  .intro__label:nth-of-type(2) {
    font-size: 22px;
    padding: 5px;
    max-height: 40px;
    width: 195px;
    bottom: 44px;
    right: 72px;
    transition-delay: 2.8s;
    z-index: 8;

    @include bp(desktop-wide) {
      bottom: 58px;
      right: 120px;
    }
  }
  // }
}
</style>

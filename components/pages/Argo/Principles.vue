<template>
  <section class="principles">
    <Container>
      <h3
        v-html="$t('exante.pages.funds.argo.principles.header')"
        class="argo__title"
      ></h3>
      <ul class="principles__notes">
        <li
          v-for="(note, index) in $t(
            'exante.pages.funds.argo.principles.notes'
          )"
          :key="index"
        >
          {{ note }}
        </li>
      </ul>
      <div class="principles__info">
        <div class="principles__strategy">
          <h4
            v-html="$t('exante.pages.funds.argo.principles.strategy.header')"
          ></h4>
          <p
            v-html="$t('exante.pages.funds.argo.principles.strategy.desc')"
          ></p>
          <div class="principles__net">
            <span
              v-html="
                $t('exante.pages.funds.argo.principles.strategy.netTitle')
              "
            ></span>
            <span class="principles__net-amount">6.9%</span>
          </div>
        </div>
        <div class="principles__client">
          <h4
            v-html="$t('exante.pages.funds.argo.principles.client.header')"
          ></h4>
          <p v-html="$t('exante.pages.funds.argo.principles.client.desc')"></p>
          <div class="principles__client-image">
            <picturelazy
              :source="[
                {
                  srcset:
                    '/static/images/argo/client.jpg 1x, /static/images/argo/client@2x.jpg 2x'
                }
              ]"
              v-animate.repeat.fade="'slide-up'"
              class="bonds__image"
              alt=""
            ></picturelazy>
          </div>
        </div>
      </div>
      <div class="principles__learnmore">
        <p v-html="$t('exante.pages.funds.argo.principles.learnmore.text')"></p>
        <!-- <a class="principles__btn" href="#">
          <span v-html="texts.learnmore.btn"></span>
          <svg-icon name="funds/arrow" class="principles__btn-icon"></svg-icon>
        </a> -->
      </div>
    </Container>
  </section>
</template>

<script>
// {
//   srcset:
//     '/static/images/argo/client.webp 1x, /static/images/argo/client@2x.webp 2x'
// },
import Container from '~/components/general/Container'
import picturelazy from '~/components/general/Lazy/PictureLazy.vue'

export default {
  name: 'Principles',
  components: {
    Container,
    picturelazy
  }
}
</script>

<style lang="scss" scoped>
.principles {
  @include bp(tablet) {
    padding-top: 160px;
    padding-bottom: 160px;
  }
  @include bp(desktop-large) {
    padding-bottom: 140px;
  }

  padding-top: 50px;
  padding-bottom: 50px;

  color: $color__black-2;

  h3 {
    @include argoTitle();
    @include bp(tablet) {
      margin-bottom: 80px;
    }

    margin-top: 0;
    margin-bottom: 40px;
  }
}

.principles__notes {
  @include bp(tablet) {
    display: flex;

    margin-bottom: 120px;
  }
  @include bp(desktop-wide) {
    justify-content: space-between;
  }

  margin-top: 0;
  margin-bottom: 50px;
  padding-left: 0;

  li {
    @include argoNote();
    @include bp(tablet) {
      font-size: 30px;
      line-height: 36px;

      max-width: 288px;
      margin-right: 48px;
      margin-bottom: 0;
    }
    @include bp(desktop-large) {
      max-width: 336px;
    }
    @include bp(desktop-wide) {
      max-width: 100%;
      margin-right: 0;
    }

    font-weight: 600;

    margin-bottom: 20px;

    list-style: none;
  }
}

.principles__strategy {
  @include bp(tablet) {
    width: calc(50% - 48px);
    margin-right: 48px;
    margin-bottom: 0;
  }
  @include bp(desktop-large) {
    width: calc(50% - 60px);
    margin-right: 60px;
  }
  @include bp(desktop-large) {
    width: calc(50% - 100px);
    margin-right: 100px;
  }

  margin-bottom: 50px;

  h4 {
    @include argoSubtitle();

    margin-bottom: 30px;
  }
  p {
    @include bp(tablet) {
      font-size: 20px;
      line-height: 28px;

      margin-bottom: 60px;
    }

    line-height: 24px;

    margin-top: 0;
    margin-bottom: 40px;
  }
}

.principles__net {
  @include bp(tablet) {
    font-size: 20px;
    font-weight: 400;
  }

  font-size: 16px;
  font-weight: 600;

  text-transform: uppercase;

  color: $color__green-2;
}

.principles__net-amount {
  @include bp(tablet) {
    font-size: 220px;

    margin-left: -10px;
  }
  @include bp(desktop-large) {
    font-size: 240px;
  }
  @include bp(desktop-wide) {
    line-height: 1;
  }

  font-size: 120px;

  color: #fff;

  -webkit-text-stroke: 2px $color__green-2;
}

.principles__client {
  @include bp(tablet) {
    width: calc(50% - 48px);
    margin-bottom: 0;
    margin-left: 48px;
  }
  @include bp(desktop-large) {
    width: calc(50% - 60px);
    margin-left: 60px;
  }
  @include bp(desktop-large) {
    width: calc(50% - 100px);
    margin-left: 100px;
  }

  margin-bottom: 40px;

  h4 {
    @include argoSubtitle();

    margin-bottom: 30px;
  }
  p {
    @include bp(tablet) {
      font-size: 20px;
      line-height: 28px;

      margin-bottom: 88px;
    }
    @include bp(desktop-wide) {
      margin-bottom: 60px;
    }

    line-height: 24px;

    margin-top: 0;
    margin-bottom: 30px;
  }
}

.principles__client-image {
  position: relative;

  &:after {
    position: absolute;
    z-index: -1;
    right: -15px;
    bottom: -15px;

    width: 100%;
    height: 100%;

    content: '';

    background: $color__gray-2-light;
  }
}

.principles__learnmore {
  @include argoNote($color__gray-2-light);
  @include bp(tablet) {
    font-size: 20px;
    line-height: 28px;

    max-width: 432px;
  }
  @include bp(desktop-large) {
    max-width: 540px;
  }
  @include bp(desktop-wide) {
    max-width: 724px;
    margin-top: -110px;
  }

  p {
    margin-top: 0;
    margin-bottom: 20px;

    color: $color__gray-2;
  }
}

.principles__btn {
  @include bp(tablet) {
    font-size: 20px;
  }
  @include argoArrowLink();

  font-weight: 600;

  display: flex;

  text-transform: uppercase;

  color: $color__black-2;

  align-items: center;

  &:hover {
    text-decoration: none;
  }
}

.principles__btn-icon {
  @include argoArrow(12px, 8px, 20px);
  @include bp(tablet) {
    @include argoArrow(16px, 12px, 20px);
  }

  margin-left: 6px;
}

.principles__info {
  @include bp(tablet) {
    display: flex;

    margin-bottom: 27px;
  }
  @include bp(desktop-wide) {
    margin-bottom: 0;
  }
}
</style>

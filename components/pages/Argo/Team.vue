<template>
  <section class="team">
    <Container>
      <div class="team__head">
        <h3 v-html="$t('exante.pages.funds.argo.team.header')"></h3>
        <p v-html="$t('exante.pages.funds.argo.team.desc')"></p>
      </div>
      <ul class="team__items">
        <li
          v-for="(item, index) in $t('exante.pages.funds.argo.team.items')"
          :key="index"
          class="team__item"
        >
          <picturelazy
            v-animate.repeat.fade="'slide-up'"
            :source="[
              {
                srcset: `/static/images/argo/team-${index}.jpg 1x, /static/images/argo/team-${index}@2x.jpg 2x`
              }
            ]"
            :alt="item.name"
            class="bonds__image"
          ></picturelazy>
          <div class="team__name">
            <strong v-html="item.name"></strong>
            <span v-html="item.position"></span>
          </div>
        </li>
      </ul>
    </Container>
  </section>
</template>

<script>
// {
//   srcset: `/static/images/argo/team-${item.pic}.webp 1x, /static/images/argo/team-${item.pic}@2x.webp 2x`
// },
import Container from '~/components/general/Container'
import picturelazy from '~/components/general/Lazy/PictureLazy.vue'

export default {
  name: 'Team',
  components: {
    Container,
    picturelazy
  }
}
</script>

<style lang="scss" scoped>
.team {
  @include bp(tablet) {
    // padding-top: 160px;
    padding-top: 60px;
    padding-bottom: 160px;
  }

  padding-top: 50px;
  padding-bottom: 50px;

  // @include bp(desktop-large) {
  //   padding-top: 290px;
  // }
}

.team__head {
  @include bp(tablet) {
    display: flex;

    margin-bottom: 80px;

    align-items: flex-start;
  }

  margin-bottom: 50px;

  h3 {
    @include argoTitle();
    @include bp(tablet) {
      margin-right: 116px;
      margin-bottom: 0;
    }
    @include bp(desktop-large) {
      margin-right: 200px;
    }
    @include bp(desktop-wide) {
      margin-right: 380px;
      margin-bottom: 90px;
    }

    margin-top: 0;
    margin-bottom: 40px;

    text-align: center;

    color: $color__green-2;
  }

  p {
    @include argoNote();
    @include bp(tablet) {
      font-size: 20px;
      line-height: 36px;

      max-width: 624px;
    }

    margin: 0;
  }

  ::v-deep strong {
    @include bp(tablet) {
      font-size: 30px;
      line-height: 36px;
    }

    font-size: 20px;
    font-weight: 600;

    a {
      text-decoration: underline;

      color: $color__black-2;
    }
  }
}

.team__items {
  @include bp(tablet) {
    display: flex;

    flex-wrap: wrap;
    justify-content: space-between;
  }

  margin: 0;
  padding: 0;
}

.team__item {
  @include bp(tablet) {
    max-width: 288px;
    margin-right: 0;
    margin-bottom: 80px;
    margin-left: 0;
  }
  @include bp(desktop-large) {
    max-width: 360px;
  }
  @include bp(desktop-wide) {
    width: calc(33.3% - 200px);
    max-width: calc(33.3% - 200px);
    margin-right: 200px;
  }

  max-width: 400px;
  margin-right: auto;
  margin-bottom: 40px;
  margin-left: auto;

  list-style: none;

  &:nth-child(3n) {
    @include bp(desktop-wide) {
      margin-right: 0;
    }
  }

  ::v-deep .lazyimg {
    display: block;
  }
  ::v-deep img {
    @include bp(tablet) {
      margin-bottom: 30px;
    }
    @include bp(desktop-large) {
      margin-bottom: 40px;
    }

    font-size: 0;

    display: block;

    margin-bottom: 20px;
  }
}

.team__name {
  @include argoNote();
  @include bp(tablet) {
    font-size: 20px;
    line-height: 31px;
  }

  strong {
    @include bp(tablet) {
      font-size: 30px;
      line-height: 31px;
    }

    font-size: 20px;

    display: block;
  }
}
</style>

<template>
  <div class="fixscheme">
    <Container class="fixscheme__container">
      <div class="fixscheme__text">
        <h1
          v-animate.repeat.fade="'slide-left'"
          class="fixscheme__header"
          v-html="$t('exante.pages.apis.items.fix-api.fixscheme.title')"
        ></h1>
        <p
          v-animate.repeat.fade="'slide-left'"
          class="fixscheme__desc"
          v-html="$t('exante.pages.apis.items.fix-api.fixscheme.desc')"
        ></p>
        <div v-animate.repeat.fade="'slide-left'" class="fixscheme__wrap">
          <SiteButton
            target="_blank"
            class=""
            data-style-type="fwhite"
            :href="integrateLink"
          >
            <span
              v-html="
                $t('exante.pages.apis.items.fix-api.fixscheme.manual_link_text')
              "
            ></span>
          </SiteButton>
        </div>
      </div>
      <div v-animate.repeat.fade="'slide-right'" class="fixscheme__image">
        <img src="/static/images/apis/fix-scheme.svg" alt="Fix Api scheme" />
      </div>
    </Container>
  </div>
</template>

<script>
import Container from '~/components/general/Container.vue'
import SiteButton from '~/components/general/SiteButton/SiteButton.vue'

export default {
  name: 'Fixscheme',
  components: {
    Container,
    SiteButton
  },
  props: {
    integrateLink: {
      type: String,
      default: '#'
    }
  }
}
</script>

<style lang="scss" scoped>
.fixscheme {
  @include bp(tablet) {
    padding: 130px 0;
  }

  padding: 50px 0;

  color: #fff;
  background: radial-gradient(ellipse at center 90%, #2d9253 10%, #114d26 100%);
  background-color: #fff;
  background-repeat: no-repeat;
}

.fixscheme__container {
  @include bp(tablet) {
    display: grid;

    grid-gap: 110px;
    grid-template-columns: calc(50% - 55px) calc(50% - 55px);
  }
  @include bp(desktop) {
    grid-gap: 210px;
    grid-template-columns: calc(50% - 105px) calc(50% - 105px);
  }
}

.fixscheme__header {
  @include h1;
  @include header-underline;

  margin-top: 0;

  color: #fff;

  &:after {
    background: #7fbe9b;
  }
}

.fixscheme__desc {
  @include bp(desktop-wide) {
    font-size: 22px;
  }

  margin-bottom: 55px;
}

.fixscheme__text {
  @include bp(tablet) {
    margin-bottom: 0;
  }

  margin-bottom: 40px;
}

.fixscheme__image {
  margin-top: -20px;
}
</style>

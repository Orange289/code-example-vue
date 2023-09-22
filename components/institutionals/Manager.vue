<template>
  <section
    class="manager"
    data-background-image-set="url('/static/images/wealth-managers/bluback.jpg')"
  >
    <Container class="manager__container">
      <div class="manager__wrap">
        <h2
          v-html="$t('exante.pages.institutionals.manager.header')"
          v-animate.repeat.fade="'slide-left'"
          class="manager__header"
        ></h2>
        <div
          v-animate.repeat.fade="'slide-left'"
          v-if="$te('exante.pages.institutionals.manager.desc')"
          class="manager__desc"
        >
          <p v-html="$t('exante.pages.institutionals.manager.desc')"></p>
        </div>
        <IconTextList :tKey="itemsTKey" class="manager__icons">
          <div
            v-animate.repeat.fade="'slide-up'"
            :style="{
              '': `${0.25 * (itemsLen + 1)}s`
            }"
            class="manager__open-wrap"
          >
            <OpenAccountButton
              v-if="$te('exante.pages.institutionals.manager.oacButton')"
              class="manager__open"
              data-style-type="fgreen"
            ></OpenAccountButton>
          </div>
        </IconTextList>
      </div>
      <div v-animate.repeat.fade="'slide-right'" class="manager__person">
        <picturelazy
          :source="[
            {
              srcset:
                '/static/images/wealth-managers/manager.webp 1x, /static/images/wealth-managers/manager@2x.webp 2x'
            },
            {
              srcset:
                '/static/images/wealth-managers/manager.png 1x, /static/images/wealth-managers/manager@2x.png 2x'
            }
          ]"
          v-animate.repeat.fade="'slide-right'"
          alt="Manager"
        ></picturelazy>
        <!-- <div class="person">Name Surname</div> -->
      </div>
    </Container>
  </section>
</template>

<script>
import Container from '~/components/general/Container.vue'
import OpenAccountButton from '~/components/general/OpenAccountButton/OpenAccountButton.vue'
import Block800 from '~/components/general/blocks/Block-800.vue'
import IconTextList from '~/components/icon-text/IconTextList.vue'
import bglazy from '~/components/general/Lazy/BackgroundLazy.vue'
import picturelazy from '~/components/general/Lazy/PictureLazy.vue'

export default {
  name: 'Manager',
  components: {
    Container,
    IconTextList,
    OpenAccountButton,
    picturelazy
  },
  mixins: [bglazy, Block800],
  data() {
    return {
      itemsTKey: 'exante.pages.institutionals.manager.items'
    }
  },

  computed: {
    itemsLen() {
      return this.$te(this.itemsTKey) ? this.$t(this.itemsTKey).length : 0
    }
  }
}
</script>

<style lang="scss" scoped>
.manager {
  @include bp(tablet) {
    padding-top: 110px;
  }
  @include bp(desktop-wide) {
    padding-top: 44px;

    background-color: #cbdae1;
    background-repeat: no-repeat;
    background-position: center;
    background-size: contain;
  }

  padding-top: 55px;

  .manager__container {
    display: flex;

    flex-wrap: wrap;
  }

  .manager__icons {
    align-items: flex-start;
  }

  .manager__wrap {
    @include bp(tablet) {
      padding-bottom: 70px;
    }
    @include bp(desktop-wide) {
      padding-top: 66px;
      padding-bottom: 44px;
    }

    padding-bottom: 35px;
  }

  .manager__wrap,
  .manager__person {
    @include bp(tablet) {
      max-width: 50%;
    }

    width: 100%;
  }

  .manager__person {
    @include bp(tablet) {
      display: flex;

      align-items: flex-end;
    }

    font-size: 0;

    display: none;
  }

  .manager__header {
    @include h1;
    @include header-underline;
  }

  .manager__desc {
    @include bp(tablet) {
      // max-width: 48.5%;
      max-width: 97%;
    }

    margin-bottom: 35px;
  }

  .manager__open-wrap {
    @include bp(tablet) {
      align-self: flex-end;
    }

    margin-bottom: 58px;
  }

  ::v-deep .icon-text .icon-text__icon-wrap {
    min-height: 50px;
    margin-bottom: 25px;
  }

  ::v-deep .icon-text .icon-text__icon {
    color: $color__green--lighter;
  }

  ::v-deep .icon-text-list .icon-text-list__item {
    @include bp(tablet) {
      width: 50%;
      padding-right: 70px;
    }
  }

  ::v-deep .icon-text-list__item:nth-child(3) {
    @include bp(tablet) {
      width: 100%;
      margin-bottom: 0;
      padding-right: 0;
    }
  }

  &.BackgroundLazy[data-loaded='true'] {
    color: $color__black--light;
  }
}

.person {
  font-size: 24px;
  line-height: 30px;

  display: flex;

  padding: 11px 0 11px 38px;

  color: $color__black--light;
  border-left: 2px solid currentColor;

  align-items: center;
}
</style>

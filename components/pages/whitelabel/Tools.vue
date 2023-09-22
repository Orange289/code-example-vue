<template>
  <section class="tools">
    <Container>
      <h2
        v-animate.repeat.fade="'slide-left'"
        v-html="$t('exante.pages.whitelabel.tools.header')"
        class="whitelabel__header tools__header"
      ></h2>
      <div class="tools__items">
        <div
          v-for="(item, icon, index) in $t(
            'exante.pages.whitelabel.tools.items'
          )"
          :key="index"
          v-animate.repeat.fade="'slide-up'"
          class="tool tools__item"
        >
          <div class="tool__icon-header">
            <div v-if="icon" class="tool__icon">
              <svg-icon :name="icon" class="tool__icon-svg"></svg-icon>
            </div>
            <h3
              v-if="item.header"
              v-html="item.header"
              class="tool__header"
            ></h3>
          </div>
          <h4
            v-if="item.subheader"
            v-html="item.subheader"
            class="tool__subheader"
          ></h4>
          <p v-if="item.text" v-html="item.text" class="tool__text"></p>
        </div>

        <div v-animate.repeat.fade="'slide-up'" class="tools__list tools__item">
          <List :items="$t('exante.pages.whitelabel.tools.list')"></List>
        </div>

        <div v-animate.repeat.fade class="tools__button-wrap">
          <WlpOpenAccButt class="tools__button"> </WlpOpenAccButt>
        </div>
      </div>
    </Container>
  </section>
</template>

<script>
import WlpOpenAccButt from '~/components/pages/whitelabel/general/WlpOpenAccButt.vue'
import Container from '~/components/general/Container.vue'
import Block800 from '~/components/general/blocks/Block-800.vue'
import List from '~/components/pages/whitelabel/general/List.vue'

export default {
  name: 'Tools',
  components: { Container, List, WlpOpenAccButt },
  mixins: [Block800]
}
</script>

<style lang="scss" scoped>
.tools {
  @include bp(tablet) {
    padding-top: 50px;
    padding-bottom: 5px;
  }
  @include bp(desktop-large) {
    padding-top: 65px;
    padding-bottom: 40px;
  }
  @include bp(desktop-wide) {
    padding-top: 80px;
    padding-bottom: 5px;
  }

  overflow: hidden;

  padding-top: 60px;
  padding-bottom: 60px;

  background-color: #f2f8f2;

  .tools__header.whitelabel__header {
    @include bp(tablet desktop-large) {
      margin-bottom: 40px;
      padding-bottom: 12px;
    }
    @include bp(desktop-large desktop-wide) {
      padding-bottom: 15px;
    }
    @include bp(desktop-wide) {
      margin-bottom: 50px;
    }
    &:after {
      right: auto;
    }
  }

  .tools__items {
    @include bp(tablet) {
      display: grid;

      grid-template-columns: 50.5% auto;
    }
    @include bp(desktop-large) {
      margin-bottom: 0;

      grid-template-columns: 54% auto;
    }
    @include bp(desktop-wide) {
      margin-bottom: 50px;

      grid-template-columns: 50% 47%;
      justify-content: space-between;
    }

    margin-bottom: 50px;
  }

  .tools__item {
    @include bp(tablet) {
      margin-bottom: 30px;
      padding-right: 50px;
    }
    @include bp(desktop-large) {
      padding-right: 80px;
    }
    @include bp(desktop-wide) {
      margin-bottom: 20px;
      padding-right: 50px;
    }

    margin-bottom: 20px;

    &:nth-child(2) {
      @include bp(tablet) {
        padding-right: 0;
      }
      @include bp(desktop-large) {
        padding-right: 20px;
      }
      @include bp(desktop-wide) {
        padding-right: 0;
      }
    }
  }

  .tools__list {
    @include bp(tablet desktop-large) {
      margin-top: -45px;
    }
    @include bp(desktop-large desktop-wide) {
      padding-right: 0;
    }
    ::v-deep .list {
      @include bp(mobile) {
        display: grid;

        grid-template-columns: 46% 54%;
        // grid-template-columns: 60% 60%;
      }
      @include bp(desktop-large) {
        margin-top: -25px;

        grid-template-columns: 54% auto;
      }
      @include bp(desktop-wide) {
        margin-top: 0;

        grid-template-columns: 53% 46%;
      }

      font-weight: normal;

      // margin-bottom: -34px;

      .list__item {
        @include bp(tablet) {
          margin-bottom: 20px;
          padding-right: 5%;
        }
        @include bp(desktop-large) {
          margin-bottom: 25px;
          padding-right: 0;
        }
        @include bp(desktop-wide) {
          margin-bottom: 34px;
        }

        margin-bottom: 20px;
      }
      .list__icon-wrap {
        @include bp(tablet desktop-large) {
          margin-right: 12px;
        }
        @include bp(desktop-large desktop-wide) {
          margin-right: 18px;
        }
      }
    }
  }

  .tools__button-wrap {
    @include bp(tablet) {
      margin-top: -21%;

      grid-row: 3;
      grid-column: 2;
    }
    @include bp(desktop-large) {
      display: none;
    }
  }
}

.tool {
  .tool__icon-header {
    @include bp(tablet) {
      margin-bottom: 20px;
    }
    @include bp(desktop-large) {
      margin-bottom: 18px;
    }
    @include bp(desktop-wide) {
      margin-bottom: 16px;
    }

    display: flex;

    margin-bottom: 5px;

    align-items: center;
  }
  .tool__header {
    @include bp(desktop-large) {
      font-size: 24px;
      line-height: 1.88;
    }
    @include bp(desktop-wide) {
      font-size: 32px;
      line-height: 1.41;
    }

    font-family: $font-family-second;
    font-size: 24px;
    font-weight: 300;
    line-height: 1.88;

    margin: 0;
  }
  .tool__icon {
    @include bp(tablet) {
      margin-right: 30px;
    }
    @include bp(desktop-wide) {
      margin-right: 40px;
    }

    margin-right: 20px;

    color: $color__green;
  }
  .tool__icon-svg {
    @include bp(tablet) {
      width: 50px;
      height: 42px;
    }

    width: 40px;
    height: 34px;
  }
  .tool__subheader {
    @include bp(tablet) {
      margin-bottom: 10px;
    }
    @include bp(desktop-large) {
      margin-bottom: 18px;
    }
    @include bp(desktop-wide) {
      margin-bottom: 14px;
    }

    font-family: $font-family-second;
    font-weight: 300;

    margin-bottom: 13px;
  }
  .tool__text {
    @include bp(0 tablet) {
      margin: 13px 0;
    }
    @include bp(tablet desktop-large) {
      margin: 0;
      padding-right: 15%;
    }
    @include bp(desktop-wide) {
      margin-top: 14px;
    }
  }
  &:nth-child(2) {
    .tool__text {
      @include bp(tablet desktop-large) {
        padding-right: 0;
      }
    }
  }
}
</style>

<template>
  <section class="branded">
    <UnderHeader>
      <Container class="branded__container">
        <h1
          v-animate.repeat.fade="'slide-left'"
          class="whitelabel__header branded__header"
          v-html="$t('exante.pages.whitelabel.branded.header')"
        ></h1>
        <p
          v-if="$te('exante.pages.whitelabel.branded.text')"
          v-animate.repeat.fade="'slide-left'"
          class="branded__text"
          v-html="$t('exante.pages.whitelabel.branded.text')"
        ></p>
        <ul
          v-if="$te('exante.pages.whitelabel.branded.items')"
          class="branded__list"
        >
          <li
            v-for="(item, index) in $t('exante.pages.whitelabel.branded.items')"
            :key="index"
            v-animate.repeat.fade="'slide-up'"
            :style="{ 'transition-delay': `${0.15 * index}s` }"
            class="branded__list-item"
          >
            <svg-icon :name="item.icon" class="branded__list-icon"></svg-icon>
            <p
              class="branded__list-text"
              v-html="
                $t(`exante.pages.whitelabel.branded.items[${index}].text`)
              "
            ></p>
          </li>
        </ul>
        <div v-animate.repeat.fade="'slide-left'" class="branded__button-wrap">
          <SiteButton
            class="branded__button"
            data-style-type="fgreen"
            href="/company/contact_us/"
          >
            <span v-html="$t('exante.pages.whitelabel.branded.button')"></span>
          </SiteButton>
        </div>
        <div v-animate.repeat.fade="'slide-right'" class="branded__device">
          <BrandIcon
            v-animate.repeat.fade="'slide-down'"
            :text="$t('exante.pages.whitelabel.branded.iconText')"
            class="branded__BrandIcon"
            style="transition-delay:0.75s"
          ></BrandIcon>
          <picturelazy
            v-animate.repeat.fade="'slide-right'"
            :source="[
              {
                srcset:
                  '/static/images/whitelabel/platform--mobile.webp 1x, /static/images/whitelabel/platform--mobile@2x.webp 2x'
              },
              {
                srcset:
                  '/static/images/whitelabel/platform--mobile.png 1x, /static/images/whitelabel/platform--mobile@2x.png 2x'
              }
            ]"
            class="branded__mobile"
            alt="Mobile Platform"
          ></picturelazy>
          <imagelazy
            v-animate.repeat.fade="'slide-right'"
            :lazy-srcset="
              '/static/images/whitelabel/appIcon.png 1x, /static/images/whitelabel/appIcon@2x.png 2x'
            "
            style="transition-delay:0.5s"
            alt=""
            class="branded__appicon"
          />
        </div>
      </Container>
    </UnderHeader>
  </section>
</template>

<script>
import BrandIcon from '~/components/pages/whitelabel/general/BrandIcon.vue'
import Container from '~/components/general/Container.vue'
import Block800 from '~/components/general/blocks/Block-800.vue'
import picturelazy from '~/components/general/Lazy/PictureLazy.vue'
import imagelazy from '~/components/general/Lazy/ImageLazy.vue'
import UnderHeader from '~/components/general/UnderHeader/UnderHeader.vue'
import SiteButton from '~/components/general/SiteButton/SiteButton.vue'

export default {
  name: 'Branded',
  components: {
    UnderHeader,
    Container,
    picturelazy,
    imagelazy,
    BrandIcon,
    SiteButton
  },
  mixins: [Block800]
}
</script>

<style lang="scss" scoped>
.branded {
  @include bp(tablet) {
    display: flex;

    padding-top: 75px;
    padding-bottom: 80px;

    align-items: flex-end;
  }
  @include bp(desktop-large) {
    padding-top: 85px;
    padding-bottom: 120px;
  }
  @include bp(desktop-wide) {
    min-height: 850px;
    padding-top: 100px;
  }

  overflow: hidden;
  // padding-top: 120px;

  padding-bottom: 60px;

  background-color: #f6f7f9;

  .branded__container {
    @include bp(tablet) {
      display: grid;

      grid-template-columns: 60% auto;
    }
    @include bp(desktop-large) {
      grid-template-columns: 1fr 1fr;
    }
    @include bp(desktop-wide) {
      grid-template-columns: 45% auto;
    }

    display: flex;
    flex-direction: column;

    & > ::v-deep * {
      @include bp(tablet) {
        grid-column: 1;
      }

      z-index: 1;
    }
  }
  .branded__header.whitelabel__header {
    @include bp(0 tablet) {
      margin-bottom: 25px;
      ::v-deep br {
        display: none;
      }
    }
    @include bp(desktop-large) {
      margin-bottom: 38px;
      padding-bottom: 16px;
    }
    @include bp(desktop-wide) {
      margin-bottom: 48px;
      padding-bottom: 32px;
    }

    &:after {
      right: auto;
    }
  }
  .branded__text {
    @include bp(0 tablet) {
      ::v-deep br {
        display: none;
      }
    }
    @include bp(tablet) {
      margin-top: initial;
      margin-bottom: 27px;
    }
    @include bp(desktop-large) {
      margin-bottom: 25px;
    }
    @include bp(desktop-wide) {
      margin-bottom: 50px;
    }

    margin-top: 0;
    margin-bottom: 25px;
  }
  .branded__list {
    @include bp(tablet) {
      flex-direction: row;

      width: 115%;
      max-width: 645px;
      margin-bottom: 40px;
    }
    @include bp(desktop-large) {
      width: 150%;
      max-width: 760px;
      // margin-right: -16%;
      margin-bottom: 50px;

      justify-content: space-between;
    }
    @include bp(desktop-wide) {
      max-width: 1050px;
      margin-right: 0;
      margin-bottom: 40px;
    }

    display: flex;
    flex-direction: column;

    margin: 0 0 10px 0;
    padding: 0;

    list-style: none;
  }
  .branded__list-item {
    // @include bp(mobile) {
    //   flex: 1 0 300px;
    // }
    @include bp(tablet) {
      flex: 1 0 215px;
      // flex: 1 0 300px;

      margin-bottom: 0;
    }
    @include bp(desktop) {
      flex: 1 1 320px;
    }

    display: flex;

    margin-bottom: 30px;

    &:last-child {
      @include bp(desktop desktop-prewide) {
        flex: 1 1 180px;
      }
    }
    // flex: 1 1 240px;
  }
  .branded__list-icon {
    @include bp(desktop-large) {
      max-width: 55px;
      max-height: 50px;
    }
    @include bp(desktop-wide) {
      margin-right: 30px;
    }

    max-width: 40px;
    max-height: 36px;
    margin-right: 20px;

    color: $color__green;
  }

  .branded__list-text {
    @include bp(desktop-large) {
      font-size: 18px;
      line-height: 1.67;
    }
    @include bp(desktop-wide) {
      font-size: 22px;
      line-height: 1.59;
    }

    font-family: $font-family-second;
    font-size: 16px;
    font-weight: normal;
    line-height: 1.56;

    margin: 0;
    ::v-deep br {
      @include bp(0 tablet) {
        display: none;
      }
    }

    &:first-child {
      @include bp(tablet) {
        margin: 0;
      }

      margin: 5px 0 0 0;
    }
  }

  .branded__device {
    @include bp(tablet) {
      grid-column: 2;
      grid-row: 1 / 13;
    }

    position: relative;
    z-index: 0;

    display: flex;

    order: 2;
  }

  .branded__mobile {
    @include bp(mobile) {
      width: 125%;
      min-width: 125%;
    }
    @include bp(tablet) {
      position: absolute;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;

      width: auto;
      min-width: auto;
      max-width: 100%;
      margin: 0;

      transform: none;
    }
    @include bp(desktop-large) {
      transform: translate(16%, -12%);
    }
    @include bp(desktop-wide) {
      width: 115%;
      max-width: 1000px;

      transform: translate(14%, -12%);
    }

    z-index: -1;

    width: 195%;
    min-width: 195%;
    max-width: none;
    margin-top: -1%;
    margin-left: 46%;

    transform: translateX(-50%);

    flex-shrink: 0;

    ::v-deep picture {
      @include bp(tablet) {
        width: 175%;
        margin: -8% -55% 0 -30%;
      }
      @include bp(desktop-large) {
        width: 143.5%;
        margin: -3.5% -28.5%;
      }
      @include bp(desktop-wide) {
        width: 125%;
        margin: -8.5% -21.5%;
      }

      display: block;

      width: 100%;
    }
    ::v-deep img {
      @include bp(tablet) {
        width: 125%;
      }
    }
  }

  .branded__appicon {
    @include bp(mobile) {
      top: 12%;
      right: -5%;

      width: 40%;
    }
    @include bp(tablet) {
      top: 10%;
      right: -9%;

      width: 57%;
    }
    @include bp(desktop-large) {
      top: 14%;
      right: 0;

      width: 39%;
    }
    @include bp(desktop-wide) {
      top: 20%;
      right: 0%;

      width: auto;
    }

    position: absolute;
    top: 15%;
    right: 0;

    display: inline-block;

    width: 60%;
  }

  .branded__BrandIcon {
    @include bp(tablet) {
      top: -2%;
      right: -6%;
    }
    @include bp(desktop-large) {
      top: 3%;
      right: 3%;
    }
    @include bp(desktop-wide) {
      top: 16%;
      right: 5%;
    }

    position: absolute;
    z-index: 1;
    top: 2%;
    right: 0%;
  }

  .branded__button-wrap {
    @include bp(tablet) {
      margin-top: 0;

      order: initial;
    }

    margin-top: -5px;

    order: 3;
  }

  .branded__button {
    @include bp(desktop-large desktop-wide) {
      line-height: 1.1;
    }
    @include bp(desktop-wide) {
      min-width: 300px;
    }
  }
}
</style>

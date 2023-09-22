<template>
  <InstitutionalLayout
    :header="$t('exante.pages.WealthManagers.intro.header')"
    :text="$t('exante.pages.WealthManagers.intro.text')"
    :parallaxImages="[
      {
        srcset:
          '/static/images/wealth-managers/wealth-intro.jpg 1x, /static/images/wealth-managers/wealth-intro@2x.jpg 2x'
      }
    ]"
  >
    <div class="wealth">
      <!-- data-background-image-set="url('/static/images/wealth-managers/wealth-intro.jpg') 1x, url('/static/images/wealth-managers/wealth-intro@2x.jpg') 2x" -->
      <Account
        :itemsTKey="'exante.pages.WealthManagers.account.items'"
        :header="$t('exante.pages.WealthManagers.account.header')"
        class="wealth__account"
      />
      <Compliance />
      <!-- <Customercare
        :texts="texts.wealth_customercare"
        class="wealth__customercare"
      ></Customercare> -->
      <!-- <Benefits :texts="texts.benefits" class="wealth__benefits"></Benefits> -->
      <!-- <div class="wealth__benefits">
        <Benefits
          v-for="(benefits, index) in texts.benefits.items"
          :key="index"
          :benefits="benefits"
          class="wealth__benefit"
        ></Benefits>
      </div> -->
      <!-- <AdvantagesList :advantages="texts.advantages" class="family__advantages">
      </AdvantagesList> -->

      <DMA />
      <Bonds />
      <HttpApi class="wealth__http-api" />
    </div>
  </InstitutionalLayout>
</template>

<script>
// {
//   srcset:
//     '/static/images/wealth-managers/wealth-intro.webp 1x, /static/images/wealth-managers/wealth-intro@2x.webp 2x'
// },
import Account from '~/components/institutionals/Account/Account.vue'
import InstitutionalLayout from '~/components/layouts/Institutional.vue'
import Compliance from '~/components/institutionals/Compliance/Compliance.vue'
import DMA from '~/components/institutionals/dma/DMA.vue'
import Bonds from '~/components/institutionals/bonds.vue'
import HttpApi from '~/components/institutionals/HTTP_API/HTTP_API.vue'

export default {
  name: 'WealthManagers',
  components: {
    InstitutionalLayout,
    Account,
    Compliance,
    DMA,
    Bonds,
    HttpApi
  },
  mounted() {
    this.$store.dispatch('set_openAccountTypeCorporate')
  }
}
</script>

<style lang="scss" scoped>
.wealth {
  // @include bp(tablet) {
  // ::v-deep .advantages__items {
  //   justify-content: flex-start;
  // }
  // ::v-deep .advantages .icon-text-list .icon-text-list__item {
  //   width: 23%;
  // }
  // ::v-deep .advantages:first-child .icon-text-list .icon-text-list__item {
  //   width: 30%;
  // }
  // ::v-deep .advantages {
  //   .icon-text-list__item + .icon-text-list__item {
  //     margin-left: 2%;
  //   }
  // }
  // ::v-deep .advantages:first-child {
  //   .advantages__items {
  //     flex-wrap: wrap;
  //   }
  //   .icon-text-list__item + .icon-text-list__item {
  //     margin-left: 3%;
  //   }
  //   .icon-text-list__item:nth-child(4) {
  //     margin-left: 0;
  //   }
  // }
  // }
  overflow-x: hidden;

  .account {
    @include bp(desktop-wide) {
      padding: 95px 0 40px;
    }

    ::v-deep .account__header {
      @include bp(desktop-large) {
        // margin-bottom: 50px;
        // padding-bottom: 10px;
        margin-bottom: 47px;
        padding-bottom: 7px;
      }
      @include bp(desktop-wide) {
        margin-bottom: 27px;
        padding-bottom: 35px;
      }
    }

    ::v-deep .icon-text {
      @include bp(desktop-large) {
        max-width: 350px;
        padding-right: 140px;
      }
      @include bp(desktop-wide) {
        max-width: 400px;
        padding-right: 130px;
      }

      .icon-text__title {
        @include bp(desktop-wide) {
          max-width: none;
        }
      }

      .icon-text__icon-wrap {
        @include bp(tablet) {
          margin-bottom: 20px;
        }
        @include bp(desktop-large) {
          margin-bottom: 30px;
        }
        @include bp(desktop-wide) {
          margin-bottom: 10px;
        }

        margin-bottom: 15px;
      }

      .icon-text__icon {
        @include bp(tablet) {
          max-width: 60px;
          max-height: 48px;
        }

        max-width: 50px;
        max-height: 40px;
      }

      &:nth-child(1) {
        .icon-text__icon-wrap {
          @include bp(0 tablet) {
            margin-bottom: 30px;
          }
        }
      }
      &:nth-child(2) {
        @include bp(desktop-large desktop-wide) {
          padding-right: 70px;
        }

        max-width: 535px;
      }
      &:nth-child(4) {
        @include bp(desktop-large desktop-wide) {
          padding-right: 110px;
        }

        max-width: 470px;
      }
      &:nth-child(3),
      &:nth-child(4) {
        .icon-text__icon-wrap {
          @include bp(desktop-large) {
            margin-bottom: 20px;
          }
          @include bp(desktop-wide) {
            margin-bottom: 10px;
          }
        }
      }
    }

    ::v-deep .icon-text-list {
      .icon-text-list__item {
        @include bp(desktop-large desktop-wide) {
          margin-bottom: 35px;
        }
      }
    }
  }
  // .wealth__benefit {
  //   &:not(:first-of-type):not(:last-of-type) {
  //     padding: 0;
  //   }

  //   &:first-of-type {
  //     padding-bottom: 0;
  //   }

  //   &:last-of-type {
  //     padding-top: 0;
  //   }
  // }
  // @include bp(desktop-wide) {
  //   ::v-deep .advantages .icon-text-list .icon-text-list__item {
  //     width: 380px;
  //   }
  // }

  // .advantages-list {
  //   background: $color__gray--lightest;
  // }

  // ::v-deep .advantages .icon-text .icon-text__text {
  //   font-family: $font-family-second;
  //   font-weight: 400;

  //   width: 100%;
  // }
}
</style>

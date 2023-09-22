<template>
  <InstitutionalLayout
    :header="$t('exante.pages.FamilyOffice.intro.header')"
    :text="introText"
    :parallax-images="[
      {
        srcset:
          '/static/images/family-office/family-intro.jpg 1x, /static/images/family-office/family-intro@2x.jpg 2x'
      }
    ]"
  >
    <div class="family">
      <Account
        :items-t-key="'exante.pages.FamilyOffice.account.items'"
        :header="$t('exante.pages.FamilyOffice.account.header')"
        to-row-icon
        class="family__account"
      />
      <Assets />
      <StandOut />
      <!-- <AdvantagesList :advantages="texts.advantages" class="family__advantages">
      </AdvantagesList> -->
      <DMA />
      <Bonds />
    </div>
  </InstitutionalLayout>
</template>

<script>
// {
//   srcset:
//     '/static/images/family-office/family-intro.webp 1x, /static/images/family-office/family-intro@2x.webp 2x'
// },
import StandOut from './StandOut.vue'
import Assets from '~/components/institutionals/Assets/Assets.vue'
import Account from '~/components/institutionals/Account/Account.vue'
import InstitutionalLayout from '~/components/layouts/Institutional.vue'
// import AdvantagesList from '~/components/institutionals/advantagesList.vue'
import DMA from '~/components/institutionals/dma/DMA.vue'
import Bonds from '~/components/institutionals/bonds.vue'

export default {
  name: 'Banks',
  components: {
    Account,
    InstitutionalLayout,
    Assets,
    StandOut,
    DMA,
    Bonds
  },
  computed: {
    introText() {
      if (this.$route.path.includes('/uk/')) {
        return this.$t('exante.pages.FamilyOffice.intro.text').replace(
          '(SFC Hong Kong, CySEC)',
          '(FCA, SFC Hong Kong, CySEC)'
        )
      } else if (this.$store.$multisite.site.id !== 'exante') {
        return this.$t('exante.pages.FamilyOffice.intro.text').replace(
          '(SFC Hong Kong, CySEC)',
          ''
        )
      }
      return this.$t('exante.pages.FamilyOffice.intro.text')
    }
  },
  mounted() {
    this.$store.dispatch('set_openAccountTypeCorporate')
  }
}
</script>

<style lang="scss" scoped>
.family {
  // @include bp(tablet) {
  //   ::v-deep .advantages__items {
  //     justify-content: flex-start;
  //   }
  //   ::v-deep .advantages .icon-text-list .icon-text-list__item {
  //     margin-bottom: 0;
  //   }
  //   ::v-deep .advantages {
  //     .icon-text-list__item + .icon-text-list__item {
  //       margin-left: 50px;
  //     }
  //   }
  //   ::v-deep .advantages:first-child {
  //     .icon-text-list__item {
  //       margin-bottom: 60px;
  //     }
  //     .icon-text-list__item:nth-child(1) {
  //       width: 40%;
  //     }
  //     .icon-text-list__item:nth-child(2) {
  //       width: 60%;
  //     }
  //   }
  //   ::v-deep .bonds .bonds__more {
  //     flex-wrap: wrap;
  //   }
  // }
  @include bp(desktop) {
    // ::v-deep .text-but-link .text-but-link__text {
    //   font-size: 24px;
    // }

    ::v-deep .bonds .bonds__items {
      margin-top: 0;
    }

    ::v-deep .bonds .bonds__items .icon-text-list__item {
      margin-bottom: 60px;
    }
  }
  .account {
    ::v-deep .icon-text {
      &:nth-child(3) .icon-text__text {
        @include bp(desktop-large) {
          padding-right: 140px;
        }
      }
    }
  }

  // ::v-deep .text-but-link__text p:first-child {
  //   margin-top: 0;
  // }

  // .advantages-list {
  //   background: $color__gray--lightest;
  // }
}
</style>

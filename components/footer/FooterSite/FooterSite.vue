<template>
  <div class="foot">
    <Container class="foot__container">
      <!-- <footerLinks
        :links="footerData.additional_links"
        class="foot__links"
      ></footerLinks> -->

      <footerMenu
        :links="texts.links"
        :prod-links="texts.prodLinks"
        class="foot__menu"
      ></footerMenu>

      <div v-if="texts.copy && texts.trademark" class="foot__copy">
        <footerCopyright class="foot-copyright--copy">
          {{ texts.copy }}
        </footerCopyright>
        <footerCopyright>{{ texts.trademark }}</footerCopyright>
      </div>

      <socialList :socials="texts.socials" class="foot__soc"></socialList>

      <footerAddress class="foot__address">
        {{ texts.nearestoffice }}
      </footerAddress>

      <div v-if="texts.licenses" class="foot__licenses">
        <footerCopyright
          v-for="(item, index) in texts.licenses"
          :key="item.country + index"
        >
          <div class="foot__copy-header">{{ item.country }}</div>
          <div>{{ item.text }}</div>
        </footerCopyright>
      </div>

      <div class="foot__version">{{ texts.version }}</div>
    </Container>
  </div>
</template>

<script>
// import TogglerMobileFull from './TogglerMobileFull.vue'
import socialList from './SocialList'
import footerMenu from './FooterMenu'
// import footerLinks from './footerLinks'
import footerAddress from './FooterAddress'
import footerCopyright from './FooterCopyright'
import Container from '~/components/general/Container.vue'

export default {
  name: 'FooterSite',
  components: {
    Container,
    socialList,
    footerMenu,
    // footerLinks,
    footerAddress,
    footerCopyright
    //   TogglerMobileFull,
  },
  props: {
    texts: {
      type: Object,
      default: null
    }
  }
  // data() {
  //   return {
  //     footerData: {
  //       additional_links: [
  //         {
  //           href: '#',
  //           name: 'How to buy bonds?'
  //         },
  //         {
  //           href: '#',
  //           name: 'Bonds trading'
  //         },
  //         {
  //           href: '#',
  //           name: 'How to buy treasure bonds?'
  //         },
  //         {
  //           href: '#',
  //           name: 'How to buy corporate bonds?'
  //         },
  //         {
  //           href: '#',
  //           name: 'Bond broker'
  //         }
  //       ]
  //     }
  //   }
  // }
}
</script>

<style lang="scss">
.foot {
  // @include bp(mobile tablet) {
  //   padding-top: $padding-base * 2;
  // }
  @include bp(tablet) {
    padding: $padding-base * 2 0;
  }
  @include bp(desktop-wide) {
    padding: 100px 0;
  }

  position: relative;
  z-index: 10;

  padding: $padding-base 0;

  background: #fff;

  @media print {
    page-break-before: always;
    page-break-inside: avoid;
  }

  .foot__container {
    @include bp(tablet) {
      display: grid;

      grid-auto-columns: 55% 40%;
      grid-column-gap: 5%;
      grid-template-rows: max-content max-content max-content;
    }
  }

  .foot__links,
  .foot__menu,
  .foot__copy {
    @include bp(tablet) {
      grid-column: 1;
    }
  }

  .foot__soc,
  .foot__address,
  .foot__licenses {
    @include bp(tablet) {
      grid-column: 2;
    }
  }
  .foot__links {
    @include bp(tablet) {
      grid-row: 1 / 3;
    }
  }
  .foot__menu {
    @include bp(desktop-wide) {
      margin-bottom: 50px;
    }
  }
  .foot__copy {
    @include bp(tablet) {
      grid-row: 2 / 5; // TODO: remove after add FooterLinks
    }
    @include bp(desktop-wide) {
      font-size: 14px;
    }
  }

  .foot__soc {
    @include bp(tablet) {
      grid-row: 1;
    }

    margin-bottom: 30px;
  }

  .foot__licenses {
    @include bp(tablet) {
      grid-row: 3/5;
    }
  }

  .foot__disclaimer {
    margin-top: 10px;
  }

  .foot__copy-header {
    font-size: 14px;

    text-transform: uppercase;

    color: #4e5d60;
  }

  .foot__version {
    @include bp(tablet) {
      grid-column: 1 / 2;
    }

    font-size: 12px;
    font-weight: 300;
    line-height: 20px;

    margin-top: 20px;

    color: rgba($color__black--light, 0.5);
  }
}
</style>

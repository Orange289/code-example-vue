<template>
  <div class="careerspage" :class="[{ 'careerspage--menuIsOpen': menuIsOpen }]">
    <slot name="header_wrap">
      <xHeader :items="menuItems" @onMenuToggle="onMenuToggle">
        <template #mobileNav>
          <xFooter
            class="xFooter--mobileNav"
            :social-items="socialItems"
            :footer-blocks="footerBlocks"
            :about="about"
            :text-items="textItems"
            :version="version"
          ></xFooter>
        </template>
      </xHeader>
    </slot>
    <slot name="nuxt_page_start"></slot>
    <main>
      <slot></slot>
    </main>

    <slot name="awards">
      <xAwards v-bind="awards" :items="awardsItems"></xAwards>
    </slot>
    <slot name="beforeCallta"> </slot>
    <slot name="callta">
      <SubmitBlock
        :title="defaultSubmitTitle"
        :text="defaultSubmitText"
        :button-text="defaultSubmitBtn"
        :on-click="showModal"
        with-privacy
      />
      <!-- <Created></Created> -->
      <!-- <xButton label="Open cv" @click="$refs.submitcvmodal.show()"></xButton> -->
    </slot>
    <slot name="nuxt_page_end"></slot>
    <slot name="footer_wrap">
      <xFooter
        :social-items="socialItems"
        :footer-blocks="footerBlocks"
        :about="about"
        :text-items="textItems"
        :version="version"
      ></xFooter>
      <Modal ref="submitcvmodal" class="modal-submit" header="Submit your CV">
        <SubmitCVForm></SubmitCVForm>
      </Modal>
    </slot>
    <Debug v-if="debug"></Debug>
  </div>
</template>

<script>
import { mapState, mapGetters, mapMutations } from 'vuex'
import { continents, countries } from 'countries-list'
import xHeader from '../general/xHeader/xHeader.vue'
import xFooter from '../general/xFooter/xFooter.vue'
import xAwards from '../general/xAwards/xAwards.vue'
import Modal from '../general/Modal/Modal.vue'
import SubmitCVForm from '../careers/SubmitCVForm.vue'
import SubmitBlock from '../careers/SubmitBlock.vue'
import 'normalize.css'

export default {
  name: 'DefaultlCareersLayout',
  components: {
    xHeader,
    xFooter,
    xAwards,
    Modal,
    SubmitCVForm,
    SubmitBlock,
    Debug: () => import('./Debug.vue')
  },
  props: {
    awards: {
      type: Object,
      default: () => {}
    }
  },
  async fetch() {
    if (this.allWorkableDepartments.length === 0) {
      this.setDepartments(await this.fetchData(this.departmentsUrl))
    }
    if (this.allWorkableLocations.length === 0) {
      this.setLocations(await this.fetchData(this.locationsUrl))
    }

    if (this.allJobsCount === 0) {
      const res = await this.fetchData(this.jobsUrl)
      if (res.jobs) {
        this.setJobs(res.jobs)
      } else {
        this.setJobs(res)
      }
    }
  },
  // call fetch only on client-side
  fetchOnServer: false,
  // or asyncData?
  // async asyncData({ $http }) {
  //   const departments = await $http.$get(departmentsUrl)
  //   const locations = await $http.$get(locationsUrl)
  //   return { departments, locations }
  // },
  data() {
    return {
      // debug: process.env.NODE_ENV === 'development',
      departmentsUrl:
        'https://apply.workable.com/api/v1/widget/accounts/exante/departments',
      locationsUrl:
        'https://apply.workable.com/api/v1/widget/accounts/exante/locations',
      jobsUrl: 'https://apply.workable.com/api/v1/widget/accounts/208386',
      debug: process.env.NODE_ENV !== 'production',
      menuIsOpen: false,
      menuItems: [
        {
          label: 'Home',
          href: '/'
        },
        {
          label: 'Job openings',
          href: '/jobs/'
        },
        {
          label: 'About',
          href: '/about/'
        }
        // {
        //   label: 'Corporate events',
        //   href: '#'
        // },
        // {
        //   label: 'Our heroes',
        //   href: '#'
        // }
      ],
      socialItems: [
        {
          label: 'EXANTE on Facebook',
          href: 'https://facebook.com/exante.global'
        },
        {
          label: 'EXANTE on Linkedin',
          href: 'https://www.linkedin.com/company/exante-ltd'
        },
        {
          label: 'EXANTE on Youtube',
          href: 'http://www.youtube.com/user/exantevideo'
        },
        {
          label: 'EXANTE on Twitter',
          href: 'https://twitter.com/EXANTE_EU'
        },
        {
          label: 'EXANTE on Instagram',
          href: 'https://www.instagram.com/exante_brokerage/'
        },
        {
          label: 'EXANTE rss',
          href: 'https://exante.eu/news/rss/'
        }
      ],
      footerBlocks: [
        {
          title: 'Info',
          links: [
            {
              name: 'EXANTE website',
              url: 'https://exante.eu'
            },
            {
              name: 'GDPR Compliance',
              url: 'https://exante.eu/company/gdpr/'
            },
            {
              name: 'Cookie Declaration',
              url:
                'https://careers.exante.eu/company/cookie-declaration-career/'
            }
          ]
        }
      ],
      about:
        'EXANTE is a broker for professionals.<br/>Direct access to over 50 financial markets through one account.',
      textItems: [
        'EXT LTD is incorporated as a Limited Liability Company under Cyprus law, with the registration number HE 293592.\nEXT LTD is authorised to provide the Investment Services by CySEC. Licenсe No.: 165/12.',

        'Any information contained on this website is provided to you for informational purposes only and should not be regarded as an offer or solicitation of an offer to buy or sell any investments or related services that may be referenced here.',

        'Investing in certain instruments, including stocks, options, futures, foreign currencies, and bonds involve a high level of risk. Trading on margin comes with substantial risk as well. You must be aware of these risks before opening an account to trade. The income you may get from online investing may go down as well as up.',

        'Dear Clients and Visitors! Since there is an abundance of fraud activity on the Internet (aiming to abuse the brand name and logo of EXANTE and other reputable investment companies) please make sure you match any mention of EXANTE with our legal name [EXT, XNT, etc.] Any other entities have no right to use the EXANTE logo as part of their branding. If you witness any unauthorised use of our brand on a third party website, please let us know at support@exante.eu so that we can enact the necessary steps for removal.'
      ],
      version: 'Version 0.4.163',
      awardsItems: [
        {
          src: '/static/images/careers/awards/fa.svg',
          name: 'Diversity in\u00A0Finance Awards',
          url:
            'https://exante.eu/press/news/1934-exante-wins-the-diversity-marketing-and-recruitment-initiative-of-the-year-award-from-ftadviser/',
          year: '2022'
        },
        {
          src: '/static/images/careers/awards/ebm.svg',
          name: 'European Business Magazine Awards',
          url:
            'https://exante.eu/press/news/1806-exante-scoops-the-investment-award-2020-for-the-seamless-trading-experience/',
          year: '2020'
        },
        {
          src: '/static/images/careers/awards/bbd.svg',
          name: 'Best Broker Digital Award',
          url:
            'https://exante.eu/press/news/1810-exante-picks-up-digital-investment-company-award-2020-for-the-best-community-outreach/',
          year: '2020'
        },
        {
          src: '/static/images/careers/awards/iia.svg',
          name: 'Investment Innovations Award',
          url:
            'https://exante.eu/press/news/1728-exante-poluchaet-nagradu-luchshii-onlain-broker/',
          year: '2020'
        },
        {
          src: '/static/images/careers/awards/fa.svg',
          name: 'Diversity in\u00A0Finance Awards',
          url:
            'https://exante.eu/press/news/1688-exante-gets-highly-commended-by-financial-adviser-within-diversity-in-finance-awards/',
          year: '2020'
        },
        {
          src: '/static/images/careers/awards/iy.svg',
          name: 'Investor of the Year',
          url:
            'https://exante.eu/press/news/1804-exante-named-investor-of-the-year-at-blockchain-summit-2018/',
          year: '2018'
        },
        {
          src: '/static/images/careers/awards/gf.png',
          name: 'The Global Finance Award',
          url: '',
          year: '2018'
        },
        {
          src: '/static/images/careers/awards/gbr.png',
          name: 'Best Investment Broker',
          url: '',
          year: '2017'
        },
        {
          src: '/static/images/careers/awards/pbs.png',
          name: 'Trade Media Award',
          url: '',
          year: '2014'
        }
      ],
      defaultSubmitTitle: 'Don’t see your dream job listed?',
      defaultSubmitText:
        "We're growing rapidly and will need more professionals like you. \nSend us your CV so we can keep you in\u00A0mind as\u00A0we\u00A0grow.",
      defaultSubmitBtn: 'Submit your CV'
    }
  },
  computed: {
    ...mapGetters('careers', ['allJobsCount']),
    ...mapState('careers', [
      'allWorkableDepartments',
      'allWorkableLocations',
      'continentsList'
    ])
  },
  created() {
    this.continentsList.map((continent) => {
      const countriesList = []
      const continentCode = Object.keys(continents).find(
        (key) => continents[key] === continent
      )

      for (const key in countries) {
        if (
          countries[key].continent &&
          countries[key].continent === continentCode
        ) {
          countriesList.push(countries[key].name)
        }
      }

      this.setContinentsCountries({
        [continent]: countriesList
      })
    })
  },
  mounted() {
    // First we get the viewport height and we multiple it by 1% to get a value for a vh unit
    // Then we set the value in the --vh custom property to the root of the document
    document.documentElement.style.setProperty(
      '--vh',
      window.innerHeight * 0.01 + 'px'
    )

    window.addEventListener('resize', this.calcVh)
  },
  beforeDestroy() {
    window.removeEventListener('resize', this.calcVh)
  },
  methods: {
    ...mapMutations('careers', [
      'setDepartments',
      'setLocations',
      'setJobs',
      'setContinentsCountries'
    ]),
    async fetchData(url) {
      return await fetch(url)
        .then((res) => res.json())
        .catch((error) => {
          console.error('error', error)
          return []
        })
    },
    calcVh() {
      document.documentElement.style.setProperty(
        '--vh',
        window.innerHeight * 0.01 + 'px'
      )
    },
    showModal() {
      this.showSubmitCVModal()
      this.$nextTick(() => {
        document.body.classList.add('popup-open')
      })
    },
    async showSubmitCVModal() {
      await this.$refs.submitcvmodal.show()
    },
    onMenuToggle(menuIsOpen) {
      this.menuIsOpen = menuIsOpen
    }
  }
}
</script>

<style lang="postcss">
:root {
  /* Typography */
  --font-family-fallback: /* Roman */ -apple-system, system-ui,
    blinkmacsystemfont, roboto, 'Helvetica Neue', 'Fira Sans', ubuntu, oxygen,
    'Oxygen Sans', cantarell, 'Droid Sans', 'Lucida Grande', 'Apple Color Emoji',
    /* CJK */ 'Hiragino Kaku Gothic Pro', meiryo, 'Hiragino Sans GB W3',
    /* Arabic */ 'Noto Naskh Arabic', 'Droid Arabic Naskh', geeza pro,
    'Simplified Arabic', /* Thai */ 'Noto Sans Thai', thonburi, dokchampa,
    'Droid Sans Thai',
    /* Sans Fallbacks */ /* Droid Sans Fallback */ '.SFNSDisplay-Regular',
    /* CJK Fallbacks */ 'Heiti SC', 'Microsoft Yahei', helvetica, arial,
    sans-serif;

  --font-family-base: 'Inter', var(--font-family-fallback);
  --font-family-secondary: 'Fedra Sans Pro', var(--font-family-fallback);

  /* Color scheme */
  /* https://docs.google.com/spreadsheets/d/18DXtzAVllnw12KSTX3EkQ83g9pcid5JnuFg8qXuPJMo/edit?pli=1#gid=1187741906 */

  --primary-200-color: #21e564;
  --primary-200-color--rgb: 33, 229, 100;
  --primary-250-color: #01c056;
  --primary-300-color: #03bf56;
  --primary-400-color: #38a85d;
  --primary-425-color: #029e47;
  --primary-450-color: #089d49;
  --primary-500-color: #007f39;
  --primary-500-color--rgb: 0, 127, 57;
  --primary-500-shadow-600-color: rgba(50, 154, 84, 0.6);
  --primary-525-color: #01803a;
  --primary-550-color: #02833c;
  --primary-550--rgb: 2, 131, 60;
  --primary-600-color: #238442;
  --primary-700-color: #2c8e4c;
  --primary-900-color: #00652d;

  --accent-0-color: #252c2e;
  --accent-100-color: #4e5d60;
  --accent-150-color: #818c99;
  --accent-200-color: #7a8688;
  --accent-300-color: #a6adaf;
  --accent-400-color: #7198b7;
  --accent-500-color: #008dce;
  --accent-600-color: #005580;
  --accent-700-color: #0cd3a1;
  --accent-700-color--rgb: 12, 211, 161;
  --accent-900-color: #cce6d8;
  --accent-1000-color: #06c8ff;

  --grayscale-0-color: #000000;
  --grayscale-50-color: #010101;
  --grayscale-75-color: #676767;
  --grayscale-100-color: #787878;
  --grayscale-150-color: #8c8c8c;
  --grayscale-200-color: #a2a2a2;
  --grayscale-250-color: #bbbbbb;
  --grayscale-275-color: #cccccc;
  --grayscale-380-color: #c9c9c9;
  --grayscale-300-color: #d1d1d1;
  --grayscale-340-color: #d7d7d7;
  --grayscale-350-color: #d9d9d9;
  --grayscale-400-color: #e1e1e1;
  --grayscale-450-color: #e8e8e8;
  --grayscale-470-color: #e6e6e6;
  --grayscale-475-color: #e5e5e5;
  --grayscale-480-color: #e4e4e4;
  --grayscale-500-color: #eaeaea;
  --grayscale-800-color: #f0f0f0;
  --grayscale-850-color: #f2f3f4;
  --grayscale-875-color: #f6f6f6;
  --grayscale-880-color: #f7f7f7;
  --grayscale-900-color: #f9f9f9;
  --grayscale-950-color: #fafafa;
  --grayscale-1000-color: #ffffff;

  --shadow-100-color: rgba(0, 0, 0, 0.1);
  --shadow-200-color: rgba(0, 0, 0, 0.2);
  --shadow-500-color: rgba(0, 0, 0, 0.5);
  --shadow-700-color: rgba(0, 0, 0, 0.7);
  --shadow-800-color: rgba(0, 0, 0, 0.8);

  --danger-color: #ce2100;
  --danger-400-color: #e61d19;
  --danger-600-color: #b70f0b;
  --attention-color: #ffae02;
  --warning-color: #fff5c8;
  --ok-color: #329a54;
  --pending-color: #008dce;

  --form-error-color: #bf3b4b;
  --form-success-color: #14af5a;
  --form-border-color: #ebebeb;
  --form-text-color: var(--accent-0-color);
  --form-placeholder-color: #818c99;
  --form--hover-color: #fbfbfb;

  --transparent: rgba(255, 255, 255, 0);

  --footer-bg-color: #fafbfc;

  /* typography */
  --font-size-base: 16px;

  /* other */
  --cutted-angle: polygon(
    0 0,
    100% 0,
    100% calc(100% - 21.622px),
    calc(100% - 0.005px) calc(100% - 21.313px),
    calc(100% - 0.028px) calc(100% - 20.989px),
    calc(100% - 0.078px) calc(100% - 20.5px),
    calc(100% - 0.167px) calc(100% - 19.996px),
    calc(100% - 0.291px) calc(100% - 19.473px),
    calc(100% - 0.437px) calc(100% - 18.994px),
    calc(100% - 0.624px) calc(100% - 18.499px),
    calc(100% - 0.85px) calc(100% - 17.995px),
    calc(100% - 1.08px) calc(100% - 17.555px),
    calc(100% - 1.317px) calc(100% - 17.16px),
    calc(100% - 11.643px) calc(100% - 1.779px),
    calc(100% - 11.821px) calc(100% - 1.533px),
    calc(100% - 12px) calc(100% - 1.321px),
    calc(100% - 12.324px) calc(100% - 1px),
    calc(100% - 12.667px) calc(100% - 0.727px),
    calc(100% - 13px) calc(100% - 0.517px),
    calc(100% - 13.477px) calc(100% - 0.284px),
    calc(100% - 14px) calc(100% - 0.117px),
    calc(100% - 14.488px) calc(100% - 0.028px),
    calc(100% - 14.967px) 100%,
    0 100%
  );

  --cols: 4;
  --cols-sm: 16;
  --cols-md: 24;
  --cols-lg: 24;
  --cols-xl: 24;

  --xgrid__gutter: 16px;
  --xgrid__gutter-sm: 16px;
  --xgrid__gutter-md: 16px;
  --xgrid__gutter-lg: 16px;
  --xgrid__gutter-xl: 16px;
}

* {
  box-sizing: border-box;
  background-repeat: no-repeat;
}

html,
body {
  font-family: var(--font-family-base);
  color: var(--accent-100-color);
}

html {
  height: 100%;
}

html,
body,
.text-body {
  font-size: 14px;
  line-height: 24px;
  font-weight: 300;

  @media (--xl) {
    font-size: 18px;
    line-height: 28px;
  }
}

body.popup-open {
  height: 100%;
  overflow: hidden;
}

h1,
.text-h1 {
  color: var(--accent-0-color);
  font-size: 24px;
  line-height: 32px;
  margin-bottom: 24px;
  font-weight: 300;
  margin-top: 24px;

  @media (--sm) {
    font-size: 32px;
    line-height: 64px;
    margin-bottom: 35px;
    margin-top: 35px;
  }
  @media (--md) {
    margin-top: 24px;
  }
  @media (--lg) {
    font-size: 36px;
    margin-bottom: 35px;
  }
  @media (--xl) {
    font-size: 48px;
    margin-bottom: 48px;
    margin-top: 48px;
  }
}

h2,
.text-h2 {
  color: var(--accent-0-color);
  font-size: 22px;
  font-weight: 300;
  @media (--md) {
    font-size: 44px;
  }
}

h3,
.text-h3 {
  color: var(--accent-0-color);
  font-size: 20px;
  font-weight: 300;
  @media (--md) {
    font-size: 40px;
  }
}

h4,
.text-h4 {
  color: var(--accent-0-color);
  font-size: 18px;
  line-height: 22px;
  font-weight: 300;
  @media (--md) {
    font-size: 32px;
    line-height: 40px;
  }
}

h5,
.text-h5 {
  color: var(--accent-0-color);
  font-size: 16px;
}

h6,
.text-h6 {
  color: var(--accent-0-color);
  font-size: 14px;
}

a,
.link {
  color: var(--primary-500-color);
  text-decoration: none;

  &:hover,
  &:focus {
    text-decoration: underline;
  }
}

.underlined {
  position: relative;

  padding-bottom: 16px;
  &::after {
    position: absolute;
    bottom: 0;
    left: 0;

    width: 36px;
    height: 2px;

    background-color: var(--primary-300-color);
    content: '';
    @media (--md) {
      width: 48px;
    }
  }
  @media (--md) {
    padding-bottom: 24px;
  }
}

.careerspage {
  overflow: hidden;

  &.careerspage--menuIsOpen {
    height: 100vh;
    height: calc(var(--vh, 1vh) * 100);
  }
}

.xFooter.xFooter--mobileNav {
  background-color: var(--grayscale-475-color, #ffffff);
  @media (--sm) {
    display: none;
  }
}

.slideLeft-enter-active,
.slideLeft-leave-active {
  transition: all 0.3s ease-in-out;
  /* will-change: opacity, transform; */
}
.slideLeft-enter,
.slideLeft-leave-to {
  opacity: 0;
  transform: translateX(100%);
}

.left-enter-active,
.left-leave-active,
.right-enter-active,
.right-leave-active {
  transform: translateX(0);
  opacity: 1;
  transition-delay: 0.15s;
  transition-timing-function: ease-in-out;
  transition-duration: 0.4s;

  will-change: transform, opacity;
}

.left-enter,
.left-leave-to {
  opacity: 0;
  @media (--md) {
    transform: translateX(-200%);
  }
}

.right-enter,
.right-leave-to {
  opacity: 0;
  @media (--md) {
    transform: translateX(200%);
  }
}

.slide-up {
  @media (--md) {
    transform: translateY(100%);
  }
}

.down-enter-active,
.down-leave-active {
  transform: translateY(0);
  opacity: 1;
  transition-delay: 0.15s;
  transition-timing-function: ease-in-out;
  transition-duration: 0.4s;

  will-change: transform, opacity;
}

.down-enter,
.down-leave-to {
  opacity: 0;
}

.slide-down,
.down-enter,
.down-leave-to {
  @media (--md) {
    transform: translateY(-100%);
  }
}

.slide-up.animate-active,
.slide-down.animate-active {
  @media (--md) {
    transform: translateY(0);
  }
}

.slide-right.animate-active,
.slide-left.animate-active {
  @media (--md) {
    transform: translateX(0);
  }
}

.fade-enter-active,
.fade-leave-active {
  transition-property: opacity;
  transition-delay: 0.15s;
  transition-timing-function: ease-in-out;
  transition-duration: 0.5s;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
}

.modal-submit {
  .modal {
    overflow: visible;
  }
}
</style>

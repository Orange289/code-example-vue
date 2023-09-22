<template>
  <div class="xFooter">
    <xGrid>
      <xRow>
        <xCol cols="24" sm="8" md="11">
          <xRow class="xFooter__blocks">
            <slot name="contactsus">
              <xCol cols="24" md="12" class="xFooter__block">
                <h3 class="xFooter__title">{{ footerContactUs.title }}</h3>
                <p class="xFooter__block-desc">{{ footerContactUs.text }}</p>
                <a
                  class="xFooter__block-email"
                  :href="
                    `mailto:${footerContactUs.email}?subject=${footerContactUs.subject}`
                  "
                >
                  {{ footerContactUs.email }}
                </a>
              </xCol>
            </slot>
            <xCol
              v-for="(item, index) in footerBlocks"
              :key="index"
              cols="24"
              md="12"
              class="xFooter__block"
            >
              <h3 v-if="item.title" class="xFooter__title">{{ item.title }}</h3>
              <p v-if="item.desc" class="xFooter__block-desc">
                {{ item.desc }}
              </p>
              <ul
                :class="[
                  'xFooter__links',
                  { 'xFooter__links--2cols': item.withCols }
                ]"
              >
                <li v-for="(link, linkIndex) in item.links" :key="linkIndex">
                  <a class="xFooter__link" :href="link.url">{{ link.name }}</a>
                </li>
              </ul>
            </xCol>
          </xRow>
          <socialLinks class="xFooter__socials" :items="socialItems" />
          <!-- <div class="xFooter__version">{{ version }}</div> -->
        </xCol>
        <xCol cols="24" sm="8" md="13">
          <div class="xFooter__desc">
            <p class="xFooter__about" v-html="about"></p>
            <p v-for="(text, textIndex) in textItems" :key="textIndex">
              {{ text }}
            </p>
          </div>
          <!-- <div class="xFooter__version xFooter__version--mobile">
            {{ version }}
          </div> -->
        </xCol>
      </xRow>
    </xGrid>
  </div>
</template>

<script>
import { xGrid, xRow, xCol } from '../xGrid'
import socialLinks from '../social-links/SocialLinks.vue'

export default {
  name: 'XFooter',
  components: {
    xGrid,
    xRow,
    xCol,
    // xSpacer,
    socialLinks
  },
  props: {
    footerContactUs: {
      type: Object,
      default: () => {
        return {
          title: 'Contact us',
          text: 'If\u00A0you have any questions, please contact',
          email: 'hiring@exante.eu',
          emailSubject: 'Contact from careers site'
        }
      }
    },
    footerBlocks: {
      type: Array,
      default: null
    },
    socialItems: {
      type: Array,
      default: null
    },
    about: {
      type: String,
      default: null
    },
    textItems: {
      type: Array,
      default: null
    },
    version: {
      type: String,
      default: null
    }
    // mobileOnSmScreen: {
    //   type: Boolean,
    //   default: false
    // }
  }
}
</script>

<style lang="postcss" scoped>
.xFooter {
  padding: 40px 0 48px;
  color: var(--accent-300-color);
  background-color: var(--footer-bg-color);

  @media (--md) {
    padding-bottom: 52px;
  }
  @media (--md) {
    padding: 48px 0 56px;
  }
}

.xFooter__title {
  margin: 0;
  margin-bottom: 16px;

  font-weight: 600;
  font-size: 24px;
  line-height: 24px;
  color: inherit;

  @media (--md) {
    font-size: 20px;
    margin-bottom: 8px;
  }
  @media (--xl) {
    font-size: 24px;
    margin-bottom: 16px;
  }
}

.xFooter__block-desc {
  margin-bottom: 16px;

  font-size: 12px;
  line-height: 16px;

  @media (--md) {
    font-size: 10px;
    line-height: 12px;
  }
  @media (--xl) {
    font-size: 12px;
    line-height: 16px;
    margin-bottom: 8px;
  }
}

.xFooter__links {
  margin-bottom: 16px;
  padding: 0;

  list-style: none;

  li {
    line-height: 1;
    margin-bottom: 10px;
  }

  @media (--xl) {
    margin-bottom: 24px;
  }
}

.xFooter__blocks {
  @media (--md) {
    justify-content: space-between;
  }
}

.xFooter__block:nth-child(2) {
  @media (--md) {
    max-width: 40%;
  }
  .xFooter__title {
    @media (--md) {
      margin-bottom: 2px;
    }
    @media (--xl) {
      margin-bottom: 12px;
    }
  }
}

.xFooter__links--2cols {
  display: grid;
  grid-template-columns: 50% 50%;
  max-height: 128px;

  @media (--xl) {
    grid-template-columns: 128px 128px;
  }
}

.xFooter__link {
  color: var(--accent-200-color);
  font-size: 12px;
  text-decoration: none;

  @media (--md) {
    font-size: 10px;
  }
  @media (--xl) {
    font-size: 12px;
  }
}

.xFooter__block:nth-last-of-type(n) .xFooter__links {
  margin-bottom: 24px;
}

.xFooter__socials {
  margin-bottom: 24px;

  @media (--md) {
    max-width: 288px;
  }
}

.xFooter__desc {
  margin-bottom: 24px;

  p {
    font-size: 10px;
    line-height: 12px;
    margin-bottom: 10px;

    @media (--xl) {
      font-size: 12px;
      line-height: 16px;
    }
  }

  .xFooter__about {
    font-size: 14px;
    line-height: 24px;
    margin-bottom: 24px;

    @media (--md) {
      font-size: 12px;
      line-height: 20px;
      margin-bottom: 8px;
    }
    @media (--xl) {
      font-size: 16px;
      margin-bottom: 25px;
    }
  }
}

.xFooter__version {
  font-size: 12px;
  line-height: 26px;
  display: none;

  @media (--sm) {
    display: block;
  }
}

.xFooter__version--mobile {
  display: block;

  @media (--sm) {
    display: none;
  }
}

.xFooter__block-email {
  font-size: 20px;
  line-height: 16px;
  color: inherit;
  font-weight: 400;

  @media (--xl) {
    font-size: 24px;
    line-height: 16px;
  }
}

/* .xFooter--mobileOnSmScreen {
  .xFooter__version {
    display: none;

    @media (--md) {
      display: block;
    }
  }

  .xFooter__version--mobile {
    display: block;

    @media (--md) {
      display: none;
    }
  }
} */
</style>

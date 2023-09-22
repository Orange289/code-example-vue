<template>
  <div :class="classes">
    <xGrid class="awards__container">
      <xRow class="awards__items">
        <xCol
          v-for="(item, index) in orderedAwards"
          :key="index"
          cols="1"
          sm="2"
          class="awards__item-col"
        >
          <a
            v-if="item.url"
            :key="index"
            :href="item.url"
            class="award"
            target="_blank"
          >
            <div class="award__wrap">
              <div class="award__logo">
                <img class="award__image" :src="item.src" alt="" />
              </div>
            </div>
            <div class="award__name">
              {{ nameYear(item) }}
            </div>
          </a>
          <div v-else :key="index" class="award">
            <div class="award__wrap">
              <div class="award__logo">
                <img class="award__image" :src="item.src" alt="" />
              </div>
            </div>
            <div class="award__name">{{ nameYear(item) }}</div>
          </div>
        </xCol>
      </xRow>
    </xGrid>
  </div>
</template>

<script>
import { xGrid, xRow, xCol } from '../xGrid'

export const styleTypes = ['primary', 'minimal']
export default {
  name: 'XAwards',
  components: {
    xGrid,
    xRow,
    xCol
  },
  props: {
    items: {
      type: Array,
      required: true
    },
    styleType: {
      type: String,
      default: 'primary',
      validator(value) {
        return styleTypes.includes(value)
      }
    }
  },
  computed: {
    classes() {
      return {
        awards: true,
        [`awards--${this.styleType}`]: this.styleType
      }
    },
    orderedAwards() {
      // const sorted = {}
      // Object.keys(this.items)
      //   .sort(function(a, b) {
      //     return this.items[a].year - this.items[b].year
      //   })
      //   .forEach(function(key) {
      //     sorted[key] = this.items[key]
      //   })
      // return sorted
      return this.items
    }
  },
  methods: {
    nameYear(award) {
      return `${award.name} ${award.year}`
    }
  }
}
</script>

<style lang="postcss" scoped>
.awards {
  z-index: 1;

  padding-top: 20px;
  padding-bottom: 24px;
  color: var(--grayscale-1000-color);
  background-color: #4b30d7;

  @media (--md) {
    padding-top: 42px;
    padding-bottom: 35px;
  }
  @media (--xl) {
    padding: 0;
    height: 144px;
    display: flex;
    align-items: center;
  }

  .awards__items {
    @media (--md) {
      display: flex;

      align-items: center;
      justify-content: space-between;
    }
  }
}

.awards__item-col {
  @media (--md) {
    width: auto;
    max-width: none;
  }
}

.award {
  position: relative;

  width: 100%;
  max-width: 100%;
  color: inherit;
  display: flex;
  flex-direction: column;
  text-align: center;
  @media (--md) {
    margin-bottom: 0;
  }

  .award__wrap {
    display: flex;

    flex-wrap: wrap;
    justify-content: center;
    align-items: flex-end;
    width: 100%;
  }

  .award__logo {
    flex-grow: 1;
    width: 100%;
  }

  .award__image {
    max-height: 22px;
    max-width: 55px;

    @media (--sm) {
      max-height: 20px;
      max-width: 100%;
    }

    @media (--md) {
      max-height: 60px;
      max-width: 113px;
    }

    &[src=*'fa.svg'] {
      max-height: 30px;
      @media (--md) {
        max-height: 60px;
      }
    }

    &[src=*'gf.png'],
    &[src=*'pbs.png'] {
      @media (--sm) {
        max-width: 96px;
      }
    }
  }

  .award__name {
    max-height: 0;
    font-size: 12px;
    line-height: 16px;
    opacity: 0;
    transition: all 0.6s ease-in-out;
  }
  &:hover {
    text-decoration: none;
    .award__name {
      @media (--xl) {
        opacity: 0.5;
        max-height: 300px;
      }
    }
  }
}

.awards.awards--minimal {
  background-color: var(--grayscale-1000-color, #ffffff);

  .award__name {
    color: var(--accent-100-color);
    opacity: 0;
  }

  .award__logo {
    filter: invert(100%) sepia(4%) saturate(1137%) hue-rotate(190deg)
      brightness(117%) contrast(80%); /* make #E5E5E5 color, from https://codepen.io/sosuke/pen/Pjoqqp */
    transition: filter 0.6s ease-in-out, opacity 0.3s ease-in-out;
    /* transition: opacity 0.3s ease-in-out; */
    will-change: opacity;
    opacity: 0.2;
  }

  .award {
    &:hover {
      .award__logo {
        /* filter: invert(34%) sepia(24%) saturate(254%) hue-rotate(142deg)
          brightness(94%) contrast(88%); */
        /* make #4E5D60 color, from https://codepen.io/sosuke/pen/Pjoqqp */
        opacity: 0.8;
      }

      .award__name {
        @media (--xl) {
          opacity: 0.8;
          max-height: 300px;
        }
      }
    }
  }
}
</style>

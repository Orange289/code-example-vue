<template>
  <div class="values">
    <transition name="fade">
      <h2 v-if="show">Our values</h2>
    </transition>
    <ul class="values__list">
      <li
        v-for="(item, index) in values"
        :key="index"
        :class="`values__item values__item--${item.label}`"
        :style="getShadow(item.shadow)"
      >
        <transition name="down">
          <xTile
            v-if="show"
            class="values__tile"
            :text="item.text"
            :bg-color="item.bgColor"
            :style="{ 'transition-delay': `${0.15 * index}s` }"
          />
        </transition>
      </li>
    </ul>
  </div>
</template>

<script>
import xTile from '../../general/xTile/xTile.vue'
export default {
  name: 'Values',
  components: {
    xTile
  },
  data() {
    return {
      values: [
        {
          label: 'commitment',
          text: 'Commitment',
          bgColor: '#5D57DB',
          shadow: '0px 8px 16px rgba(117, 110, 255, 0.25)'
        },
        {
          label: 'result',
          text: 'Focus on the result',
          bgColor: '#F2D132',
          shadow: '0px 8px 16px rgba(255, 211, 1, 0.25)'
        },
        {
          label: 'selfdev',
          text: 'Self-development',
          bgColor: '#FA5E24',
          shadow: '0px 8px 16px rgba(255, 69, 0, 0.25)'
        },
        {
          label: 'openmind',
          text: 'Open mind',
          bgColor: '#1DBEF0',
          shadow: '0px 8px 16px rgba(3, 195, 255, 0.25)'
        },
        {
          label: 'communication',
          text: 'Communication',
          bgColor: '#03BF56',
          shadow: '0px 8px 16px rgba(0, 219, 37, 0.25)'
        }
      ],
      show: false
    }
  },
  computed: {
    cssProps() {
      return {
        '--shadow': this.shadow
      }
    }
  },
  mounted() {
    this.show = !this.show
  },
  methods: {
    getShadow(el) {
      return `filter: drop-shadow(${el})`
    }
  }
}
</script>

<style lang="postcss" scoped>
.values {
  margin-bottom: 32px;

  h2 {
    color: var(--accent-0-color);
    font-family: var(--font-family-secondary);
    font-size: 64px;
    line-height: 64px;
    font-weight: 300;
    margin-bottom: 8px;
  }

  @media (--sm) {
    h2 {
      font-size: 48px;
      margin-bottom: 40px;
    }
  }
  @media (--md) {
    margin-bottom: 0;

    h2 {
      font-size: 64px;
      margin-bottom: 24px;
    }
  }
  @media (--lg) {
    h2 {
      font-size: 72px;
      margin-bottom: 24px;
    }
  }
  @media (--xl) {
    h2 {
      font-size: 96px;
      margin-bottom: 32px;
    }
  }
}

.values__list {
  list-style: none;
  position: relative;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;

  @media (--lg) {
    flex-direction: column;
  }
}

.values__item--commitment {
  width: 47%;
  margin-bottom: 40px;

  @media (--sm) {
    width: 60%;
    height: 80px;
    margin-bottom: 92px;

    .values__tile {
      height: 100%;
      padding: 0 16px 16px;
    }
  }
  @media (--md) {
    width: 58%;
    height: 113px;

    .values__tile {
      padding: 0 32px 21px;
      font-size: 18px;
    }
  }
  @media (--lg) {
    width: 44%;
    height: 116px;
    margin-bottom: 60px;
  }
  @media (--xl) {
    width: 45%;
    height: 160px;
    margin-bottom: 72px;

    .values__tile {
      padding: 0 48px 32px;
      font-size: 24px;
    }
  }
}

.values__item--result {
  margin-top: 16px;
  width: 45%;
  z-index: 2;

  @media (--sm) {
    width: 73%;
    height: 100px;
    margin-top: 0;
    position: absolute;
    right: 0;
    top: 72px;

    .values__tile {
      font-size: 16px;
      height: 100%;
      padding: 0 24px 16px;
    }
  }
  @media (--md) {
    width: 67%;
    height: 132px;
    top: 48px;

    .values__tile {
      font-size: 24px;
      padding: 0 32px 24px;
    }
  }
  @media (--lg) {
    width: 52%;
    height: 140px;
    top: 20px;
  }
  @media (--xl) {
    width: 45%;
    height: 160px;

    .values__tile {
      padding: 0 48px 32px;
    }
  }
}

.values__item--selfdev {
  position: absolute;
  left: 31%;
  top: 48px;
  width: 60%;
  height: 85px;
  z-index: 1;

  .values__tile {
    padding: 0 18px 13px 24px;
    font-size: 16px;
    line-height: 24px;
    height: 100%;
  }

  @media (--sm) {
    width: 87%;
    height: 116px;
    left: auto;
    right: 0;
    top: 102px;

    .values__tile {
      font-size: 18px;
      padding: 0 40px 16px;
    }
  }
  @media (--md) {
    width: 76%;
    height: 152px;
    top: 128px;
    right: 40px;

    .values__tile {
      font-size: 24px;
      padding: 0 40px 28px;
    }
  }
  @media (--lg) {
    width: 60%;
    height: 160px;
    top: 85px;
    right: 48px;

    .values__tile {
      padding: 0 48px 32px;
    }
  }
  @media (--xl) {
    top: 121px;
    right: 64px;
    height: 216px;

    .values__tile {
      font-size: 36px;
      padding: 0 64px 41px;
    }
  }
}

.values__item--openmind {
  width: 52%;
  height: 76px;

  .values__tile {
    padding: 0 20px 16px;
    font-size: 14px;
    line-height: 24px;
    height: 100%;
  }

  @media (--sm) {
    width: 74%;
    height: 100px;
    margin-bottom: 16px;

    .values__tile {
      padding: 0 24px 16px;
    }
  }
  @media (--md) {
    width: 67%;
    height: 132px;
    margin-bottom: 0;

    .values__tile {
      font-size: 24px;
      padding: 0 30px 20px;
    }
  }
  @media (--lg) {
    width: 52%;
    height: 140px;

    .values__tile {
      padding: 0 32px 24px;
    }
  }
  @media (--xl) {
    width: 53%;
    height: 192px;

    .values__tile {
      font-size: 32px;
      padding: 0 48px 40px;
    }
  }
}

.values__item--communication {
  margin-top: 66px;
  width: 45%;

  @media (--sm) {
    width: 60%;
    height: 80px;
    margin-top: 0;
    margin-left: auto;

    .values__tile {
      padding: 0 16px 16p;
      font-size: 16px;
      height: 100%;
    }
  }
  @media (--md) {
    width: 58%;
    height: 112px;
    margin-top: -10px;

    .values__tile {
      font-size: 18px;
      padding: 0 32px 20px;
    }
  }
  @media (--lg) {
    width: 44%;
    height: 116px;
    margin-top: -20px;
  }
  @media (--xl) {
    width: 45%;
    height: 160px;

    .values__tile {
      font-size: 24px;
      padding: 0 48px 32px;
    }
  }
}
</style>

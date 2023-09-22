<template>
  <header class="xHeader" :class="[{ 'xHeader--menuIsOpen': menuIsOpen }]">
    <xGrid class="xHeader__container">
      <xRow class="xHeader__row">
        <xCol cols="3" sm="5" md="3" class="xHeader__col">
          <a href="/" class="xHeader__logo-wrap">
            <img src="/static/images/logo-exante.svg" alt="EXANTE" />
          </a>
        </xCol>
        <xSpacer></xSpacer>
        <xCol v-if="items" class="xHeader__col xHeader__nav-md" md="13">
          <xNav :items="items"></xNav>
        </xCol>
        <xCol class="xHeader__col xHeader__nav-xs" cols="1" md="12">
          <MenuButton
            :active="menuIsOpen"
            @click.native="onMenuClick"
          ></MenuButton>
        </xCol>
      </xRow>
    </xGrid>
    <transition name="slideLeft">
      <mobileNav v-if="menuIsOpen" :active="menuIsOpen">
        <xNav :items="items"></xNav>
        <xButton
          style-type="secondary"
          href="/submit-cv/"
          label="Sumbit your CV"
        ></xButton>
        <slot name="mobileNav"></slot>
      </mobileNav>
    </transition>
  </header>
</template>

<script>
import { xGrid, xRow, xCol, xSpacer } from '../xGrid'
import xNav from '../xNav/xNav'
import xButton from '../xButton/xButton'
import MenuButton from './MenuButton'
import mobileNav from './mobileNav'

export default {
  name: 'XHeader',
  components: {
    xGrid,
    xRow,
    xCol,
    xSpacer,
    xNav,
    MenuButton,
    mobileNav,
    xButton
  },
  props: {
    items: {
      type: Array,
      default: () => false
    }
  },
  data() {
    return {
      menuIsOpen: false,
      mdAndUp: false
    }
  },
  watch: {
    menuIsOpen() {
      this.$emit('onMenuToggle', this.menuIsOpen)
    }
  },
  beforeMount() {
    this.mdAndUp = window.matchMedia('(min-width:1152px)')
  },
  mounted() {
    window.addEventListener('resize', this.onResize)
  },
  beforeDestroy() {
    window.removeEventListener('resize', this.onResize)
  },
  methods: {
    onResize() {
      if (this.mdAndUp.matches) {
        this.menuIsOpen = false
      }
    },
    onMenuClick() {
      this.menuIsOpen = !this.menuIsOpen
    }
  }
}
</script>

<style lang="postcss" scoped>
.xHeader {
  padding: 8px 0;
  @media (--md) {
    padding: 0;
  }
}

.xHeader__row {
  overflow: hidden;
  @media (--md) {
    align-items: center;
  }
}

.xHeader__col {
  display: inline-flex;
}

.xHeader__logo-wrap {
  display: inline-flex;

  img {
    max-width: 100%;
  }
}

.xHeader__nav-md {
  display: none;

  @media (--md) {
    display: block;
  }
}

.xHeader__nav-xs {
  align-items: center;
  display: inline-flex;
  justify-content: flex-end;
  @media (--md) {
    display: none;
  }
}

.xHeader--menuIsOpen {
  z-index: 100;
  width: 100%;
  height: 100vh;
  height: calc(var(--vh, 1vh) * 100);
  top: 0;
  overflow-y: auto;

  .xHeader__container {
    padding-top: 4px;
  }

  .xHeader__nav-xs {
    z-index: 101;
  }
}
</style>

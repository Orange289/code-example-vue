<template>
  <div class="debug">
    <div class="debug__controls">
      <label class="debug__control control" for="debuggrid">
        <div class="control__title">Grid</div>
        <input id="debuggrid" v-model="debuggrid" type="checkbox" />
      </label>
    </div>

    <xGrid v-if="debuggrid" class="debug__grid debuggrid">
      <xRow class="debuggrid__row debuggrid__row--xs">
        <xCol
          v-for="n in 4"
          :key="n"
          class="debuggrid__col"
          cols="1"
          sm="1"
          md="1"
        ></xCol>
      </xRow>
      <xRow class="debuggrid__row debuggrid__row--sm">
        <xCol
          v-for="n in 16"
          :key="n"
          class="debuggrid__col"
          cols="1"
          sm="1"
          md="1"
        ></xCol>
      </xRow>
      <xRow class="debuggrid__row debuggrid__row--md">
        <xCol
          v-for="n in 24"
          :key="n"
          class="debuggrid__col"
          cols="1"
          sm="1"
          md="1"
        ></xCol>
      </xRow>
    </xGrid>
  </div>
</template>

<script>
import { xGrid, xRow, xCol } from '~/components/careers/general/xGrid'

export default {
  components: {
    xGrid,
    xRow,
    xCol
  },
  data() {
    return {
      debuggrid: false
    }
  }
}
</script>

<style lang="postcss" scoped>
.debug__controls {
  top: 0;
  left: 0;
  position: fixed;
  z-index: 10001;
  background: yellow;
}

.control {
  display: flex;
  align-items: center;

  .control__title {
    margin-right: 10px;
  }
}

.debuggrid {
  position: fixed;
  z-index: 10000;
  top: 0;
  left: 0;
  right: 0;
  height: 100vh;
  pointer-events: none;

  &:before {
    content: '';
    position: absolute;
    width: 1px;
    height: 100%;
    display: block;
    left: 50%;
    transform: translateX(-50%);
    background: red;
  }

  .debuggrid__row {
    height: 100%;
    display: none;

    @media (--xs) {
      &.debuggrid__row--xs {
        display: flex;
      }
    }
    @media (--sm) {
      &.debuggrid__row--xs {
        display: none;
      }
      &.debuggrid__row--sm {
        display: flex;
      }
    }
    @media (--md) {
      &.debuggrid__row--sm {
        display: none;
      }
      &.debuggrid__row--md {
        display: flex;
      }
    }
  }

  .debuggrid__col {
    background: rgba(183, 196, 127, 0.5);
    position: relative;

    &:after {
      content: '';
      /* position: absolute; */
      width: 100%;
      height: 100%;
      display: block;
      background: rgba(135, 175, 188, 0.5);
    }
  }
}
</style>

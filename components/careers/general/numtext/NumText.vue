<template>
  <div class="numtext">
    <div class="numtext__num">
      <animated-number
        :value="amount"
        :duration="500"
        :delay="300"
        :format-value="formatNumber"
      />
      <slot name="symbol"></slot>
    </div>
    <div>{{ value }}</div>
  </div>
</template>

<script>
import AnimatedNumber from 'animated-number-vue'

export default {
  name: 'NumText',
  components: {
    AnimatedNumber
  },
  props: {
    amount: {
      type: String,
      default: ''
    },
    value: {
      type: String,
      default: ''
    }
  },
  methods: {
    formatNumber(value) {
      return parseInt(Math.trunc(value))
    }
  }
}
</script>

<style lang="postcss" scoped>
.numtext {
  color: var(----accent-0-color);
  font-family: var(--font-family-secondary);
  font-size: 18px;
  font-weight: 400;

  span {
    font-size: 46px;
    line-height: 46px;

    @media (--xl) {
      font-size: 56px;
    }
  }

  span:nth-of-type(2) {
    margin-left: -4px;
  }

  @media (--sm) {
    font-size: 18px;
  }
  @media (--md) {
    font-size: 20px;
  }
  @media (--xl) {
    font-size: 24px;
  }
}

.numtext__num {
  display: inline-block;
  color: #fff;
  padding: 2px;
  background: var(--primary-300-color);
  margin-bottom: 10px;

  @media (--xl) {
    margin-bottom: 7px;
  }
}
</style>

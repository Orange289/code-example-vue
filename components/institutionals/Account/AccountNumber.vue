<template>
  <div v-if="item" class="count">
    <div
      v-animate.repeat.fade
      :style="{ 'transition-delay': `${0.25 * (index + 1)}s` }"
      class="count__number"
    >
      <animated-number
        v-observe-visibility="visibilityChanged"
        :value="active ? number : 0"
        :delay="250 * (index + 1)"
        :duration="500"
        :format-value="formatNumber"
      />
      <span v-html="numberEnd"></span>
    </div>
    <div
      v-animate.repeat.fade="'slide-right'"
      class="count__desc"
      v-html="item.desc"
    ></div>
  </div>
</template>

<script>
import AnimatedNumber from 'animated-number-vue'

export default {
  name: 'AccountNumber',
  components: {
    AnimatedNumber
  },
  props: {
    item: {
      type: Object,
      default: null,
      requered: true
    },
    index: {
      type: Number,
      default: 0
    }
  },
  data() {
    return {
      active: false
    }
  },
  computed: {
    formatedNumber() {
      if (this.item.format) {
        return this.$ggen(this.item.number, this.item.format)
      } else {
        return this.$ggen(this.item.number)
      }
    },
    number() {
      if (this.item.start_text) {
        return this.item.start_text
      } else {
        return parseInt(this.formatedNumber)
      }
    },
    numberEnd() {
      if (this.item.end_text) {
        return this.item.end_text
      } else {
        return this.formatedNumber.slice(this.number.toString().length)
      }
    }
  },
  methods: {
    visibilityChanged(isVisible) {
      this.active = isVisible
    },
    formatNumber(value) {
      return parseInt(Math.trunc(value))
    }
  }
}
</script>

<style lang="scss" scoped>
.count {
  @include bp(tablet) {
    margin-bottom: 44px;
  }
  @include bp(desktop-large) {
    margin-bottom: 60px;
  }
  @include bp(desktop-wide) {
    margin-bottom: 80px;

    align-items: center;
  }

  display: flex;

  margin-bottom: 15px;

  // margin-bottom: 65px;

  .count__number {
    @include bp(0 tablet) {
      font-size: 60px;
    }
    @include bp(tablet) {
      max-width: 125px;
    }
    @include bp(tablet) {
      font-size: 70px;

      margin-right: 20px;
    }
    @include bp(desktop-large) {
      font-size: 90px;
      line-height: 60px;

      max-width: 160px;
      margin-right: 38px;
    }
    @include bp(desktop-wide) {
      font-size: 104px;

      max-width: 185px;
    }

    font-size: 74px;
    font-weight: 300;
    line-height: 1;

    display: flex;

    width: 100%;
    max-width: 125px;

    color: $color__green;
  }
  .count__desc {
    @include bp(0 tablet) {
      font-size: 24px;
      font-weight: 400;
      line-height: 25px;

      width: 123px;
    }
    @include bp(tablet) {
      font-size: 32px;
      line-height: 34px;
    }
    @include bp(desktop-large) {
      font-size: 40px;

      width: 196px;

      list-style: 42px;
    }
    @include bp(desktop-wide) {
      font-size: 54px;
      line-height: 45px;
    }

    font-weight: 300;
    line-height: 0.83;

    display: flex;

    align-items: center;
  }

  &:first-child {
    .count__number {
      @include bp(0 tablet) {
        max-width: 140px;
      }
      @include bp(tablet) {
        max-width: 130px;
        margin-right: 30px;
      }
      @include bp(desktop-large) {
        margin-right: 82px;
      }
      @include bp(desktop-wide) {
        margin-right: 112px;
      }

      margin-left: -14px;
    }
  }
  &:nth-child(3) {
    @include bp(desktop-large) {
      margin-bottom: 48px;
    }
    @include bp(desktop-wide) {
      margin-bottom: 65px;
    }
  }
}
</style>

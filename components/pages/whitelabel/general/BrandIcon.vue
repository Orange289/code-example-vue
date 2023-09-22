<template>
  <div class="BrandIcon">
    <svg
      class="BrandIcon__icon"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 160 104"
    >
      <defs>
        <linearGradient
          id="b"
          x1=".5"
          x2=".5"
          y2="1"
          gradientUnits="objectBoundingBox"
        >
          <stop offset="0" stop-color="#46a26f" />
          <stop offset="1" stop-color="#007f39" />
        </linearGradient>
      </defs>
      <path id="arrow" fill="url(#b)" d="M0 0h160v72l-80 32L0 72z" />
    </svg>
    <span class="BrandIcon__text" v-html="text"></span>
  </div>
</template>

<script>
export default {
  name: 'BrandIcon',
  props: {
    text: {
      type: String,
      default: ''
    }
  }
}
</script>

<style lang="scss" scoped>
.BrandIcon {
  @include bp(tablet) {
    font-size: 16px;

    padding: 10px 29px 14px;
  }
  @include bp(desktop-large) {
    font-size: 18px;
    line-height: 1.11;

    padding: 16px 34px 30px;
  }

  font-family: $font-family-second;
  font-size: 12px;
  font-weight: bold;
  line-height: 1.25;

  position: relative;

  overflow: hidden;

  padding: 10px 29px 13px;

  text-align: center;
  text-transform: uppercase;

  color: #ffffff;

  .BrandIcon__text {
    position: relative;
    z-index: 1;
  }

  .BrandIcon__icon {
    position: absolute;
    z-index: 0;
    bottom: 0;
    left: 0;

    width: 100%;
    height: 100%;
  }
}
</style>

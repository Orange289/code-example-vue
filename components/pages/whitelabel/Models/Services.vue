<template>
  <div class="services">
    <div class="services__list" aria-label="serviceslist">
      <div
        class="services__head"
        aria-label="servicestitle"
        v-html="services.name"
      ></div>
      <div
        v-for="(item, index) in services.items"
        :key="`${item}-${index}`"
        class="services__row"
        aria-label="serviceitem"
      >
        <span v-html="item"></span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Services',
  props: {
    services: {
      type: Object,
      default: null
    }
  }
}
</script>
<style lang="scss" scoped>
.services__head {
  @include bp(0 tablet) {
    max-width: 77px;
  }
  @include bp(tablet) {
    padding-bottom: 13px;
  }
  @include bp(desktop-large) {
    font-size: 18px;
  }
  @include bp(desktop-wide) {
    font-size: 22px;
  }

  font-size: 16px;
  font-weight: 400;

  padding-bottom: 14px;

  word-break: break-all;
}

.services__row {
  @include bp(tablet) {
    font-size: 16px;

    height: 55px;
    padding: 16px 0;
  }
  @include bp(desktop-large) {
    font-size: 18px;

    height: 65px;
    padding: 21px 0;
  }
  @include bp(desktop-wide) {
    font-size: 22px;

    height: 75px;
    padding: 27px 0;
  }

  font-size: 14px;

  height: 58px;
  padding: 20px 0;

  border-top: 1px solid #d2d6d7;

  &:nth-child(3) {
    @include bp(tablet) {
      height: 75px;
      padding: 15px 0;
    }
    @include bp(desktop-large) {
      height: 95px;
      padding: 25px 0;
    }

    height: 75px;
    span ::v-deep span {
      @include bp(desktop-large) {
        font-size: 16px;
      }
      @include bp(desktop-wide) {
        font-size: 18px;
      }

      font-size: 12px;
    }
  }
}
</style>

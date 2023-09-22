<template>
  <div class="note">
    <span v-if="icon" class="note__icon" role="presentation">
      <svg-icon :name="icon" class="note__icon-svg"></svg-icon>
    </span>
    <div class="note__text">
      <h3 v-if="header" v-html="header" class="note__text-header"></h3>
      <slot><p v-if="text" v-html="text"></p></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Note',
  props: {
    icon: {
      type: String,
      default: null
    },
    header: {
      type: String,
      default: null
    },
    text: {
      type: String,
      default: null
    }
  }
}
</script>

<style lang="scss" scoped>
.note {
  @include bp(tablet) {
    min-width: 200px;
    min-height: 50px;
  }
  @include bp(desktop-wide) {
    width: 100%;
  }

  display: flex;

  min-width: 300px;
  min-height: 70px;

  border-left: 2px solid $color__green;
  background-color: $color__white;
  box-shadow: 0 10px 25px 0 #a6adaf1a;

  align-items: center;
  justify-content: center;

  .note__icon {
    @include bp(tablet) {
      margin-right: 15px;
    }
    @include bp(desktop-wide) {
      margin-left: -15px;
    }

    display: flex;

    margin-right: 20px;

    color: $color__green;

    flex-shrink: 0;
  }
  .note__icon-svg {
    max-width: 30px;
    max-height: 30px;
  }
  .note__text-header {
    @include bp(tablet) {
      font-size: 18px;
    }
    @include bp(desktop-wide) {
      font-size: 22px;
      line-height: 1.36;
    }

    font-family: $font-family-second;
    font-size: 22px;
    font-weight: 300;
    line-height: 1;
  }
}
</style>

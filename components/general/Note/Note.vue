<template>
  <div class="note">
    <div v-if="name" class="note__name" v-html="name"></div>
    <p v-if="text" class="note__text" v-html="text"></p>
  </div>
</template>

<script>
export default {
  name: 'Note',
  props: {
    name: {
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
    display: flex;

    padding: 25px 40px;
  }

  padding: 15px 20px;

  border-left: solid 2px #007f39;
  background-color: #ffffff;
  box-shadow: 0 10px 25px 0 rgba(166, 173, 175, 0.1);

  align-items: center;

  .note__name {
    @include bp(tablet) {
      margin-right: 35px;
      margin-bottom: 0;
    }

    font-size: 24px;
    font-weight: 600;
    line-height: 1.04;

    margin-bottom: 20px;

    color: $color__green;
  }
  .note__text {
    margin: 0;
  }
}
</style>

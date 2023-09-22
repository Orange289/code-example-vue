<template>
  <ul class="stepList">
    <template v-for="(item, index) in items">
      <li
        :key="index"
        :class="[
          'stepList__item',
          'stepListItem',
          { 'stepListItem--note': item.note }
        ]"
      >
        <template v-if="item.note">
          <Note :name="item.title" :text="item.text"></Note>
        </template>
        <template v-else>
          <svg-icon
            v-if="item.icon"
            :name="item.icon"
            class="stepListItem__icon"
          ></svg-icon>
          <div class="stepListItem__desc">
            <div
              v-if="item.title"
              class="stepListItem__header"
              v-html="item.title"
            ></div>
            <p
              v-if="item.text"
              class="stepListItem__text"
              v-html="item.text"
            ></p>
          </div>
        </template>
      </li>
    </template>
  </ul>
</template>

<script>
import Note from '~/components/general/Note/Note.vue'

export default {
  name: 'StepItems',
  components: {
    Note
  },
  props: {
    items: {
      type: Array,
      default: null
    }
  }
}
</script>

<style lang="scss" scoped>
.stepList {
  margin: 0;
  padding: 0;

  list-style-type: none;

  justify-content: space-between;
  grid-template-columns: 35% 55%;

  @include bp(tablet) {
    display: grid;
  }

  .stepList__item {
    // @include bp(tablet) {
    //   flex: 0 1 calc(87.45% / 2);
    // }
    margin-bottom: 40px;
  }
}

.stepListItem {
  display: flex;

  .stepListItem__icon {
    max-width: 40px;
    max-height: 40px;
    margin-right: 20px;

    color: $color__green;

    flex-shrink: 0;
  }

  .stepListItem__header {
    font-family: $font-family-second;
    font-size: 24px;
    line-height: 1;
    font-weight: 500;

    margin-bottom: 11px;
  }

  .stepListItem__text {
    margin: 0;
  }

  &.stepListItem--note {
    grid-column: 1/3;
  }
}
</style>

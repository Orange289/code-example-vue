<template>
  <a class="event" :href="url">
    <xTile
      class="event__tile"
      :picUrl="picUrl"
      :picUrlLarge="picUrlLarge"
      :text="text"
      withGradient
    />
  </a>
</template>

<script>
import xTile from '../../general/xTile/xTile.vue'

export default {
  name: 'Event',
  components: {
    xTile
  },
  props: {
    url: {
      type: String,
      default: ''
    },
    picUrl: {
      type: String,
      default: ''
    },
    picUrlLarge: {
      type: String,
      default: ''
    },
    text: {
      type: String,
      default: ''
    }
  }
}
</script>

<style lang="postcss" scoped>
.event {
  display: block;

  &:hover,
  &:focus {
    text-decoration: none;
  }

  .event__tile {
    font-size: 14px;
    line-height: 16px;
    height: 144px;

    span {
      max-width: 280px;
    }
  }

  @media (--sm) {
    .event__tile {
      font-size: 15px;
      line-height: 20px;
      padding: 0 24px 16px;
      height: 136px;
    }
  }

  @media (--lg) {
    .event__tile {
      font-size: 18px;
      line-height: 22px;
      padding: 0 34px 16px;
      height: 160px;
    }
  }

  @media (--xl) {
    .event__tile {
      font-size: 24px;
      line-height: 32px;
      padding: 0 34px 20px;
      height: 216px;
    }
  }
}
</style>

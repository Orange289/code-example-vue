<template>
  <div
    :class="[
      'xTile',
      {
        'xTile--gradient': withGradient,
        'xTile--image': picUrl,
        'xTile--image-large': picUrlLarge
      }
    ]"
    :style="cssProps"
  >
    <!-- <img v-if="picUrl" :src="picUrl" alt="event pic" /> -->
    <span v-if="text">{{ text }}</span>
  </div>
</template>

<script>
export default {
  name: 'XTile',
  props: {
    picUrl: {
      type: String
    },
    picUrlLarge: {
      type: String
    },
    text: {
      type: String,
      default: null
    },
    withGradient: {
      type: Boolean,
      default: false
    },
    bgColor: {
      type: String,
      default: 'transparent'
    }
  },
  computed: {
    cssProps() {
      return {
        '--bg-color': this.bgColor,
        '--bg-img': this.picUrl,
        '--bg-img-large': this.picUrlLarge
      }
    }
  }
}
</script>

<style lang="postcss" scoped>
.xTile {
  color: #fff;
  font-size: 12px;
  line-height: 24px;
  font-weight: 600;
  min-width: 152px;
  min-height: 64px;
  padding: 0 16px 12px;
  border-radius: 4px;
  background: var(--bg-color);
  display: flex;
  position: relative;
  clip-path: var(--cutted-angle);

  span {
    align-self: flex-end;
  }
}

.xTile--image {
  background: var(--bg-img) top left no-repeat;
  background-size: cover;
}

.xTile--image-large {
  @media (--sm) {
    background: var(--bg-img-large) top left no-repeat;
  }
}

.xTile--gradient.xTile--image {
  background: linear-gradient(
      180deg,
      rgba(37, 44, 46, 0) 50%,
      var(--accent-0-color) 100%
    ),
    var(--bg-img) top left no-repeat;
  transition: color 0.3s;

  &:hover {
    color: rgba(255, 255, 255, 0.7);
  }
}

.xTile--gradient.xTile--image-large {
  @media (--sm) {
    background: linear-gradient(
        180deg,
        rgba(37, 44, 46, 0) 50%,
        var(--accent-0-color) 100%
      ),
      var(--bg-img-large) top center no-repeat;
  }
}
</style>

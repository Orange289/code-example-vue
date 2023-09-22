<template>
  <div v-if="review" ref="review" class="review">
    <blockquote class="review__text">{{ review }}</blockquote>
    <div v-if="fullname || position" class="person">
      <div v-if="imgSrc || imgSrcSet" class="person__photo">
        <img
          v-if="imgSrc"
          :src="`${imgSrc}?123`"
          :srcset="imgSrcSet"
          :alt="fullname"
        />
      </div>
      <div class="person__info">{{ fullname }}{{ positionText }}</div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    review: {
      type: String
    },
    fullname: {
      type: String
    },
    position: {
      type: String
    },
    imgSrc: {
      type: String
    },
    imgSrcSet: {
      type: String
    }
  },
  computed: {
    positionText() {
      return this.position ? `, ${this.position}` : ''
    }
  }
}
</script>

<style lang="postcss" scoped>
.review {
  cursor: pointer;
}

.review,
.review__text {
  padding-left: 24px;

  @media (--sm) {
    padding-left: 11px;
  }
  @media (--md) {
    padding-left: 19px;
  }
  @media (--lg) {
    padding-left: 33px;
  }
  @media (--xl) {
    padding-left: 39px;
  }
}

.review__text {
  font-weight: 500;
  font-size: inherit;
  line-height: inherit;
  display: inline-block;
  margin-bottom: 16px;
  margin-top: 0;

  &:before {
    content: '“';
  }
  &:after {
    content: '”';
  }
  border-left: 2px solid var(--primary-500-color);
  margin-left: -24px;

  @media (--sm) {
    margin-left: -11px;
  }
  @media (--md) {
    margin-left: -19px;
  }
  @media (--lg) {
    margin-bottom: 8px;
    margin-left: -33px;
  }
  @media (--xl) {
    margin-bottom: 24px;
    margin-left: -39px;
  }
}

.person {
  display: flex;
  align-items: center;
}

.person__photo {
  border-radius: 50%;
  margin-right: 16px;
  overflow: hidden;
  width: 40px;
  height: 40px;
  flex-shrink: 0;

  @media (--sm) {
    margin-right: 8px;
  }

  @media (--xl) {
    margin-right: 16px;
    width: 48px;
    height: 48px;
  }
  img {
    width: 100%;
  }
}

.person__info {
  font-style: italic;
  font-weight: 300;
}
</style>

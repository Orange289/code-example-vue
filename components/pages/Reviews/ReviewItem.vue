<template>
  <div
    v-if="review.text"
    class="review"
    itemprop="review"
    itemscope
    itemtype="http://schema.org/Review"
  >
    <span itemprop="itemReviewed" style="display: none">EXANTE</span>
    <span
      :content="review.date"
      v-if="review.date"
      itemprop="datePublished"
      style="display: none"
    >
      {{ review.date }}
    </span>
    <h3 v-if="review.title" itemprop="headline" class="review__title">
      {{ review.title }}
    </h3>
    <p
      v-if="review.text"
      v-html="review.text"
      itemprop="reviewBody"
      class="review__text"
    ></p>
    <b
      v-if="review.author"
      itemprop="author"
      itemscope=""
      itemtype="http://schema.org/Person"
      class="review__author"
    >
      <span itemprop="name"> {{ review.author }} </span>
    </b>

    <picturelazy
      v-if="review.avatar || review.image"
      :source="source(review)"
      alt="avatar"
      role="presentation"
      class="review__avatar"
    ></picturelazy>
  </div>
</template>

<script>
import picturelazy from '~/components/general/Lazy/PictureLazy.vue'

export default {
  name: 'Review',
  components: {
    picturelazy
  },
  props: {
    review: {
      type: Object,
      required: true
    }
  },
  methods: {
    source(review) {
      const picture = []
      if (review.avatar) {
        if (review.avatar_webp) {
          picture.push({
            srcset: review.avatar_webp
          })
        }
        picture.push({
          srcset: review.avatar
        })
      } else if (review.image) {
        if (review.image_webp) {
          picture.push({
            srcset: review.image_webp
          })
        }
        picture.push({
          srcset: review.image
        })
      }
      return picture
    }
  }
}
</script>

<style lang="scss">
.review {
  position: relative;

  margin-bottom: 70px;
  padding: 50px 50px 58px;

  text-align: center;

  background: $color__white;
  box-shadow: 0 10px 25px 0 rgba(166, 173, 175, 0.16);

  &:before {
    position: absolute;
    top: -20px;
    left: 45px;

    width: 28px;
    height: 67px;

    content: '';

    background: url('/static/images/reviews/quotes.svg');
    background-size: cover;
  }

  .review__title {
    font-family: $font-family-second;
    font-size: 22px;
    font-weight: 400;

    margin-top: 0;
    margin-bottom: 18px;
  }

  .review__text,
  .review__author {
    font-size: 18px;
  }

  .review__avatar {
    position: absolute;
    right: 0;
    bottom: -40px;
    left: 0;

    width: 80px;
    height: 80px;
    margin-right: auto;
    margin-left: auto;
  }
}
</style>

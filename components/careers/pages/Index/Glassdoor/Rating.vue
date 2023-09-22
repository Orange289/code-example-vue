<template>
  <div class="raiting">
    <div class="raiting__text">
      <h4>Don't just take our word for it.</h4>
      <p>
        Check out our rating and reviews on
        <a href="https://www.glassdoor.com/Reviews/Exante-Reviews-E498836.htm">
          Glassdoor</a
        >.
      </p>
      <div class="raiting__number">
        <img
          src="/static/images/careers/reviews/glassdore__rating.png"
          srcset="
            /static/images/careers/reviews/glassdore__rating.png,
            /static/images/careers/reviews/glassdore__rating.2x.png 2x
          "
          alt="glassdoor"
        />
      </div>
    </div>
    <img
      class="raiting__glassdoor"
      src="/static/images/careers/reviews/glassdoor.svg"
      alt="glassdoor"
    />
  </div>
</template>

<style lang="postcss" scoped>
.raiting {
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  @media (--sm) {
    flex-direction: row;
    justify-content: space-between;
  }

  h4 {
    font-weight: 600;
    font-size: 16px;
    line-height: 20px;
    margin: 0 0 4px;

    @media (--sm) {
      font-size: 20px;
      margin: 0 0 16px;
    }
    @media (--md) {
      margin: 0 0 28px;
    }
    @media (--xl) {
      font-size: 24px;
    }
  }
  p {
    font-weight: 400;
    font-size: inherit;
    line-height: inherit;
    margin: 0;
    margin-bottom: 16px;

    @media (--sm) {
      margin-bottom: 12px;
    }
    @media (--md) {
      margin-bottom: 22px;
    }
    @media (--xl) {
      margin-bottom: 24px;
    }
  }
  a {
    text-decoration: underline;

    &:hover,
    &:focus {
      text-decoration: none;
    }
  }
}
.raiting__text {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
.raiting__glassdoor {
  order: -1;
  margin-bottom: 20px;
  @media (--sm) {
    order: initial;
    margin-left: 20px;
    margin-bottom: 0;
  }
}

.raiting__number {
  font-size: 0;
  line-height: 0;
}
</style>

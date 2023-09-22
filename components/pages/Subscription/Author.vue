<template>
  <section class="author">
    <Container>
      <div class="author__content">
        <h2>Meet the author</h2>
        <div class="author__meta">
          <strong>Renée Friedman, PhD</strong>
          <span>Editor-in-Chief at EXANTE</span>
        </div>
        <p>
          Economist with 20+ years experience in both public policyand private
          financial market sector roles.<br /><br />
          Experienced speaker and moderator including for Responsible Investor,
          The Economist Group, BNE Intellinews, IHS Global Insight, the United
          Nations, and the World Bank. Appearances on CNBC and other media.
        </p>
      </div>
    </Container>
  </section>
</template>

<script>
import Container from '~/components/general/Container.vue'

export default {
  name: 'Author',
  components: {
    Container
  }
}
</script>

<style lang="scss" scoped>
.author {
  color: #ffffff;
  background-image: url('/static/images/subscription/author-bg-mobile.jpg');
  background-size: cover;
  background-position: bottom;
  padding: 60px 0 320px;

  h2 {
    font-family: $font-family-second;
    color: #ffffff;
    font-weight: 300;
    font-size: 32px;
    line-height: 35px;
    margin-top: 0;
    margin-bottom: 20px;

    @include bp(desktop-large) {
      font-size: 58px;
      line-height: 70px;
      margin-bottom: 25px;
    }
  }

  p {
    font-weight: 300;
    font-size: 18px;
    line-height: 25px;
    @include bp(desktop-large) {
      font-size: 22px;
      line-height: 30px;
      max-width: 560px;
    }
  }

  @include bp(tablet-small) {
    padding: 60px 0 420px;
  }

  @include bp(desktop-large) {
    padding: 100px 0 114px;
    background-image: url('/static/images/subscription/author-bg-desktop-2.jpg');
  }
}

.author__meta {
  margin-bottom: 25px;
  strong {
    display: block;
    font-family: $font-family-second;
    font-size: 25px;
    line-height: 30px;
    margin-bottom: 10px;

    @include bp(desktop-large) {
      font-size: 36px;
    }
  }

  span {
    font-family: $font-family-second;
    font-weight: 300;
    font-size: 18px;
    line-height: 20px;
    opacity: 0.5;

    @include bp(desktop-large) {
      font-size: 22px;
    }
  }

  @include bp(desktop-large) {
    margin-bottom: 32px;
  }
}

.author__content {
  @include bp(desktop-large) {
    width: 50%;
    margin-left: auto;
    max-width: 710px;
  }
}
</style>

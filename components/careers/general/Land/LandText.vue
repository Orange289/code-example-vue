<template>
  <div class="land__text">
    <h3>Land your future job!</h3>
    <p>
      We need everyone: from product owners and marketing gurus to developers
      and salespeople. You might not be able to tell apart your options from
      futures, but you have to be the king of your craft. Don’t hesitate — make
      a change in your career right now!
    </p>
    <a href="/jobs">Browse Job Openings</a>
  </div>
</template>

<script>
export default {
  name: 'LandText'
}
</script>

<style lang="postcss" scoped>
.land__text {
  margin-bottom: 56px;

  h3 {
    font-size: 24px;
    line-height: 1.3;
    margin-bottom: 16px;

    @media (--md) {
      font-size: 32px;
    }
    @media (--lg) {
      font-size: 36px;
    }
    @media (--xl) {
      font-size: 48px;
    }
  }

  p {
    margin-bottom: 24px;

    @media (--sm) {
      font-size: 15px;
    }
    @media (--md) {
      margin-bottom: 17px;
    }
    @media (--lg) {
      max-width: 464px;
    }
    @media (--xl) {
      font-size: 18px;
      max-width: 560px;
    }
  }

  a {
    color: var(--primary-500-color);
    font-weight: 600;

    &:after {
      content: '';
      display: inline-block;
      width: 8px;
      height: 8px;
      border-bottom: 2px solid var(--primary-500-color);
      border-right: 2px solid var(--primary-500-color);
      transform: rotate(-45deg);
      margin-left: 12px;

      @media (--sm) {
        margin-left: 30px;
      }
      @media (--md) {
        margin-left: 11px;
      }
    }

    @media (--sm) {
      font-size: 16px;
    }
  }

  @media (--lg) {
    margin-top: 77px;
  }
  @media (--xl) {
    margin-top: 176px;
  }
}
</style>

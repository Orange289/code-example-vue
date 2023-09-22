<template>
  <div class="awards">
    <Container class="awards__container">
      <div class="awards__items">
        <template v-for="(item, index) in orderedAwards">
          <a
            :key="index"
            :href="item.url"
            :class="`award award--${removeNumbers(index)}`"
            v-if="item.url"
            target="_blank"
          >
            <div class="award__olives">
              <div class="award__wrap">
                <div
                  :class="`award__logo award__logo--${removeNumbers(index)}`"
                >
                  <img
                    :src="`/static/images/partner/${removeNumbers(index)}.png`"
                    :alt="removeNumbers(index)"
                  />
                </div>
                <div class="award__year">{{ item.year }}</div>
              </div>
            </div>
            <div v-html="item.name" class="award__name"></div>
          </a>
          <div
            :key="index"
            :class="`award award--${removeNumbers(index)}`"
            v-else
          >
            <div class="award__olives">
              <div class="award__wrap">
                <div
                  :class="`award__logo award__logo--${removeNumbers(index)}`"
                >
                  <img
                    :src="`/static/images/partner/${removeNumbers(index)}.png`"
                    :alt="removeNumbers(index)"
                  />
                </div>
                <div class="award__year">{{ item.year }}</div>
              </div>
            </div>
            <div v-html="item.name" class="award__name"></div>
          </div>
        </template>
      </div>
    </Container>
  </div>
</template>

<script>
import Container from '~/components/general/Container.vue'

export default {
  name: 'Awards',
  components: {
    Container
  },
  computed: {
    orderedAwards() {
      const data = this.$t('exante.pages.partner.awards')
      const sorted = {}
      Object.keys(data)
        .sort(function(a, b) {
          return data[a].year - data[b].year
        })
        .forEach(function(key) {
          sorted[key] = data[key]
        })
      return sorted
    }
  },
  methods: {
    removeNumbers(string) {
      if (typeof string !== 'string') string = string.toString()
      return string.replace(/[0-9]/g, '')
    }
  }
}
</script>

<style lang="scss" scoped>
.awards {
  @include bp(tablet) {
    padding-top: 26px;
    padding-bottom: 26px;
  }
  @include bp(desktop-large) {
    padding-top: 40px;
  }
  @include bp(desktop-wide) {
    padding-top: 50px;
    padding-bottom: 36px;
  }

  position: relative;
  z-index: 1;

  padding-top: 40px;
  padding-bottom: 30px;

  color: $color__white;
  background-color: #4b30d7;

  .awards__items {
    @include bp(mobile) {
      flex-direction: row;

      margin-right: -20px;

      flex-wrap: wrap;
      justify-content: center;
      align-items: flex-start;
    }
    @include bp(tablet) {
      margin-bottom: -40px;
    }
    @include bp(desktop) {
      margin-right: -40px;
    }
    @include bp(desktop-large) {
      margin-bottom: 0;

      justify-content: space-between;
      flex-wrap: nowrap;
    }

    display: flex;
    flex-direction: column;

    justify-content: center;
    align-items: center;
  }
}

.award {
  @include bp(mobile) {
    margin-right: 20px;
  }
  @include bp(tablet) {
    max-width: 200px;
    margin-bottom: 40px;
  }
  @include bp(desktop) {
    max-width: 240px;
    margin-right: 40px;
  }
  @include bp(desktop-large) {
    margin-bottom: 0;
  }

  position: relative;

  max-width: 186px;
  margin-bottom: 60px;

  color: #fff;

  .award__olives {
    display: flex;

    text-align: center;

    &::before,
    &::after {
      width: 40px;
      height: 75px;

      content: '';

      background-image: url('/static/images/partner/olive-left.svg');
      background-repeat: no-repeat;
      background-size: cover;

      flex-shrink: 0;
      align-self: flex-start;
    }

    &::after {
      transform: rotateY(180deg);
    }
  }

  .award__wrap {
    display: flex;

    margin-bottom: -20px;

    flex-wrap: wrap;
    justify-content: center;
    align-items: flex-end;
  }

  .award__logo {
    flex-grow: 1;
  }

  .award__year {
    font-size: 24px;
    font-weight: 400;
    line-height: 1;

    width: 100%;
  }

  .award__name {
    @include bp(desktop-large) {
      font-size: 16px;
    }

    font-size: 14px;
    font-weight: 400;
    line-height: 1.25;

    width: 100%;
    margin-top: 20px;

    text-align: center;
  }

  &.award--finance {
    .award__wrap {
      margin-right: -14px;
      margin-left: -14px;
    }
  }

  &.award--finance,
  &.award--global,
  &.award--pbs,
  &.award--adviser {
    img {
      @include bp(desktop-wide) {
        width: 120px;
      }

      width: 100px;
    }
  }

  &.award--year,
  &.award--iiaw {
    img {
      @include bp(desktop-wide) {
        width: 80px;
      }

      width: 60px;
    }
  }
}

a.award,
button.award {
  &:after {
    @include bp(tablet) {
      position: absolute;
      bottom: -10px;
      left: 50%;

      display: block;

      width: 40px;
      height: 2px;

      content: '';
      transition: opacity 0.3s ease;
      transform: translateX(-50%);

      opacity: 0;
      background-color: #fff;
    }
  }

  &:hover,
  &:focus {
    text-decoration: none;

    color: #fff;

    &:after {
      @include bp(tablet) {
        opacity: 1;
      }
    }
  }
}
</style>

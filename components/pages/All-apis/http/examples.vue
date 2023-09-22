<template>
  <div class="examples">
    <Container class="examples__container">
      <div class="examples__items">
        <section
          :id="$t(`${itemsKey}.${key}.link`, 'en').substr(1)"
          v-for="(item, key, index) in $t(itemsKey)"
          :key="key + index"
          class="example"
        >
          <div
            v-animate.repeat.fade="
              index % 2 === 0 ? 'slide-left' : 'slide-right'
            "
            class="example__wrap"
          >
            <h2
              v-if="$te(`${itemsKey}.${key}.title`)"
              v-html="$t(`${itemsKey}.${key}.title`)"
              class="example__header"
            ></h2>
            <p
              v-if="$te(`${itemsKey}.${key}.desc`)"
              v-html="$t(`${itemsKey}.${key}.desc`)"
              class="example__text"
            ></p>
          </div>
          <div
            v-animate.repeat.fade="
              index % 2 === 0 ? 'slide-right' : 'slide-left'
            "
            v-if="$te(`${itemsKey}.${key}.img`)"
            class="example__img-wrap"
          >
            <imagelazy
              :lazySrc="$t(`${itemsKey}.${key}.img`, 'en')"
              :alt="
                $te(`${itemsKey}.${key}.title`)
                  ? $t(`${itemsKey}.${key}.title`)
                  : ''
              "
              class="example__img"
              role="presentation"
            />
          </div>
        </section>
      </div>
    </Container>
  </div>
</template>

<script>
import Container from '~/components/general/Container.vue'
import imagelazy from '~/components/general/Lazy/ImageLazy.vue'

export default {
  name: 'HttpApiExamples',
  components: {
    Container,
    imagelazy
  },
  data() {
    return {
      itemsKey: 'exante.pages.apis.items.http-api.examples'
    }
  }
}
</script>

<style lang="scss" scoped>
.examples {
  padding: 110px 0 0;
}
.example {
  @include bp(tablet) {
    display: flex;

    justify-content: space-between;
    scroll-margin-top: 120px;
  }

  margin-bottom: 100px;

  scroll-margin-top: 60px;

  .example__wrap {
    @include bp(tablet) {
      display: flex;
      flex-direction: column;

      max-width: calc(50% - 50px);

      justify-content: center;
    }

    width: 100%;
  }

  .example__img-wrap {
    @include bp(tablet) {
      max-width: calc(50% - 100px);
    }

    width: 100%;
  }

  .example__header {
    @include h1;
    @include header-underline;
  }

  .example__text {
    ::v-deep a {
      text-decoration: underline;

      &:hover,
      &:focus {
        text-decoration: none;
      }
    }
  }

  &:nth-child(2n) {
    @include bp(tablet) {
      flex-direction: row-reverse;
    }
  }
  &:last-child {
    margin-bottom: 70px;
  }
}
</style>

<template>
  <section class="news" v-if="items.length > 0">
    <Container>
      <h2>
        Dig deeper into the news and get informed analysis that could benefit
        your trading
      </h2>
      <ul class="news__list">
        <li v-for="(item, index) in items" :key="index">
          <a :href="item.url">
            <div class="news__itempic">
              <img
                v-if="item.pic"
                loading="lazy"
                :src="item.pic"
                :alt="item.title"
              />
            </div>

            <div class="news__date">{{ item.date }}</div>
            <strong>{{ item.title }}</strong>
          </a>
        </li>
      </ul>
    </Container>
  </section>
</template>

<script>
import Container from '~/components/general/Container.vue'

export default {
  name: 'News',
  components: {
    Container
  },
  data() {
    return {
      items: [
        // {
        //   pic: 'new-2.jpg',
        //   url: '',
        //   date: '21.07.2023',
        //   title: 'Will they or won’t they?'
        // },
        // {
        //   pic: 'new-3.jpg',
        //   url: '',
        //   date: '21.07.2023',
        //   title: 'The Exchange module is now live on EXANTE'
        // },
        // {
        //   pic: 'new-4.jpg',
        //   url: '',
        //   date: '21.07.2023',
        //   title: 'Inaugural EXANTEN €10,000 Winner announced'
        // },
        // {
        //   pic: 'new-5.jpg',
        //   url: '',
        //   date: '21.07.2023',
        //   title: 'EXANTE Macro Insights'
        // }
      ]
    }
  },
  created() {
    // eslint-disable-next-line nuxt/no-globals-in-created
    if (process.browser && typeof window !== 'undefined' && window.news) {
      // eslint-disable-next-line nuxt/no-globals-in-created
      this.items = window.news.slice(1)
    }
  }
}
</script>

<style lang="scss" scoped>
.news {
  background: #f5f5f5;
  padding: 60px 0 70px;

  h2 {
    font-size: 32px;
    line-height: 35px;
    text-align: center;
    margin-bottom: 40px;

    @include bp(desktop-large) {
      font-size: 58px;
      line-height: 70px;
      margin-bottom: 40px;
    }
  }

  @include bp(desktop-large) {
    padding: 100px 0 110px;
  }
}

.news__list {
  list-style: none;
  padding: 0;
  margin: 0;

  a {
    text-decoration: none;
    display: block;
    position: relative;

    @include bp(desktop-large) {
      width: 280px;

      &:hover {
        img {
          transform: scale(1.1);
        }

        strong {
          text-decoration: underline;
        }
      }
    }

    @include bp(desktop-wide) {
      width: 380px;
    }
  }

  .news__itempic {
    width: 100%;
    margin-bottom: 15px;

    @include bp(desktop-large) {
      height: 185px;
      overflow: hidden;
    }

    @include bp(desktop-wide) {
      height: 210px;
    }
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;

    @include bp(desktop-large) {
      transition: transform 0.3s;
    }
  }

  strong {
    font-size: 18px;
    line-height: 25px;
    font-family: $font-family-second;
    color: #000000;

    @include bp(desktop-large) {
      font-size: 22px;
      line-height: 30px;
    }
  }

  li {
    margin-bottom: 20px;
  }

  @include bp(desktop-large) {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    gap: 20px;
  }
}

.news__date {
  font-size: 16px;
  line-height: 30px;
  color: #000000;
  opacity: 0.3;
  margin-bottom: 5px;
}
</style>

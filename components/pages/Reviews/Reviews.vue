<template>
  <DefaultLayout>
    <div class="reviews">
      <UnderHeader>
        <Container class="reviews__container">
          <Breadcrumbs />
          <h1 v-if="reviews_new_header" class="reviews__header">
            {{ $t('exante.pages.reviews.header_new') }}
          </h1>
          <client-only>
            <masonry
              :cols="{ default: 3, 1024: 2, 768: 1 }"
              :gutter="50"
              class="reviews__list"
            >
              <Review
                v-for="item in reviews_new"
                :key="item.id"
                :review="item"
              />
            </masonry>
          </client-only>
          <h2 v-if="reviews_all_header" class="reviews__header">
            {{ $t('exante.pages.reviews.header_all') }}
          </h2>
          <client-only>
            <masonry
              :cols="{ default: 3, 1024: 2, 768: 1 }"
              :gutter="50"
              class="reviews__list"
            >
              <Review
                v-for="item in reviews_all"
                :key="item.id"
                :review="item"
              />
            </masonry>
          </client-only>
          <SiteButton
            v-if="reviews_all_header && !hide_more"
            :href="texts.more_link_start + offset"
            class="reviews__more"
            @click.native.prevent="fetchReviews"
          >
            {{ $t('exante.pages.reviews.show_more') }}
          </SiteButton>
        </Container>
      </UnderHeader>
    </div>
  </DefaultLayout>
</template>

<script>
/* eslint-disable nuxt/no-globals-in-created */
import Review from './ReviewItem'
import DefaultLayout from '~/components/layouts/default.vue'
import Container from '~/components/general/Container.vue'
import Breadcrumbs from '~/components/general/Breadcrumbs/Breadcrumbs'
import SiteButton from '~/components/general/SiteButton/SiteButton.vue'
import UnderHeader from '~/components/general/UnderHeader/UnderHeader.vue'

export default {
  name: 'Reviews',
  components: {
    DefaultLayout,
    UnderHeader,
    Review,
    Container,
    Breadcrumbs,
    SiteButton
  },
  data() {
    return {
      offset: 9,
      defaultOffset: 9,
      more_link_start: '/reviews/list/?offset=',
      more_link_start_json: '/reviews/list_json/?offset=',
      reviews_new: [],
      reviews_all: [],
      hide_more: true
      // reviews_new: [
      //   {
      //     id: 1,
      //     title: 'Есть ли fix-income в Exante….',
      //     text:
      //       'Вопрос к знатокам: есть в терминале экзанте что-то типа fxmm для нашего рынка, но номинированное в долларах?<br><br>Цель проста: разместить остаток средств на счете до конца этого года под надеждный фикс процент. Что посоветуете? Стоит ли связываться с нашими евробондами?',
      //     author: 'Anton Rybak',
      //     avatar: '/static/images/reviews/ava-1.png'
      //   },
      //   {
      //     id: 2,
      //     title: 'Новая компания. Помогите плз.',
      //     text:
      //       'Всем привет! Ребята, кто что знает о конторе «exante» ? Инетовским комментам как то не верится. Компания новая, всего 6 лет… Хотелось бы узнать мнение СмартЛаба (ему как-то больше доверяю)<br><br>В чем вопрос? Мой брокер (Украина) «перепрыгнул» на эту компанию. Платформа мульти, торгуй всё, и Америку и Россию и все на свете-это напрягает если честно!',
      //     author: 'Sergey K',
      //     avatar: '/static/images/reviews/ava-1.png'
      //   },
      //   {
      //     id: 3,
      //     title: 'Всем добрый вечер!',
      //     text:
      //       'Сперва первый брокер «СвитИнвест» для предоставления торговли на FORTS начали использовать брокера Exante (вход от 400уе). Причем, как-то странно. Закрыть сделку нельзя, только выставление встречной заявки. И стоп-лосс тоже выставить нельзя, так же через встречные заявки. Объясняют это тем, что Exante на Московской бирже не предоставляет такой возможности, а на других мировых рынках все хорошо.',
      //     author: 'Sergey Pavlov ',
      //     avatar: '/static/images/reviews/ava-1.png'
      //   },
      //   {
      //     id: 4,
      //     title: 'Exante атакует!!!',
      //     text:
      //       'Однако если вы хотите договориться о встрече в офисе с нашими менеджерами, то сейчас это возможно только в Москве (если говорить о России). Наш питерский офис занимается исключительно IT-разработкой. ',
      //     author: 'Екатерина Наумова',
      //     avatar: '/static/images/reviews/ava-1.png'
      //   },
      //   {
      //     id: 5,
      //     title: 'Добрый день.',
      //     text:
      //       'Искал брокера с кем работать, остановился на украинской компании «Универ». Торговый терминал quik — все хорошо, все устраивало.Но вот настало время, многие брокеры, которые давали выход на FORTS, перестали его давать. Остались пару брокеров, которые стойко держались, но вот и сними приключилось нечто. ',
      //     author: 'Тимофей Мартынов',
      //     avatar: '/static/images/reviews/ava-1.png'
      //   },
      //   {
      //     id: 6,
      //     title: 'Saxo or IB or Exante',
      //     text:
      //       'Мой вопрос достаточно прост. Какой брокер лучше по надежности: Саксо банк (кипр отделение) или Интерактив брокер (тяжело зарегистрировать счет, терминал вообще непонятный, могут и заморозить счет /борьба с отмывом денег/) или того хуже Экзанте (это вообще юмор).',
      //     author: 'Sergey Pavlov ',
      //     avatar: '/static/images/reviews/ava-1.png'
      //   },
      //   {
      //     id: 7,
      //     title: 'Exante атакует!!!',
      //     text:
      //       'Однако если вы хотите договориться о встрече в офисе с нашими менеджерами, то сейчас это возможно только в Москве (если говорить о России). Наш питерский офис занимается исключительно IT-разработкой. ',
      //     author: 'Екатерина Наумова',
      //     avatar: '/static/images/reviews/ava-1.png'
      //   },
      //   {
      //     id: 8,
      //     title: 'Добрый день.',
      //     text:
      //       'Искал брокера с кем работать, остановился на украинской компании «Универ». Торговый терминал quik — все хорошо, все устраивало.Но вот настало время, многие брокеры, которые давали выход на FORTS, перестали его давать. Остались пару брокеров, которые стойко держались, но вот и сними приключилось нечто. ',
      //     author: 'Тимофей Мартынов',
      //     avatar: '/static/images/reviews/ava-1.png'
      //   },
      //   {
      //     id: 9,
      //     title: 'Saxo or IB or Exante',
      //     text:
      //       'Мой вопрос достаточно прост. Какой брокер лучше по надежности: Саксо банк (кипр отделение) или Интерактив брокер (тяжело зарегистрировать счет, терминал вообще непонятный, могут и заморозить счет /борьба с отмывом денег/) или того хуже Экзанте (это вообще юмор).',
      //     author: 'Sergey Pavlov ',
      //     avatar: '/static/images/reviews/ava-1.png'
      //   }
      // ],
      // reviews_all: [
      //   {
      //     id: 1,
      //     title: 'Есть ли fix-income в Exante….',
      //     text:
      //       'Вопрос к знатокам: есть в терминале экзанте что-то типа fxmm для нашего рынка, но номинированное в долларах?<br><br>Цель проста: разместить остаток средств на счете до конца этого года под надеждный фикс процент. Что посоветуете? Стоит ли связываться с нашими евробондами?',
      //     author: 'Anton Rybak',
      //     avatar: '/static/images/reviews/ava-1.png'
      //   },
      //   {
      //     id: 2,
      //     title: 'Новая компания. Помогите плз.',
      //     text:
      //       'Всем привет! Ребята, кто что знает о конторе «exante» ? Инетовским комментам как то не верится. Компания новая, всего 6 лет… Хотелось бы узнать мнение СмартЛаба (ему как-то больше доверяю)<br><br>В чем вопрос? Мой брокер (Украина) «перепрыгнул» на эту компанию. Платформа мульти, торгуй всё, и Америку и Россию и все на свете-это напрягает если честно!',
      //     author: 'Sergey K',
      //     avatar: '/static/images/reviews/ava-1.png'
      //   },
      //   {
      //     id: 3,
      //     title: 'Всем добрый вечер!',
      //     text:
      //       'Сперва первый брокер «СвитИнвест» для предоставления торговли на FORTS начали использовать брокера Exante (вход от 400уе). Причем, как-то странно. Закрыть сделку нельзя, только выставление встречной заявки. И стоп-лосс тоже выставить нельзя, так же через встречные заявки. Объясняют это тем, что Exante на Московской бирже не предоставляет такой возможности, а на других мировых рынках все хорошо.',
      //     author: 'Sergey Pavlov ',
      //     avatar: '/static/images/reviews/ava-1.png'
      //   },
      //   {
      //     id: 4,
      //     title: 'Exante атакует!!!',
      //     text:
      //       'Однако если вы хотите договориться о встрече в офисе с нашими менеджерами, то сейчас это возможно только в Москве (если говорить о России). Наш питерский офис занимается исключительно IT-разработкой. ',
      //     author: 'Екатерина Наумова',
      //     avatar: '/static/images/reviews/ava-1.png'
      //   },
      //   {
      //     id: 5,
      //     title: 'Добрый день.',
      //     text:
      //       'Искал брокера с кем работать, остановился на украинской компании «Универ». Торговый терминал quik — все хорошо, все устраивало.Но вот настало время, многие брокеры, которые давали выход на FORTS, перестали его давать. Остались пару брокеров, которые стойко держались, но вот и сними приключилось нечто. ',
      //     author: 'Тимофей Мартынов',
      //     avatar: '/static/images/reviews/ava-1.png'
      //   },
      //   {
      //     id: 6,
      //     title: 'Saxo or IB or Exante',
      //     text:
      //       'Мой вопрос достаточно прост. Какой брокер лучше по надежности: Саксо банк (кипр отделение) или Интерактив брокер (тяжело зарегистрировать счет, терминал вообще непонятный, могут и заморозить счет /борьба с отмывом денег/) или того хуже Экзанте (это вообще юмор).',
      //     author: 'Sergey Pavlov ',
      //     avatar: '/static/images/reviews/ava-1.png'
      //   },
      //   {
      //     id: 7,
      //     title: 'Exante атакует!!!',
      //     text:
      //       'Однако если вы хотите договориться о встрече в офисе с нашими менеджерами, то сейчас это возможно только в Москве (если говорить о России). Наш питерский офис занимается исключительно IT-разработкой. ',
      //     author: 'Екатерина Наумова',
      //     avatar: '/static/images/reviews/ava-1.png'
      //   },
      //   {
      //     id: 8,
      //     title: 'Добрый день.',
      //     text:
      //       'Искал брокера с кем работать, остановился на украинской компании «Универ». Торговый терминал quik — все хорошо, все устраивало.Но вот настало время, многие брокеры, которые давали выход на FORTS, перестали его давать. Остались пару брокеров, которые стойко держались, но вот и сними приключилось нечто. ',
      //     author: 'Тимофей Мартынов',
      //     avatar: '/static/images/reviews/ava-1.png'
      //   },
      //   {
      //     id: 9,
      //     title: 'Saxo or IB or Exante',
      //     text:
      //       'Мой вопрос достаточно прост. Какой брокер лучше по надежности: Саксо банк (кипр отделение) или Интерактив брокер (тяжело зарегистрировать счет, терминал вообще непонятный, могут и заморозить счет /борьба с отмывом денег/) или того хуже Экзанте (это вообще юмор).',
      //     author: 'Sergey Pavlov ',
      //     avatar: '/static/images/reviews/ava-1.png'
      //   }
      // ]
    }
  },
  computed: {
    reviews_new_header() {
      return process.browser ? this.reviews_new.length > 0 : true
    },
    reviews_all_header() {
      return process.browser ? this.reviews_all.length > 0 : true
    }
  },
  created() {
    this.$route.meta.currentPageName = this.$t('exante.pages.reviews.page_name')

    if (process.browser && typeof window !== 'undefined') {
      if (window.reviews_new) {
        this.reviews_new = window.reviews_new
      }
      if (window.reviews_all) {
        this.reviews_all = window.reviews_all.reviews

        if (window.reviews_all.has_next) {
          this.hide_more = false
        }
      }
    }

    this.offset = this.offset + this.defaultOffset
    this.$forceUpdate()
  },
  methods: {
    async fetchReviews() {
      try {
        this.$axios.setBaseURL('/')
        const response = await this.$axios.$get(
          this.more_link_start_json + this.offset
        )
        if (response.reviews.length > 0) {
          this.reviews_all = this.reviews_all.concat(response.reviews)
          this.offset = this.offset + this.defaultOffset
          if (!response.has_next) {
            this.hide_more = true
          }
        } else {
          this.hide_more = true
        }
      } catch (error) {
        if (error.response && error.response.status === 404) {
          // eslint-disable-next-line no-console
          console.error(`404 on fetch ${this.more_link_start_json}`, error)
        } else {
          // eslint-disable-next-line no-console
          console.error(error)
        }
      }
    }
  }
}
</script>

<style lang="scss">
.reviews {
  padding-top: 40px;
  padding-bottom: 40px;

  background: $color__gray--lightest;

  .reviews__container {
    display: flex;
    flex-direction: column;
  }

  ::v-deep .breadcrumbs {
    color: #4e5d60;

    a {
      color: $color__green;
    }
  }

  ::v-deep .breadcrumbs__route:after {
    color: #4e5d60;
  }

  .reviews__header {
    @include header-underline();
    @include bp(desktop-wide) {
      margin-top: 30px;
      margin-bottom: 60px;
    }

    margin-top: 20px;
    margin-bottom: 40px;

    transition: color 0.3s ease-in-out;

    color: inherit;
  }

  .reviews__more {
    align-self: center;
  }
}
</style>

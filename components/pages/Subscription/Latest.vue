<template>
  <section class="latest" v-if="last_new">
    <Container class="latest__container">
      <h2>Check out the latest newsletter</h2>
      <div class="latest__columns">
        <div class="latest__content">
          <h3>{{ last_new.title }}</h3>
          <div class="latest__meta">
            {{ last_new.date }}
          </div>
          <img
            v-if="last_new.pic"
            loading="lazy"
            :src="last_new.pic"
            class="latest__pic"
            :alt="last_new.title"
          />
          <div class="latest__text">
            <div class="latest__new" v-html="last_new.content"></div>
          </div>
          <!-- <div class="latest__socials" v-if="socials.length > 0">
            <div class="latest__share">
              <strong>Share this article</strong>
              <ul>
                <li v-for="(item, index) in socials" :key="index">
                  <a :href="item.url" target="_blank">
                    <img
                      :src="`/static/images/subscription/${item.pic}.png`"
                      :alt="item.pic"
                    />
                  </a>
                </li>
              </ul>
            </div>
            <div class="latest__share">
              <strong>Watch our YouTube</strong>
              <a :href="youtube_link" target="_blank">
                <img
                  src="/static/images/subscription/youtube-icon.png"
                  alt="youtube icon"
                />
              </a>
            </div>
          </div> -->
        </div>
        <div class="latest__action">
          <div class="latest__actioncontent">
            <p v-show="showActionText">
              Look beyond the headlines and discover what’s moving and shaping
              the markets
            </p>
            <SiteButton
              dataStyleType="fgreen"
              class="latest__btn"
              @click.native="toChoose"
              >Join us</SiteButton
            >
          </div>
          <button
            type="button"
            class="latest__arrow"
            @click="showActionText = !showActionText"
          >
            <!-- <img
            width="15"
            height="15"
            src="/static/images/subscription/arrow-down.svg"
            alt="arrow bottom"
          /> -->
          </button>
        </div>
      </div>
    </Container>
  </section>
</template>

<script>
import Container from '~/components/general/Container.vue'
import SiteButton from '~/components/general/SiteButton/SiteButton.vue'

export default {
  name: 'Latest',
  components: {
    Container,
    SiteButton
  },
  data() {
    return {
      last_new: false,
      // {
      // title: 'Is the dollar finally falling?',
      // date: '13 July 2023',
      // time: '14:00',
      // pic: '/static/images/subscription/new-1.jpg',
      // content:
      //   '<h3>Corporate Earnings News</h3><strong>Corporate earning calendar 13 July - 20 July 2023</strong><p>EXANTE congratulates the Malta Chamber of Commerce, Enterprise and Industry on its 175th anniversary of representing, connecting and supporting businesses of all sizes and in all industries.<br><br>To commemorate the event, the Chamber organized a dinner on 17 March hosted by H.E. Dr George Vella, President of Malta. Honorable attendees included Dr Roberta Metsola, President of the European Parliament, as well as Maltese government and opposition representatives.</p><p>Kerstin Ancilleri, EXANTE&apos;s Regional Head of Sales in Greece and Malta, represented the company at this spectacular event.<br><br>The Malta Chamber of Commerce, Enterprise and Industry is the independent voice of the private sector in Malta. Its principal mission is to actively represent companies from all economic sectors and ensure that entrepreneurs enjoy the best competitive environment and regulatory conditions possible for the conduct of business. Learn more at https://www.maltachamber.org.mt/.</p><strong>Corporate earning calendar 13 July - 20 July 2023</strong><p>EXANTE congratulates the Malta Chamber of Commerce, Enterprise and Industry on its 175th anniversary of representing, connecting and supporting businesses of all sizes and in all industries.<br><br>To commemorate the event, the Chamber organized a dinner on 17 March hosted by H.E. Dr George Vella, President of Malta. Honorable attendees included Dr Roberta Metsola, President of the European Parliament, as well as Maltese government and opposition representatives.</p><p>Kerstin Ancilleri, EXANTE&apos;s Regional Head of Sales in Greece and Malta, represented the company at this spectacular event.<br><br>The Malta Chamber of Commerce, Enterprise and Industry is the independent voice of the private sector in Malta. Its principal mission is to actively represent companies from all economic sectors and ensure that entrepreneurs enjoy the best competitive environment and regulatory conditions possible for the conduct of business. Learn more at https://www.maltachamber.org.mt/.</p>'
      // },
      // socials: [
      // {
      //   pic: 'facebook-icon',
      //   url:
      //     'https://www.facebook.com/sharer/sharer.php?u=https%3A//exante.eu/subscription/'
      // },
      // {
      //   pic: 'linkedin-icon',
      //   url:
      //     'https://www.linkedin.com/shareArticle?mini=true&url=https%3A//exante.eu/subscription/'
      // },
      // {
      //   pic: 'twitter-icon',
      //   url:
      //     'https://twitter.com/intent/tweet?text=https%3A//exante.eu/subscription/'
      // },
      // {
      //   pic: 'email-icon',
      //   url:
      //     'mailto:?subject=Your%20Subject&body=Check%20out%20this%20link:%20https%3A%2F%2Fwww.example.com'
      // }
      // ],
      // youtube_link: 'https://www.youtube.com/@EXANTE_Global',
      showActionText: true
    }
  },
  created() {
    // eslint-disable-next-line nuxt/no-globals-in-created
    if (process.browser && typeof window !== 'undefined' && window.news) {
      // eslint-disable-next-line nuxt/no-globals-in-created
      this.last_new = window.news[0]
      this.$forceUpdate()
    }
  },
  methods: {
    toChoose() {
      document.querySelector('#choose').scrollIntoView({ behavior: 'smooth' })
    }
  }
}
</script>

<style lang="scss" scoped>
.latest {
  padding: 70px 0;

  h2 {
    font-size: 32px;
    line-height: 35px;
    margin-top: 0;
    margin-bottom: 25px;

    @include bp(desktop-large) {
      font-size: 58px;
      line-height: 72px;
      margin-bottom: 46px;
    }
  }

  h3 {
    font-size: 28px;
    line-height: 30px;
    font-weight: 300;
    font-family: $font-family-second;
    margin-bottom: 25px;

    @include bp(desktop-large) {
      font-size: 48px;
      line-height: 1;
      margin-bottom: 20px;
    }
  }

  @include bp(desktop-large) {
    padding: 100px 0;
  }
}

.latest__meta {
  color: #4e5d60;
  font-size: 16px;
  font-weight: 300;
  line-height: 20px;
  margin-bottom: 25px;

  @include bp(desktop-large) {
    margin-bottom: 20px;
  }
}

.latest__content {
  ::v-deep h3 {
    font-weight: 300;
    font-family: $font-family-second;
    font-size: 25px;
    line-height: 30px;
    margin-bottom: 30px;

    @include bp(desktop-large) {
      font-size: 36px;
      line-height: 50px;
    }
  }

  ::v-deep strong {
    font-size: 18px;
    line-height: 25px;
    margin-bottom: 30px;

    @include bp(desktop-large) {
      font-size: 22px;
      margin-bottom: 22px;
    }
  }

  ::v-deep p {
    font-size: 18px;
    line-height: 25px;
    font-weight: 300;

    @include bp(desktop-large) {
      font-size: 22px;
      line-height: 30px;
    }
  }

  @include bp(desktop-large) {
    width: 800px;
  }

  @include bp(desktop-wide) {
    width: 1000px;
  }
}

.latest__text {
  padding-bottom: 33px;
  margin-bottom: 25px;

  position: relative;

  &:after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 40px;
    height: 2px;
    background: $color__green;
  }
}

.latest__pic {
  @include bp(0 desktop-large) {
    margin-left: -40px;
    margin-right: -40px;
    width: calc(100% + 80px);
    max-width: calc(100% + 80px);
  }
}

.latest__socials {
  @include bp(desktop-large) {
    display: flex;
  }
}

.latest__share {
  margin-bottom: 16px;

  strong {
    display: block;
    font-size: 22px;
    margin-bottom: 12px;
  }

  ul {
    display: flex;
    list-style: none;
    margin: 0;
    padding: 0;
  }

  li {
    margin-right: 20px;
  }

  a {
    display: block;
    width: 30px;
    height: 30px;
  }

  &:nth-child(2) {
    display: flex;

    strong {
      margin-right: 10px;
    }
  }

  @include bp(desktop-large) {
    display: flex;
    margin-right: 54px;

    strong {
      margin-right: 10px;
    }
  }
}

.latest__action {
  // position: fixed;
  position: sticky;
  bottom: 0;
  width: calc(100% + 80px);
  margin-left: -40px;
  margin-right: -40px;
  padding: 25px 55px 25px 80px;
  background: #ffffff;
  box-shadow: 8px 6px 26px 0px rgba(0, 0, 0, 0.05);
  display: flex;

  p {
    font-family: $font-family-second;
    font-size: 18px;
    font-weight: 400;
    line-height: 20px;

    @include bp(desktop-large) {
      display: block !important;
      margin: 0;
      margin-bottom: 20px;
      font-size: 24px;
      line-height: 1.25;
    }

    // @include bp(desktop-wide) {
    //   font-size: 28px;
    //   line-height: 35px;
    // }
  }

  @include bp(desktop-large) {
    top: 120px;
    bottom: auto;
    width: 350px;
    height: 270px;
    margin: 0;
    padding: 50px;
  }

  @include bp(desktop-wide) {
    width: 500px;
  }
}

.latest__container {
  position: static;
}

.latest__btn {
  width: 100%;

  ::v-deep button {
    height: 50px;
  }

  @include bp(desktop-large) {
    width: 154px;
  }
}

.latest__actioncontent {
  flex: 1;
}

.latest__arrow {
  border: none;
  background: none;
  width: 23px;
  height: 17px;
  background: url('/static/images/subscription/arrow-down.svg');
  background-size: contain;
  background-repeat: no-repeat;
  margin-left: 4px;

  @include bp(desktop-large) {
    display: none;
  }
}

.latest__columns {
  @include bp(desktop-large) {
    display: flex;
    justify-content: space-between;
  }
}

.latest__new {
  word-wrap: break-word;
}
</style>

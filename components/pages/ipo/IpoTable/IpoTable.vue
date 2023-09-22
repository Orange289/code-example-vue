<template>
  <div v-if="items.length > 0" class="IpoTable">
    <Container class="IpoTable__container">
      <div class="IpoTable__table-wrap">
        <table>
          <!-- <colgroup>
            <col
              :class="['IpoTable__col', `IpoTable__col--${header.split(' ')[0]}`]"
              v-for="header in $t('exante.pages.ipo.table.headers', 'en')"
            />
          </colgroup> -->
          <thead>
            <tr>
              <template v-for="header in $t('exante.pages.ipo.table.headers')">
                <th :key="header" v-html="header"></th>
              </template>
            </tr>
          </thead>
          <tbody>
            <IpoTableTr
              v-for="(company, index) in items"
              :company="company"
              :key="company.name + index"
            ></IpoTableTr>
          </tbody>
        </table>
      </div>
      <button
        v-if="!hide_more"
        @click="fetchIpos"
        v-html="$t('exante.pages.ipo.table.show_more')"
        class="IpoTable__show"
        type="button"
      ></button>
    </Container>
  </div>
</template>

<script>
import IpoTableTr from './IpoTableTr.vue'
import Container from '~/components/general/Container.vue'

export default {
  name: 'IpoTable',
  components: {
    Container,
    IpoTableTr
  },
  data() {
    return {
      items: [],
      next_link: '/site-apis/ipo/?format=json',
      hide_more: true
    }
  },
  created() {
    if (process.browser) {
      this.fetchIpos()
    }
  },
  methods: {
    async fetchIpos() {
      try {
        this.$axios.setBaseURL('/')
        const response = await this.$axios.$get(this.next_link)

        if (response.results) {
          this.items = this.items.concat(response.results)
          this.next_link = response.next

          this.hide_more = !this.next_link
        } else {
          this.hide_more = true
        }
      } catch (error) {
        if (error.response && error.response.status === 404) {
          // eslint-disable-next-line no-console
          console.error(`404 on fetch ${this.next_link}`, error)
        } else {
          // eslint-disable-next-line no-console
          console.error(error)
        }
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.IpoTable {
  .IpoTable__container {
    @include bp(0 desktop) {
      overflow-x: auto;
    }
  }

  .IpoTable__table-wrap {
    @include bp(0 desktop) {
      min-width: 800px;
      padding-right: 40px;
    }
    @include bp(tablet) {
      margin-bottom: 75px;
    }

    margin-bottom: 50px;
  }

  table {
    width: 100%;

    border-collapse: collapse;
  }
  th {
    font-size: 16px;
    font-weight: 300;
    line-height: 1.13;

    padding: 12px 0;

    text-align: left;
    vertical-align: bottom;

    color: rgb(166, 173, 175);
  }

  tbody ::v-deep tr {
    border-bottom: solid 1px rgb(210, 214, 215);
    &:first-child {
      border-top: solid 1px rgb(210, 214, 215);
    }

    td {
      padding: 30px 0;

      &:first-child {
        @include bp(tablet) {
          padding-left: 10px;
        }
      }
      &:last-child {
        padding-right: 10px;
      }
    }
  }
  .IpoTable__show {
    @include bp(tablet) {
      margin-bottom: 105px;
    }

    font-family: $font-family-second;

    margin-bottom: 55px;

    color: var(--colors-primary);
    border: 0 none;
    background: none;
  }
}
</style>

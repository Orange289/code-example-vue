<template>
  <div v-if="items.length > 0" class="IpoTable">
    <Container>
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
  @include bp(0 tablet) {
    /* Force table to not be like tables anymore */
    table,
    thead,
    tbody,
    th,
    td,
    tr {
      display: block;
    }

    /* Hide table headers (but not display: none;, for accessibility) */
    thead tr {
      position: absolute;
      top: -9999px;
      left: -9999px;
    }

    // tbody tr td {
    //   span {
    //     width: 100%;
    //     max-width: 50%;
    //     height: 100%;
    //     padding: 15px 0 15px 10px;
    //   }
    // }
  }

  padding-bottom: 105px;

  table {
    width: 100%;
    margin-bottom: 75px;

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
    @include bp(tablet) {
      border-bottom: solid 1px rgb(210, 214, 215);
    }
    &:nth-of-type(odd) {
      @include bp(0 tablet) {
        background-color: var(--colors-primary-400);
      }
    }
    &:first-child {
      @include bp(tablet) {
        border-top: solid 1px rgb(210, 214, 215);
      }
    }
    &:last-child {
      td {
        &:last-child {
          @include bp(0 tablet) {
            border-bottom: solid 1px rgb(210, 214, 215);
          }
        }
      }
    }

    td {
      @include bp(0 tablet) {
        position: relative;

        display: flex;

        padding: 0;

        border: 1px solid rgb(210, 214, 215);
        border-bottom-width: 0;
      }

      padding: 30px 0;

      &:first-child {
        @include bp(tablet) {
          padding-left: 10px;
        }
      }
      &:last-child {
        @include bp(tablet) {
          padding-right: 10px;
        }
      }
    }
  }
  .IpoTable__show {
    font-family: $font-family-second;

    color: var(--colors-primary);
    border: 0 none;
    background: none;
  }

  // .IpoTable__col {
  //   &.IpoTable__col--company {
  //     max-width: 250px;
  //   }
  // }
}
</style>

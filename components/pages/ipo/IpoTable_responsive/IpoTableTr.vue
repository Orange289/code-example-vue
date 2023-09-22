<template>
  <tr
    :class="['IpoTable-row', { 'IpoTable-row--opened': company.is_open }]"
    :key="company.name"
  >
    <template
      v-for="(headerVal, headerKey) in $t(
        'exante.pages.ipo.table.headers',
        'en'
      )"
    >
      <template v-for="(fieldVal, fieldName, index) in companyFiltered">
        <template
          v-if="
            headerKey == fieldName &&
              fieldName in $t('exante.pages.ipo.table.headers', 'en')
          "
        >
          <td
            :key="fieldName + fieldVal + index"
            :class="[
              'IpoTable-row__col',
              `IpoTable-row__col--${fieldName}`,
              { 'IpoTable-row__col--na': !fieldVal }
            ]"
          >
            <span
              v-html="$t(`exante.pages.ipo.table.headers.${fieldName}`)"
              class="IpoTable-row__colname"
            ></span>
            <span
              v-if="fieldVal && headerKey.includes('date')"
              v-html="new Date(fieldVal).toLocaleDateString()"
            ></span>
            <span v-else-if="fieldVal" v-html="fieldVal"></span>
            <span v-else v-html="$t(`exante.pages.ipo.table.status.na`)"></span>
          </td>
        </template>

        <template v-else-if="headerKey == 'company' && fieldName == 'name'">
          <td
            :key="fieldName + fieldVal + index"
            :class="['IpoTable-row__col', `IpoTable-row__col--company`]"
          >
            <span
              v-html="$t(`exante.pages.ipo.table.headers.company`)"
              class="IpoTable-row__colname"
            ></span>
            <span class="IpoTable-row__image">
              <template v-if="company.image_webp">
                <div class="IpoTable-row__image-wrap">
                  <img :src="company.image_webp" :alt="company.name" />
                </div>
              </template>
              <template v-else-if="company.image">
                <div class="IpoTable-row__image-wrap">
                  <img :src="company.image" :alt="company.name" />
                </div>
              </template>
              <template v-else>
                {{ company.name }}
              </template>
              <Tooltip
                v-if="company.sdesc"
                :text="company.sdesc"
                class="IpoTable-row__tooltip"
              ></Tooltip>
            </span>
          </td>
        </template>
      </template>
    </template>
  </tr>
</template>

<script>
import Tooltip from '~/components/general/tooltip/tooltip.vue'

export default {
  name: 'IpoTableTr',
  components: {
    Tooltip
  },
  props: {
    company: {
      type: Object,
      required: true
    }
  },
  computed: {
    companyFiltered() {
      const companyFiltered = { ...this.company }

      // if (companyFiltered.image_webp) {
      //   companyFiltered.company = companyFiltered.image_webp
      // } else if (companyFiltered.image) {
      //   companyFiltered.company = companyFiltered.image
      // } else {
      //   companyFiltered.company = companyFiltered.name
      // }

      companyFiltered.status = companyFiltered.is_open
        ? this.$t('exante.pages.ipo.table.status.open')
        : this.$t('exante.pages.ipo.table.status.closed')
      delete companyFiltered.is_open

      return companyFiltered
    }
  }
}
</script>

<style lang="scss" scoped>
.IpoTable-row {
  &.IpoTable-row--opened {
    .IpoTable-row__col {
      &.IpoTable-row__col--status,
      &.IpoTable-row__col--price {
        color: var(--colors-primary);
      }
    }
  }

  .IpoTable-row__col {
    @include bp(0 tablet) {
      // display: block;
    }
    span {
      @include bp(0 tablet) {
        width: 100%;
        max-width: 50%;
        padding: 15px 10px;
      }
    }

    &.IpoTable-row__col--symbol,
    &.IpoTable-row__col--status,
    &.IpoTable-row__col--price {
      font-weight: 400;
    }
    &.IpoTable-row__col--symbol {
      text-transform: uppercase;
    }
    &.IpoTable-row__col--status {
      text-transform: capitalize;
    }

    &.IpoTable-row__col--company {
      @include bp(tablet) {
        width: 250px;
        //   text-align: left;
      }

      ::v-deep img {
        width: 100%;
        max-width: 125px;
        max-height: 50px;
      }
    }
    &.IpoTable-row__col--na {
      color: rgb(166, 173, 175);
    }
  }

  .IpoTable-row__image {
    @include bp(tablet) {
      flex-wrap: nowrap;
    }

    display: inline-flex;

    align-items: center;
    flex-wrap: wrap;
  }
  .IpoTable-row__image-wrap {
    font-size: 0;

    display: inline-block;

    text-align: center;
  }

  .IpoTable-row__tooltip {
    @include bp(0 tablet) {
      display: flex;
      flex-direction: column;

      width: 100%;
      margin-top: 10px;
      margin-bottom: 10px;
      margin-left: 0;

      align-items: flex-start;

      ::v-deep .tooltip__content {
        top: auto;
        left: auto;

        width: 100%;

        transform: none;
        &::after {
          left: -5px;

          transform: rotate(135deg) translateY(-65%);
        }
      }
    }

    margin-left: 50px;
  }

  .IpoTable-row__colname {
    @include bp(tablet) {
      display: none;
    }

    display: inline-block;

    border-right: 1px solid rgb(210, 214, 215);
  }
}
</style>

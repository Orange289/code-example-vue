<template>
  <BaseBlock
    :header="$t('exante.pages.whitelabel.core.header')"
    :text="$t('exante.pages.whitelabel.core.text')"
    :list="$t('exante.pages.whitelabel.core.list')"
    class="core"
  >
    <div class="core__schema schema">
      <template
        v-for="(block, cell) in $t(`exante.pages.whitelabel.core.items`)"
      >
        <div
          v-for="(item, icon) in $t(
            `exante.pages.whitelabel.core.items.${cell}`
          )"
          :key="icon"
          :class="[
            'schema__item',
            `schema__item--column${cell[0]}`,
            `schema__item--row${cell[1]}`,
            {
              'schema__item--subtext': $te(
                `exante.pages.whitelabel.core.items.${cell}.${icon}.subtext`
              )
            }
          ]"
          v-animate.repeat.fade
        >
          <Note
            :icon="icon"
            :header="
              $t(`exante.pages.whitelabel.core.items.${cell}.${icon}.header`)
            "
            class="schema__item-note"
          >
          </Note>
          <div
            v-if="
              $te(`exante.pages.whitelabel.core.items.${cell}.${icon}.subtext`)
            "
            class="schema__item-subtext"
          >
            {{
              $t(`exante.pages.whitelabel.core.items.${cell}.${icon}.subtext`)
            }}
          </div>
        </div>
      </template>

      <div
        v-for="(line, index) in lines"
        :key="index"
        v-animate.repeat.fade="`slide-${line.slide}`"
        :class="[
          'schema__line',
          'schema__item',
          `schema__item--row${line.row}`,
          `schema__item--column${line.column}`
        ]"
        role="presentation"
      ></div>

      <div
        v-animate.repeat.fade
        class="schema__button schema__item schema__item--row6 schema__item--column2"
      >
        <WlpOpenAccButt> </WlpOpenAccButt>
      </div>
    </div>
    <div v-animate.repeat.fade class="core__mobile-button-wrap">
      <WlpOpenAccButt> </WlpOpenAccButt>
    </div>
  </BaseBlock>
</template>

<script>
import WlpOpenAccButt from '~/components/pages/whitelabel/general/WlpOpenAccButt.vue'
import BaseBlock from '~/components/pages/whitelabel/general/BaseBlock.vue'
import Note from '~/components/pages/whitelabel/general/Note.vue'

export default {
  name: 'Core',
  components: { BaseBlock, Note, WlpOpenAccButt },
  data() {
    return {
      lines: [
        {
          slide: 'up',
          row: '1',
          column: '0'
        },
        {
          slide: 'right',
          row: '2',
          column: '1'
        },
        {
          slide: 'up',
          row: '3',
          column: '2'
        },
        {
          slide: 'up',
          row: '3-5',
          column: '0'
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
.core {
  @include bp(0 tablet) {
    padding-bottom: 60px;
  }
  @include bp(tablet desktop-large) {
    padding-top: 60px;
    padding-bottom: 80px;
  }
  @include bp(desktop-large desktop-wide) {
    min-height: 650px;
    padding-top: 55px;
    padding-bottom: 80px;
  }

  overflow: hidden;

  background-color: #f7f8fb;

  ::v-deep .base-wlpblock__container {
    @include bp(desktop-large desktop-wide) {
      grid-template-columns: 46% auto 46%;
    }
    @include bp(desktop-wide) {
      grid-template-columns: 47% auto 47%;
    }
  }

  ::v-deep .base-wlpblock__header.whitelabel__header {
    @include bp(0 tablet) {
      margin-bottom: 15px;
    }
    @include bp(tablet) {
      margin-bottom: 28px;
      padding-bottom: 12px;
    }
    @include bp(desktop-large) {
      padding-bottom: 16px;
    }
    @include bp(desktop-wide) {
      margin-bottom: 38px;
      padding-bottom: 32px;
    }
  }

  &.base-wlpblock ::v-deep .list {
    @include bp(0 tablet) {
      margin-bottom: 23px;
    }
    .list__item {
      @include bp(0 tablet) {
        margin-bottom: 4px;
      }
      @include bp(tablet) {
        margin-bottom: 6px;
      }
      @include bp(desktop-large) {
        margin-bottom: 13px;
      }
    }
    .list__icon-wrap {
      @include bp(0 tablet) {
        margin-right: 12px;
      }
      @include bp(tablet) {
        margin-right: 10px;
      }
      @include bp(desktop-large) {
        margin-right: 25px;
      }
    }
  }

  ::v-deep .base-wlpblock__text {
    @include bp(0 tablet) {
      margin-bottom: 16px;
    }
    @include bp(tablet desktop-large) {
      max-width: 85%;
    }
    @include bp(desktop-large) {
      margin-bottom: 36px;
    }
    @include bp(desktop-wide) {
      margin-bottom: 55px;
    }
  }

  .core__schema {
    @include bp(0 tablet) {
      display: none;
    }
    @include bp(desktop-wide) {
      margin-top: 10px;
    }
  }
  .core__mobile-button-wrap {
    @include bp(tablet) {
      display: none;
    }
  }
}

.schema {
  @include bp(tablet) {
    display: grid;

    margin-top: 6.5%;

    grid-template-columns: minmax(45%, 200px) minmax(10%, 50px) minmax(
        40%,
        200px
      );
    grid-template-rows: 50px 100px 50px 100px 50px 50px auto;
  }
  @include bp(desktop-large) {
    margin-top: 4.5%;

    grid-template-columns: minmax(36%, 200px) minmax(28%, 150px) minmax(
        35%,
        200px
      );
  }
  @include bp(desktop-wide) {
    margin-top: 0;

    grid-template-columns: minmax(40%, 300px) minmax(20%, 150px) minmax(
        40%,
        300px
      );
    grid-template-rows: 70px 100px 70px 100px 70px 80px auto;
  }

  .schema__item {
    z-index: 1;
    &.schema__item--column0 {
      grid-column: 1;
    }
    &.schema__item--column1 {
      grid-column: 2;
    }
    &.schema__item--column2 {
      grid-column: 3;
    }
    &.schema__item--row0 {
      grid-row: 1;
    }
    &.schema__item--row1 {
      grid-row: 2;
    }
    &.schema__item--row2 {
      grid-row: 3;
    }
    &.schema__item--row3 {
      grid-row: 4;
    }
    &.schema__item--row4 {
      grid-row: 5;
    }
    &.schema__item--row6 {
      grid-row: 7;
    }
    &.schema__item--row3-5 {
      grid-row: 4/7;
    }

    &.schema__item--subtext {
      @include bp(tablet) {
        font-size: 18px;
      }
      @include bp(desktop-wide) {
        font-size: 22px;
        line-height: 1.36;
      }

      display: flex;
      flex-direction: column;

      align-items: center;

      .schema__item-note {
        @include bp(tablet) {
          margin-bottom: 6px;
        }
        @include bp(desktop-wide) {
          margin-bottom: 10px;
        }

        margin-bottom: 15px;
      }
    }
  }

  .schema__line {
    z-index: 0;

    width: 2px;
    height: 100%;

    background: linear-gradient(
      to top,
      rgba($color__green, 0.3),
      rgba(242, 248, 242, 0)
    );

    align-self: center;
    justify-self: center;

    &.schema__item--column1 {
      width: 100%;
      height: 2px;

      background: linear-gradient(
        to left,
        rgba($color__green, 0.3),
        rgba(242, 248, 242, 0)
      );
    }
  }

  .schema__button {
    @include bp(tablet) {
      display: none;
    }

    margin-top: 9px;

    align-self: flex-start;
  }
}
</style>

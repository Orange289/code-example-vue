<template>
  <div class="stepCode">
    <div
      v-for="(item, index) in code.items"
      :key="index"
      :class="[
        'stepCode__block',
        'codeBlock',
        { 'codeBlock--noexample': !item.example },
        { 'codeBlock--noresponse': !item.response }
      ]"
    >
      <div
        v-if="item.pre_header"
        v-html="item.pre_header"
        class="codeBlock__desc"
      ></div>
      <h3 v-html="item.header" class="codeBlock__header"></h3>
      <div v-if="item.desc" v-html="item.desc" class="codeBlock__desc"></div>
      <div class="codeblock__wrap">
        <div
          v-if="item.example"
          class="codeblock__item codeblock__item--example codeItem codeItem--example"
        >
          <h4
            v-if="code.example"
            v-html="code.example"
            class="codeItem__header"
          ></h4>
          <Highlight
            :code="item.example"
            lang="bash"
            class="codeItem__block"
          ></Highlight>
        </div>
        <div
          v-if="item.response"
          class="codeblock__item codeblock__item--response codeItem codeItem--response"
        >
          <h4
            v-html="code.response || item.response__header"
            class="codeItem__header"
          ></h4>
          <Highlight
            :code="item.response"
            lang="json"
            class="codeItem__block"
          ></Highlight>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Highlight from '~/components/general/Highlight/Highlight.vue'

export default {
  name: 'StepCode',
  components: { Highlight },
  props: {
    code: {
      type: Object,
      default: null
    }
  }
}
</script>

<style lang="scss" scoped>
.codeBlock {
  .codeBlock__desc {
    margin-bottom: 35px;
  }

  .codeBlock__header {
    font-family: $font-family-second;
    font-size: 24px;
    font-weight: 500;

    margin: 0 0 16px;
  }

  .codeblock__wrap {
    @include bp(tablet) {
      flex-wrap: nowrap;
    }

    display: flex;

    flex-wrap: wrap;
  }

  .codeblock__item {
    width: 100%;

    &.codeblock__item--example {
      @include bp(tablet) {
        max-width: 46.43%;
        padding-right: 4%;
      }
    }
    &.codeblock__item--response {
      @include bp(tablet) {
        max-width: 53.57%;
      }
    }
  }

  &.codeBlock--noexample {
    .codeblock__item.codeblock__item--response {
      @include bp(tablet) {
        max-width: 100%;
      }
    }
  }
  &.codeBlock--noresponse {
    .codeblock__item.codeblock__item--example {
      @include bp(tablet) {
        max-width: 100%;
      }
    }
  }
}
.stepCode {
  .stepCode__block {
    @include bp(tablet) {
      margin-bottom: 40px;
    }

    margin-top: 20px;
    margin-bottom: 20px;
  }
}
.codeItem {
  .codeItem__header {
    @include bp(tablet) {
      margin: 0 0 28px;
      padding-top: 50px;
    }

    font-family: $font-family-second;
    font-size: 22px;

    margin: 0 0 14px;
    padding-top: 20px;

    text-transform: uppercase;
  }
  .codeItem__block {
    font-size: 18px;
    line-height: 1.67;

    display: inline-block;

    ::v-deep code {
      white-space: break-spaces;
      word-break: break-all;

      color: #4e5d60;
      background-color: #f2f8f2;
    }
  }

  &.codeItem--response {
    background-color: #f3f5f5;

    .codeItem__header {
      @include bp(tablet) {
        padding: 50px 50px 0;
      }

      padding: 20px 20px 0;
    }
    .codeItem__block {
      display: block;

      margin-top: 0;

      ::v-deep code {
        @include bp(tablet) {
          padding: 0 50px 45px;
        }

        padding: 0 20px 20px;

        background-color: inherit;
      }
    }
  }

  ::v-deep .hljs {
    .hljs-string {
      color: #46a26f;
    }
    .hljs-number {
      color: #9b4040;
    }
    .hljs-literal {
      color: #a6adaf;
    }
  }
}
</style>

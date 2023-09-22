<template>
  <Integrate
    :steps="steps"
    :header="$t('exante.pages.apis.items.http-api.integrate.header')"
    :text="$t('exante.pages.apis.items.http-api.integrate.text')"
    :full-doc-text="
      $t('exante.pages.apis.items.http-api.integrate.full_doc_text')
    "
    :full-doc-link="
      $t('exante.pages.apis.items.http-api.integrate.full_doc_link')
    "
  >
  </Integrate>
</template>

<script>
import Integrate from '../../Integrate.vue'

export default {
  name: 'HTTPAPIIntegrate',
  // components: { Integrate },
  components: { Integrate },
  // meta: {
  //   page: this.$t('exante.pages.apis.items.http-api.integrate.header')
  // },
  data() {
    return {
      stepsInitial: this.$t('exante.pages.apis.items.http-api.integrate.steps')
    }
  },
  computed: {
    steps() {
      // it is here, because it does not need translation
      const newSteps = this.stepsInitial
      if (!newSteps) return []
      if (newSteps[1]) {
        newSteps[1].content.code.items[0].example =
          "curl -u application_id:application_access_key \n'https://api-demo.exante.eu/md/3.0/symbols/AAPL.NASDAQ'"
        newSteps[1].content.code.items[0].response =
          '{\n  "optionData": null,\n  "i18n": {},\n  "name": "Apple",\n  "symbolId": "AAPL.NASDAQ",\n  "description": "Apple Inc. - Common Stock",\n  "country": "US",\n  "exchange": "NASDAQ",\n  "symbolType": "STOCK",\n  "minPriceIncrement": \'0.01\',\n  "ticker": "AAPL",\n  "expiration": null,\n  "group": null\n}'

        newSteps[1].content.code.items[1].example =
          "curl -u application_id:application_access_key —header \n'Accept: application/x-json-stream' \n'https://api-demo.exante.eu/md/3.0/feed/AAPL.NASDAQ'"
        newSteps[1].content.code.items[1].response =
          '{\n  "timestamp": 1598267680756,\n  "symbolId": "AAPL.NASDAQ",\n  "bid": {\n    "price": \'512.25\',\n    "size": \'100.0\'\n  },\n  "ask": {\n    "price": \'512.38\',\n    "size": \'100.0\'\n  }\n}'

        newSteps[1].content.code.items[2].example =
          "curl -u application_id:application_access_key\n'https://api-demo.exante.eu/md/3.0/ohlc/AAPL.NASDAQ/600?from=151597949342000&to=1597952942000&size=2'"
        newSteps[1].content.code.items[2].response =
          '[\n  {\n    "timestamp":1598269800000,\n    "open":\'512.995\',\n    "low":\'512.745\',\n    "close":\'513.21\',\n    "high":\'513.3\'\n  },\n  {\n    "timestamp":1598269200000,\n    "open":\'512.095\',\n    "low":\'511.695\',\n    "close":\'512.945\',\n    "high":\'512.975\'\n  }\n]'

        newSteps[1].content.code.items[3].example =
          'curl -X POST -u application_id:application_access_key \n-H \'Content-Type: application/json\' \n-d \'{"symbolId": "AAPL.NASDAQ", "orderType": "market", "side": "buy", "quantity": "6","duration": "day", "accountId": "RAT9106.001"}\' \n\'https://api-demo.exante.eu/trade/3.0/orders\''
        newSteps[1].content.code.items[3].response =
          '[{\n  "placeTime":"2020-08-24T14:29:34.931Z",\n  "username":"example@example.com",\n  "orderId":"ef605b8b-4d27-4aba-b2b3-deb6fefe9835",\n  "orderState": {\n    "status":"placing",\n    "lastUpdate":"2020-08-24T14:29:34.931Z",\n    "fills":[]\n  },\n  "accountId":"RAT9106.001",\n  "orderParameters": {\n    "side":"buy",\n    "duration":"day",\n    "quantity":\'6\',\n    "symbolId":"AAPL.NASDAQ",\n    "ocoGroup":null,\n    "ifDoneParentId":null,\n    "orderType":"market"\n  },\n  "currentModificationId":"ef605b8b-4d27-4aba-b2b3-deb6fefe9835"\n}]'

        newSteps[1].content.code.items[4].example =
          "curl -u application_id:application_access_key \n'https://api-demo.exante.eu/md/3.0/summary/RAT9106.001/2020-08-24/EUR'"
        newSteps[1].content.code.items[4].response =
          '{\n  "currencies": [\n    {\n      "code":"EUR",\n      "convertedValue":\'100000.0\',\n      "price":\'100000.0\'\n    },\n    {\n      "code":"USD",\n      "convertedValue":\'-3909.18\',\n      "price":\'-4621.8\'\n    }\n  ],\n  "timestamp":1598279283000,\n  "freeMoney":\'99087.48\',\n  "netAssetValue":\'99925.3\',\n  "accountId":"RAT9106.001",\n  "moneyUsedForMargin":\'837.82\',\n  "marginUtilization":\'0.01\',\n  "positions": [\n    {\n      "convertedPnl":\'-74.55\',\n      "quantity":\'9\',\n      "pnl":\'-88.14\',\n      "symbolId":"AAPL.NASDAQ",\n      "convertedValue":\'3834.47\',\n      "price":\'503.72\',\n      "symbolType":"STOCK",\n      "currency":"USD",\n      "averagePrice":\'513.5133\',\n      "value":\'4533.48\'\n    },\n    {\n      "convertedPnl":\'0.0\',\n      "quantity":\'0\',\n      "pnl":\'0.0\',\n      "symbolId":"ULVR.LSE",\n      "convertedValue":\'0.0\',\n      "price":\'45.83\',\n      "symbolType":"STOCK",\n      "currency":"GBP",\n      "averagePrice":null,\n      "value":\'0.0\'\n      }\n  ],\n  "sessionDate":[2020,8,24],\n  "currency":"EUR"\n}'
      }

      return newSteps
    }
  },
  created() {
    this.$route.meta.currentPageName = this.$t(
      'exante.pages.apis.items.http-api.integrate.header'
    )
  }
}
</script>

<style lang="scss" scoped>
@keyframes blink {
  0% {
    opacity: 1;
  }
  50% {
    opacity: 0;
  }
  100% {
    copacity: 1;
  }
}

.httpapiIntegrate {
  .httpapiIntegrate__header {
    @include h1;
    @include header-underline;
  }

  .httpapiIntegrate__liveapi {
    @include bp(desktop) {
      min-width: 200px;
    }

    position: relative;
    &:after {
      position: absolute;
      top: -4px;
      right: 20px;

      display: block;

      width: 10px;
      height: 10px;

      content: '';
      animation-name: blink;
      animation-duration: 3s;
      animation-timing-function: linear;
      animation-iteration-count: infinite;

      border-radius: 50%;
      background-color: #03bf56;
    }
  }
}
</style>

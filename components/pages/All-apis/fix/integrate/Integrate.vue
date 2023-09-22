<template>
  <Integrate
    :steps="steps"
    :header="$t('exante.pages.apis.items.fix-api.integrate.header')"
    :text="$t('exante.pages.apis.items.fix-api.integrate.text')"
    :full-doc-text="
      $t('exante.pages.apis.items.fix-api.integrate.full_doc_text')
    "
    full-doc-link="specification/"
  >
  </Integrate>
</template>

<script>
import Integrate from '../../Integrate.vue'

export default {
  name: 'FIXAPIIntegrate',
  components: { Integrate },
  data() {
    return {
      stepsInitial: this.$t('exante.pages.apis.items.fix-api.integrate.steps')
    }
  },
  computed: {
    steps() {
      // it is here, because it does not need translation
      const newSteps = this.stepsInitial
      if (!newSteps) return []
      if (newSteps[1]) {
        newSteps[1].content.code.items[0].example =
          '8=FIX.4.4|9=111|35=A|49=RAT9106_FEED_UAT|56=EXANTE_FEED_UAT|34=1|52=20200824-09:38:57|98=0|554=*PASSWORD*|141=Y|108=30|10=000|'
        newSteps[1].content.code.items[1].example =
          '8=FIX.4.4|9=92|35=A|34=1|49=EXANTE_FEED_UAT|52=20200824-09:38:57.866|56=RAT9106_FEED_UAT|98=0|108=30|141=Y|10=056|'
        newSteps[1].content.code.items[2].example =
          '8=FIX.4.4|9=164|35=V|49=RAT9106_FEED_UAT|56=EXANTE_FEED_UAT|34=83|52=20200824-10:19:33|262=689266410|263=1|264=1|265=0|267=2|269=0|269=1|146=1|55=AAPL.NASDAQ|48=AAPL.NASDAQ|22=111|10=041|'
        newSteps[1].content.code.items[3].example =
          '8=FIX.4.4|9=162|35=W|34=82|49=EXANTE_FEED_UAT|52=20200824-10:19:33.295|56=RAT9106_FEED_UAT|55=AAPL.NASDAQ|262=689266410|268=2|269=0|270=506.8|271=300.0|269=1|270=507.5|271=200.0|10=040|'
      }
      if (newSteps[2]) {
        newSteps[2].content.code.items[0].example =
          '8=FIX.4.4|9=170|35=D|49=RAT9106_TRADE_UAT|56=EXANTE_TRADE_UAT|34=388|52=20200824-13:33:51|11=689266417|21=1|55=AAPL.NASDAQ|48=AAPL.NASDAQ|54=1|60=20200824-13:33:51|38=1|40=1|59=0|22=111|10=180|'
        newSteps[2].content.code.items[1].example =
          '8=FIX.4.4|9=272|35=8|34=389|49=EXANTE_TRADE_UAT|52=20200824-13:33:51.698|56=RAT9106_TRADE_UAT|1=RAT9106.001|6=0.000|11=689266417|14=0|17=be0fc76e-9f01-3780-80fa-fa75cafe26fe|22=111|37=be7eefff-e1b2-4676-988c-716e79f892ba|38=1|39=A|40=1|48=AAPL.NASDAQ|54=1|55=AAPL.NASDAQ|59=0|150=A|151=1|10=076|\n8=FIX.4.4|9=272|35=8|34=390|49=EXANTE_TRADE_UAT|52=20200824-13:33:51.741|56=RAT9106_TRADE_UAT|1=RAT9106.001|6=0.000|11=689266417|14=0|17=9f950e35-21fa-3c4c-a56f-a58328a480b5|22=111|37=be7eefff-e1b2-4676-988c-716e79f892ba|38=1|39=0|40=1|48=AAPL.NASDAQ|54=1|55=AAPL.NASDAQ|59=0|150=0|151=1|10=033|\n8=FIX.4.4|9=289|35=8|34=391|49=EXANTE_TRADE_UAT|52=20200824-13:33:51.742|56=RAT9106_TRADE_UAT|1=RAT9106.001|6=511.380|11=689266417|14=1|17=0a35f89d-aede-3793-8124-f62aa8c422e6|22=111|31=511.38|32=1|37=be7eefff-e1b2-4676-988c-716e79f892ba|38=1|39=2|40=1|48=AAPL.NASDAQ|54=1|55=AAPL.NASDAQ|59=0|150=F|151=0|10=143|'
      }

      if (newSteps[6]) {
        newSteps[6].content.items[6].note = true
      }
      if (newSteps[7]) {
        newSteps[7].icon = 'technology/autonomous'
      }
      if (newSteps[8]) {
        newSteps[8].icon = 'technology/manager'
      }

      return newSteps
    }
  },
  created() {
    this.$route.meta.currentPageName = this.$t(
      'exante.pages.apis.items.fix-api.integrate.header'
    )
  }
}
</script>

<template>
  <xSelect
    class="select--locations"
    :list="allLocations"
    :active-list="activeLocations"
    placeholder="Locations"
    :initial-value="location"
    without-label=""
    name="location"
    @select="onSelectLocation"
  ></xSelect>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex'
import xSelect from '~/components/careers/general/xSelect/xSelect'

export default {
  components: { xSelect },
  computed: {
    ...mapGetters('careers', ['activeLocations', 'allLocations', 'location'])
  },
  methods: {
    ...mapMutations('careers', ['setLocation']),
    onSelectLocation(el, val) {
      this.setLocation(val)
    }
  }
}
</script>

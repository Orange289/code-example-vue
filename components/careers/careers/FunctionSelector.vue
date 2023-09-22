<template>
  <xSelect
    :list="list"
    :placeholder="placeholder"
    :initial-value="value"
    name="department"
    @select="onSelectDepartment"
  ></xSelect>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex'
import xSelect from '~/components/careers/general/xSelect/xSelect'

export default {
  components: { xSelect },
  props: {
    placeholder: {
      type: String,
      default: 'Function'
    },
    initialValue: {
      type: String,
      default: null
    },
    list: {
      type: Array,
      default() {
        return this.departments
      }
    }
  },
  data() {
    return {
      value: this.initialValue
    }
  },
  computed: {
    ...mapGetters('careers', ['departments', 'department'])
  },
  methods: {
    ...mapMutations('careers', ['setDepartment']),
    onSelectDepartment(el, val) {
      this.setDepartment(val)
    }
  },
  mounted() {
    this.value = this.department
  }
}
</script>

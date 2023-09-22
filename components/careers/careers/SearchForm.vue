<template>
  <xForm
    v-if="departments || allLocations"
    class="search-form"
    action="/jobs/"
    :fields="searchForm"
    button-text="Search"
    method="get"
    :on-submit="onSubmit"
    :submit-cols="submitCols"
    :style-type="styleType"
  ></xForm>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex'
import xForm from '~/components/careers/general/xForm/xForm.vue'

export default {
  name: 'SerachForm',
  components: {
    xForm
  },
  props: {
    styleType: {
      type: String,
      default: () => 'dark'
    }
  },
  computed: {
    ...mapGetters('careers', [
      'departments',
      'allLocations',
      'activeLocations',
      'department',
      'location'
    ]),
    searchForm() {
      return [
        {
          cols: {
            md: 14
          },
          'data-type': 'xSelect',
          list: this.departments,
          placeholder: 'Functions',
          initialValue: this.department,
          actions: {
            select: (el, val) => {
              this.setDepartment(val)
            }
          },
          name: 'department'
        },
        {
          cols: {
            md: 14
          },
          'data-type': 'xSelect',
          list: this.allLocations,
          activeList: this.activeLocations,
          class: 'select--locations',
          placeholder: 'Locations',
          initialValue: this.location,
          actions: {
            select: (el, val) => {
              this.setLocation(val)
            }
          },
          name: 'location'
        }
      ]
    }
  },
  data() {
    return {
      submitCols: {
        cols: 24,
        sm: 11
      }
    }
  },
  methods: {
    ...mapMutations('careers', ['setDepartment', 'setLocation']),
    onSubmit(e) {
      e.preventDefault()
      this.$nuxt.$router.push({ path: '/jobs/' })
      return false
    }
  }
}
</script>

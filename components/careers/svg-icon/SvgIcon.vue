<template>
  <svg-icon width="16" height="16" :title="label" :name="name"></svg-icon>
</template>

<script>
export default {
  name: 'SvgIconWrapper',
  props: {
    label: {
      type: String
    },
    id: {
      type: String
    }
  },
  data() {
    return {
      isonsGroup: 'general'
    }
  },
  computed: {
    name() {
      let iconId = this.id
      if (this.id.includes('sprite-')) {
        iconId = this.id.split('sprite-')[1]
      }

      return `${this.isonsGroup}/${iconId}`
    }
  }
}
</script>

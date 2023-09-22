<script>
// TODO: tests
export default {
  name: 'MobileBp',
  data() {
    return {
      notMobile: false
    }
  },
  beforeMount() {
    this.notMobile = window.matchMedia('(min-width:961px)')
  },
  mounted() {
    this._checkMobileBreakpoint()
    window.addEventListener('resize', this._checkMobileBreakpoint)
  },
  beforeDestroy() {
    window.removeEventListener('resize', this._checkMobileBreakpoint)
  },
  methods: {
    _checkMobileBreakpoint() {
      if (this.beforeCheckMobileBreakpoint) {
        this.beforeCheckMobileBreakpoint()
      }

      if (this.checkMobileBreakpoint) {
        this.checkMobileBreakpoint()
      } else if (this.notMobile.matches && this.onNotMobile) {
        this.onNotMobile()
      } else if (!this.notMobile.matches && this.onMobile) {
        this.onMobile()
      }

      if (this.afterCheckMobileBreakpoint) {
        this.afterCheckMobileBreakpoint()
      }
    }
  }
}
</script>

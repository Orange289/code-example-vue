<script>
export default {
  mounted() {
    if (this.$el) this.$el.classList.add(this.$style.block_500)
  }
}
</script>

<style lang="scss" module>
.block_500 {
  @include bp(tablet) {
    min-height: 430px;
  }
  @include bp(desktop-large) {
    min-height: 450px;
  }
  @include bp(desktop-wide) {
    min-height: 500px;
  }
}
</style>

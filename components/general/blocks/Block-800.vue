<script>
export default {
  mounted() {
    if (this.$el) this.$el.classList.add(this.$style.block_800)
  }
}
</script>

<style lang="scss" module>
.block_800 {
  @include bp(tablet) {
    min-height: 600px;
  }
  @include bp(desktop-large) {
    min-height: 700px;
  }
  @include bp(desktop-wide) {
    min-height: 800px;
  }
}
</style>

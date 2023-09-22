<template>
  <div>
    <a v-if="$attrs.href" v-bind="$attrs" class="argo-button">
      <span><slot></slot></span>
    </a>
    <button v-else v-bind="$attrs" class="argo-button">
      <span><slot></slot></span>
      <svg-icon name="funds/arrow" class="argo-button__arrow"></svg-icon>
    </button>
  </div>
</template>

<script>
export default {
  name: 'ArgoButton',
  inheritAttrs: false
}
</script>

<style lang="scss">
.argo-button {
  @include argoArrowLink();
  @include bp(tablet) {
    font-size: 20px;

    min-height: 60px;
    padding-top: 20px;
    padding-bottom: 20px;
  }

  font-family: $font-family-second;
  font-size: 16px;
  font-weight: 400;
  line-height: 1;

  position: relative;

  display: inline-block;

  box-sizing: border-box;
  min-height: 40px;
  padding: 11px 30px;

  text-align: center;
  vertical-align: middle;
  vertical-align: middle;
  text-decoration: none;

  color: $color__white;
  border: 0 none;
  background-color: $transparent;
  @supports (
      -webkit-clip-path: polygon(-1px -1px, calc(100% + 1px) -1px, calc(
              100% + 1px
            )
            calc(100% - 2px * 10 + 1px), calc(100% - 2px * 5 + 1px)
            calc(100% + 1px), -1px calc(100% + 1px))
    )
    or
    (
      clip-path:
        polygon(
          -1px -1px,
          calc(100% + 1px) -1px,
          calc(100% + 1px) calc(100% - 2px * 10 + 1px),
          calc(100% - 2px * 5 + 1px) calc(100% + 1px),
          -1px calc(100% + 1px)
        )
    ) {
    clip-path: polygon(
      -1px -1px,
      calc(100% + 1px) -1px,
      calc(100% + 1px) calc(100% - 2px * 10 + 1px),
      calc(100% - 2px * 5 + 1px) calc(100% + 1px),
      -1px calc(100% + 1px)
    );
  }

  &:after {
    position: absolute;
    z-index: 1;
    top: 0;
    left: 0;

    width: 100%;
    height: 100%;

    content: '';

    background: linear-gradient($color__white, $color__white) top left,
      linear-gradient($color__white, $color__white) top right,
      linear-gradient(
          -64deg,
          rgba(255, 255, 255, 0) calc(50% - 2px / 2 - 2px / 8),
          $color__white calc(50% - 2px / 2),
          $color__white calc(50% + 2px / 2),
          rgba(255, 255, 255, 0) calc(50% + 2px / 2 + 2px / 8)
        )
        bottom right,
      linear-gradient($color__white, $color__white) top left,
      linear-gradient($color__white, $color__white) bottom left;
    background-repeat: no-repeat;
    background-size: 100% 2px, 2px calc(100% - 2px * 10 + 1px),
      calc(2px * 5 + 1px) calc(2px * 10), 2px 100%, calc(100% - 2px * 5) 2px;
  }

  span {
    display: inline-block;

    transition: all 0.3s;
  }

  &:hover {
    color: $color__green-2;
    background: $color__white;

    span {
      transform: translateX(-8px);
    }
  }
  &:not([disabled]):hover::after {
    cursor: pointer;
  }

  &[disabled] {
    cursor: not-allowed;

    opacity: 0.65;
  }

  .argo-button__arrow {
    @include argoArrow(12px, 8px, 20px);

    margin-left: 10px;
  }
}
</style>

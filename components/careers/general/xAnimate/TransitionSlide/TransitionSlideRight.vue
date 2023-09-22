<script>
// <template>
//   <TransitionBase v-bind="$attrs"><slot></slot></TransitionBase>
// </template>

import TransitionBase from '../TransitionBase.vue'

export default {
  name: 'TransitionSlideRight',
  mixins: [TransitionBase],
  // components: {
  //   TransitionBase
  // },
  data() {
    return {
      enterCl: 'slideRightIn',
      leaveCl: 'slideRightOut',
      moveCl: 'slideRightMove'
    }
  }
}
</script>

<style lang="postcss">
@keyframes slideRightIn {
  from {
    opacity: 0;
    transform: translateX(30px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

@keyframes slideRightOut {
  from {
    opacity: 1;
    transform: translateX(0);
  }
  to {
    opacity: 0;
    transform: translateX(30px);
  }
}

.slideRightIn {
  @media (--sm) {
    animation-name: slideRightIn;
    position: absolute;
    top: 0;
    width: 100%;
    left: 0;
  }
}

.slideRightOut {
  @media (--sm) {
    animation-name: slideRightOut;
  }
}

.slideRightMove {
  transition: transform 0.3s;
}
</style>

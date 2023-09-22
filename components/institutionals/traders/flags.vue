<template>
  <div class="flags-inst">
    <div
      v-for="(item, index) in flags"
      :key="index"
      v-animate.repeat.fade="'slide-right'"
      :style="{ 'transition-delay': `${0.25 * (index + 1)}s` }"
      class="flags-inst__item"
    >
      <img :src="item.flagUrl" :alt="item.flagName" class="flags-inst__flag" />
      <!-- <img
        :src="item.logoUrl"
        :alt="item.logoName"
        :class="['flags-inst__logo', `flags-inst__logo--${item.logoName}`]"
      /> -->
    </div>
    <div v-animate.repeat.fade="'slide-right'">
      <OpenAccountButton
        data-style-type="fgreen"
        class="flags-inst__button"
      ></OpenAccountButton>
    </div>
  </div>
</template>

<script>
import OpenAccountButton from '~/components/general/OpenAccountButton/OpenAccountButton.vue'

export default {
  name: 'Flags',
  components: {
    OpenAccountButton
  },
  data() {
    return {
      flags: [
        {
          flagUrl: '/static/images/traders/flag-uk.png'
          // logoUrl: '/static/images/traders/logo-mfsa.png',
          // logoName: 'mfsa'
        },
        {
          flagUrl: '/static/images/traders/flag-cn.png'
          // logoUrl: '/static/images/traders/logo-sfc.png',
          // logoName: 'sfc'
        },
        {
          flagUrl: '/static/images/traders/flag-malta.png'
          // logoUrl: '/static/images/traders/logo-fca.png',
          // logoName: 'fca'
        },
        {
          flagUrl: '/static/images/traders/flag-cyprus.png'
          // logoUrl: '/static/images/traders/logo-cysec.png',
          // logoName: 'cysec'
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
.flags-inst {
  @include bp(desktop) {
    margin-top: -104px;

    .flags-inst__button {
      height: 50px;
    }
  }
  @include bp(desktop-wide) {
    .flags-inst__button {
      margin-top: 25px;
    }
  }

  display: flex;

  flex-wrap: wrap;

  .flags-inst__button {
    margin-top: 20px;
  }
}

.flags-inst__item {
  width: calc(50% - 100px);

  &:nth-child(2n) {
    margin-left: 100px;
  }
}

.flags-inst__flag {
  @include bp(desktop-wide) {
    width: 200px;
    height: 160px;
  }

  display: block;

  margin-bottom: 10px;
}

// .flags-inst__logo {
//   @include bp(desktop-wide) {
//     margin-bottom: 60px;
//   }

//   display: block;

//   &--mfsa {
//     width: 80px;
//     height: 24px;
//   }

//   &--cysec {
//     width: 100px;
//     height: 25px;
//   }

//   &--fca {
//     width: 90px;
//     height: 29px;
//   }

//   &--sfc {
//     width: 60px;
//     height: 30px;
//   }
// }
</style>

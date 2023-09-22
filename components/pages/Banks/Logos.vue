<template>
  <div class="logos">
    <Container :wide="true" class="logos__container">
      <ul class="logos__list">
        <li
          v-for="(item, index) in logos"
          :key="index"
          :class="`logos__item logos__item--${item.id}`"
        >
          <!-- <div class="logos__item-image"> -->
          <imagelazy
            :lazySrc="item.src"
            :alt="item.id"
            class="logos__item-image"
          />
          <!-- </div> -->
        </li>
      </ul>
    </Container>
  </div>
</template>

<script>
import Container from '~/components/general/Container.vue'
import imagelazy from '~/components/general/Lazy/ImageLazy.vue'

export default {
  name: 'Logos',
  components: {
    Container,
    imagelazy
  },
  props: {
    items: {
      default: null,
      type: Array
    }
  },
  data() {
    return {
      logos: [
        {
          src: '/static/images/banks-institutionals/logos/ing_bank.png',
          id: 'ing-bank'
        },
        {
          src: '/static/images/banks-institutionals/logos/bank-of-china.jpg',
          id: 'bank-of-china'
        },
        {
          src: '/static/images/banks-institutionals/logos/cgscimb.jpg',
          id: 'cgscimb'
        },
        {
          src: '/static/images/banks-institutionals/logos/Cowen.png',
          id: 'cowen'
        },
        {
          src: '/static/images/banks-institutionals/logos/edfman.png',
          id: 'edfman'
        },
        {
          src: '/static/images/banks-institutionals/logos/Nomura.svg',
          id: 'nomura'
        },
        {
          src: '/static/images/banks-institutionals/logos/LMAX.png',
          id: 'lmax'
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
.logos {
  @include bp(tablet) {
    margin-top: -60px;
    margin-bottom: -60px;
  }
  // @include bp(desktop-large) {
  //   margin-top: -65px;
  //   margin-bottom: -65px;
  // }
  // @include bp(desktop-wide) {
  //   margin-top: -80px;
  //   margin-bottom: -80px;
  // }

  position: relative;
  z-index: 1;

  .logos__container {
    @include bp(0 tablet) {
      padding: 0 !important;
    }
  }

  .logos__list {
    @include bp(0 tablet) {
      padding: 25px 35px;

      flex-wrap: wrap;
    }
    @include bp(tablet) {
      max-height: 100px;
      padding: 20px;
    }
    @include bp(desktop) {
      max-height: 120px;
      padding: 28px 50px;
    }

    display: flex;

    width: 100%;
    margin: 0;
    margin: 0 auto;
    padding: 25px $padding-base 7px;

    list-style: none;

    background-color: $color__white;
    box-shadow: 0 10px 25px 0 rgba(166, 173, 175, 0.16);

    justify-content: space-between;
  }

  .logos__item {
    @include bp(0 tablet) {
      width: 100%;
      min-width: 60px;
      margin-bottom: 17px;
    }
    @include bp(desktop-large) {
      max-width: calc((100% / 4) - 30px);
    }
    @include bp(desktop-wide) {
      max-width: calc((100% / 4) - 50px);
    }

    font-size: 16px;
    line-height: 1.25;

    position: relative;

    display: inline-flex;
    flex-direction: column;

    text-align: center;

    align-items: center;
    justify-content: center;
  }

  .logos__item--ing-bank {
    @include bp(0 tablet) {
      max-width: 123px;
    }
  }

  .logos__item--bank-of-china {
    @include bp(0 tablet) {
      max-width: 71px;

      order: 3;
    }
  }

  .logos__item--cgscimb {
    @include bp(0 tablet) {
      max-width: 123px;
      margin-bottom: 26px;

      order: 4;
    }
  }

  .logos__item--edfman {
    @include bp(0 tablet) {
      max-width: 40px;

      order: 5;
    }
  }

  .logos__item--cowen {
    @include bp(0 tablet) {
      max-width: 74px;

      order: 6;
    }
  }

  .logos__item--nomura {
    @include bp(0 tablet) {
      max-width: 76px;

      order: 7;
    }
  }

  .logos__item--lmax {
    @include bp(0 tablet) {
      max-width: 61px;

      order: 8;
    }
  }

  .logos__item--hsbc {
    @include bp(0 tablet) {
      max-width: 100px;

      order: 2;
    }
  }

  .logos__item-image {
    @include bp(0 desktop-large) {
      display: flex;
      flex-direction: column;

      justify-content: center;
    }
  }
}

.logos__item--ing-bank ::v-deep img {
  @include bp(desktop) {
    width: 174px;
    height: 65px;
  }
  @include bp(desktop-wide) {
    width: 180px;
    height: 68px;
  }

  width: 148px;
  height: 55px;
}

.logos__item--hsbc ::v-deep img {
  @include bp(desktop) {
    width: 75px;
    height: 50px;
  }
  @include bp(desktop-wide) {
    width: 90px;
    height: 60px;
  }

  width: 68px;
  height: 45px;
}

.logos__item--nomura ::v-deep img {
  @include bp(desktop) {
    width: 98px;
    height: 18px;
  }
  @include bp(desktop-wide) {
    width: 110px;
    height: 21px;
  }

  width: 76px;
  height: 14px;
}

.logos__item--bank-of-china ::v-deep img {
  @include bp(desktop) {
    width: 75px;
    height: 57px;
  }
  @include bp(desktop-wide) {
    width: 100px;
    height: 75px;
  }

  width: 71px;
  height: 53px;
}

.logos__item--cgscimb ::v-deep img {
  @include bp(desktop) {
    width: 134px;
    height: 65px;
  }
  @include bp(desktop-wide) {
    width: 150px;
    height: 74px;
  }

  width: 123px;
  height: 60px;
}

.logos__item--cowen ::v-deep img {
  @include bp(desktop) {
    width: 105px;
    height: 20px;
  }
  @include bp(desktop-wide) {
    width: 120px;
    height: 23px;
  }

  width: 74px;
  height: 14px;
}

.logos__item--edfman ::v-deep img {
  @include bp(desktop) {
    width: 50px;
    height: 50px;
  }
  @include bp(desktop-wide) {
    width: 60px;
    height: 60px;
  }

  width: 40px;
  height: 40px;
}

.logos__item--lmax ::v-deep img {
  @include bp(desktop) {
    width: 91px;
    height: 30px;
  }
  @include bp(desktop-wide) {
    width: 110px;
    height: 37px;
  }

  width: 61px;
  height: 20px;
}
</style>

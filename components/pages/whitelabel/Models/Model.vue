<template>
  <div :class="['model', `model--${label}`]">
    <!-- :class="[
      'model',
      `model--${model.label}`,
      { 'model--active': model.label == 'wlent' }
    ]" -->
    <div class="model__name" aria-label="modelname" v-html="model.name"></div>
    <div class="model__wrap">
      <div class="model__services">
        <Services
          class="model__services"
          :services="$t('exante.pages.whitelabel.models.services')"
        >
        </Services>
      </div>
      <div class="model__content">
        <div class="model__head" aria-label="modeltypes">
          <span
            v-for="(item, index) in model.types"
            :key="index"
            v-html="item"
          ></span>
        </div>
        <div
          v-for="(value, vIndex) in model.values"
          :key="vIndex"
          class="model__row"
          aria-label="modelvalues"
        >
          <template v-if="Array.isArray(value)">
            <span
              v-for="(subvalue, sIndex) in value"
              :key="sIndex"
              :class="['model__value', `model__value--${subvalue}`]"
              v-html="subvalue"
            >
            </span>
          </template>
          <span
            v-else
            :class="['model__value', `model__value--${value}`]"
            v-html="value"
          >
          </span>
        </div>
      </div>
    </div>
    <WlpOpenAccButt data-style-type="" class="model__button"></WlpOpenAccButt>
  </div>
</template>

<script>
import Services from './Services.vue'
import WlpOpenAccButt from '~/components/pages/whitelabel/general/WlpOpenAccButt.vue'

export default {
  name: 'Model',
  components: { Services, WlpOpenAccButt },
  props: {
    label: {
      type: String,
      default: ''
    },
    model: {
      type: Object,
      default: null
    }
  }
}
</script>

<style lang="scss" scoped>
.model {
  @include bp(0 tablet) {
    margin-right: -80px;
    margin-left: -80px;
    padding-right: 80px;
    padding-left: 80px;
  }
  @include bp(tablet) {
    display: flex;
    flex-direction: column;

    padding-top: 36px;
    padding-bottom: 30px;

    flex-grow: 1;
  }
  @include bp(desktop-large) {
    padding-bottom: 40px;
  }
  @include bp(desktop-wide) {
    max-height: 700px;
    padding-top: 50px;
    padding-bottom: 50px;
    // max-width: 400px;
  }

  padding-bottom: 40px;

  transition: all 200ms;
}

// .model--active {
//   padding-top: 50px;
//   padding-bottom: 50px;
//   background: #fff;
//   .model__row:nth-of-type(2) {
//     @include bp(tablet) {
//       border-top: 2px solid $color__green;
//     }
//   }

//   @include bp(tablet) {
//     padding: 36px 50px 30px;
//     margin-left: 50px;
//   }
// }

.model__services {
  @include bp(0 tablet) {
    display: block;

    max-width: 157px;
  }

  display: none;
}

.model__content {
  @include bp(0 tablet) {
    flex-grow: 1;
  }
  @include bp(tablet) {
    width: 100%;
  }
}

.model__name {
  @include bp(desktop-large) {
    font-size: 32px;
  }
  @include bp(desktop-wide) {
    margin-bottom: 56px;
  }

  font-family: $font-family-second;
  font-size: 24px;
  line-height: 1.25;

  margin-bottom: 26px;

  text-align: center;
}

.model__head {
  @include bp(0 tablet) {
    min-height: 54px;
    margin: auto;
    padding-bottom: 14px;
  }
  @include bp(tablet) {
    padding-bottom: 13px;
  }
  @include bp(desktop-large) {
    font-size: 18px;
  }
  @include bp(desktop-wide) {
    font-size: 22px;
  }

  font-size: 16px;
  font-weight: 400;
}

.model--wlpro {
  &:hover {
    @include bp(tablet) {
      margin-left: 50px;
      padding: 36px 50px 30px;

      background-color: #fff;
      box-shadow: 0 10px 25px 0 rgba(166, 173, 175, 0.1);
      .model__row:not(.model__row:nth-child(3)) {
        padding-top: 17px;
      }
      .model__row:nth-of-type(2) {
        border-top: 2px solid $color__green;
      }

      ::v-deep .site-button {
        .site-button__content {
          @include cutted-border(
            $color__green,
            $color__green,
            $color__green,
            $transparent
          );

          color: $color__white;
        }
      }

      ::v-deep .site-button {
        .site-button__content {
          &:before {
            right: auto;
            left: 0;

            width: 100%;
          }

          &:hover,
          &:focus,
          &:active,
          &.active,
          &--active {
            &:before {
              right: 0;
              left: auto;

              width: 0;
            }
          }
          &:disabled,
          &[disabled],
          &.loading {
            &:hover,
            &:focus,
            &:active {
              &:before {
                right: auto;
                left: 0;

                width: 100%;
              }
            }
          }
        }
      }
    }
    @include bp(desktop-large) {
      padding: 36px 50px 40px;

      .model__row:not(.model__row:nth-child(3)) {
        padding-top: 20px;
      }
    }
    @include bp(desktop-wide) {
      padding: 50px;

      .model__row:not(.model__row:nth-child(3)) {
        padding-top: 26px;
      }
    }
  }
  .model__head {
    @include bp(0 tablet) {
      max-width: 100px;

      text-align: center;
      word-break: break-all;
      span:first-child::after {
        content: '/';
      }
    }
    @include bp(tablet) {
      display: flex;

      justify-content: space-around;
    }
    @include bp(desktop-large) {
      padding-right: 58px;
      padding-left: 58px;

      justify-content: space-between;
    }
    @include bp(desktop-large) {
      padding-right: 49px;
      padding-left: 49px;
    }
  }
}

.model--wlent {
  @include bp(tablet) {
    margin-left: 50px;
    padding: 36px 50px 30px;
  }
  @include bp(desktop-large) {
    padding: 36px 50px 40px;
  }
  @include bp(desktop-wide) {
    padding: 50px;
  }

  padding-top: 50px;
  padding-bottom: 50px;

  background-color: #fff;
  box-shadow: 0 10px 25px 0 rgba(166, 173, 175, 0.1);

  .model__row {
    @include bp(tablet) {
      padding-top: 17px;
    }
    @include bp(desktop-large) {
      padding-top: 20px;
    }
    @include bp(desktop-wide) {
      padding-top: 26px;
    }
  }

  .model__row:nth-of-type(2) {
    @include bp(tablet) {
      border-top: 2px solid $color__green;
    }
  }
  .model__name {
    @include bp(tablet) {
      max-width: 138px;
      margin: auto;
    }
    @include bp(desktop-large) {
      max-width: 184px;
    }
  }
  .model__head {
    @include bp(tablet) {
      height: 31px;
    }
    @include bp(desktop-large) {
      height: 22px;
    }
    @include bp(desktop-wide) {
      height: 58px;
    }
  }
  .model:hover + & {
    @include bp(tablet) {
      padding-right: 0;
      padding-left: 0;

      background-color: transparent;
      box-shadow: none;

      .model__row:nth-of-type(2) {
        border-top: 1px solid #d2d6d7;
      }

      ::v-deep .site-button .site-button__content {
        @include cutted-border(
          $color__green,
          $color__white,
          $color__green,
          $transparent
        );

        color: $color__green;
      }
    }
  }

  ::v-deep .site-button {
    .site-button__content {
      @include cutted-border(
        $color__green,
        $color__green,
        $color__green,
        $transparent
      );

      color: $color__white;
    }
  }

  ::v-deep .site-button {
    .site-button__content {
      &:before {
        right: auto;
        left: 0;

        width: 100%;
      }

      &:hover,
      &:focus,
      &:active,
      &.active,
      &--active {
        &:before {
          right: 0;
          left: auto;

          width: 0;
        }
      }
      &:disabled,
      &[disabled],
      &.loading {
        &:hover,
        &:focus,
        &:active {
          &:before {
            right: auto;
            left: 0;

            width: 100%;
          }
        }
      }
    }
  }
}

.model__wrap {
  display: flex;
}

.model__row {
  @include bp(tablet) {
    display: flex;

    height: 55px;
    padding: 18px 0;

    justify-content: space-around;
  }
  @include bp(desktop-large) {
    height: 65px;
    padding: 21px 0 23px;
  }
  @include bp(desktop-wide) {
    height: 75px;
    padding: 27px 0;
  }

  font-size: 18px;
  font-weight: 500;

  height: 58px;
  padding: 20px 0 17px;

  text-align: center;

  border-top: 1px solid #d2d6d7;

  &:nth-of-type(3) {
    @include bp(desktop-large) {
      height: 95px;
      padding: 30px 0 41px;
    }

    height: 75px;
    padding: 30px 0 27px;
  }
}

.model__value {
  @include bp(desktop-large) {
    font-size: 24px;
  }
  &--Yes {
    color: $color__green--lighter;
  }
  &--No + .model__value--Yes::before {
    @include bp(0 tablet) {
      margin-right: 4px;
      margin-left: 4px;

      content: '/';

      color: #d2d6d7;
    }
  }
}

.model__button {
  @include bp(tablet) {
    margin-top: 10px;
    margin-right: auto;
    margin-left: auto;

    align-self: center;
  }
  @include bp(desktop-large) {
    margin-top: 14px;
  }
  @include bp(desktop-wide) {
    margin-top: 20px;
  }

  margin-top: 15px;
  &.site-button ::v-deep .site-button__content {
    @include bp(tablet) {
      font-size: 18px;

      min-height: 40px;
      padding: 11px 24px;
    }
    @include bp(desktop-large) {
      font-size: 22px;

      padding: 16px 38px 12px;
    }
    @include bp(desktop-wide) {
      font-size: 24px;

      padding: 15px 57px 13px;
    }
  }
}
</style>

<template>
  <DefaultLayout>
    <template #awards><VVoid></VVoid></template>
    <div class="jobs">
      <xGrid>
        <InitSlideFromLeft>
          <h1 class="underlined">Jobs Openings</h1>
        </InitSlideFromLeft>
        <xRow>
          <xCol cols="24" sm="5" md="8" class="jobs__filter">
            <InitSlideFromLeft class="jobs__filter-inner-wrap">
              <!-- <h5 class="jobs__section-title">Roles</h5> -->
              <div class="jobs__selector jobs__selector--deps">
                <FunctionSelector></FunctionSelector>
              </div>
              <ul
                :class="[
                  'jobs__deps-list',
                  { 'jobs__deps-list--empty': paginatedJobsList.length === 0 }
                ]"
              >
                <!-- <li
                  class="jobs__deps-list-item"
                  :class="[
                    {
                      'jobs__deps-list-item--active':
                        department === $store.state.careers.allFunctionsDefault
                    }
                  ]"
                >
                  <button
                    class="jobs__deps-dep-btn"
                    type="button"
                    @click="setDepartment(false)"
                  >
                    {{ $store.state.careers.allFunctionsDefault }}
                  </button>
                </li> -->
                <li
                  v-for="dep in departments"
                  :key="dep"
                  class="jobs__deps-list-item"
                  :class="[
                    {
                      'jobs__deps-list-item--active': department === dep
                    }
                  ]"
                >
                  <button
                    class="jobs__deps-dep-btn"
                    type="button"
                    @click="setDepartment(dep)"
                  >
                    {{ dep }}
                  </button>
                </li>
              </ul>
              <div v-if="allLocations.length > 0" class="jobs__selector">
                <h5 class="jobs__section-title">Select location</h5>
                <LocationSelector
                  class="jobs__selector-select"
                ></LocationSelector>
              </div>
            </InitSlideFromLeft>
          </xCol>
          <xSpacer class="jobs__spacer"></xSpacer>
          <xCol cols="24" sm="1" md="1"></xCol>
          <xCol ref="jobs__list" cols="24" sm="9" md="13" class="jobs__list">
            <InitSlideFromRight class="jobs__list-wrap">
              <TransitionSlideRight>
                <ul
                  v-if="paginatedJobsList.length > 0"
                  :key="pageJobs + department + location"
                  class="jobs__pos-list"
                >
                  <li
                    v-for="job in paginatedJobsList"
                    :key="job.shortcode"
                    class="jobs__pos-list-item"
                  >
                    <Position
                      class="jobs__pos"
                      :href="job.url"
                      :title="job.title"
                      :country="job.country"
                      :city="job.city"
                    ></Position>
                  </li>
                </ul>
                <div v-else class="jobs__empty-list">No results found</div>
              </TransitionSlideRight>
            </InitSlideFromRight>
            <Pagination
              v-if="countPages > 1"
              v-model="page"
              :page="page"
              :length="countPages"
              :total-visible="8"
              @next="onPageClick(pageJobs++)"
              @previous="onPageClick(pageJobs--)"
              @input="onPageClick(page)"
            >
              <template #prev-icon>
                <SvgIcon
                  id="sprite-arrow"
                  class="arrow arrow--prev"
                  label="arrow-prev"
                  role="img"
                />
              </template>
              <template #next-icon>
                <SvgIcon
                  id="sprite-arrow"
                  class="arrow arrow--next"
                  label="arrow-next"
                  role="img"
                />
              </template>
            </Pagination>
          </xCol>
        </xRow>
      </xGrid>
    </div>
  </DefaultLayout>
</template>

<script>
import { mapGetters, mapState, mapMutations } from 'vuex'
import Pagination from '../../general/Pagination/Pagination'
import SvgIcon from '../../svg-icon/SvgIcon.vue'
import Position from './Position'
import DefaultLayout from '~/components/careers/layouts/DefaultCareersLayout.vue'
import { xGrid, xRow, xCol, xSpacer } from '~/components/careers/general/xGrid'
import VVoid from '~/utils/VVoid'
import TransitionSlideRight from '~/components/careers/general/xAnimate/TransitionSlide/TransitionSlideRight.vue'
import InitSlideFromLeft from '~/components/careers/general/xAnimate/InitSlide/InitSlideFromLeft.vue'
import InitSlideFromRight from '~/components/careers/general/xAnimate/InitSlide/InitSlideFromRight.vue'
import FunctionSelector from '~/components/careers/careers/FunctionSelector.vue'
import LocationSelector from '~/components/careers/careers/LocationSelector.vue'

export default {
  name: 'JobsPage',
  components: {
    DefaultLayout,
    VVoid,
    xGrid,
    xRow,
    xCol,
    xSpacer,
    Position,
    InitSlideFromLeft,
    InitSlideFromRight,
    TransitionSlideRight,
    FunctionSelector,
    LocationSelector,
    Pagination,
    SvgIcon
  },
  data() {
    return {
      //     shouldFilterStick: false,
      //     smAndUp: false
      totalVisible: 11,
      page: 1
    }
  },
  // beforeMount() {
  //   this.smAndUp = window.matchMedia('(min-width:768px)')
  // },
  // mounted() {
  //   this.onResize()
  //   window.addEventListener('resize', this.onResize)
  // },
  // beforeDestroy() {
  //   window.removeEventListener('resize', this.onResize)
  // },
  computed: {
    ...mapGetters('careers', [
      'departments',
      'department',
      'allLocations',
      'location',
      'jobs',
      'paginatedJobsList',
      'hasNextPageJobs'
    ]),
    ...mapState('careers', ['pageJobs', 'jobsPerPage']),
    countPages() {
      // if (length <= this.totalVisible || this.totalVisible < 1) {
      return Math.ceil(this.jobs.length / this.jobsPerPage)
      // }

      // const even = this.totalVisible % 2 === 0 ? 1 : 0
      // const left = Math.floor(this.totalVisible / 2)
      // const right = length - left + 1 + even

      // if (this.pageJobs > left && this.pageJobs < right) {
      //   const start = this.pageJobs - left + 2
      //   const end = this.pageJobs + left - 2 - even

      //   return [1, '...', ...this.getRange(start, end), '...', length]
      // } else if (this.pageJobs === left) {
      //   const end = this.pageJobs + left - 1 - even

      //   return [...this.getRange(1, end), '...', length]
      // } else if (this.pageJobs === right) {
      //   const start = this.pageJobs - left + 1

      //   return [1, '...', ...this.getRange(start, length)]
      // } else {
      //   return [
      //     ...this.getRange(1, left),
      //     '...',
      //     ...this.getRange(right, length)
      //   ]
      // }
    }
  },
  methods: {
    ...mapMutations('careers', ['setDepartment', 'setPageJob']),
    // onResize() {
    //   this.shouldFilterStick = this.smAndUp.matches
    // },
    onSelectDepartment(el, val) {
      this.setDepartment(val)
    },
    onPageClick(page) {
      this.setPageJob(page)
      this.scrollToList()
    },
    scrollToList() {
      this.$refs.jobs__list.$el.scrollIntoView()
    },
    getRange(from, to) {
      const range = []

      from = from > 0 ? from : 1

      for (let i = from; i <= to; i++) {
        range.push(i)
      }

      return range
    }
  },
  watch: {
    paginatedJobsList() {
      if (this.paginatedJobsList.length === 0 && this.pageJobs > 1) {
        this.setPageJob(this.pageJobs - 1)
      }
    },
    location() {
      this.setPageJob(1)
    },
    department() {
      this.setPageJob(1)
    }
  }
}
</script>

<style>
html {
  scroll-behavior: smooth;
}
.xHeader {
  z-index: 2; /* for over .jobs */
  position: relative;
}
</style>

<style lang="postcss" scoped>
.jobs {
  z-index: 1;
  position: relative;

  /* quick fix */
  @media (--xl) {
    &:before {
      content: '';
      display: block;
      position: absolute;
      bottom: calc(var(--xgrid__gutter) / 2);
      background-size: contain;
      background-position: right bottom;
      background-repeat: no-repeat;
      background-image: url('/static/images/careers/jobs.jpg');
      background-image: image-set(
        url('/static/images/careers/jobs.jpg') 1x,
        url('/static/images/careers/jobs.2x.jpg') 2x
      );
      width: 832px;
      height: 100%;
      z-index: -1;
      right: 0;
    }
  }
}

.jobs__filter-inner-wrap {
  .jobs__section-title {
    &:first-of-type {
      margin-top: 0;
    }
  }
}

.jobs__filter {
  z-index: 1;
}

.jobs__spacer {
  position: relative;

  &:before {
    content: '';
    position: absolute;
    display: block;
    bottom: calc(var(--xgrid__gutter) / 2);
    background-color: var(--grayscale-880-color);
    right: -12px;
    width: 100vw;
    min-height: 100%;
    height: calc(100% + 100vh);
    height: calc(100% + var(--vh, 1vh) * 100);
    z-index: -1;

    @media (--sm) {
      right: 0;
      width: 50vw;
    }
  }
}

.jobs__selector {
  margin-bottom: 24px;

  @media (--sm) {
    margin-bottom: 32px;
  }
}

.jobs__selector-select {
  @media (--sm) {
    width: auto;
  }
}

.jobs__selector--deps {
  display: block;
  z-index: 1;
  position: relative;

  @media (--sm) {
    display: none;
  }
}

.jobs__deps-list {
  display: none;
  list-style: none;
  font-weight: 400;
  margin: 0;
  padding: 0;
  margin-bottom: 30px;
  /*
  &--empty {
    margin-bottom: 50px;
  } */

  @media (--sm) {
    display: block;
  }
}

.jobs__deps-list-item {
  line-height: 24px;
  margin-bottom: 16px;
  color: var(--primary-500-color);

  @media (--sm) {
    font-size: 15px;
  }
  @media (--md) {
    font-size: 18px;
  }
  @media (--lg) {
    font-size: 20px;
  }
  @media (--xl) {
    font-size: 24px;
  }
}

.jobs__deps-dep-btn {
  padding: 0;
  margin: 0;
  background: none;
  border: none;
  color: inherit;
  font-weight: inherit;

  &:hover {
    cursor: pointer;
  }
  &:hover,
  &:focus {
    color: var(--accent-0-color);
  }
}

.jobs__deps-list-item--active {
  font-weight: 600;
  color: var(--accent-0-color);
}

.jobs__list {
  position: relative;
  padding-bottom: 80px;

  &:before {
    content: '';
    display: block;
    position: absolute;
    bottom: calc(var(--xgrid__gutter) / 2);
    background-size: contain;
    background-position: right bottom;
    background-repeat: no-repeat;
    background-image: url('/static/images/careers/jobs.jpg');
    background-image: image-set(
      url('/static/images/careers/jobs.jpg') 1x,
      url('/static/images/careers/jobs.2x.jpg') 2x
    );
    width: 100%;
    height: 100%;
    z-index: -1;
    left: calc((100vw - 100%) / 2);

    @media (--sm) {
      left: var(--xContainer__padding);
    }
    @media (--xl) {
      /* quick fix */
      display: none;
      /* left: calc((100vw - var(--xcontainer__max-width-xl)) / 2); */
    }
  }
}

.jobs__list-wrap {
  position: relative;
  overflow: hidden;
}

@supports (
  background-image: image-set(url('/static/images/careers/jobs.webp') 1x)
) {
  .jobs__list {
    &:before {
      background-image: image-set(
        url('/static/images/careers/jobs.webp') 1x,
        url('/static/images/careers/jobs.2x.webp') 2x
      );
    }
  }
}

.jobs__pos-list {
  list-style: none;
  padding: 0;
  margin: 0;
  display: inline-block;
}

.jobs__pos-list-item {
  margin-bottom: 24px;

  @media (--sm) {
    margin-bottom: 40px;

    &:first-child ::v-deep .position__title {
      margin-top: 0;
    }
  }
}

.jobs__pages {
  padding: 20px 0;
}

.pages__page {
  margin-right: 8px;
  margin-bottom: 8px;
  padding: 0 10px;
  min-height: 30px;
  width: auto;
}

::v-deep .arrow {
  width: 5px;
  height: 10px;
}

::v-deep .arrow--next {
  transform: rotate(180deg);
}

.jobs__empty-list {
  font-weight: normal;

  @media (--sm) {
    font-size: 15px;
  }
  @media (--md) {
    font-size: 18px;
  }
  @media (--lg) {
    font-size: 20px;
  }
  @media (--xl) {
    font-size: 24px;
    line-height: 24px;
  }
}
</style>

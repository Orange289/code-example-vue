<template>
  <RedocWrapper
    :spec-or-spec-url="specOrSpecUrlData"
    :options="options"
  ></RedocWrapper>
</template>

<script>
import RedocWrapper from '~/components/general/RedocWrapper/index.vue'
// import UnderHeader from '~/components/general/UnderHeader/UnderHeader.vue'

export default {
  name: 'FixApiSpecification',
  components: {
    // UnderHeader,
    RedocWrapper
  },
  data() {
    return {
      specOrSpecUrlData: require('./dist.json'),
      options: {
        hideDownloadButton: true
      }
    }
  }
}
</script>

<style lang="scss">
/* ReDoc doesn't change outer page styles */
body .redoc-wrap a,
.scrollbar-container label[role='menuitem'].active,
.scrollbar-container label[role='menuitem']:hover,
.redoc-wrap .WHGUu {
  color: #007f39;
}

body .redoc-wrap {
  font-family: Roboto, Arial, sans-serif;
  font-size: 16px;

  color: #4e5d60;
}
body .redoc-wrap a:hover {
  opacity: 0.7;
  color: #007f39;
}
.redoc-wrap .menu-content {
  @include bp(tablet) {
    top: 80px !important;
  }

  background: #f3f5f5;
}
.redoc-wrap .menu-content img {
  max-width: 180px;
}
.redoc-wrap .logiML {
  display: none;
  /* padding: 20px 60px 30px 20px; */
}
body .redoc-wrap a[href="https://github.com/Redocly/redoc"] {
  padding: 22px 0;
}
body .redoc-wrap a[href="https://github.com/Redocly/redoc"]:hover {
  padding: 22px 0;
}
.redoc-wrap .search-input {
  font-size: 16px;

  padding: 10px 20px 10px 28px;
}
.redoc-wrap .search-input::placeholder {
  color: rgba(78, 93, 96, 0.25);
}
.redoc-wrap [role='search'] {
  position: relative;
}
.redoc-wrap .search-icon {
  top: 10px;

  width: 18px;
}
.redoc-wrap .search-icon path {
  fill: rgba(78, 93, 96, 0.5);
}
.redoc-wrap h1,
.redoc-wrap h2 {
  padding-bottom: 0 !important;

  &:after {
    display: none !important;
  }
}
.redoc-wrap h1 {
  font-family: Roboto, Arial, sans-serif;
  font-size: 30px;
  font-weight: 500;
  line-height: 40px;

  color: #007f39;
}
.redoc-wrap h3 {
  font-family: Roboto, Arial, sans-serif;
  font-size: 24px;
  font-weight: 500;

  color: #2f383a;
}
.scrollbar-container label[role='menuitem'] {
  font-family: Roboto, Arial, sans-serif;
}
.api-info a[download] {
  color: #007f39;
  border-color: #007f39;
}
.redoc-wrap .gza-dof {
  width: calc((100% - 260px) * 0.3);
  /* width: 0; */
}
.redoc-wrap table thead th,
.redoc-wrap table thead tr {
  border: none;
}
.redoc-wrap table thead tr {
  border-bottom: 1px solid #2f383a;
}
.redoc-wrap table tbody tr {
  border-top: none;
  border-bottom: 1px solid #e1e5e6;
}
.redoc-wrap table thead th,
.redoc-wrap table tbody td {
  padding: 6px 15px;

  border: none;
}
.redoc-wrap table tbody tr:nth-child(2n) {
  background: none;
}
.redoc-wrap .kGXenu,
.redoc-wrap .iWvlZG {
  width: auto;
}
.redoc-wrap table tbody td:nth-child(2) {
  font-family: 'Roboto Mono', monospace;
  font-size: 14px;
}
.instrument-table tbody tr:first-child {
  border-bottom: 1px solid #2f383a;
}
.instrument-table tbody tr:first-child td,
.instrument-table thead th:nth-child(n + 2) {
  font-family: 'Roboto Mono', monospace;
  font-size: 14px;
  font-weight: 400;
}
.instrument-table tbody td:first-child {
  font-weight: bold;
}
@media screen and (min-width: 75rem) {
  .redoc-wrap .eEDkRQ,
  .redoc-wrap .kGXenu {
    width: 70%;
  }
  .redoc-wrap table.instrument-table {
    display: table;

    width: 120%;

    table-layout: fixed;
  }
  .instrument-table thead th:nth-child(1),
  .instrument-table thead th:nth-child(4),
  .instrument-table thead th:last-child {
    width: 200px;
  }
  .instrument-table-container {
    overflow: auto;
  }
  table.instrument-table thead tr {
    border-bottom: none;
  }
  body .redoc-wrap table {
    display: table;
  }
}
</style>

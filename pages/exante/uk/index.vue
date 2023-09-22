<template>
  <Container>
    <h1>EXANTE UK</h1>
  </Container>
</template>

<script>
import Container from '~/components/general/Container.vue'

export default {
  name: 'IndexPage',
  components: {
    Container
  }
}
</script>

<style lang="scss" scoped>
/* http://youmightnotneedjs.com/#tabs */

.tabs {
  position: relative;
  // set height to be even for all tab groups

  min-height: 200px;
  margin-top: 20px;
  .tab {
    float: left;
  }

  .tab label {
    font-size: 30px;
    // set label height
    // top: 1em;
    line-height: 1;

    display: inline-block;

    min-width: 50px;
    padding: 10px;

    border: 1px solid green;
    border-bottom: none;
  }

  // Visually hide radio buttons
  .tab [type='radio'] {
    position: absolute;

    overflow: hidden;
    clip: rect(0, 0, 0, 0);

    width: 0;
    height: 0;

    &:focus + label {
      outline: 1px dotted black;
    }
  }
  .tab__input {
    &:checked ~ label {
      z-index: 2;

      color: #fff;
      background-color: green;

      & ~ .content {
        z-index: 1;

        opacity: 1;
      }
    }
  }
}

.content {
  position: absolute;
  top: 50px;
  right: 0;
  bottom: 0;
  left: 0;

  opacity: 0;
}

.routes-list {
  margin-top: 0;
  padding: 50px;

  border: 1px solid green;
}
</style>

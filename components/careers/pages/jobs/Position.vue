<template>
  <a :href="href" class="position" target="_blank">
    <h6 class="position__title">{{ title }}</h6>
    <div v-if="location" class="position__country-list">
      {{ location }}
    </div>
  </a>
</template>

<script>
export default {
  name: 'Position',
  props: {
    title: {
      type: String,
      required: true
    },
    href: {
      type: String,
      required: true
    },
    country: {
      type: String
    },
    city: {
      type: String
    }
  },
  computed: {
    location() {
      if (this.city) {
        return `${this.city}, ${this.country}`
      } else if (this.country) {
        return this.country
      } else {
        return ''
      }
    }
  }
}
</script>

<style lang="postcss" scoped>
.position {
  font-weight: 400;

  &:hover,
  &:focus {
    text-decoration: none;

    .position__title {
      text-decoration: underline;
    }
  }
}

.position__title {
  font-size: 16px;
  font-weight: 500;
  margin-bottom: 8px;
  line-height: 24px;
  color: var(--primary-500-color);

  @media (--sm) {
    margin-bottom: 18px;
    font-size: 24px;
  }
}

.position__country-list {
  list-style: none;
  font-size: 14px;
  line-height: 24px;
  color: var(--accent-100-color);

  @media (--sm) {
    font-size: 18px;
    line-height: 28px;
  }
}
</style>

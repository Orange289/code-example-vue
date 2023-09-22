<template>
  <ul v-if="items" class="socialLinks" aria-label="social icons" tag="ul">
    <li v-for="(item, index) in items" :key="index" class="socialLinks__item">
      <a class="socialLinks__link" :href="item.href" :aria-label="item.label">
        <SvgIcon
          :id="getIconId(item.href)"
          class="socialLinks__icon"
          :label="item.label"
          role="img"
        />
      </a>
    </li>
  </ul>
</template>

<script>
import SvgIcon from '../../svg-icon/SvgIcon.vue'

export default {
  name: 'SocialLinks',
  components: {
    SvgIcon
  },
  props: {
    items: {
      type: Array,
      required: true
    }
  },
  data() {
    return {
      iconsPreset: ['facebook', 'instagram', 'linkedin', 'twitter', 'youtube']
    }
  },
  methods: {
    getIconId(href) {
      const preId = 'sprite-'
      if (href.includes('rss')) {
        return preId + 'rss'
      }
      let hostname = new URL(href).hostname
      hostname =
        hostname.split('.')[0] === 'www'
          ? hostname.split('.')[1].toLowerCase()
          : hostname.split('.')[0].toLowerCase()

      return this.iconsPreset.includes(hostname)
        ? `${preId}${hostname}`
        : preId + 'rss'
    }
  }
}
</script>

<style lang="postcss" scoped>
.socialLinks {
  display: flex;
  justify-content: space-between;
  margin: 0;
  padding: 0;

  list-style: none;
}

.socialLinks__item {
  margin-right: 24px;
}

.socialLinks__link {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 24px;
  height: 24px;

  color: var(--accent-300-color);

  background-color: var(--grayscale-1000-color);
  border-radius: 50%;

  transition: color 0.3s ease-in-out, background-color 0.3s ease-in-out;
  &:hover,
  &:focus {
    color: var(--grayscale-1000-color);

    background-color: var(--grayscale-300-color);
    outline: none;
  }
}

.socialLinks__icon {
  max-height: 16px;
  max-width: 16px;
}
</style>

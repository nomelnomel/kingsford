<!--wrap this component in some block-->
<template>
  <picture v-if="imageUrl" class="cli-image">
    <source
      v-if="imageUrl.large"
      :data-srcset="`${imageUrl.large}`"
      media="(min-width: 770px)"
    >
    <source
      v-if="imageUrl.medium_large"
      :data-srcset="`${imageUrl.medium_large}`"
      media="(max-width: 769px)"
    >
    <img
      :alt="alt"
      data-sizes="auto"
      :src="getImage"
      :style="{ objectFit: fit }"
      class="lazyload"
    >
  </picture>
</template>

<script>
/* eslint-disable */
export default {
  name: 'cli-image',
  props: {
    imageUrl: {
      type: [Object, Boolean],
      default: () => {},
      required: true,
    },
    alt: {
      type: String,
      default: 'image',
      required: true,
    },
    fit: {
      type: String,
      default: 'cover',
    },
  },
  computed: {
    getImage() {
      const { thumbnail, medium_large, large } = this.imageUrl
      if (thumbnail) {
        return thumbnail
      } else if (medium_large) {
        return medium_large
      } else return large
    },
  },
}
</script>
<style lang="scss" scoped>
.cli-image {
  width: inherit;
  height: inherit;
}

img {
  height: 100%;
  width: 100%;
}

.lazyloading {
  filter: blur(10px);
}
</style>

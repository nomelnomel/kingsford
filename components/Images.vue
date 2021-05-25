<!--wrap this component in some block-->
<template>
  <picture class="cli-image">
    <img
      :alt="alt"
      data-sizes="auto"
      :src="imageUrl"
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
      type: String,
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


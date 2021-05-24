<template>
  <div>
    <h3>{{ section.title }}</h3>
    <div class="dishes">
      <MenuItem
        v-for="item in section.items"
        :key="item.id"
        :item="item"
      />
    </div>
  </div>
</template>

<script>
import MenuItem from './MenuItem'
export default {
  name: 'MenuSection',
  components: {
    MenuItem
  },
  props: {
    section: {
      type: Object
    }
  }
}
</script>

<style scoped lang="scss">
  h3{
    font-family: alternate-gothic-condensed-a, sans-serif;
    color: $color-red;
    text-transform: uppercase;
    font-weight: normal;
    font-size: 36px;
    letter-spacing: 0.97px;
    line-height: 43px;
    margin: 60px 0;
  }

  .dishes{
    display: grid;
    grid-row-gap: 90px;
    grid-column-gap: 45px;
    grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
    margin: 45px 300px 0;
    padding-bottom: 45px;
  }
</style>

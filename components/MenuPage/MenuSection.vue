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

<style scoped>
  h3{
    color: #CE4141;
    font-weight: normal;
    font-size: 36px;
    line-height: 48px;
    letter-spacing: 0.969231px;
    text-align: center;
    margin-bottom: 40px;
  }

  .dishes{
    display: grid;
    grid-gap: 15px;
    grid-template-columns: repeat(auto-fit, minmax(210px, 1fr));
  }
</style>

<template>
  <section class="menu-section">
    <h3>{{ section.title }}</h3>
    <div class="dishes">
      <MenuItem
        v-for="item in section.items"
        :key="item.id"
        :item="item"
      />
    </div>
  </section>
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
      type: Object,
      default: () => {},
      required: true
    }
  }
}
</script>

<style scoped lang="scss">
  h3{
    color: $contrast;
    text-transform: uppercase;
    letter-spacing: 0.97px;
    margin: 60px 0;
    font-weight: normal;
    font-family: alternate-gothic-condensed-a, sans-serif;
    font-size: 36px;
    line-height: 43px;
    @media screen and (max-width: $bpM){
      margin: 30px 0;
    }
  }

  .dishes{
    display: grid;
    grid-row-gap: 90px;
    grid-column-gap: 45px;
    grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
    margin: 45px 27% 0;
    padding-bottom: 45px;
    @media screen and (max-width: $bpT){
      margin: 45px 20% 0;
    }
    @media screen and (max-width: $bpM){
      grid-row-gap: 30px;
    }
  }
</style>

<template>
  <section class="menu-section">
    <h3>{{ section.sub_menu_title }}</h3>
    <div class="dishes">
      <MenuItem
        v-for="item in section.menu_items"
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
@import "@/assets/base/breakpoints";

  h3{
    color: $contrast;
    text-transform: uppercase;
    letter-spacing: 0.97px;
    margin: 60px auto 0;
    max-width: 800px;
    font-weight: normal;

    @include media('<mobile'){
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

    @include media('<ipad-pro'){
      margin: 45px 20% 0;
    }

    @include media('<mobile'){
      grid-row-gap: 30px;
    }

  }

</style>

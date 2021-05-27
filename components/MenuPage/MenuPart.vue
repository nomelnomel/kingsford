<template>
  <section class="menu-part">
    <MenuSection
      v-for="section in part.sections"
      :key="section.id"
      :section="section"
    />
  </section>
</template>

<script>
import MenuSection from './MenuSection'
export default {
  name: 'MenuPart',
  components: {
    MenuSection
  },
  props: {
    part: {
      type: Object,
      default: () => {},
      required: true
    }
  }
}
</script>

<style scoped>

</style>

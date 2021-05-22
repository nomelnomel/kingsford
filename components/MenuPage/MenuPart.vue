<template>
  <div>
    <MenuSection
      v-for="section in part.sections"
      :key="section.id"
      :section="section"
    />
  </div>
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
      type: Object
    }
  }
}
</script>

<style scoped>

</style>

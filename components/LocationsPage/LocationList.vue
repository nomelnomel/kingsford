<template>
  <section class="locations-list">
    <LocationItem v-for="(item, i) in locations" :key="i" :item="item" />
  </section>
</template>

<script>
import LocationItem from './LocationItem'
export default {
  name: 'LocationList',
  components: {
    LocationItem
  },
  props: {
    locations: {
      type: Array,
      default: () => {
      }
    }
  }
}
</script>

<style scoped lang="scss">
.locations {
  display: flex;
  flex-direction: column;
  align-items: unset;
  justify-content: unset;
  padding: 0 20px 40px;
  background-size: cover;
  position: relative;

  &-list{
    padding-bottom: 40px;
  }

}
</style>

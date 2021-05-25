<template>
  <section class="locations-list">
    <LocationItem :address="address" :image="'_nuxt/assets/loc1.png'" />
    <LocationItem :address="address2" :image="'_nuxt/assets/loc1.png'" />
  </section>
</template>

<script>
import LocationItem from './LocationItem'
export default {
  name: 'LocationList',
  components: {
    LocationItem
  },
  data () {
    return {
      address: {
        name: 'TAMPA, FL',
        street: '1234 Street Name.',
        index: 'Tampa, FL 12345',
        tel: '123-456-7890'
      },
      address2: {
        name: 'TAMPA, FL',
        street: 'Coming Soon'
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
}
</style>

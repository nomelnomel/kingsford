<template>
  <section class="locations">
    <h2>Locations</h2>
    <LocationItem :address="address" :image="'_nuxt/assets/loc1.png'" />
    <LocationItem :address="address2" :image="'_nuxt/assets/loc1.png'" />
  </section>
</template>

<script>
import LocationItem from '../components/LocationsPage/LocationItem'
export default {
  name: 'Location',
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
  background: url('../assets/menu-back.png') 100% 100% no-repeat;
  background-size: cover;
  position: relative;
}
h2{
  font-size: 300px;
  letter-spacing: 0;
  line-height: 300px;
  font-family: fenway-park-jf, sans-serif;
  color: $color-red;
  transform: translateX(26%);
  font-weight: normal;
}

</style>

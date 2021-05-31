<template>
  <section class="locations">
    <LocationsH2 />
    <LocationList />
  </section>
</template>

<script>
import LocationList from '../components/LocationsPage/LocationList'
import LocationsH2 from '../components/LocationsPage/LocationsH2'
export default {
  name: 'Locations',
  components: {
    LocationList,
    LocationsH2
  }
}
</script>

<style scoped lang="scss">
.locations{
  background: url('~/assets/images/menu-back.png') 100% 100% no-repeat;
  background-size: cover;
  @media screen and (max-width: $bpT){
    padding-top: 100px;
  }
  @media screen and (max-width: $bpM){
    padding-top: 60px;
  }
}
</style>
